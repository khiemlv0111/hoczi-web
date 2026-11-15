'use client'

import { useCallback, useEffect, useState } from "react";
import { AdminEmailService, BroadcastSummary } from "@/data/services/adminEmail.service";
import { apiErrorMessage } from "@/data/services/ai.service";
import { buttonClass, formatDateTime, Pager, StatusBadge, useTr } from "./shared";

const LIMIT = 20;

export function EmailHistory({ onOpen }: { onOpen: (id: number) => void }) {
    const tr = useTr();
    const [items, setItems] = useState<BroadcastSummary[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const res = await AdminEmailService.list(page, LIMIT);
            setItems(res.items);
            setTotal(res.total);
            setError(null);
        } catch (e) {
            setError(apiErrorMessage(e, tr('error_generic')));
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => { load(); }, [load]);

    return (
        <div className="max-w-5xl">
            <div className="flex justify-end mb-3">
                <button onClick={load} className={buttonClass}>{tr('refresh')}</button>
            </div>
            {error && <p className="text-[13px] text-red-600 mb-2">{error}</p>}
            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full text-[13px]">
                    <thead className="bg-gray-50 text-gray-500 text-left">
                        <tr>
                            <th className="px-3 py-2 font-medium">{tr('created_at')}</th>
                            <th className="px-3 py-2 font-medium">{tr('subject')}</th>
                            <th className="px-3 py-2 font-medium">{tr('created_by')}</th>
                            <th className="px-3 py-2 font-medium text-right">{tr('recipients')}</th>
                            <th className="px-3 py-2 font-medium text-right">{tr('sent')} / {tr('failed')}</th>
                            <th className="px-3 py-2 font-medium">{tr('status')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && !items.length && <tr><td colSpan={6} className="px-3 py-6 text-center text-gray-400">{tr('loading')}</td></tr>}
                        {!loading && !items.length && <tr><td colSpan={6} className="px-3 py-6 text-center text-gray-400">{tr('no_history')}</td></tr>}
                        {items.map((b) => (
                            <tr key={b.id} onClick={() => onOpen(b.id)} className="border-t border-gray-100 cursor-pointer hover:bg-gray-50">
                                <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{formatDateTime(b.created_at)}</td>
                                <td className="px-3 py-2 text-gray-900">{b.subject}</td>
                                <td className="px-3 py-2 text-gray-500">{b.created_by?.name || b.created_by?.email || '—'}</td>
                                <td className="px-3 py-2 text-right">{b.recipient_count}</td>
                                <td className="px-3 py-2 text-right">
                                    <span className="text-green-700">{b.sent_count}</span> / <span className={b.failed_count ? 'text-red-600' : ''}>{b.failed_count}</span>
                                </td>
                                <td className="px-3 py-2"><StatusBadge status={b.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pager page={page} limit={LIMIT} total={total} onChange={setPage} />
        </div>
    );
}
