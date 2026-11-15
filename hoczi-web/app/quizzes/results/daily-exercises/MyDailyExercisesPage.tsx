'use client'

import { useEffect, useState } from "react";
import { useAppData } from "@/app/context/AppContext";
import { t } from "@/messages/locale";
import { apiErrorMessage } from "@/data/services/ai.service";
import {
    DailyExerciseService, DEFAULT_TIMEZONE, ExerciseSubscription, NamedRef, SEND_TIME_OPTIONS,
} from "@/data/services/dailyExercise.service";

const inputClass = "w-full border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-blue-500";
const labelClass = "block text-[12px] font-medium text-gray-600 mb-1";
const buttonClass = "px-3 py-1.5 rounded-md text-[13px] border border-gray-300 hover:bg-gray-50 disabled:opacity-50";
const primaryButtonClass = "px-4 py-2 rounded-md text-[13px] bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50";

function browserTimezone() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || DEFAULT_TIMEZONE;
    } catch {
        return DEFAULT_TIMEZONE;
    }
}

function SubscriptionRow({ sub, onChange }: { sub: ExerciseSubscription; onChange: (s: ExerciseSubscription) => void }) {
    const { messages } = useAppData();
    const tr = (key: string) => t(messages, `daily_exercise.${key}`);
    const [count, setCount] = useState(String(sub.questions_per_day));
    const [time, setTime] = useState(sub.send_time);
    const [busy, setBusy] = useState(false);
    const dirty = Number(count) !== sub.questions_per_day || time !== sub.send_time;

    const update = async (payload: { questions_per_day?: number; send_time?: string; is_active?: boolean }) => {
        setBusy(true);
        try {
            onChange(await DailyExerciseService.updateMySubscription(sub.id, payload));
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                    <div className="font-medium text-gray-900">{sub.subject?.name} · {sub.grade?.name}</div>
                    <div className="text-[12px] text-gray-400">{sub.timezone}</div>
                </div>
                <span className={`px-2 py-0.5 rounded text-[12px] ${sub.is_active ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {sub.is_active ? tr('active') : tr('inactive')}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-md">
                <div>
                    <label className={labelClass}>{tr('questions_per_day')}</label>
                    <select value={count} onChange={(e) => setCount(e.target.value)} className={inputClass}>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                </div>
                <div>
                    <label className={labelClass}>{tr('send_time')}</label>
                    <select value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}>
                        {SEND_TIME_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
                <button disabled={!dirty || busy} onClick={() => update({ questions_per_day: Number(count), send_time: time })} className={buttonClass}>
                    {tr('save')}
                </button>
                <button disabled={busy} onClick={() => update({ is_active: !sub.is_active })} className={buttonClass}>
                    {sub.is_active ? tr('disable') : tr('enable')}
                </button>
            </div>
        </div>
    );
}

export function MyDailyExercisesPage() {
    const { messages } = useAppData();
    const tr = (key: string) => t(messages, `daily_exercise.${key}`);
    const [subs, setSubs] = useState<ExerciseSubscription[]>([]);
    const [options, setOptions] = useState<{ subjects: NamedRef[]; grades: NamedRef[] }>({ subjects: [], grades: [] });
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ subject_id: '', grade_id: '', questions_per_day: '3', send_time: '07:00' });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        Promise.all([DailyExerciseService.getMySubscriptions(), DailyExerciseService.getOptions()])
            .then(([mine, opts]) => { setSubs(mine); setOptions(opts); })
            .catch(() => undefined)
            .finally(() => setLoading(false));
    }, []);

    const subscribe = async () => {
        setSaving(true);
        try {
            const created = await DailyExerciseService.createMySubscription({
                subject_id: Number(form.subject_id),
                grade_id: Number(form.grade_id),
                questions_per_day: Number(form.questions_per_day),
                send_time: form.send_time,
                timezone: browserTimezone(),
            });
            setSubs((list) => [...list, created]);
            setForm((f) => ({ ...f, subject_id: '', grade_id: '' }));
            alert(tr('subscribed'));
        } catch (error) {
            alert(apiErrorMessage(error, tr('error_generic')));
        } finally {
            setSaving(false);
        }
    };

    const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value }));

    return (
        <div className="max-w-3xl">
            <h1 className="text-lg font-semibold text-gray-900">{tr('my_title')}</h1>
            <p className="text-[13px] text-gray-500 mt-1 mb-5">{tr('my_description')}</p>

            <div className="border border-gray-200 rounded-lg p-4 bg-white mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                <div className="mt-3">
                    <button onClick={subscribe} disabled={saving || !form.subject_id || !form.grade_id} className={primaryButtonClass}>
                        {saving ? tr('saving') : tr('subscribe')}
                    </button>
                </div>
            </div>

            <h2 className="text-[15px] font-medium text-gray-900 mb-3">{tr('my_subscriptions')}</h2>
            {loading && <p className="text-[13px] text-gray-400">{tr('loading')}</p>}
            {!loading && !subs.length && <p className="text-[13px] text-gray-400">{tr('my_empty')}</p>}
            <div className="space-y-3">
                {subs.map((s) => (
                    <SubscriptionRow key={s.id} sub={s} onChange={(updated) => setSubs((list) => list.map((x) => x.id === updated.id ? updated : x))} />
                ))}
            </div>
        </div>
    );
}
