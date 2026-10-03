import { aiConfig } from '../config/ai';
import { AiJobType } from '../entities/AiJob';
import { KnowledgeDocumentStatus } from '../entities/KnowledgeDocument';
import { BadRequestError, NotFoundError } from '../errors/api-erros';
import { CreateUploadUrlRequest, HSK_MAX_LEVEL, RegisterKnowledgeDocumentRequest } from '../dto/ai.dto';
import { extensionOf, SUPPORTED_EXTENSIONS } from '../helpers/ai/extraction';
import { createKnowledgeUpload, headKnowledgeObject, KNOWLEDGE_PREFIX } from '../helpers/ai/storage';
import { aiJobRepository } from '../repositories/aiJobRepository';
import { aiUsageLogRepository } from '../repositories/aiUsageLogRepository';
import { KnowledgeDocumentFilter, knowledgeDocumentRepository } from '../repositories/knowledgeDocumentRepository';

export class KnowledgeDocumentService {
    async createUploadUrl(dto: CreateUploadUrlRequest) {
        const ext = extensionOf(dto.filename);
        const contentType = SUPPORTED_EXTENSIONS[ext];
        if (!contentType) {
            throw new BadRequestError(`Unsupported file type "${ext}". Supported: ${Object.keys(SUPPORTED_EXTENSIONS).join(', ')}`);
        }
        return createKnowledgeUpload(dto.filename, contentType);
    }

    async registerDocument(userId: number, dto: RegisterKnowledgeDocumentRequest) {
        if (!dto.storage_key.startsWith(KNOWLEDGE_PREFIX) || dto.storage_key.includes('..')) {
            throw new BadRequestError('Invalid storage key');
        }
        if (dto.hsk_level > HSK_MAX_LEVEL[dto.hsk_standard]) {
            throw new BadRequestError(`${dto.hsk_standard.toUpperCase()} has levels 1-${HSK_MAX_LEVEL[dto.hsk_standard]}`);
        }
        const ext = extensionOf(dto.original_filename);
        if (!SUPPORTED_EXTENSIONS[ext]) throw new BadRequestError(`Unsupported file type "${ext}"`);

        const head = await headKnowledgeObject(dto.storage_key);
        if (!head) throw new BadRequestError('Uploaded file not found. Upload it before registering.');
        if (head.size > aiConfig.ingestion.maxUploadMb * 1024 * 1024) {
            throw new BadRequestError(`File is larger than ${aiConfig.ingestion.maxUploadMb} MB`);
        }

        let version = 1;
        if (dto.supersedes_document_id) {
            const previous = await knowledgeDocumentRepository.findById(dto.supersedes_document_id);
            if (!previous) throw new BadRequestError(`Document #${dto.supersedes_document_id} not found`);
            version = previous.version + 1;
        }

        const doc = await knowledgeDocumentRepository.create({
            title: dto.title,
            original_filename: dto.original_filename,
            mime_type: SUPPORTED_EXTENSIONS[ext],
            size_bytes: head.size,
            hsk_standard: dto.hsk_standard,
            hsk_level: dto.hsk_level,
            edition: dto.edition ?? null,
            script: dto.script ?? 'simplified',
            language: dto.language ?? 'zh',
            content_type: dto.content_type,
            tenant_id: dto.tenant_id ?? null,
            book_id: dto.book_id ?? null,
            book_lesson_id: dto.book_lesson_id ?? null,
            storage_key: dto.storage_key,
            version,
            supersedes_document_id: dto.supersedes_document_id ?? null,
            rights_status: dto.rights_status,
            rights_notes: dto.rights_notes ?? null,
            status: KnowledgeDocumentStatus.PENDING,
            uploaded_by: userId,
        });

        // A new version explicitly replaces the same content, so it may share a checksum.
        await aiJobRepository.enqueue(AiJobType.INGEST_DOCUMENT, {
            documentId: doc.id,
            allowDuplicate: !!dto.allow_duplicate || !!dto.supersedes_document_id,
        });
        return doc;
    }

    async getDocuments(page: number, limit: number, filter: KnowledgeDocumentFilter) {
        return knowledgeDocumentRepository.findAll(page, limit, filter);
    }

    async getDocumentDetail(id: number) {
        const doc = await knowledgeDocumentRepository.findByIdWithChunks(id);
        if (!doc) throw new NotFoundError('Document not found');
        return doc;
    }

    async retryDocument(id: number, allowDuplicate = false) {
        const doc = await knowledgeDocumentRepository.findById(id);
        if (!doc) throw new NotFoundError('Document not found');

        if (doc.status === KnowledgeDocumentStatus.DELETING) {
            await aiJobRepository.enqueue(AiJobType.DELETE_DOCUMENT, { documentId: id });
            return { ...doc, error_message: null };
        }
        if (doc.status !== KnowledgeDocumentStatus.FAILED) {
            throw new BadRequestError(`Only failed documents can be retried (current status: ${doc.status})`);
        }
        await knowledgeDocumentRepository.update(id, { status: KnowledgeDocumentStatus.PENDING, error_message: null });
        await aiJobRepository.enqueue(AiJobType.INGEST_DOCUMENT, { documentId: id, allowDuplicate });
        return { ...doc, status: KnowledgeDocumentStatus.PENDING, error_message: null };
    }

    async deleteDocument(id: number) {
        const doc = await knowledgeDocumentRepository.findById(id);
        if (!doc || doc.status === KnowledgeDocumentStatus.DELETED) throw new NotFoundError('Document not found');

        await knowledgeDocumentRepository.update(id, { status: KnowledgeDocumentStatus.DELETING, error_message: null });
        await aiJobRepository.enqueue(AiJobType.DELETE_DOCUMENT, { documentId: id });
        return { ...doc, status: KnowledgeDocumentStatus.DELETING };
    }

    async getUsageSummary() {
        const now = new Date();
        const since = new Date(now.getFullYear(), now.getMonth(), 1);
        return {
            since,
            budgetUsd: aiConfig.limits.monthlyBudgetUsd || null,
            spentUsd: await aiUsageLogRepository.sumCostSince(since),
            rows: await aiUsageLogRepository.summarySince(since),
        };
    }
}
