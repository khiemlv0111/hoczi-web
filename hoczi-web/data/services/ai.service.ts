import axios from "axios";
import { deleteRequest, getRequest, postRequest, putRequest } from "../http";

export type KnowledgeDocumentStatus = 'pending' | 'processing' | 'ready' | 'failed' | 'deleting' | 'deleted';

export type KnowledgeDocumentChunk = {
    id: number;
    chunk_index: number;
    page_start: number | null;
    page_end: number | null;
    char_count: number;
    status: string;
    error_message: string | null;
};

export type KnowledgeDocument = {
    id: number;
    title: string;
    original_filename: string;
    size_bytes?: number | null;
    hsk_standard: string;
    hsk_level: number;
    edition?: string | null;
    script: string;
    language: string;
    content_type: string;
    tenant_id: number | null;
    book_id?: number | null;
    version: number;
    status: KnowledgeDocumentStatus;
    rights_status: string;
    rights_notes?: string | null;
    extraction_report?: {
        format: string;
        totalPages: number | null;
        lowTextPages: number[];
        ocrPages: number[];
        ocrFailedPages: number[];
        totalChars: number;
    } | null;
    error_message?: string | null;
    indexed_at?: string | null;
    created_at: string;
    chunks?: KnowledgeDocumentChunk[];
};

export type RegisterDocumentPayload = {
    storage_key: string;
    title: string;
    original_filename: string;
    hsk_standard: string;
    hsk_level: number;
    edition?: string;
    script?: string;
    content_type: string;
    tenant_id?: number | null;
    book_id?: number;
    rights_status: string;
    rights_notes?: string;
    allow_duplicate?: boolean;
};

export type Citation = { documentId: string; page: number | null; section: string | null };

export type DraftItem = {
    type: 'multiple_choice' | 'fill_in_blank' | 'sentence_ordering' | 'true_false';
    prompt: string;
    pinyin: string | null;
    options: string[];
    correctOptionIndex: number | null;
    correctAnswer: string | null;
    correctOrder: number[];
    explanation: string;
    citations: Citation[];
};

export type DraftOutput = {
    title?: string;
    hskStandard?: string;
    hskLevel?: number;
    script?: string;
    insufficientEvidence?: boolean;
    instructions?: string;
    passage?: string;
    passagePinyin?: string | null;
    translation?: string | null;
    vocabulary?: { word: string; pinyin: string; meaning: string }[];
    grammarPoint?: string;
    structure?: string;
    explanation?: string;
    examples?: { sentence: string; pinyin: string | null; translation: string }[];
    commonMistakes?: string[];
    items?: DraftItem[];
    citations?: Citation[];
};

export type DraftRequestParams = {
    hsk_standard: string;
    hsk_level: number;
    script: string;
    difficulty: string;
    item_count: number;
    [key: string]: unknown;
};

export type AiDraft = {
    id: number;
    task_type: 'reading_passage' | 'grammar_explanation' | 'exercise_set';
    request_params: DraftRequestParams;
    output: DraftOutput | null;
    citations: Citation[];
    retrieval: { documentId: string; title: string | null; pageStart: number | null; pageEnd: number | null; score: number | null }[];
    validation_issues: string[];
    insufficient_evidence: boolean;
    model: string;
    prompt_version: string;
    status: 'draft' | 'approved' | 'rejected' | 'published';
    edited: boolean;
    review_notes?: string | null;
    published_refs?: { questionIds: number[]; skipped: { index: number; type: string; reason: string }[] } | null;
    parent_draft_id?: number | null;
    creator?: { id: number; name: string; email: string };
    created_at: string;
};

export type GeneratePayload = {
    task_type: string;
    hsk_standard: string;
    hsk_level: number;
    script: string;
    include_pinyin?: boolean;
    explanation_language?: string;
    difficulty: string;
    item_count: number;
    item_types?: string[];
    document_ids?: number[];
    topic?: string;
    notes?: string;
};

export type ChatTurn = { role: 'user' | 'assistant'; content: string };

export type ChatCitation = Citation & { title: string | null };

export type ChatReply = {
    answer: string;
    // data: answered from Hoczi database statistics (admins only)
    // documents / mixed: grounded in uploaded sources; general: general knowledge only
    source: 'data' | 'documents' | 'mixed' | 'general';
    // Data tools that were run, e.g. { name: 'get_user_stats', label: 'User statistics' }
    queried: { name: string; label: string }[];
    searched: boolean;
    citations: ChatCitation[];
    unverifiedCitationCount: number;
};

// Server error message (validation, budget, provider) if there is one.
export function apiErrorMessage(error: unknown, fallback: string) {
    if (axios.isAxiosError(error)) {
        const message = (error.response?.data as { message?: unknown } | undefined)?.message;
        if (typeof message === 'string' && message) return message;
    }
    return fallback;
}

export class AiService {
    // ---- knowledge documents (admin) ----
    static async getDocuments(page = 1, limit = 20, status = '') {
        const query = status ? `&status=${status}` : '';
        return getRequest(`/api/knowledge/documents?page=${page}&limit=${limit}${query}`, true);
    }

    static async getDocument(id: number): Promise<KnowledgeDocument> {
        return getRequest(`/api/knowledge/documents/${id}`, true);
    }

    // Upload straight to S3 with a presigned POST, then register the document for ingestion.
    static async uploadAndRegister(file: File, payload: Omit<RegisterDocumentPayload, 'storage_key' | 'original_filename'>) {
        const upload = await postRequest('/api/knowledge/documents/upload-url', { filename: file.name }, true);
        const form = new FormData();
        Object.entries(upload.fields as Record<string, string>).forEach(([k, v]) => form.append(k, v));
        form.append('file', file); // must be the last field
        const s3 = await fetch(upload.url, { method: 'POST', body: form });
        if (!s3.ok) {
            throw new Error(s3.status === 400 ? 'Upload rejected by storage (file too large?)' : `Upload failed (${s3.status})`);
        }
        return postRequest('/api/knowledge/documents', {
            ...payload,
            storage_key: upload.storageKey,
            original_filename: file.name,
        }, true);
    }

    static async retryDocument(id: number, allowDuplicate = false) {
        return postRequest(`/api/knowledge/documents/${id}/retry`, { allow_duplicate: allowDuplicate }, true);
    }

    static async deleteDocument(id: number) {
        return deleteRequest(`/api/knowledge/documents/${id}`, true);
    }

    static async getUsage() {
        return getRequest('/api/knowledge/usage', true);
    }

    // ---- chat assistant ----
    static async chat(messages: ChatTurn[]): Promise<ChatReply> {
        return postRequest('/api/ai/chat', { messages }, true);
    }

    // ---- generation & review ----
    static async generate(payload: GeneratePayload): Promise<AiDraft> {
        return postRequest('/api/ai/generate', payload, true);
    }

    static async getDrafts(page = 1, limit = 20, status = '') {
        const query = status ? `&status=${status}` : '';
        return getRequest(`/api/ai/drafts?page=${page}&limit=${limit}${query}`, true);
    }

    static async getDraft(id: number): Promise<AiDraft> {
        return getRequest(`/api/ai/drafts/${id}`, true);
    }

    static async updateDraft(id: number, output: DraftOutput): Promise<AiDraft> {
        return putRequest(`/api/ai/drafts/${id}`, { output }, true);
    }

    static async regenerateDraft(id: number): Promise<AiDraft> {
        return postRequest(`/api/ai/drafts/${id}/regenerate`, {}, true);
    }

    static async approveDraft(id: number, notes?: string): Promise<AiDraft> {
        return postRequest(`/api/ai/drafts/${id}/approve`, { notes }, true);
    }

    static async rejectDraft(id: number, notes?: string): Promise<AiDraft> {
        return postRequest(`/api/ai/drafts/${id}/reject`, { notes }, true);
    }

    static async publishDraft(id: number, payload: { category_id?: number; topic_id?: number; grade_id?: number } = {}): Promise<AiDraft> {
        return postRequest(`/api/ai/drafts/${id}/publish`, payload, true);
    }
}
