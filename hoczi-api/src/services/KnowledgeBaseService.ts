import { knowledgeBaseRepository } from "../repositories/knowledgeBaseRepository";
import { aiJobRepository } from "../repositories/aiJobRepository";
import { AiJobType } from "../entities/AiJob";
import { CreateKnowledgeBaseRequest, UpdateKnowledgeBaseRequest } from "../dto/knowledgeBase.dto";

export class KnowledgeBaseService {
    async getKnowledgeBases(page: number, limit: number, search?: string) {
        return await knowledgeBaseRepository.findAll(page, limit, search);
    }

    async getKnowledgeBaseDetail(id: number) {
        return await knowledgeBaseRepository.findById(id);
    }

    async createKnowledgeBase(userId: number, data: CreateKnowledgeBaseRequest) {
        const knowledgeBase = await knowledgeBaseRepository.create(userId, data);
        await this.enqueueIndex(knowledgeBase.id);
        return { ...knowledgeBase, index_status: 'queued' };
    }

    async updateKnowledgeBase(id: number, data: UpdateKnowledgeBaseRequest) {
        const knowledgeBase = await knowledgeBaseRepository.findById(id);
        if (!knowledgeBase) return null;

        Object.assign(knowledgeBase, data);
        const saved = await knowledgeBaseRepository.save(knowledgeBase);
        await this.enqueueIndex(id);
        return { ...saved, index_status: 'queued' };
    }

    async reindexKnowledgeBase(id: number) {
        const knowledgeBase = await knowledgeBaseRepository.findById(id);
        if (!knowledgeBase) return null;
        await this.enqueueIndex(id);
        return { ...knowledgeBase, index_status: 'queued' };
    }

    async deleteKnowledgeBase(id: number) {
        const knowledgeBase = await knowledgeBaseRepository.findById(id);
        if (!knowledgeBase) return false;

        await knowledgeBaseRepository.delete(id);
        if (knowledgeBase.openai_file_id) {
            await aiJobRepository.enqueue(AiJobType.UNINDEX_KNOWLEDGE_BASE, { fileId: knowledgeBase.openai_file_id });
        }
        return true;
    }

    private async enqueueIndex(id: number) {
        await knowledgeBaseRepository.update(id, { index_status: 'queued', index_error: null });
        await aiJobRepository.enqueue(AiJobType.INDEX_KNOWLEDGE_BASE, { knowledgeBaseId: id });
    }
}
