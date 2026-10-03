'use client'

import { PAGE_SIZE } from "@/data/config/constants";
import { AiDraft, AiService, apiErrorMessage } from "@/data/services/ai.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TASKS = [
    { value: 'exercise_set', label: 'Exercise set' },
    { value: 'reading_passage', label: 'Reading passage + questions' },
    { value: 'grammar_explanation', label: 'Grammar explanation + practice' },
];
const ITEM_TYPES = [
    { value: 'multiple_choice', label: 'Multiple choice' },
    { value: 'true_false', label: 'True / false' },
    { value: 'fill_in_blank', label: 'Fill in the blank' },
    { value: 'sentence_ordering', label: 'Sentence ordering' },
];
const HSK_MAX: Record<string, number> = { hsk2: 6, hsk3: 9 };
export const TASK_LABEL: Record<string, string> = Object.fromEntries(TASKS.map((t) => [t.value, t.label]));
export const DRAFT_STATUS_STYLE: Record<string, string> = {
    draft: 'bg-gray-100 text-gray-600',
    approved: 'bg-blue-50 text-blue-700',
    rejected: 'bg-red-50 text-red-600',
    published: 'bg-green-50 text-green-700',
};

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

type GenerateForm = {
    task_type: string;
    hsk_standard: string;
    hsk_level: string;
    script: string;
    include_pinyin: boolean;
    explanation_language: string;
    difficulty: string;
    item_count: string;
    item_types: string[];
    document_ids: string;
    topic: string;
    notes: string;
};

const emptyForm: GenerateForm = {
    task_type: 'exercise_set', hsk_standard: 'hsk3', hsk_level: '1', script: 'simplified',
    include_pinyin: true, explanation_language: 'vi', difficulty: 'medium', item_count: '5',
    item_types: ['multiple_choice'], document_ids: '', topic: '', notes: '',
};

export function AiStudioPage() {
    const router = useRouter();
    const [form, setForm] = useState<GenerateForm>(emptyForm);
    const [generating, setGenerating] = useState(false);

    const [drafts, setDrafts] = useState<AiDraft[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    function fetchDrafts(p: number, status: string) {
        setLoading(true);
        AiService.getDrafts(p, PAGE_SIZE, status)
            .then((res) => {
                setDrafts(Array.isArray(res?.data) ? res.data : []);
                setTotal(res?.total ?? 0);
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }

    useEffect(() => { fetchDrafts(page, statusFilter); }, [page, statusFilter]);

    function setField<K extends keyof GenerateForm>(field: K, value: GenerateForm[K]) {
        setForm((f) => ({ ...f, [field]: value }));
    }

    function toggleItemType(type: string) {
        setForm((f) => ({
            ...f,
            item_types: f.item_types.includes(type) ? f.item_types.filter((t) => t !== type) : [...f.item_types, type],
        }));
    }

    async function handleGenerate(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!form.item_types.length) {
            alert('Choose at least one item type.');
            return;
        }
        setGenerating(true);
        try {
            const documentIds = form.document_ids.split(/[,\s]+/).filter(Boolean).map(Number).filter((n) => n > 0);
            const draft = await AiService.generate({
                task_type: form.task_type,
                hsk_standard: form.hsk_standard,
                hsk_level: Number(form.hsk_level),
                script: form.script,
                include_pinyin: form.include_pinyin,
                explanation_language: form.explanation_language || undefined,
                difficulty: form.difficulty,
                item_count: Number(form.item_count),
                item_types: form.item_types,
                document_ids: documentIds.length ? documentIds : undefined,
                topic: form.topic || undefined,
                notes: form.notes || undefined,
            });
            router.push(`/admin/ai-studio/${draft.id}`);
        } catch (error) {
            alert(apiErrorMessage(error, 'Generation failed.'));
        } finally {
            setGenerating(false);
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-4 items-start">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <span className="text-[13px] font-medium text-gray-900">Generate from sources</span>
                <p className="text-[11px] text-gray-400 mb-3">Output is a draft grounded in indexed documents. Nothing reaches learners until a teacher approves and publishes it.</p>
                <form onSubmit={handleGenerate} className="flex flex-col gap-3">
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Task</label>
                        <select value={form.task_type} onChange={(e) => setField('task_type', e.target.value)} className={inputClass}>
                            {TASKS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Standard</label>
                            <select value={form.hsk_standard}
                                onChange={(e) => {
                                    setField('hsk_standard', e.target.value);
                                    if (Number(form.hsk_level) > HSK_MAX[e.target.value]) setField('hsk_level', '1');
                                }}
                                className={inputClass}>
                                <option value="hsk3">HSK 3.0</option>
                                <option value="hsk2">HSK 2.0</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Level</label>
                            <select value={form.hsk_level} onChange={(e) => setField('hsk_level', e.target.value)} className={inputClass}>
                                {Array.from({ length: HSK_MAX[form.hsk_standard] }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Script</label>
                            <select value={form.script} onChange={(e) => setField('script', e.target.value)} className={inputClass}>
                                <option value="simplified">Simplified</option>
                                <option value="traditional">Traditional</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Difficulty</label>
                            <select value={form.difficulty} onChange={(e) => setField('difficulty', e.target.value)} className={inputClass}>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Items</label>
                            <input type="number" min={1} max={20} value={form.item_count}
                                onChange={(e) => setField('item_count', e.target.value)} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Explain in</label>
                            <select value={form.explanation_language} onChange={(e) => setField('explanation_language', e.target.value)} className={inputClass}>
                                <option value="vi">Vietnamese</option>
                                <option value="en">English</option>
                                <option value="zh">Chinese</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Item types</label>
                        <div className="grid grid-cols-2 gap-1">
                            {ITEM_TYPES.map((t) => (
                                <label key={t.value} className="flex items-center gap-1.5 text-[12px] text-gray-600">
                                    <input type="checkbox" checked={form.item_types.includes(t.value)} onChange={() => toggleItemType(t.value)} />
                                    {t.label}
                                </label>
                            ))}
                        </div>
                        <p className="text-[11px] text-gray-400 mt-1">Only multiple choice and true/false can be published to the question bank.</p>
                    </div>
                    <label className="flex items-center gap-1.5 text-[12px] text-gray-600">
                        <input type="checkbox" checked={form.include_pinyin} onChange={(e) => setField('include_pinyin', e.target.checked)} />
                        Include pinyin
                    </label>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Topic / lesson / grammar point</label>
                        <input type="text" value={form.topic} onChange={(e) => setField('topic', e.target.value)}
                            className={inputClass} placeholder="e.g. Lesson 5, 是…的 structure" />
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Limit to document IDs</label>
                        <input type="text" value={form.document_ids} onChange={(e) => setField('document_ids', e.target.value)}
                            className={inputClass} placeholder="Optional, e.g. 3, 7" />
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Notes</label>
                        <textarea value={form.notes} onChange={(e) => setField('notes', e.target.value)}
                            className={`${inputClass} resize-none`} rows={2} placeholder="Optional guidance for the generator" />
                    </div>
                    <button type="submit" disabled={generating}
                        className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
                        {generating ? 'Generating… (can take a minute)' : 'Generate draft'}
                    </button>
                </form>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium text-gray-900">Drafts</span>
                    <select value={statusFilter} onChange={(e) => { setPage(1); setStatusFilter(e.target.value); }}
                        className="border border-gray-200 rounded-lg px-2 py-1 text-[12px]">
                        <option value="">All statuses</option>
                        <option value="draft">Draft</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                        <option value="published">Published</option>
                    </select>
                </div>
                {loading ? (
                    <div className="text-center py-8 text-sm text-gray-400">Loading...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 text-left text-[12px] text-gray-500">
                                    <th className="pb-2 pr-4 font-medium">#</th>
                                    <th className="pb-2 pr-4 font-medium">Title</th>
                                    <th className="pb-2 pr-4 font-medium">Task</th>
                                    <th className="pb-2 pr-4 font-medium">Level</th>
                                    <th className="pb-2 pr-4 font-medium">Checks</th>
                                    <th className="pb-2 pr-4 font-medium">Status</th>
                                    <th className="pb-2 font-medium">Created</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {drafts.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="py-6 text-center text-gray-400 text-[12px]">No drafts yet.</td>
                                    </tr>
                                ) : drafts.map((d) => (
                                    <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-2 pr-4 text-gray-400">{d.id}</td>
                                        <td className="py-2 pr-4 font-medium text-gray-900 max-w-[220px] truncate">
                                            <Link href={`/admin/ai-studio/${d.id}`} className="hover:text-blue-600">
                                                {d.output?.title || '(untitled)'}
                                            </Link>
                                        </td>
                                        <td className="py-2 pr-4 text-[12px] text-gray-500">{TASK_LABEL[d.task_type] ?? d.task_type}</td>
                                        <td className="py-2 pr-4 text-[12px] text-gray-500 whitespace-nowrap">
                                            {d.request_params?.hsk_standard?.toUpperCase()} {d.request_params?.hsk_level}
                                        </td>
                                        <td className="py-2 pr-4 text-[12px]">
                                            {d.insufficient_evidence
                                                ? <span className="text-amber-600">No evidence</span>
                                                : d.validation_issues?.length
                                                    ? <span className="text-amber-600">{d.validation_issues.length} issue(s)</span>
                                                    : <span className="text-green-600">OK</span>}
                                        </td>
                                        <td className="py-2 pr-4">
                                            <span className={`text-[11px] px-2 py-0.5 rounded-full ${DRAFT_STATUS_STYLE[d.status]}`}>{d.status}</span>
                                        </td>
                                        <td className="py-2 text-[12px] text-gray-500 whitespace-nowrap">{new Date(d.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-[12px] text-gray-400">Page {page} of {totalPages} &middot; {total} total</span>
                    <div className="flex items-center gap-1">
                        <button onClick={() => page > 1 && setPage(page - 1)} disabled={page <= 1}
                            className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40">
                            Previous
                        </button>
                        <button onClick={() => page < totalPages && setPage(page + 1)} disabled={page >= totalPages}
                            className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
