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

export type ChatTurn = { role: 'user' | 'assistant'; content: string };

// A server-side function the model may call (e.g. a whitelisted database query).
// The model only chooses the function and its arguments; the server runs fixed code.
export type FunctionTool = {
    name: string;
    description: string;
    // Strict JSON schema for the arguments
    parameters: Record<string, unknown>;
    run: (args: Record<string, unknown>) => Promise<unknown>;
};

export type ToolCallRecord = { name: string; ok: boolean };

// Upper bound on model ↔ tool round trips for one request.
const MAX_TOOL_ROUNDS = 4;

export type GroundedRequest = {
    operation: string;
    promptVersion: string;
    instructions: string;
    // A single prompt, or a conversation (oldest first, last turn from the user)
    input: string | ChatTurn[];
    // required: always search the corpus first (generation, ask).
    // auto: the model decides; works without a vector store (chat assistant).
    fileSearch?: 'required' | 'auto';
    functionTools?: FunctionTool[];
    schema: { name: string; schema: Record<string, unknown> };
    scope: RetrievalScope;
    userId: number | null;
};

export type GroundedResult = {
    parsed: any;
    retrieved: RetrievedChunk[];
    toolCalls: ToolCallRecord[];
    model: string;
    responseId: string;
};

function collectRetrieved(output: any[], into: RetrievedChunk[]) {
    let calls = 0;
    for (const out of output) {
        if (out.type !== 'file_search_call') continue;
        calls++;
        for (const r of out.results ?? []) {
            const attrs = (r.attributes ?? {}) as Partial<ChunkAttributes>;
            if (!attrs.document_id) continue;
            into.push({
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
    return calls;
}

async function runFunctionCall(call: { name: string; arguments: string; call_id: string }, tools: FunctionTool[], records: ToolCallRecord[]) {
    const tool = tools.find((t) => t.name === call.name);
    let output: unknown;
    try {
        if (!tool) throw new Error(`Unknown tool "${call.name}"`);
        output = await tool.run(JSON.parse(call.arguments || '{}'));
        records.push({ name: call.name, ok: true });
    } catch (error: any) {
        // The model sees the failure and can tell the user; details stay in the server log.
        console.error(`[ai] tool ${call.name} failed`, error);
        output = { error: error?.expose ? error.message : 'The query failed.' };
        records.push({ name: call.name, ok: false });
    }
    return { type: 'function_call_output' as const, call_id: call.call_id, output: JSON.stringify(output) };
}

export async function runGrounded(req: GroundedRequest): Promise<GroundedResult> {
    const mode = req.fileSearch ?? 'required';
    assertOpenAiConfigured({ vectorStore: mode === 'required' });
    const useFileSearch = !!aiConfig.openai.vectorStoreId;
    const functionTools = req.functionTools ?? [];
    const openai = getOpenAI();
    const model = aiConfig.openai.model;
    const started = Date.now();
    let fileSearchCalls = 0;
    let inputTokens = 0;
    let outputTokens = 0;
    const retrieved: RetrievedChunk[] = [];
    const toolCalls: ToolCallRecord[] = [];

    const tools: any[] = [
        ...(useFileSearch ? [{
            type: 'file_search' as const,
            vector_store_ids: [aiConfig.openai.vectorStoreId],
            filters: buildFilters(req.scope),
            max_num_results: aiConfig.openai.fileSearchMaxResults,
        }] : []),
        ...functionTools.map((t) => ({
            type: 'function' as const,
            name: t.name,
            description: t.description,
            parameters: t.parameters,
            strict: true,
        })),
    ];
    const include: any[] = [
        ...(useFileSearch ? ['file_search_call.results'] : []),
        // store:false means earlier reasoning must be sent back in encrypted form between tool rounds.
        ...(functionTools.length ? ['reasoning.encrypted_content'] : []),
    ];

    let input: any = typeof req.input === 'string'
        ? req.input
        : req.input.map((turn) => ({ role: turn.role, content: turn.content }));

    const usage = (outcome: string, extra: { errorCode?: string; providerRequestId?: string } = {}) => recordUsage({
        userId: req.userId, tenantId: req.scope.tenantId, operation: req.operation,
        provider: 'openai', model, promptVersion: req.promptVersion,
        inputTokens, outputTokens, fileSearchCalls, latencyMs: Date.now() - started, outcome, ...extra,
    });

    try {
        let response;
        for (let round = 0; ; round++) {
            response = await openai.responses.create({
                model,
                instructions: req.instructions,
                input,
                ...(tools.length ? {
                    tools,
                    // Function tools are always optional; file search may be forced.
                    tool_choice: mode === 'required' && useFileSearch && !functionTools.length ? 'required' : 'auto',
                } : {}),
                ...(include.length ? { include } : {}),
                text: { format: { type: 'json_schema', name: req.schema.name, schema: req.schema.schema, strict: true } },
                max_output_tokens: aiConfig.limits.maxOutputTokens,
                store: false,
                safety_identifier: req.userId ? hashUserId(req.userId) : undefined,
            });
            inputTokens += response.usage?.input_tokens ?? 0;
            outputTokens += response.usage?.output_tokens ?? 0;
            fileSearchCalls += collectRetrieved(response.output, retrieved);

            const calls = response.output.filter((o: any) => o.type === 'function_call') as any[];
            if (!calls.length || !functionTools.length) break;
            if (round + 1 >= MAX_TOOL_ROUNDS) {
                await usage('invalid_output', { errorCode: 'too_many_tool_rounds', providerRequestId: response.id });
                throw new ApiError('The assistant needed too many steps for this question. Try asking something more specific.', 502);
            }
            const outputs = await Promise.all(calls.map((c) => runFunctionCall(c, functionTools, toolCalls)));
            const history = Array.isArray(input) ? input : [{ role: 'user', content: input }];
            input = [...history, ...response.output, ...outputs];
        }

        if (response.status === 'incomplete') {
            await usage('invalid_output', {
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

        await usage(!parsed ? 'invalid_output' : parsed.insufficientEvidence ? 'insufficient_evidence' : 'success', {
            providerRequestId: response.id,
        });

        if (!parsed) throw incompleteOutput('unparseable_json');
        return { parsed, retrieved, toolCalls, model, responseId: response.id };
    } catch (error) {
        if (error instanceof ApiError) throw error; // already logged above
        await usage('error', { errorCode: errorCode(error) });
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
