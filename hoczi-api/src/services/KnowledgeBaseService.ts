import { knowledgeBaseRepository } from "../repositories/knowledgeBaseRepository";
import { CreateKnowledgeBaseRequest, UpdateKnowledgeBaseRequest } from "../dto/knowledgeBase.dto";

export class KnowledgeBaseService {
    async getKnowledgeBases(page: number, limit: number, search?: string) {
        return await knowledgeBaseRepository.findAll(page, limit, search);
    }

    async getKnowledgeBaseDetail(id: number) {
        return await knowledgeBaseRepository.findById(id);
    }

    async createKnowledgeBase(userId: number, data: CreateKnowledgeBaseRequest) {
        return await knowledgeBaseRepository.create(userId, data);
    }

    async updateKnowledgeBase(id: number, data: UpdateKnowledgeBaseRequest) {
        const knowledgeBase = await knowledgeBaseRepository.findById(id);
        if (!knowledgeBase) return null;

        Object.assign(knowledgeBase, data);
        return await knowledgeBaseRepository.save(knowledgeBase);
    }

    async deleteKnowledgeBase(id: number) {
        const result = await knowledgeBaseRepository.delete(id);
        return !!result.affected;
    }
}
