import { deleteRequest, getRequest, postRequest, putRequest } from "../http";

export type KnowledgeBase = {
    id: number;
    title: string;
    description?: string;
    content: string;
    category?: string;
    status?: string;
    created_by?: number;
    created_at?: string;
    updated_at?: string;
};

export type KnowledgeBasePayload = {
    title: string;
    content: string;
    description?: string;
    category?: string;
    status?: string;
};

export class KnowledgeBaseService {
    static async getKnowledgeBases(page = 1, limit = 20, search = '') {
        const query = search ? `&search=${encodeURIComponent(search)}` : '';
        const response = await getRequest(`/api/knowledge-bases?page=${page}&limit=${limit}${query}`, true);
        return response;
    }

    static async getKnowledgeBaseDetail(id: number) {
        const response = await getRequest(`/api/knowledge-bases/${id}`, true);
        return response;
    }

    static async createKnowledgeBase(payload: KnowledgeBasePayload) {
        const response = await postRequest('/api/knowledge-bases', payload, true);
        return response;
    }

    static async updateKnowledgeBase(id: number, payload: Partial<KnowledgeBasePayload>) {
        const response = await putRequest(`/api/knowledge-bases/${id}`, payload, true);
        return response;
    }

    static async deleteKnowledgeBase(id: number) {
        const response = await deleteRequest(`/api/knowledge-bases/${id}`, true);
        return response;
    }
}
