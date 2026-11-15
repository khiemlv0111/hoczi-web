'use client'

import { useCallback, useEffect, useState } from "react";
import { CommonModal } from "@/app/components/modal/CommonModal";
import { apiErrorMessage } from "@/data/services/ai.service";
import { UserService } from "@/data/services/user.service";
import {
    DailyExerciseService, DEFAULT_TIMEZONE, ExerciseSubscription, NamedRef, SEND_TIME_OPTIONS,
} from "@/data/services/dailyExercise.service";
import { buttonClass, inputClass, labelClass, Pager, primaryButtonClass, useDx } from "./shared";

const LIMIT = 20;

type FormState = {
    user_id: string;
    subject_id: string;
    grade_id: string;
    questions_per_day: string;
    send_time: string;
    timezone: string;
};

const EMPTY_FORM: FormState = {
    user_id: '', subject_id: '', grade_id: '', questions_per_day: '3', send_time: '07:00', timezone: DEFAULT_TIMEZONE,
};

type UserOption = { id: number; name?: string | null; email: string };

export function SubscriptionsTab() {
    const tr = useDx();
    const [items, setItems] = useState<ExerciseSubscription[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState<{ subjects: NamedRef[]; grades: NamedRef[] }>({ subjects: [], grades: [] });

    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState<ExerciseSubscription | null>(null);
    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    const [userSearch, setUserSearch] = useState('');
    const [userOptions, setUserOptions] = useState<UserOption[]>([]);
    const [saving, setSaving] = useState(false);

    const load = useCallback(async (p: number, kw: string) => {
        setLoading(true);
        try {
            const res = await DailyExerciseService.getSubscriptions({ page: p, limit: LIMIT, keyword: kw });
            setItems(res.items);
            setTotal(res.total);
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        } finally {
            setLoading(false);
        }
    }, [tr]);

    useEffect(() => {
        load(page, keyword);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        DailyExerciseService.getOptions().then(setOptions).catch(() => undefined);
    }, []);

    // Debounced user search for the create form
    useEffect(() => {
        if (!modalOpen || editing) return;
        const handle = setTimeout(() => {
            UserService.getAllUsers({ page: 1, limit: 20, keyword: userSearch.trim() || undefined })
                .then((data: { users?: UserOption[] }) => setUserOptions(data?.users ?? []))
                .catch(() => setUserOptions([]));
        }, 300);
        return () => clearTimeout(handle);
    }, [userSearch, modalOpen, editing]);

    const openCreate = () => {
        setEditing(null);
        setForm(EMPTY_FORM);
        setUserSearch('');
        setModalOpen(true);
    };

    const openEdit = (sub: ExerciseSubscription) => {
        setEditing(sub);
        setForm({
            user_id: String(sub.user_id),
            subject_id: String(sub.subject_id),
            grade_id: String(sub.grade_id),
            questions_per_day: String(sub.questions_per_day),
            send_time: sub.send_time,
            timezone: sub.timezone,
        });
        setModalOpen(true);
    };

    const save = async () => {
        if (!form.user_id || !form.subject_id || !form.grade_id) return;
        setSaving(true);
        try {
            const settings = {
                subject_id: Number(form.subject_id),
                grade_id: Number(form.grade_id),
                questions_per_day: Number(form.questions_per_day),
                send_time: form.send_time,
                timezone: form.timezone.trim() || DEFAULT_TIMEZONE,
            };
            if (editing) await DailyExerciseService.updateSubscription(editing.id, settings);
            else await DailyExerciseService.createSubscription({ ...settings, user_id: Number(form.user_id) });
            setModalOpen(false);
            await load(page, keyword);
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        } finally {
            setSaving(false);
        }
    };

    const toggle = async (sub: ExerciseSubscription) => {
        try {
            await DailyExerciseService.updateSubscription(sub.id, { is_active: !sub.is_active });
            await load(page, keyword);
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        }
    };

    const testRun = async (sub: ExerciseSubscription) => {
        try {
            await DailyExerciseService.testRun(sub.id);
            alert(tr('test_run_queued'));
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        }
    };

    const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value }));

    return (
        <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
                <input value={keyword} onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { setPage(1); load(1, keyword); } }}
                    placeholder={tr('search_user')} className={`${inputClass} max-w-xs`} />
                <button onClick={() => { setPage(1); load(1, keyword); }} className={buttonClass}>{tr('refresh')}</button>
                <div className="flex-1" />
                <button onClick={openCreate} className={primaryButtonClass}>{tr('create_subscription')}</button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
                <table className="w-full text-[13px]">
                    <thead className="bg-gray-50 text-gray-500 text-left">
                        <tr>
                            <th className="px-3 py-2 font-medium">{tr('user')}</th>
                            <th className="px-3 py-2 font-medium">{tr('subject')}</th>
                            <th className="px-3 py-2 font-medium">{tr('grade')}</th>
                            <th className="px-3 py-2 font-medium">{tr('questions_per_day')}</th>
                            <th className="px-3 py-2 font-medium">{tr('send_time')}</th>
                            <th className="px-3 py-2 font-medium">{tr('status')}</th>
                            <th className="px-3 py-2 font-medium text-right">{tr('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && <tr><td colSpan={7} className="px-3 py-6 text-center text-gray-400">{tr('loading')}</td></tr>}
                        {!loading && !items.length && <tr><td colSpan={7} className="px-3 py-6 text-center text-gray-400">{tr('no_subscriptions')}</td></tr>}
                        {!loading && items.map((sub) => (
                            <tr key={sub.id} className="border-t border-gray-100">
                                <td className="px-3 py-2">
                                    <div className="text-gray-900">{sub.user?.name || '—'}</div>
                                    <div className="text-gray-400 text-[12px]">{sub.user?.email}</div>
                                </td>
                                <td className="px-3 py-2">{sub.subject?.name}</td>
                                <td className="px-3 py-2">{sub.grade?.name}</td>
                                <td className="px-3 py-2">{sub.questions_per_day}</td>
                                <td className="px-3 py-2">{sub.send_time} <span className="text-gray-400 text-[12px]">{sub.timezone}</span></td>
                                <td className="px-3 py-2">
                                    <span className={`inline-block px-2 py-0.5 rounded text-[12px] ${sub.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                        {sub.is_active ? tr('active') : tr('inactive')}
                                    </span>
                                </td>
                                <td className="px-3 py-2">
                                    <div className="flex justify-end gap-1.5">
                                        <button onClick={() => openEdit(sub)} className={buttonClass}>{tr('edit')}</button>
                                        <button onClick={() => toggle(sub)} className={buttonClass}>{sub.is_active ? tr('disable') : tr('enable')}</button>
                                        <button onClick={() => testRun(sub)} className={buttonClass}>{tr('test_run')}</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pager page={page} limit={LIMIT} total={total} onChange={setPage} />

            <CommonModal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? tr('edit') : tr('create_subscription')}>
                <div className="space-y-3 mt-3">
                    {editing ? (
                        <div>
                            <label className={labelClass}>{tr('user')}</label>
                            <div className="text-[13px] text-gray-900">{editing.user?.name || '—'} <span className="text-gray-400">{editing.user?.email}</span></div>
                        </div>
                    ) : (
                        <div>
                            <label className={labelClass}>{tr('user')}</label>
                            <input value={userSearch} onChange={(e) => setUserSearch(e.target.value)} placeholder={tr('search_user')} className={`${inputClass} mb-2`} />
                            <select value={form.user_id} onChange={set('user_id')} className={inputClass}>
                                <option value="">{tr('select_user')}</option>
                                {userOptions.map((u) => <option key={u.id} value={u.id}>{u.name || '—'} — {u.email}</option>)}
                            </select>
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelClass}>{tr('subject')}</label>
                            <select value={form.subject_id} onChange={set('subject_id')} className={inputClass}>
                                <option value="">{tr('select_subject')}</option>
                                {options.subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>{tr('grade')}</label>
                            <select value={form.grade_id} onChange={set('grade_id')} className={inputClass}>
                                <option value="">{tr('select_grade')}</option>
                                {options.grades.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>{tr('questions_per_day')}</label>
                            <select value={form.questions_per_day} onChange={set('questions_per_day')} className={inputClass}>
                                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>{tr('send_time')}</label>
                            <select value={form.send_time} onChange={set('send_time')} className={inputClass}>
                                {SEND_TIME_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className={labelClass}>{tr('timezone')}</label>
                        <input value={form.timezone} onChange={set('timezone')} className={inputClass} />
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                        <button onClick={() => setModalOpen(false)} className={buttonClass}>{tr('cancel')}</button>
                        <button onClick={save} disabled={saving || !form.user_id || !form.subject_id || !form.grade_id} className={primaryButtonClass}>
                            {saving ? tr('saving') : tr('save')}
                        </button>
                    </div>
                </div>
            </CommonModal>
        </div>
    );
}
