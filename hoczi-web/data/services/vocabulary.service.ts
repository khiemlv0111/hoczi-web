import { getRequest, postRequest } from "../http";

export type VocabularyItem = {
    id: string;
    word: string;
    pinyin?: string;
    hanViet?: string | null;
    audioUrl?: string | null;
    meaningEn?: string;
    meaningVi?: string;
    exampleSentence?: string;
    metadata?: unknown;
    tenantId?: string | null;
    createdAt?: string;
    lessonVocabularies?: {
        id: string;
        lessonId: number;
        vocabularyId: string;
        orderIndex: number;
        lesson?: { id: number; title: string };
    }[];
};

export class VocabularyService {
    static async getVocabulariesByLesson(lessonId: number) {
        const response = await getRequest(`/api/vocabularies/get-vocabularies-by-lesson/${lessonId}`, true);
        return response;
    }

    static async getVocabularies() {
        const response = await getRequest(`/api/vocabularies/get-vocabularies`, true);
        return response;
    }

    static async createVocabulary(payload: VocabularyItem, lessonId: number) {
        const response = await postRequest(`/api/vocabularies/create-vocabulary/${lessonId}`, payload, true);
        return response;
    }

    static async addToLesson(payload: { vocabularyId: string; lessonId: number; orderIndex?: number }) {
        const response = await postRequest('/api/vocabularies/add-vocabulary-to-lesson', payload, true);
        return response;
    }
}