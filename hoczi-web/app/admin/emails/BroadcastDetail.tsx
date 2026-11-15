'use client'

import { useCallback, useEffect, useState } from "react";
import { AdminEmailService, BroadcastDetail as Detail, IN_PROGRESS, RecipientStatus } from "@/data/services/adminEmail.service";
import { apiErrorMessage } from "@/data/services/ai.service";
import { buttonClass, formatDateTime, inputClass, Pager, StatusBadge, useTr } from "./shared";

const LIMIT = 50;
const POLL_MS = 3000;
const RECIPIENT_STATUSES: RecipientStatus[] = ['pending', 'sending', 'sent', 'failed'];

export function BroadcastDetail({ id, onBack }: { id: number; onBack: () => void }) {
    const tr = useTr();
    const [detail, setDetail] = useState<Detail | null>(null);
    const [status, setStatus] = useState<RecipientStatus | ''>('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async () => {
        try {
            setDetail(await AdminEmailService.get(id, { status, page, limit: LIMIT }));
            setError(null);
        } catch (e) {
            setError(apiErrorMessage(e, tr('error_generic')));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, status, page]);

    useEffect(() => { load(); }, [load]);

    // Refresh progress while the worker is still sending
    const inProgress = !!detail && IN_PROGRESS.includes(detail.status);
    useEffect(() => {
        if (!inProgress) return;
        const timer = setInterval(load, POLL_MS);
        return () => clearInterval(timer);
    }, [inProgress, load]);

    if (!detail) {
        return (
            <div>
                <button onClick={onBack} className={buttonClass}>{tr('back')}</button>
                <p className="text-[13px] text-gray-400 mt-4">{error ?? tr('loading')}</p>
            </div>
        );
    }

    const pct = (n: number) => detail.recipient_count ? (n / detail.recipient_count) * 100 : 0;

    return (
        <div className="max-w-5xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
                <button onClick={onBack} className={buttonClass}>{tr('back')}</button>
                <button onClick={load} className={buttonClass}>{tr('refresh')}</button>
            </div>

            <section className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                        <h2 className="text-[15px] font-semibold text-gray-900">{detail.subject}</h2>
                        <p className="text-[12px] text-gray-500 mt-0.5">
                            {formatDateTime(detail.created_at)} · {detail.created_by?.name || detail.created_by?.email || '—'}
                        </p>
                    </div>
                    <StatusBadge status={detail.status} />
                </div>

                <div className="mt-4">
                    <div className="flex justify-between text-[12px] text-gray-500 mb-1">
                        <span>{tr('progress')}</span>
                        <span>
                            {tr('sent')}: {detail.sent_count} · {tr('failed')}: {detail.failed_count} · {tr('pending')}: {detail.pending_count} / {detail.recipient_count}
                        </span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
                        <div className="h-full bg-green-500 transition-all" style={{ width: `${pct(detail.sent_count)}%` }} />
                        <div className="h-full bg-red-400 transition-all" style={{ width: `${pct(detail.failed_count)}%` }} />
                    </div>
                </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-[14px] font-medium text-gray-900">{tr('recipients')}</h3>
                    <select value={status} onChange={(e) => { setPage(1); setStatus(e.target.value as RecipientStatus | ''); }} className={`${inputClass} max-w-[180px]`}>
                        <option value="">{tr('filter_all')}</option>
                        {RECIPIENT_STATUSES.map((s) => <option key={s} value={s}>{tr(`rstatus_${s}`)}</option>)}
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                        <thead className="bg-gray-50 text-gray-500 text-left">
                            <tr>
                                <th className="px-3 py-2 font-medium">{tr('email')}</th>
                                <th className="px-3 py-2 font-medium">{tr('status')}</th>
                                <th className="px-3 py-2 font-medium">{tr('sent_at')}</th>
                                <th className="px-3 py-2 font-medium">{tr('error')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!detail.recipients.items.length && (
                                <tr><td colSpan={4} className="px-3 py-6 text-center text-gray-400">{tr('no_recipients')}</td></tr>
                            )}
                            {detail.recipients.items.map((r) => (
                                <tr key={r.id} className="border-t border-gray-100">
                                    <td className="px-3 py-2">{r.email}</td>
                                    <td className="px-3 py-2"><StatusBadge status={r.status} prefix="rstatus" /></td>
                                    <td className="px-3 py-2 text-gray-500">{formatDateTime(r.sent_at)}</td>
                                    <td className="px-3 py-2 text-red-600 text-[12px] break-words max-w-sm">{r.error || ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pager page={page} limit={LIMIT} total={detail.recipients.total} onChange={setPage} />
            </section>

            <section className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="text-[14px] font-medium text-gray-900 mb-2">{tr('sent_content')}</h3>
                {/* Server-rendered, allow-listed HTML; sandboxed frame keeps it isolated from the admin page */}
                <iframe title={tr('sent_content')} sandbox="" srcDoc={detail.content_html} className="w-full h-72 border border-gray-200 rounded-md" />
            </section>
        </div>
    );
}
