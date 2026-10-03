import { toFile } from 'openai';
import { aiConfig, assertOpenAiConfigured } from '../config/ai';
import { KnowledgeDocument, KnowledgeDocumentStatus } from '../entities/KnowledgeDocument';
import { getOpenAI } from '../helpers/ai/openaiClient';
import { PermanentJobError } from '../helpers/ai/errors';
import { ChunkAttributes, tenantAttribute } from '../helpers/ai/retrieval';
import { buildChunks, chunkFileContent, extractDocument, ExtractionError, sha256 } from '../helpers/ai/extraction';
import { deleteKnowledgeObject, downloadKnowledgeObject } from '../helpers/ai/storage';
import { knowledgeDocumentChunkRepository, knowledgeDocumentRepository } from '../repositories/knowledgeDocumentRepository';
import { knowledgeBaseRepository } from '../repositories/knowledgeBaseRepository';

function isNotFound(error: any) {
    return error?.status === 404;
}

// Remove a file from the vector store and from OpenAI file storage. Missing files are fine.
async function removeRemoteFile(vectorStoreId: string | null | undefined, fileId: string) {
    const openai = getOpenAI();
    if (vectorStoreId) {
        await openai.vectorStores.files.delete(fileId, { vector_store_id: vectorStoreId })
            .catch((e) => { if (!isNotFound(e)) throw e; });
    }
    await openai.files.delete(fileId).catch((e) => { if (!isNotFound(e)) throw e; });
}

// Upload one text file and attach it to the vector store with filterable attributes.
async function uploadIndexedFile(filename: string, content: string, attributes: ChunkAttributes) {
    const openai = getOpenAI();
    const vectorStoreId = aiConfig.openai.vectorStoreId;
    const file = await openai.files.create({
        file: await toFile(Buffer.from(content, 'utf-8'), filename, { type: 'text/markdown' }),
        purpose: 'assistants',
    });
    const vsFile = await openai.vectorStores.files.createAndPoll(vectorStoreId, {
        file_id: file.id,
        attributes: compactAttributes(attributes),
        chunking_strategy: {
            type: 'static',
            static: {
                max_chunk_size_tokens: aiConfig.openai.chunkMaxTokens,
                chunk_overlap_tokens: aiConfig.openai.chunkOverlapTokens,
            },
        },
    });
    if (vsFile.status !== 'completed') {
        await removeRemoteFile(vectorStoreId, file.id).catch(() => undefined);
        const code = vsFile.last_error?.code;
        const message = `Indexing failed for ${filename}: ${code ?? vsFile.status} ${vsFile.last_error?.message ?? ''}`.trim();
        if (code === 'server_error') throw new Error(message); // transient: retried by the worker
        throw new PermanentJobError(message);
    }
    return file.id;
}

// Attribute values: strings up to 512 chars, numbers, booleans; null/undefined are dropped.
function compactAttributes(attributes: ChunkAttributes) {
    const out: Record<string, string | number | boolean> = {};
    for (const [key, value] of Object.entries(attributes)) {
        if (value === null || value === undefined || value === '') continue;
        out[key] = typeof value === 'string' ? value.slice(0, 512) : value;
    }
    return out;
}

function documentAttributes(doc: KnowledgeDocument): Omit<ChunkAttributes, 'chunk_id' | 'page_start' | 'page_end'> {
    return {
        source: 'document',
        document_id: `doc-${doc.id}`,
        tenant_id: tenantAttribute(doc.tenant_id),
        title: doc.title,
        hsk_standard: doc.hsk_standard,
        hsk_level: doc.hsk_level,
        script: doc.script,
        content_type: doc.content_type,
        edition: doc.edition ?? undefined,
        book_id: doc.book_id ?? undefined,
        lesson_id: doc.book_lesson_id ?? undefined,
    };
}

export class AiIngestionService {
    async ingestDocument(documentId: number, opts: { allowDuplicate?: boolean } = {}) {
        const doc = await knowledgeDocumentRepository.findById(documentId);
        if (!doc) throw new PermanentJobError(`Document #${documentId} not found`);
        if ([KnowledgeDocumentStatus.DELETING, KnowledgeDocumentStatus.DELETED].includes(doc.status as KnowledgeDocumentStatus)) {
            return; // deleted while queued
        }
        assertOpenAiConfigured({ vectorStore: true });
        const vectorStoreId = aiConfig.openai.vectorStoreId;

        await knowledgeDocumentRepository.update(doc.id, {
            status: KnowledgeDocumentStatus.PROCESSING,
            error_message: null,
            openai_vector_store_id: vectorStoreId,
        });

        const buffer = await downloadKnowledgeObject(doc.storage_key);
        const maxBytes = aiConfig.ingestion.maxUploadMb * 1024 * 1024;
        if (buffer.length > maxBytes) {
            throw new PermanentJobError(`File is ${(buffer.length / 1048576).toFixed(1)} MB, above the ${aiConfig.ingestion.maxUploadMb} MB limit`);
        }

        const checksum = sha256(buffer);
        await knowledgeDocumentRepository.update(doc.id, { checksum, size_bytes: buffer.length });
        if (!opts.allowDuplicate) {
            const duplicate = await knowledgeDocumentRepository.findActiveByChecksum(checksum, doc.id);
            if (duplicate) {
                throw new PermanentJobError(`Same file as document #${duplicate.id} ("${duplicate.title}"). Re-upload as a new version to index it again.`);
            }
        }

        let extracted;
        try {
            extracted = await extractDocument(buffer, doc.original_filename, {
                uploaderId: doc.uploaded_by ?? null,
                tenantId: doc.tenant_id ?? null,
            });
        } catch (error) {
            if (error instanceof ExtractionError) {
                await knowledgeDocumentRepository.update(doc.id, { extraction_report: error.report ?? null });
                throw new PermanentJobError(error.message);
            }
            throw error;
        }
        await knowledgeDocumentRepository.update(doc.id, { extraction_report: extracted.report });

        const drafts = buildChunks(extracted.pages);
        const existing = new Map((await knowledgeDocumentChunkRepository.findByDocument(doc.id)).map((c) => [c.chunk_index, c]));
        const baseAttributes = documentAttributes(doc);

        for (const draft of drafts) {
            const content = chunkFileContent(`doc-${doc.id}`, doc.title, draft.pageStart, draft.pageEnd, draft.body);
            const checksumOfChunk = sha256(content + JSON.stringify(baseAttributes));
            const previous = existing.get(draft.index);

            // Idempotent retry: an unchanged chunk that is already indexed is kept as is.
            if (previous && previous.status === 'indexed' && previous.checksum === checksumOfChunk && previous.openai_file_id) {
                continue;
            }
            if (previous?.openai_file_id) {
                await removeRemoteFile(doc.openai_vector_store_id ?? vectorStoreId, previous.openai_file_id);
            }

            const chunk = await knowledgeDocumentChunkRepository.save({
                ...(previous ? { id: previous.id } : {}),
                document_id: doc.id,
                chunk_index: draft.index,
                page_start: draft.pageStart,
                page_end: draft.pageEnd,
                char_count: draft.body.length,
                checksum: checksumOfChunk,
                openai_file_id: null,
                status: 'pending',
                error_message: null,
            });

            try {
                const fileId = await uploadIndexedFile(`doc-${doc.id}-part-${draft.index + 1}.md`, content, {
                    ...baseAttributes,
                    chunk_id: chunk.id,
                    page_start: draft.pageStart ?? undefined,
                    page_end: draft.pageEnd ?? undefined,
                });
                await knowledgeDocumentChunkRepository.save({ id: chunk.id, openai_file_id: fileId, status: 'indexed' });
            } catch (error: any) {
                await knowledgeDocumentChunkRepository.save({ id: chunk.id, status: 'failed', error_message: String(error?.message ?? error).slice(0, 2000) });
                throw error;
            }
        }

        // The new extraction may have produced fewer chunks than a previous run.
        for (const [index, chunk] of existing) {
            if (index < drafts.length) continue;
            if (chunk.openai_file_id) await removeRemoteFile(doc.openai_vector_store_id ?? vectorStoreId, chunk.openai_file_id);
            await knowledgeDocumentChunkRepository.delete(chunk.id);
        }

        // Deleted while indexing: leave it to the delete job, which removes every chunk.
        const current = await knowledgeDocumentRepository.findById(doc.id);
        if (!current || current.status !== KnowledgeDocumentStatus.PROCESSING) return;

        await knowledgeDocumentRepository.update(doc.id, {
            status: KnowledgeDocumentStatus.READY,
            indexed_at: new Date(),
            error_message: null,
        });
    }

    async deleteDocument(documentId: number) {
        const doc = await knowledgeDocumentRepository.findById(documentId);
        if (!doc || doc.status === KnowledgeDocumentStatus.DELETED) return;

        const chunks = await knowledgeDocumentChunkRepository.findByDocument(doc.id);
        if (chunks.some((c) => c.openai_file_id)) assertOpenAiConfigured();
        for (const chunk of chunks) {
            if (chunk.openai_file_id) await removeRemoteFile(doc.openai_vector_store_id, chunk.openai_file_id);
            await knowledgeDocumentChunkRepository.delete(chunk.id);
        }

        await deleteKnowledgeObject(doc.storage_key).catch((e: any) => {
            if (e?.$metadata?.httpStatusCode !== 404) throw e;
        });

        // The row is kept (soft delete) for audit and provenance of already-published content.
        await knowledgeDocumentRepository.update(doc.id, {
            status: KnowledgeDocumentStatus.DELETED,
            deleted_at: new Date(),
            error_message: null,
        });
    }

    async markDocumentFailed(documentId: number, message: string) {
        const doc = await knowledgeDocumentRepository.findById(documentId);
        if (!doc) return;
        // A failed delete leaves the document in "deleting" so it can be retried.
        if (doc.status === KnowledgeDocumentStatus.DELETING) {
            await knowledgeDocumentRepository.update(documentId, { error_message: `Delete failed: ${message}` });
            return;
        }
        await knowledgeDocumentRepository.update(documentId, { status: KnowledgeDocumentStatus.FAILED, error_message: message });
    }

    async indexKnowledgeBase(knowledgeBaseId: number) {
        const kb = await knowledgeBaseRepository.findById(knowledgeBaseId);
        if (!kb) return; // deleted; its unindex job removes the file
        assertOpenAiConfigured({ vectorStore: true });
        const vectorStoreId = aiConfig.openai.vectorStoreId;

        if (kb.openai_file_id) await removeRemoteFile(vectorStoreId, kb.openai_file_id);

        if (kb.status !== 'active') {
            await knowledgeBaseRepository.update(kb.id, { openai_file_id: null, index_status: 'not_indexed', index_error: null, indexed_at: null });
            return;
        }

        const body = [kb.description, kb.content].filter(Boolean).join('\n\n');
        const fileId = await uploadIndexedFile(
            `kb-${kb.id}.md`,
            chunkFileContent(`kb-${kb.id}`, kb.title, null, null, body),
            {
                source: 'knowledge_base',
                document_id: `kb-${kb.id}`,
                tenant_id: 'system',
                title: kb.title,
                content_type: kb.category ? `note:${kb.category}` : 'note',
            },
        );
        await knowledgeBaseRepository.update(kb.id, { openai_file_id: fileId, index_status: 'indexed', index_error: null, indexed_at: new Date() });
    }

    async unindexKnowledgeBase(fileId: string) {
        assertOpenAiConfigured();
        await removeRemoteFile(aiConfig.openai.vectorStoreId, fileId);
    }

    async markKnowledgeBaseFailed(knowledgeBaseId: number, message: string) {
        const kb = await knowledgeBaseRepository.findById(knowledgeBaseId);
        if (!kb) return;
        await knowledgeBaseRepository.update(kb.id, { index_status: 'failed', index_error: message });
    }
}
