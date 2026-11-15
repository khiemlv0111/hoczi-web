'use client'

import { useCallback, useEffect, useState } from "react";
import { CommonModal } from "@/app/components/modal/CommonModal";
import { apiErrorMessage } from "@/data/services/ai.service";
import { DailyExercise, DailyExerciseService, DailyExerciseSet } from "@/data/services/dailyExercise.service";
import { buttonClass, formatDate, formatDateTime, inputClass, labelClass, Pager, primaryButtonClass, StatusBadge, useDx } from "./shared";

const LIMIT = 20;

function ExerciseEditor({ exercise, onSaved }: { exercise: DailyExercise; onSaved: (e: DailyExercise) => void }) {
    const tr = useDx();
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState({ question: exercise.question, answer: exercise.answer, explanation: exercise.explanation });
    const [saving, setSaving] = useState(false);

    const save = async () => {
        setSaving(true);
        try {
            const saved = await DailyExerciseService.updateExercise(exercise.id, draft);
            onSaved(saved);
            setEditing(false);
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                    {tr('exercise')} {exercise.position}
                    {exercise.edited_by_admin && <span className="ml-2 px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 text-[11px]">{tr('edited')}</span>}
                </span>
                {!editing && <button onClick={() => setEditing(true)} className={buttonClass}>{tr('edit')}</button>}
            </div>
            {editing ? (
                <div className="space-y-2">
                    {(['question', 'answer', 'explanation'] as const).map((key) => (
                        <div key={key}>
                            <label className={labelClass}>{tr(key)}</label>
                            <textarea value={draft[key]} rows={key === 'answer' ? 2 : 5}
                                onChange={(e) => setDraft((d) => ({ ...d, [key]: e.target.value }))} className={inputClass} />
                        </div>
                    ))}
                    <p className="text-[12px] text-gray-400">{tr('edit_exercise_note')}</p>
                    <div className="flex justify-end gap-2">
                        <button onClick={() => setEditing(false)} className={buttonClass}>{tr('cancel')}</button>
                        <button onClick={save} disabled={saving || !draft.question.trim() || !draft.answer.trim() || !draft.explanation.trim()}
                            className={primaryButtonClass}>{saving ? tr('saving') : tr('save')}</button>
                    </div>
                </div>
            ) : (
                <div className="space-y-2 text-[13px] text-gray-700 whitespace-pre-line">
                    <p>{exercise.question}</p>
                    <p><span className="font-medium text-green-700">{tr('answer')}:</span> {exercise.answer}</p>
                    <div><span className="font-medium">{tr('explanation')}:</span><div className="mt-1">{exercise.explanation}</div></div>
                </div>
            )}
        </div>
    );
}

export function SetsTab() {
    const tr = useDx();
    const [items, setItems] = useState<DailyExerciseSet[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<DailyExerciseSet | null>(null);

    const load = useCallback(async (p: number, d: string) => {
        setLoading(true);
        try {
            const res = await DailyExerciseService.getSets({ page: p, limit: LIMIT, date: d || undefined });
            setItems(res.items);
            setTotal(res.total);
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        } finally {
            setLoading(false);
        }
    }, [tr]);

    useEffect(() => {
        load(page, date);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, date]);

    const open = async (id: number) => {
        try {
            setDetail(await DailyExerciseService.getSet(id));
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        }
    };

    const onExerciseSaved = (saved: DailyExercise) => {
        setDetail((d) => d ? { ...d, exercises: d.exercises?.map((e) => e.id === saved.id ? saved : e) } : d);
    };

    return (
        <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
                <input type="date" value={date} onChange={(e) => { setPage(1); setDate(e.target.value); }} className={`${inputClass} max-w-[180px]`} />
                <button onClick={() => load(page, date)} className={buttonClass}>{tr('refresh')}</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full text-[13px]">
                    <thead className="bg-gray-50 text-gray-500 text-left">
                        <tr>
                            <th className="px-3 py-2 font-medium">{tr('date')}</th>
                            <th className="px-3 py-2 font-medium">{tr('subject')}</th>
                            <th className="px-3 py-2 font-medium">{tr('grade')}</th>
                            <th className="px-3 py-2 font-medium">{tr('exercises')}</th>
                            <th className="px-3 py-2 font-medium">{tr('status')}</th>
                            <th className="px-3 py-2 font-medium">{tr('model')}</th>
                            <th className="px-3 py-2 font-medium text-right">{tr('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <tr><td colSpan={7} className="px-3 py-6 text-center text-gray-400">{tr('loading')}</td></tr>}
                        {!loading && !items.length && <tr><td colSpan={7} className="px-3 py-6 text-center text-gray-400">{tr('no_sets')}</td></tr>}
                        {!loading && items.map((s) => (
                            <tr key={s.id} className="border-t border-gray-100">
                                <td className="px-3 py-2">{formatDate(s.set_date)}</td>
                                <td className="px-3 py-2">{s.subject?.name}</td>
                                <td className="px-3 py-2">{s.grade?.name}</td>
                                <td className="px-3 py-2">{s.exercise_count}</td>
                                <td className="px-3 py-2">
                                    <StatusBadge status={s.status} />
                                    {s.error && <div className="text-[12px] text-red-600 mt-1 max-w-xs truncate" title={s.error}>{s.error}</div>}
                                </td>
                                <td className="px-3 py-2 text-gray-500">{s.model || '—'}</td>
                                <td className="px-3 py-2 text-right">
                                    <button onClick={() => open(s.id)} className={buttonClass}>{tr('view')}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pager page={page} limit={LIMIT} total={total} onChange={setPage} />

            <CommonModal open={!!detail} onClose={() => setDetail(null)}
                title={detail ? `${detail.subject?.name ?? ''} – ${detail.grade?.name ?? ''} · ${formatDate(detail.set_date)}` : ''}>
                {detail && (
                    <div className="mt-2">
                        <p className="text-[12px] text-gray-400 mb-3">
                            {detail.model || '—'} · {detail.prompt_version || '—'} · {formatDateTime(detail.generated_at)}
                        </p>
                        <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
                            {(detail.exercises ?? []).map((e) => <ExerciseEditor key={e.id} exercise={e} onSaved={onExerciseSaved} />)}
                        </div>
                    </div>
                )}
            </CommonModal>
        </div>
    );
}
