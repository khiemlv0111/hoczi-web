'use client'

import { useAppData } from "@/app/context/AppContext";
import { t } from "@/messages/locale";

const STATUS_STYLE: Record<string, string> = {
    pending: 'bg-gray-100 text-gray-600',
    generating: 'bg-blue-50 text-blue-700',
    questions_sent: 'bg-blue-50 text-blue-700',
    ready: 'bg-green-50 text-green-700',
    answers_sent: 'bg-green-50 text-green-700',
    failed: 'bg-red-50 text-red-600',
    skipped: 'bg-amber-50 text-amber-700',
};

// Translates daily_exercise.<key> with the current locale.
export function useDx() {
    const { messages } = useAppData();
    return (key: string) => t(messages, `daily_exercise.${key}`);
}

export function StatusBadge({ status }: { status: string }) {
    const tr = useDx();
    return (
        <span className={`inline-block px-2 py-0.5 rounded text-[12px] ${STATUS_STYLE[status] ?? 'bg-gray-100 text-gray-600'}`}>
            {tr(`status_${status}`)}
        </span>
    );
}

export function formatDateTime(value: string | null | undefined) {
    if (!value) return '—';
    return new Date(value).toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' });
}

export function formatDate(value: string) {
    const [y, m, d] = value.split('-');
    return d && m && y ? `${d}/${m}/${y}` : value;
}

export function Pager({ page, limit, total, onChange }: { page: number; limit: number; total: number; onChange: (page: number) => void }) {
    const tr = useDx();
    const pages = Math.max(1, Math.ceil(total / limit));
    return (
        <div className="flex items-center justify-between mt-3 text-[13px] text-gray-500">
            <span>{tr('total')}: {total}</span>
            <div className="flex items-center gap-2">
                <button disabled={page <= 1} onClick={() => onChange(page - 1)}
                    className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-40 hover:bg-gray-50">{tr('prev')}</button>
                <span>{page}/{pages}</span>
                <button disabled={page >= pages} onClick={() => onChange(page + 1)}
                    className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-40 hover:bg-gray-50">{tr('next')}</button>
            </div>
        </div>
    );
}

export const inputClass = "w-full border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-blue-500";
export const labelClass = "block text-[12px] font-medium text-gray-600 mb-1";
export const buttonClass = "px-3 py-1.5 rounded-md text-[13px] border border-gray-300 hover:bg-gray-50 disabled:opacity-50";
export const primaryButtonClass = "px-3 py-1.5 rounded-md text-[13px] bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50";
