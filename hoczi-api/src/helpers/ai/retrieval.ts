import crypto from 'crypto';
import { aiConfig, assertOpenAiConfigured } from '../../config/ai';
import { getOpenAI } from './openaiClient';
import { errorCode, toApiError } from './errors';
import { recordUsage } from './usage';
import { ApiError } from '../../errors/api-erros';

export type RetrievalScope = {
    tenantId: number | null;
    hskStandard?: string;
    hskLevel?: number;
    script?: string;
    bookId?: number;
    contentTypes?: string[];
    documentIds?: number[];
};

// Vector-store file attributes. Keep in sync with what ingestion writes (max 16 keys).
export type ChunkAttributes = {
    source: 'document' | 'knowledge_base';
    document_id: string;      // "doc-12" | "kb-5"
    chunk_id?: number;
    tenant_id: string;        // "system" | "<tenantId>"
    title?: string;
    hsk_standard?: string;
    hsk_level?: number;
    script?: string;
    content_type?: string;
    edition?: string;
    book_id?: number;
    lesson_id?: number;
    page_start?: number;
    page_end?: number;
};

export type RetrievedChunk = {
    documentId: string;
    chunkId: number | null;
    title: string | null;
    pageStart: number | null;
    pageEnd: number | null;
    score: number | null;
    fileId: string | null;
};

export function tenantAttribute(tenantId: number | null | undefined) {
    return tenantId ? String(tenantId) : 'system';
}

// The tenant filter is always applied: callers can only narrow the scope, never widen it.
export function buildFilters(scope: RetrievalScope) {
    const filters: any[] = [
        scope.tenantId
            ? { type: 'in', key: 'tenant_id', value: ['system', String(scope.tenantId)] }
            : { type: 'eq', key: 'tenant_id', value: 'system' },
    ];
    if (scope.hskStandard) filters.push({ type: 'eq', key: 'hsk_standard', value: scope.hskStandard });
    if (scope.hskLevel) filters.push({ type: 'eq', key: 'hsk_level', value: scope.hskLevel });
    if (scope.script) filters.push({ type: 'eq', key: 'script', value: scope.script });
    if (scope.bookId) filters.push({ type: 'eq', key: 'book_id', value: scope.bookId });
    if (scope.contentTypes?.length) filters.push({ type: 'in', key: 'content_type', value: scope.contentTypes });
    if (scope.documentIds?.length) {
        filters.push({ type: 'in', key: 'document_id', value: scope.documentIds.map((id) => `doc-${id}`) });
    }
    return { type: 'and' as const, filters };
}

export type GroundedRequest = {
    operation: string;
    promptVersion: string;
    instructions: string;
    input: string;
    schema: { name: string; schema: Record<string, unknown> };
    scope: RetrievalScope;
    userId: number | null;
};

export type GroundedResult = {
    parsed: any;
    retrieved: RetrievedChunk[];
    model: string;
    responseId: string;
};

export async function runGrounded(req: GroundedRequest): Promise<GroundedResult> {
    assertOpenAiConfigured({ vectorStore: true });
    const openai = getOpenAI();
    const model = aiConfig.openai.model;
    const started = Date.now();
    let fileSearchCalls = 0;

    try {
        const response = await openai.responses.create({
            model,
            instructions: req.instructions,
            input: req.input,
            tools: [{
                type: 'file_search',
                vector_store_ids: [aiConfig.openai.vectorStoreId],
                filters: buildFilters(req.scope),
                max_num_results: aiConfig.openai.fileSearchMaxResults,
            }],
            tool_choice: 'required',
            include: ['file_search_call.results'],
            text: { format: { type: 'json_schema', name: req.schema.name, schema: req.schema.schema, strict: true } },
            max_output_tokens: aiConfig.limits.maxOutputTokens,
            store: false,
            safety_identifier: req.userId ? hashUserId(req.userId) : undefined,
        });

        const retrieved: RetrievedChunk[] = [];
        for (const out of response.output) {
            if (out.type !== 'file_search_call') continue;
            fileSearchCalls++;
            for (const r of out.results ?? []) {
                const attrs = (r.attributes ?? {}) as Partial<ChunkAttributes>;
                if (!attrs.document_id) continue;
                retrieved.push({
                    documentId: String(attrs.document_id),
                    chunkId: typeof attrs.chunk_id === 'number' ? attrs.chunk_id : null,
                    title: attrs.title ?? r.filename ?? null,
                    pageStart: typeof attrs.page_start === 'number' ? attrs.page_start : null,
                    pageEnd: typeof attrs.page_end === 'number' ? attrs.page_end : null,
                    score: r.score ?? null,
                    fileId: r.file_id ?? null,
                });
            }
        }

        if (response.status === 'incomplete') {
            await recordUsage({
                userId: req.userId, tenantId: req.scope.tenantId, operation: req.operation,
                provider: 'openai', model, promptVersion: req.promptVersion,
                inputTokens: response.usage?.input_tokens, outputTokens: response.usage?.output_tokens,
                fileSearchCalls, latencyMs: Date.now() - started, outcome: 'invalid_output',
                errorCode: `incomplete:${response.incomplete_details?.reason ?? ''}`, providerRequestId: response.id,
            });
            throw incompleteOutput(response.incomplete_details?.reason ?? 'unknown');
        }

        let parsed: any;
        try {
            parsed = JSON.parse(response.output_text);
        } catch {
            parsed = null;
        }

        await recordUsage({
            userId: req.userId, tenantId: req.scope.tenantId, operation: req.operation,
            provider: 'openai', model, promptVersion: req.promptVersion,
            inputTokens: response.usage?.input_tokens, outputTokens: response.usage?.output_tokens,
            fileSearchCalls, latencyMs: Date.now() - started,
            outcome: !parsed ? 'invalid_output' : parsed.insufficientEvidence ? 'insufficient_evidence' : 'success',
            providerRequestId: response.id,
        });

        if (!parsed) throw incompleteOutput('unparseable_json');
        return { parsed, retrieved, model, responseId: response.id };
    } catch (error) {
        if (error instanceof ApiError) throw error; // already logged above
        await recordUsage({
            userId: req.userId, tenantId: req.scope.tenantId, operation: req.operation,
            provider: 'openai', model, promptVersion: req.promptVersion,
            fileSearchCalls, latencyMs: Date.now() - started, outcome: 'error', errorCode: errorCode(error),
        });
        console.error(`[ai] ${req.operation} failed`, error);
        throw toApiError(error);
    }
}

function incompleteOutput(reason: string) {
    return new ApiError(`AI output was incomplete (${reason}). Try fewer items or a narrower scope.`, 502);
}

// Stable, non-reversible identifier for provider abuse monitoring; no email or name is sent.
function hashUserId(userId: number) {
    return crypto.createHash('sha256').update(`hoczi:${userId}`).digest('hex');
}
