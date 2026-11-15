'use client'

import { useAppData } from "@/app/context/AppContext";
import { t } from "@/messages/locale";

// Translates admin_email.<key> with the current locale.
export function useTr() {
    const { messages } = useAppData();
    return (key: string) => t(messages, `admin_email.${key}`);
}

const STATUS_STYLE: Record<string, string> = {
    queued: 'bg-gray-100 text-gray-600',
    pending: 'bg-gray-100 text-gray-600',
    sending: 'bg-blue-50 text-blue-700',
    completed: 'bg-green-50 text-green-700',
    sent: 'bg-green-50 text-green-700',
    completed_with_errors: 'bg-amber-50 text-amber-700',
    failed: 'bg-red-50 text-red-600',
};

// prefix "status" for broadcasts, "rstatus" for recipients
export function StatusBadge({ status, prefix = 'status' }: { status: string; prefix?: 'status' | 'rstatus' }) {
    const tr = useTr();
    return (
        <span className={`inline-block px-2 py-0.5 rounded text-[12px] whitespace-nowrap ${STATUS_STYLE[status] ?? 'bg-gray-100 text-gray-600'}`}>
            {tr(`${prefix}_${status}`)}
        </span>
    );
}

export function formatDateTime(value: string | null | undefined) {
    if (!value) return '—';
    return new Date(value).toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' });
}

export function Pager({ page, limit, total, onChange }: { page: number; limit: number; total: number; onChange: (page: number) => void }) {
    const tr = useTr();
    const pages = Math.max(1, Math.ceil(total / limit));
    return (
        <div className="flex items-center justify-between mt-3 text-[13px] text-gray-500">
            <span>{tr('total')}: {total}</span>
            <div className="flex items-center gap-2">
                <button disabled={page <= 1} onClick={() => onChange(page - 1)} className={buttonClass}>{tr('prev')}</button>
                <span>{page}/{pages}</span>
                <button disabled={page >= pages} onClick={() => onChange(page + 1)} className={buttonClass}>{tr('next')}</button>
            </div>
        </div>
    );
}

export const inputClass = "w-full border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-blue-500";
export const labelClass = "block text-[12px] font-medium text-gray-600 mb-1";
export const buttonClass = "px-3 py-1.5 rounded-md text-[13px] border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50";
export const primaryButtonClass = "px-4 py-2 rounded-md text-[13px] bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50";
