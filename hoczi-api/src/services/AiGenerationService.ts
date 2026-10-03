import { AppDataSource } from '../data-source';
import { aiConfig } from '../config/ai';
import { AiDraft, AiDraftStatus } from '../entities/AiDraft';
import { Question } from '../entities/Question';
import { Answer } from '../entities/Answer';
import { ApiError, BadRequestError, NotFoundError } from '../errors/api-erros';
import { AskRequest, ChatRequest, GenerateRequest, HSK_MAX_LEVEL, PublishDraftRequest } from '../dto/ai.dto';
import { askSchema, chatSchema, generationSchema, TaskType } from '../helpers/ai/schemas';
import { ASK_INSTRUCTIONS, chatInstructions, generationInstructions, PROMPT_VERSIONS } from '../helpers/ai/prompts';
import { ADMIN_DATA_TOOLS, DATA_TOOL_LABELS } from '../helpers/ai/dataTools';
import { runGrounded, RetrievedChunk } from '../helpers/ai/retrieval';
import { filterCitations, validateGeneration } from '../helpers/ai/validation';
import { assertWithinLimits } from '../helpers/ai/usage';
import { AiDraftFilter, aiDraftRepository } from '../repositories/aiDraftRepository';

export type AiUser = { id: number; role?: string; tenant_id?: number | null };

const ADMIN_ROLES = ['admin', 'super_admin'];
// Older turns are dropped to bound cost; the client keeps the full history on screen.
const CHAT_MAX_TURNS = 12;

function isAdmin(user: AiUser) {
    return ADMIN_ROLES.includes(user.role ?? '');
}

function canAccess(user: AiUser, draft: AiDraft) {
    if (isAdmin(user)) return true;
    if (user.tenant_id) return draft.tenant_id === user.tenant_id;
    return draft.created_by === user.id;
}

// Only ids/pages/scores are stored; never the copyrighted source text.
function summarizeRetrieval(retrieved: RetrievedChunk[]) {
    const seen = new Set<string>();
    return retrieved.filter((r) => {
        const key = `${r.documentId}|${r.chunkId}|${r.pageStart}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    }).map(({ documentId, chunkId, title, pageStart, pageEnd, score }) => ({ documentId, chunkId, title, pageStart, pageEnd, score }));
}

export class AiGenerationService {
    async generate(user: AiUser, dto: GenerateRequest, parentDraftId: number | null = null) {
        if (dto.hsk_level > HSK_MAX_LEVEL[dto.hsk_standard]) {
            throw new BadRequestError(`${dto.hsk_standard.toUpperCase()} has levels 1-${HSK_MAX_LEVEL[dto.hsk_standard]}`);
        }
        if (dto.item_count > aiConfig.limits.maxItemCount) {
            throw new BadRequestError(`item_count must be at most ${aiConfig.limits.maxItemCount}`);
        }
        const tenantId = user.tenant_id ?? null;
        await assertWithinLimits(user.id, tenantId);

        const task = dto.task_type as TaskType;
        const params = {
            task_type: task,
            hsk_standard: dto.hsk_standard,
            hsk_level: dto.hsk_level,
            script: dto.script,
            include_pinyin: dto.include_pinyin ?? false,
            explanation_language: dto.explanation_language ?? 'vi',
            learner_proficiency: dto.learner_proficiency ?? null,
            difficulty: dto.difficulty,
            item_count: dto.item_count,
            item_types: dto.item_types?.length ? dto.item_types : ['multiple_choice'],
            book_id: dto.book_id ?? null,
            document_ids: dto.document_ids ?? [],
            content_types: dto.content_types ?? [],
            topic: dto.topic ?? null,
            notes: dto.notes ?? null,
        };

        const result = await runGrounded({
            operation: parentDraftId ? 'regenerate' : 'generate',
            promptVersion: PROMPT_VERSIONS[task],
            instructions: generationInstructions(task),
            // Parameters are passed as data, not spliced into the instructions.
            input: `Generation request (JSON):\n${JSON.stringify(params, null, 2)}`,
            schema: generationSchema(task),
            scope: {
                tenantId,
                hskStandard: params.hsk_standard,
                hskLevel: params.hsk_level,
                script: params.script,
                bookId: params.book_id ?? undefined,
                contentTypes: params.content_types,
                documentIds: params.document_ids,
            },
            userId: user.id,
        });

        const retrieval = summarizeRetrieval(result.retrieved);
        const validation = validateGeneration(result.parsed, result.retrieved, {
            hskStandard: params.hsk_standard,
            hskLevel: params.hsk_level,
            script: params.script,
            itemCount: params.item_count,
        });

        return aiDraftRepository.create({
            task_type: task,
            request_params: params,
            output: result.parsed,
            citations: validation.citations,
            retrieval,
            validation_issues: validation.issues,
            insufficient_evidence: !!result.parsed.insufficientEvidence,
            provider: 'openai',
            model: result.model,
            prompt_version: PROMPT_VERSIONS[task],
            status: AiDraftStatus.DRAFT,
            tenant_id: tenantId,
            created_by: user.id,
            parent_draft_id: parentDraftId,
        });
    }

    async regenerate(user: AiUser, draftId: number) {
        const draft = await this.getDraft(user, draftId);
        const p = draft.request_params;
        return this.generate(user, {
            ...p,
            book_id: p.book_id ?? undefined,
            learner_proficiency: p.learner_proficiency ?? undefined,
            topic: p.topic ?? undefined,
            notes: p.notes ?? undefined,
        } as GenerateRequest, draft.id);
    }

    async ask(user: AiUser, dto: AskRequest) {
        const tenantId = user.tenant_id ?? null;
        await assertWithinLimits(user.id, tenantId);

        const result = await runGrounded({
            operation: 'ask',
            promptVersion: PROMPT_VERSIONS.ask,
            instructions: ASK_INSTRUCTIONS,
            input: dto.question,
            schema: askSchema,
            scope: { tenantId, hskStandard: dto.hsk_standard, hskLevel: dto.hsk_level, script: dto.script },
            userId: user.id,
        });

        const { valid, rejected } = filterCitations(result.parsed.citations, result.retrieved);
        const insufficientEvidence = !!result.parsed.insufficientEvidence || !result.retrieved.length;
        return {
            answer: result.parsed.answer,
            insufficientEvidence,
            citations: valid,
            unverifiedCitationCount: rejected.length,
            sources: summarizeRetrieval(result.retrieved),
        };
    }

    // Chat assistant for the admin area with an intent router: the model sends each question to
    // Hoczi data tools (admins only), the document corpus, or general knowledge.
    async chat(user: AiUser, dto: ChatRequest) {
        const turns = dto.messages.slice(-CHAT_MAX_TURNS);
        if (turns[turns.length - 1].role !== 'user') {
            throw new BadRequestError('The last message must be from the user');
        }
        const tenantId = user.tenant_id ?? null;
        await assertWithinLimits(user.id, tenantId);

        const canQueryData = isAdmin(user);
        const result = await runGrounded({
            operation: 'chat_assistant',
            promptVersion: PROMPT_VERSIONS.chat,
            instructions: chatInstructions({ canQueryData, today: new Date().toISOString().slice(0, 10) }),
            input: turns,
            fileSearch: 'auto',
            // Data tools are only offered to admins; the model cannot call what it is not given.
            functionTools: canQueryData ? ADMIN_DATA_TOOLS : [],
            schema: chatSchema,
            scope: { tenantId },
            userId: user.id,
        });

        const { valid, rejected } = filterCitations(result.parsed.citations, result.retrieved);
        const titles = new Map(result.retrieved.map((r) => [r.documentId, r.title]));
        const grounded = valid.length > 0;
        const queried = [...new Set(result.toolCalls.filter((c) => c.ok).map((c) => c.name))];
        // The route is decided from what actually happened, not from the model's own label:
        // a "documents" claim without a verifiable citation is reported as general knowledge.
        const source = queried.length ? 'data'
            : grounded ? (result.parsed.answerSource === 'mixed' ? 'mixed' : 'documents')
                : 'general';
        return {
            answer: String(result.parsed.answer ?? ''),
            source,
            queried: queried.map((name) => ({ name, label: DATA_TOOL_LABELS[name] ?? name })),
            searched: result.retrieved.length > 0,
            citations: valid.map((c) => ({ ...c, title: titles.get(c.documentId) ?? null })),
            unverifiedCitationCount: rejected.length,
        };
    }

    async listDrafts(user: AiUser, page: number, limit: number, filter: Pick<AiDraftFilter, 'status' | 'task_type'>) {
        const scope: AiDraftFilter = isAdmin(user)
            ? {}
            : user.tenant_id ? { tenant_id: user.tenant_id } : { created_by: user.id };
        return aiDraftRepository.findAll(page, limit, { ...filter, ...scope });
    }

    async getDraft(user: AiUser, id: number) {
        const draft = await aiDraftRepository.findById(id);
        if (!draft || !canAccess(user, draft)) throw new NotFoundError('Draft not found');
        return draft;
    }

    async updateDraft(user: AiUser, id: number, output: Record<string, any>) {
        const draft = await this.getDraft(user, id);
        if (draft.status !== AiDraftStatus.DRAFT) {
            throw new BadRequestError(`Only drafts can be edited (current status: ${draft.status})`);
        }
        const p = draft.request_params;
        // Re-validate against the passages retrieved at generation time.
        const retrieved: RetrievedChunk[] = (draft.retrieval ?? []).map((r: any) => ({ ...r, fileId: null }));
        const validation = validateGeneration(output, retrieved, {
            hskStandard: p.hsk_standard, hskLevel: p.hsk_level, script: p.script,
        });
        draft.output = output;
        draft.citations = validation.citations;
        draft.validation_issues = validation.issues;
        draft.insufficient_evidence = !!output.insufficientEvidence;
        draft.edited = true;
        return aiDraftRepository.save(draft);
    }

    async approveDraft(user: AiUser, id: number, notes?: string) {
        const draft = await this.getDraft(user, id);
        if (draft.status !== AiDraftStatus.DRAFT) throw new BadRequestError(`Draft is already ${draft.status}`);
        if (draft.insufficient_evidence) {
            throw new BadRequestError('The sources did not support this request. Regenerate with a different scope instead of approving.');
        }
        return this.review(user, draft, AiDraftStatus.APPROVED, notes);
    }

    async rejectDraft(user: AiUser, id: number, notes?: string) {
        const draft = await this.getDraft(user, id);
        if (![AiDraftStatus.DRAFT, AiDraftStatus.APPROVED].includes(draft.status as AiDraftStatus)) {
            throw new BadRequestError(`Draft is already ${draft.status}`);
        }
        return this.review(user, draft, AiDraftStatus.REJECTED, notes);
    }

    private async review(user: AiUser, draft: AiDraft, status: AiDraftStatus, notes?: string) {
        draft.status = status;
        draft.reviewed_by = user.id;
        draft.reviewed_at = new Date();
        draft.review_notes = notes ?? null;
        return aiDraftRepository.save(draft);
    }

    // Map an approved draft into the existing question bank. Only item types that the
    // question bank supports are published; the rest are reported as skipped.
    async publishDraft(user: AiUser, id: number, dto: PublishDraftRequest) {
        const draft = await this.getDraft(user, id);
        if (draft.status !== AiDraftStatus.APPROVED) {
            throw new BadRequestError('Only approved drafts can be published');
        }
        const output = draft.output ?? {};
        const items: any[] = Array.isArray(output.items) ? output.items : [];
        const passage: string | null = draft.task_type === 'reading_passage' ? output.passage ?? null : null;

        const admin = isAdmin(user);
        const questionIds: number[] = [];
        const skipped: { index: number; type: string; reason: string }[] = [];

        await AppDataSource.transaction(async (manager) => {
            for (const [index, item] of items.entries()) {
                const typeMap: Record<string, string> = { multiple_choice: 'mcq', true_false: 'true_false' };
                const questionType = typeMap[item.type];
                if (!questionType) {
                    skipped.push({ index, type: item.type, reason: 'Question bank has no matching type' });
                    continue;
                }
                const options: string[] = item.options ?? [];
                if (typeof item.correctOptionIndex !== 'number' || !options[item.correctOptionIndex]) {
                    skipped.push({ index, type: item.type, reason: 'No valid correct option' });
                    continue;
                }

                const prompt = [item.prompt, item.pinyin].filter(Boolean).join('\n');
                const question = await manager.save(manager.create(Question, {
                    content: passage ? `${passage}\n\n${prompt}` : prompt,
                    explanation: item.explanation,
                    type: questionType,
                    difficulty: draft.request_params.difficulty,
                    category_id: dto.category_id,
                    topic_id: dto.topic_id,
                    grade_id: dto.grade_id,
                    created_by: user.id,
                    // Same ownership rule as QuestionService.createQuestion
                    tenant_id: admin ? undefined : (user.tenant_id ?? undefined),
                    is_system: admin,
                    is_active: true,
                }));
                await manager.save(options.map((content, i) => manager.create(Answer, {
                    question_id: question.id,
                    content,
                    is_correct: i === item.correctOptionIndex,
                })));
                questionIds.push(question.id);
            }

            if (!questionIds.length) {
                throw new ApiError('Nothing to publish: no item maps to a question-bank type', 400);
            }

            draft.status = AiDraftStatus.PUBLISHED;
            draft.published_at = new Date();
            // Provenance is kept on the draft: questionIds link back to citations and sources.
            draft.published_refs = { questionIds, skipped, publishedBy: user.id };
            await manager.save(draft);
        });

        return draft;
    }
}
