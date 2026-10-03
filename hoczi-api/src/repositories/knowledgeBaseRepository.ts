import { ILike } from 'typeorm';
import { AppDataSource } from '../data-source';
import { KnowledgeBase } from '../entities/KnowledgeBase';

class KnowledgeBaseRepository {
    private get repo() {
        return AppDataSource.getRepository(KnowledgeBase);
    }

    async findAll(page: number, limit: number, search?: string) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            where: search ? { title: ILike(`%${search}%`) } : {},
            order: { id: 'DESC' },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async create(userId: number, data: Partial<KnowledgeBase>) {
        return await this.repo.save({ ...data, created_by: userId });
    }

    async save(entity: KnowledgeBase) {
        return await this.repo.save(entity);
    }

    async update(id: number, data: Partial<KnowledgeBase>) {
        await this.repo.update(id, data);
    }

    async delete(id: number) {
        return await this.repo.delete(id);
    }
}

export const knowledgeBaseRepository = new KnowledgeBaseRepository();
