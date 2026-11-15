import { getRequest, postRequest, putRequest } from "../http";

// Daily exercise emails — contract: specs/001-daily-exercise-email/contracts/api.md

export type NamedRef = { id: number; name: string };

export type ExerciseSubscription = {
    id: number;
    user_id: number;
    subject_id: number;
    grade_id: number;
    questions_per_day: number;
    send_time: string;
    timezone: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    subject: NamedRef | null;
    grade: NamedRef | null;
    user?: { id: number; name: string | null; email: string };
};

export type DailyExercise = {
    id: number;
    position: number;
    question: string;
    answer: string;
    explanation: string;
    edited_by_admin: boolean;
};

export type DailyExerciseSet = {
    id: number;
    set_date: string;
    status: 'generating' | 'ready' | 'failed';
    exercise_count: number;
    model: string | null;
    prompt_version: string | null;
    error: string | null;
    generated_at: string | null;
    subject: NamedRef | null;
    grade: NamedRef | null;
    exercises?: DailyExercise[];
};

export type DeliveryStatus = 'pending' | 'questions_sent' | 'answers_sent' | 'failed' | 'skipped';

export type ExerciseDelivery = {
    id: number;
    subscription_id: number;
    set_id: number | null;
    delivery_date: string;
    kind: 'scheduled' | 'test';
    status: DeliveryStatus;
    exercise_count: number | null;
    questions_sent_at: string | null;
    answers_sent_at: string | null;
    error: string | null;
    created_at: string;
    user: { id: number; name: string | null; email: string } | null;
    subject: NamedRef | null;
    grade: NamedRef | null;
};

export type Paged<T> = { items: T[]; total: number; page: number; limit: number };

export type SubscriptionSettings = {
    questions_per_day?: number;
    send_time?: string;
    timezone?: string;
};

export type CreateSubscriptionPayload = SubscriptionSettings & { subject_id: number; grade_id: number };
export type UpdateSubscriptionPayload = SubscriptionSettings & { is_active?: boolean };
export type AdminCreateSubscriptionPayload = CreateSubscriptionPayload & { user_id: number };
export type AdminUpdateSubscriptionPayload = UpdateSubscriptionPayload & { subject_id?: number; grade_id?: number };

export const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';

// "00:00" … "23:45" in 15-minute steps
export const SEND_TIME_OPTIONS = Array.from({ length: 96 }, (_, i) =>
    `${String(Math.floor(i / 4)).padStart(2, '0')}:${String((i % 4) * 15).padStart(2, '0')}`);

function query(params: Record<string, string | number | boolean | undefined>) {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== '') search.append(key, String(value));
    });
    const s = search.toString();
    return s ? `?${s}` : '';
}

const BASE = '/api/daily-exercises';

export class DailyExerciseService {
    // ---- public ----
    static async unsubscribe(token: string): Promise<{ subject_name: string; grade_name: string }> {
        const res = await postRequest(`${BASE}/public/unsubscribe`, { token }, false);
        return res.data;
    }

    // ---- signed-in user ----
    static async getOptions(): Promise<{ subjects: NamedRef[]; grades: NamedRef[] }> {
        const res = await getRequest(`${BASE}/options`, true);
        return res.data;
    }

    static async getMySubscriptions(): Promise<ExerciseSubscription[]> {
        const res = await getRequest(`${BASE}/my-subscriptions`, true);
        return res.data;
    }

    static async createMySubscription(payload: CreateSubscriptionPayload): Promise<ExerciseSubscription> {
        const res = await postRequest(`${BASE}/my-subscriptions`, payload);
        return res.data;
    }

    static async updateMySubscription(id: number, payload: UpdateSubscriptionPayload): Promise<ExerciseSubscription> {
        const res = await putRequest(`${BASE}/my-subscriptions/${id}`, payload);
        return res.data;
    }

    // ---- admin ----
    static async getSubscriptions(params: { page?: number; limit?: number; keyword?: string; is_active?: boolean }): Promise<Paged<ExerciseSubscription>> {
        const res = await getRequest(`${BASE}/admin/subscriptions${query(params)}`, true);
        return res.data;
    }

    static async createSubscription(payload: AdminCreateSubscriptionPayload): Promise<ExerciseSubscription> {
        const res = await postRequest(`${BASE}/admin/subscriptions`, payload);
        return res.data;
    }

    static async updateSubscription(id: number, payload: AdminUpdateSubscriptionPayload): Promise<ExerciseSubscription> {
        const res = await putRequest(`${BASE}/admin/subscriptions/${id}`, payload);
        return res.data;
    }

    static async testRun(id: number): Promise<ExerciseDelivery> {
        const res = await postRequest(`${BASE}/admin/subscriptions/${id}/test-run`, {});
        return res.data;
    }

    static async getSets(params: { page?: number; limit?: number; date?: string; subject_id?: number; grade_id?: number }): Promise<Paged<DailyExerciseSet>> {
        const res = await getRequest(`${BASE}/admin/sets${query(params)}`, true);
        return res.data;
    }

    static async getSet(id: number): Promise<DailyExerciseSet> {
        const res = await getRequest(`${BASE}/admin/sets/${id}`, true);
        return res.data;
    }

    static async updateExercise(id: number, payload: { question?: string; answer?: string; explanation?: string }): Promise<DailyExercise> {
        const res = await putRequest(`${BASE}/admin/exercises/${id}`, payload);
        return res.data;
    }

    static async getDeliveries(params: { page?: number; limit?: number; date?: string; status?: string; keyword?: string }): Promise<Paged<ExerciseDelivery>> {
        const res = await getRequest(`${BASE}/admin/deliveries${query(params)}`, true);
        return res.data;
    }

    static async resend(id: number, part: 'questions' | 'answers'): Promise<ExerciseDelivery> {
        const res = await postRequest(`${BASE}/admin/deliveries/${id}/resend`, { part });
        return res.data;
    }
}
