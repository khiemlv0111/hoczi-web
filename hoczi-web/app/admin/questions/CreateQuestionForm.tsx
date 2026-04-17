'use client'

import { QuestionService } from "@/data/services/question.service";
import { Category, Grade, Question, Topic } from "@/data/types";
import { useEffect, useRef, useState } from "react";


const EMPTY_FORM = { content: '', explanation: '', code: '', status: 'active', type: 'mcq', difficulty: 'easy', gradeId: '', categoryId: '', topicId: '' };

export function CreateQuestionForm({ onSuccess }: { onSuccess?: (id: number) => void }) {
  
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [grades, setGrades] = useState<Grade[]>([]);

    const [form, setForm] = useState(EMPTY_FORM);
    const firstInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        Promise.all([
            QuestionService.getCategoryList(),
            QuestionService.getTopicList(),
            QuestionService.getGradeList(),
        ]).then(([cats, tops, grs]) => {
            setCategories(cats);
            setTopics(tops);
            setGrades(grs);
        });
    }, []);


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.content.trim()) {
            setError('Content is required.');
            return;
        }
        setSubmitting(true);
        setError('');
        try {
            console.log('FORM', form);
            
            const res = await QuestionService.createQuestion({
                ...form,
                gradeId: form.gradeId ? Number(form.gradeId) : undefined,
                categoryId: form.categoryId ? Number(form.categoryId) : undefined,
                topicId: form.topicId ? Number(form.topicId) : undefined,
            });
            const id = res?.data?.id ?? res?.id;
            onSuccess?.(id);
        } catch {
            setError('Failed to create question. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }




    return (
        <>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Content <span className="text-red-500">*</span></label>
                    <input
                        ref={firstInputRef}
                        type="text"
                        value={form.content}
                        onChange={(e) => setForm({ ...form, content: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Question content"
                    />
                </div>

                <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Explanation</label>
                    <textarea
                        value={form.explanation}
                        onChange={(e) => setForm({ ...form, explanation: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        rows={3}
                        placeholder="Explanation (optional)"
                    />
                </div>

                <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Code</label>
                    <textarea
                        value={form.code}
                        onChange={(e) => setForm({ ...form, code: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none font-mono"
                        rows={3}
                        placeholder="Code snippet (optional)"
                    />
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Status</label>
                        <select
                            value={form.status}
                            onChange={(e) => setForm({ ...form, status: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Type</label>
                        <select
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="mcq">MCQ</option>
                            <option value="true_false">True / False</option>
                            <option value="code">Code</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Difficulty</label>
                        <select
                            value={form.difficulty}
                            onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Grade</label>
                        <select
                            value={form.gradeId}
                            onChange={(e) => setForm({ ...form, gradeId: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">— optional —</option>
                            {grades.map((g) => (
                                <option key={g.id} value={g.id}>{g.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Category</label>
                        <select
                            value={form.categoryId}
                            onChange={(e) => {
                                setForm({ ...form, categoryId: e.target.value });
                                QuestionService.getTopicList(Number(e.target.value)).then((res) => {
                                    setTopics(res);

                                })
                            }}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">— optional —</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Topic</label>
                        <select
                            value={form.topicId}
                            onChange={(e) => setForm({ ...form, topicId: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">— optional —</option>
                            {topics.map((t) => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {error && <p className="text-[12px] text-red-500">{error}</p>}

                <div className="flex justify-end gap-2 mt-2">
                    <button type="button" onClick={() => { }} className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                        Cancel
                    </button>
                    <button type="submit" disabled={submitting} className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                        {submitting ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>

        </>
    )
}