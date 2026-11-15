'use client'

import { useCallback, useEffect, useState } from "react";
import { apiErrorMessage } from "@/data/services/ai.service";
import { DailyExerciseService, ExerciseDelivery } from "@/data/services/dailyExercise.service";
import { buttonClass, formatDate, formatDateTime, inputClass, Pager, StatusBadge, useDx } from "./shared";

const LIMIT = 20;
const STATUSES = ['pending', 'questions_sent', 'answers_sent', 'failed', 'skipped'];

export function DeliveriesTab() {
    const tr = useDx();
    const [items, setItems] = useState<ExerciseDelivery[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);

    const load = useCallback(async (p: number) => {
        setLoading(true);
        try {
            const res = await DailyExerciseService.getDeliveries({
                page: p, limit: LIMIT, date: date || undefined, status: status || undefined, keyword: keyword.trim() || undefined,
            });
            setItems(res.items);
            setTotal(res.total);
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        } finally {
            setLoading(false);
        }
    }, [date, status, keyword, tr]);

    useEffect(() => {
        load(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, date, status]);

    const resend = async (d: ExerciseDelivery, part: 'questions' | 'answers') => {
        try {
            await DailyExerciseService.resend(d.id, part);
            alert(tr('resend_queued'));
            await load(page);
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        }
    };

    return (
        <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
                <input type="date" value={date} onChange={(e) => { setPage(1); setDate(e.target.value); }} className={`${inputClass} max-w-[180px]`} />
                <select value={status} onChange={(e) => { setPage(1); setStatus(e.target.value); }} className={`${inputClass} max-w-[180px]`}>
                    <option value="">{tr('filter_all')}</option>
                    {STATUSES.map((s) => <option key={s} value={s}>{tr(`status_${s}`)}</option>)}
                </select>
                <input value={keyword} onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { setPage(1); load(1); } }}
                    placeholder={tr('search_user')} className={`${inputClass} max-w-xs`} />
                <button onClick={() => load(page)} className={buttonClass}>{tr('refresh')}</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full text-[13px]">
                    <thead className="bg-gray-50 text-gray-500 text-left">
                        <tr>
                            <th className="px-3 py-2 font-medium">{tr('date')}</th>
                            <th className="px-3 py-2 font-medium">{tr('user')}</th>
                            <th className="px-3 py-2 font-medium">{tr('subject')} / {tr('grade')}</th>
                            <th className="px-3 py-2 font-medium">{tr('status')}</th>
                            <th className="px-3 py-2 font-medium">{tr('questions_sent_at')}</th>
                            <th className="px-3 py-2 font-medium">{tr('answers_sent_at')}</th>
                            <th className="px-3 py-2 font-medium text-right">{tr('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <tr><td colSpan={7} className="px-3 py-6 text-center text-gray-400">{tr('loading')}</td></tr>}
                        {!loading && !items.length && <tr><td colSpan={7} className="px-3 py-6 text-center text-gray-400">{tr('no_deliveries')}</td></tr>}
                        {!loading && items.map((d) => (
                            <tr key={d.id} className="border-t border-gray-100 align-top">
                                <td className="px-3 py-2">
                                    {formatDate(d.delivery_date)}
                                    <div className="text-[12px] text-gray-400">{tr(`kind_${d.kind}`)}</div>
                                </td>
                                <td className="px-3 py-2">
                                    <div className="text-gray-900">{d.user?.name || '—'}</div>
                                    <div className="text-gray-400 text-[12px]">{d.user?.email}</div>
                                </td>
                                <td className="px-3 py-2">{d.subject?.name} · {d.grade?.name}{d.exercise_count ? ` · ${d.exercise_count}` : ''}</td>
                                <td className="px-3 py-2">
                                    <StatusBadge status={d.status} />
                                    {d.error && <div className="text-[12px] text-red-600 mt-1 max-w-xs break-words">{d.error}</div>}
                                </td>
                                <td className="px-3 py-2 text-gray-500">{formatDateTime(d.questions_sent_at)}</td>
                                <td className="px-3 py-2 text-gray-500">{formatDateTime(d.answers_sent_at)}</td>
                                <td className="px-3 py-2">
                                    <div className="flex justify-end gap-1.5">
                                        <button onClick={() => resend(d, 'questions')} className={buttonClass}>{tr('resend_questions')}</button>
                                        <button onClick={() => resend(d, 'answers')} disabled={!d.questions_sent_at} className={buttonClass}>{tr('resend_answers')}</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pager page={page} limit={LIMIT} total={total} onChange={setPage} />
        </div>
    );
}
