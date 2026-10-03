import { AppDataSource } from '../data-source';
import { AiDraft } from '../entities/AiDraft';

export type AiDraftFilter = {
    status?: string;
    task_type?: string;
    // undefined = all tenants (admins); otherwise restrict to this tenant / creator
    tenant_id?: number | null;
    created_by?: number;
};

class AiDraftRepository {
    private get repo() {
        return AppDataSource.getRepository(AiDraft);
    }

    async findAll(page: number, limit: number, filter: AiDraftFilter = {}) {
        const qb = this.repo.createQueryBuilder('draft')
            .leftJoin('draft.creator', 'creator')
            .addSelect(['creator.id', 'creator.name', 'creator.email'])
            .orderBy('draft.id', 'DESC')
            .take(limit)
            .skip((page - 1) * limit);

        if (filter.status) qb.andWhere('draft.status = :status', { status: filter.status });
        if (filter.task_type) qb.andWhere('draft.task_type = :tt', { tt: filter.task_type });
        if (filter.tenant_id !== undefined && filter.tenant_id !== null) {
            qb.andWhere('draft.tenant_id = :tid', { tid: filter.tenant_id });
        } else if (filter.created_by !== undefined) {
            qb.andWhere('draft.created_by = :uid', { uid: filter.created_by });
        }

        const [data, total] = await qb.getManyAndCount();
        return { data, total };
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async create(data: Partial<AiDraft>) {
        return this.repo.save(this.repo.create(data));
    }

    async save(draft: AiDraft) {
        return this.repo.save(draft);
    }
}

export const aiDraftRepository = new AiDraftRepository();
