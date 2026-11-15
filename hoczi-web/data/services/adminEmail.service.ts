import { getRequest, postRequest } from "../http";

// Admin email broadcasts — contract: specs/002-admin-send-email/contracts/api.md

export type RichDoc = { type: 'doc'; content?: unknown[] };

export type BroadcastStatus = 'queued' | 'sending' | 'completed' | 'completed_with_errors';
export type RecipientStatus = 'pending' | 'sending' | 'sent' | 'failed';

export type RecipientOption = { id: number; name: string | null; email: string; has_valid_email: boolean };

export type BroadcastSummary = {
    id: number;
    subject: string;
    status: BroadcastStatus;
    recipient_count: number;
    sent_count: number;
    failed_count: number;
    pending_count: number;
    created_by: { id: number; name: string | null; email: string } | null;
    created_at: string;
    started_at: string | null;
    completed_at: string | null;
};

export type BroadcastRecipient = {
    id: number;
    email: string;
    user_id: number | null;
    status: RecipientStatus;
    error: string | null;
    sent_at: string | null;
};

export type BroadcastDetail = BroadcastSummary & {
    content_html: string;
    recipients: { items: BroadcastRecipient[]; total: number; page: number; limit: number };
};

export type CreateBroadcastPayload = {
    client_request_id: string;
    subject: string;
    content: RichDoc;
    emails?: string[];
    user_ids?: number[];
};

// Same rule as the server (hoczi-api AdminEmailService)
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_RECIPIENTS = 1000;
export const IN_PROGRESS: BroadcastStatus[] = ['queued', 'sending'];

const BASE = '/api/admin/emails';

export class AdminEmailService {
    static async searchRecipients(keyword: string): Promise<RecipientOption[]> {
        const q = keyword.trim() ? `?keyword=${encodeURIComponent(keyword.trim())}` : '';
        const res = await getRequest(`${BASE}/recipients${q}`, true);
        return res.data;
    }

    static async preview(subject: string, content: RichDoc): Promise<{ subject: string; html: string; text: string }> {
        const res = await postRequest(`${BASE}/preview`, { subject, content });
        return res.data;
    }

    static async create(payload: CreateBroadcastPayload): Promise<BroadcastSummary> {
        const res = await postRequest(BASE, payload);
        return res.data;
    }

    static async list(page = 1, limit = 20): Promise<{ items: BroadcastSummary[]; total: number; page: number; limit: number }> {
        const res = await getRequest(`${BASE}?page=${page}&limit=${limit}`, true);
        return res.data;
    }

    static async get(id: number, params: { status?: RecipientStatus | ''; page?: number; limit?: number } = {}): Promise<BroadcastDetail> {
        const search = new URLSearchParams();
        if (params.status) search.append('status', params.status);
        search.append('page', String(params.page ?? 1));
        search.append('limit', String(params.limit ?? 50));
        const res = await getRequest(`${BASE}/${id}?${search.toString()}`, true);
        return res.data;
    }
}
