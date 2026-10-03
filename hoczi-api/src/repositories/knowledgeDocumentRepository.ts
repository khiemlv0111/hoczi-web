import { In, Not } from 'typeorm';
import { AppDataSource } from '../data-source';
import { KnowledgeDocument, KnowledgeDocumentStatus } from '../entities/KnowledgeDocument';
import { KnowledgeDocumentChunk } from '../entities/KnowledgeDocumentChunk';

export type KnowledgeDocumentFilter = {
    status?: string;
    hsk_standard?: string;
    hsk_level?: number;
    tenant_id?: number | null;
    includeDeleted?: boolean;
};

class KnowledgeDocumentRepository {
    private get repo() {
        return AppDataSource.getRepository(KnowledgeDocument);
    }

    async findAll(page: number, limit: number, filter: KnowledgeDocumentFilter = {}) {
        const qb = this.repo.createQueryBuilder('doc')
            .orderBy('doc.id', 'DESC')
            .take(limit)
            .skip((page - 1) * limit);

        if (filter.status) {
            qb.andWhere('doc.status = :status', { status: filter.status });
        } else if (!filter.includeDeleted) {
            qb.andWhere('doc.status != :deleted', { deleted: KnowledgeDocumentStatus.DELETED });
        }
        if (filter.hsk_standard) qb.andWhere('doc.hsk_standard = :std', { std: filter.hsk_standard });
        if (filter.hsk_level) qb.andWhere('doc.hsk_level = :lvl', { lvl: filter.hsk_level });
        if (filter.tenant_id === null) qb.andWhere('doc.tenant_id IS NULL');
        else if (filter.tenant_id !== undefined) qb.andWhere('doc.tenant_id = :tid', { tid: filter.tenant_id });

        const [data, total] = await qb.getManyAndCount();
        return { data, total };
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async findByIdWithChunks(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['chunks'],
            order: { chunks: { chunk_index: 'ASC' } },
        });
    }

    async findActiveByChecksum(checksum: string, excludeId: number) {
        return this.repo.findOne({
            where: {
                checksum,
                id: Not(excludeId),
                status: In([KnowledgeDocumentStatus.READY, KnowledgeDocumentStatus.PROCESSING]),
            },
        });
    }

    async findByIds(ids: number[]) {
        if (!ids.length) return [];
        return this.repo.find({ where: { id: In(ids) } });
    }

    async create(data: Partial<KnowledgeDocument>) {
        return this.repo.save(this.repo.create(data));
    }

    async update(id: number, data: Partial<KnowledgeDocument>) {
        await this.repo.update(id, data);
    }
}

class KnowledgeDocumentChunkRepository {
    private get repo() {
        return AppDataSource.getRepository(KnowledgeDocumentChunk);
    }

    async findByDocument(documentId: number) {
        return this.repo.find({ where: { document_id: documentId }, order: { chunk_index: 'ASC' } });
    }

    async findByIds(ids: number[]) {
        if (!ids.length) return [];
        return this.repo.find({ where: { id: In(ids) } });
    }

    async save(chunk: Partial<KnowledgeDocumentChunk>) {
        return this.repo.save(chunk);
    }

    async delete(id: number) {
        await this.repo.delete(id);
    }
}

export const knowledgeDocumentRepository = new KnowledgeDocumentRepository();
export const knowledgeDocumentChunkRepository = new KnowledgeDocumentChunkRepository();
