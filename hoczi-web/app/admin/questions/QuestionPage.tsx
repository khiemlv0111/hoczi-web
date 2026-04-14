'use client'

import { QuestionService } from "@/data/services/question.service";
import { Question } from "@/data/types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"

interface Category {
    id: number,
    name: string,

}

interface Topic {
    id: number,
    name: string,

}

interface Grade {
    id: number,
    name: string,

}

const EMPTY_FORM = { content: '', explanation: '', code: '', status: 'active', type: 'mcq', difficulty: 'easy', gradeId: '', categoryId: '', topicId: '' };

export function QuestionPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const firstInputRef = useRef<HTMLInputElement>(null);

    const [categories, setCategories] = useState<Category[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [grades, setGrades] = useState<Grade[]>([]);

    const [answerModalOpen, setAnswerModalOpen] = useState(false);
    const [answerQuestionId, setAnswerQuestionId] = useState<string | number | null>(null);
    const [answerContent, setAnswerContent] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [answerSubmitting, setAnswerSubmitting] = useState(false);

    const [categoryId, setCategoryId] = useState<number | undefined>(undefined);



    function fetchQuestions() {
        setLoading(true);
        QuestionService.getAllQuestions()
            .then((res) => {
                setQuestions(Array.isArray(res) ? res : res?.data ?? []);
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }
    async function fetchData() {


        const [categories, topics, grades] = await Promise.all([
            QuestionService.getCategoryList(),
            QuestionService.getTopicList(),
            QuestionService.getGradeList(),
        ]);

        setCategories(categories);
        setTopics(topics);
        setGrades(grades);

    }

    useEffect(() => {
        fetchQuestions();
        fetchData();
    }, []);

    function openModal() {
        setForm(EMPTY_FORM);
        setError('');
        setModalOpen(true);
        setTimeout(() => firstInputRef.current?.focus(), 50);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function openAnswerModal(id: string | number) {
        setAnswerQuestionId(id);
        setAnswerContent('');
        setIsCorrect(false);
        setAnswerModalOpen(true);
    }

    function closeAnswerModal() {
        setAnswerModalOpen(false);
        setAnswerQuestionId(null);
    }

    async function handleAnswerSubmit() {
        if (!answerContent.trim() || answerQuestionId === null) return;
        setAnswerSubmitting(true);
        try {
            await QuestionService.createAnswer({
                questionId: Number(answerQuestionId),
                content: answerContent.trim(),
                isCorrect: isCorrect,
            } as any);
            closeAnswerModal();
            fetchQuestions();
        } catch {
        } finally {
            setAnswerSubmitting(false);
        }
    }

    async function handleDelete(id: string | number) {
        if (!confirm('Delete this question?')) return;
        try {
            await QuestionService.deleteQuestion(Number(id));
            fetchQuestions();
        } catch {
            alert('Failed to delete question.');
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.content.trim()) {
            setError('Content is required.');
            return;
        }
        setSubmitting(true);
        setError('');
        try {
            await QuestionService.createQuestion({
                ...form,
                gradeId: form.gradeId ? Number(form.gradeId) : undefined,
                categoryId: form.categoryId ? Number(form.categoryId) : undefined,
                topicId: form.topicId ? Number(form.topicId) : undefined,
            });
            closeModal();
            fetchQuestions();
        } catch {
            setError('Failed to create question. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
            <div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[13px] font-medium text-gray-900">Question List</span>
                            <div className="">
                                <button onClick={openModal} className="bg-blue-500 cursor-pointer px-3 py-1 text-white rounded">Add question</button>
                            </div>
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
                                            <th className="pb-2 pr-4 font-medium">Content</th>
                                            <th className="pb-2 pr-4 font-medium">Status</th>
                                            <th className="pb-2 pr-4 font-medium">Answer</th>
                                            <th className="pb-2 pr-4 font-medium">Created At</th>
                                            <th className="pb-2 font-medium text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {questions.length === 0 ? (
                                            <tr>
                                                <td colSpan={6} className="py-6 text-center text-gray-400 text-[12px]">
                                                    No questions found.
                                                </td>
                                            </tr>
                                        ) : (
                                            questions.map((q, idx) => (
                                                <tr key={q.id ?? idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="py-2 pr-4 text-gray-400">{idx + 1}</td>
                                                    <td className="py-2 pr-4 font-medium text-gray-900 max-w-[200px] truncate">
                                                        <Link href={`/admin/questions/${q.id}`}>
                                                            {q.content ?? '—'}
                                                        </Link>

                                                    </td>
                                                    <td className="py-2 pr-4 text-gray-500 max-w-[260px] truncate">
                                                        {q.explanation ?? '—'}
                                                    </td>
                                                    <td className="py-2 pr-4">
                                                        <span className={`text-[11px] px-2 py-0.5 rounded-full ${q.status === 'active'
                                                            ? 'bg-green-50 text-green-700'
                                                            : 'bg-gray-100 text-gray-500'
                                                            }`}>
                                                            {q.status ?? 'N/A'}
                                                        </span>
                                                    </td>
                                                    <td className="py-2 pr-4 text-gray-500 max-w-[260px] truncate">
                                                        {JSON.stringify(q.answers?.length)}
                                                    </td>
                                                    <td className="py-2 pr-4 text-gray-400 text-[12px]">
                                                        {q.createdAt
                                                            ? new Date(q.createdAt).toLocaleDateString()
                                                            : '—'}
                                                    </td>
                                                    <td className="py-2 text-right">
                                                        <div className="flex items-center justify-end gap-2">
                                                            <button
                                                                onClick={() => openAnswerModal(q.id)}
                                                                className="text-[11px] px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                                            >
                                                                + Add Answer
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(q.id)}
                                                                className="text-[11px] px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={closeModal}>
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-semibold text-gray-900">Add Question</h2>
                            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-lg leading-none">&times;</button>
                        </div>

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
                                <button type="button" onClick={closeModal} className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                                    Cancel
                                </button>
                                <button type="submit" disabled={submitting} className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                                    {submitting ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {answerModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={closeAnswerModal}>
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[15px] font-semibold text-gray-900">Create Answer</h2>
                            <button onClick={closeAnswerModal} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Answer Content</label>
                            <textarea
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                                rows={3}
                                placeholder="Enter answer content..."
                                value={answerContent}
                                onChange={(e) => setAnswerContent(e.target.value)}
                            />
                        </div>

                        <div className="mb-6 flex items-center gap-2">
                            <input
                                id="answer_is_correct"
                                type="checkbox"
                                checked={isCorrect}
                                onChange={(e) => setIsCorrect(e.target.checked)}
                                className="w-4 h-4 accent-blue-600"
                            />
                            <label htmlFor="answer_is_correct" className="text-[13px] text-gray-700">Mark as correct answer</label>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={closeAnswerModal}
                                className="px-4 py-1.5 text-[13px] rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAnswerSubmit}
                                disabled={answerSubmitting || !answerContent.trim()}
                                className="px-4 py-1.5 text-[13px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
                            >
                                {answerSubmitting ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
