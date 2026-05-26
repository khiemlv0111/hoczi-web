'use client'

import { LessonService } from "@/data/services/lesson.service";
import { QuestionService } from "@/data/services/question.service";
import { Category, Grade, Topic } from "@/data/types";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const EMPTY_FORM = { gradeId: '', categoryId: '', topicId: '', title: '', description: '',  content: '',};

export function ActivitiesPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const [grades, setGrades] = useState<Grade[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [lessons, setLessons] = useState<any[]>([]);
    const [lessonsLoading, setLessonsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const LIMIT = 20;
    const totalPages = Math.max(1, Math.ceil(total / LIMIT));

    const EMPTY_ACTIVITY = {
        lesson_id: '', activity_type: 'sentence_order', instruction: '', explanation: '', media_url: '',
        // sentence_order
        sentence: '', correct_order: '', words: '',
        // fill_blank
        blank_sentence: '', answer: '', distractors: '',
        // multiple_choice
        question: '', choices: '', correct_choice: '',
        // matching
        left_items: '', right_items: '',
    };
    const [activityModalOpen, setActivityModalOpen] = useState(false);
    const [activityForm, setActivityForm] = useState(EMPTY_ACTIVITY);

    function openActivityModal(lesson: any) {
        setActivityForm({ ...EMPTY_ACTIVITY, lesson_id: String(lesson.id) });
        setActivityModalOpen(true);
    }

    function handleActivitySubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        console.log('LearningActivity payload', {
            ...activityForm,
            lesson_id: Number(activityForm.lesson_id),
            correct_order: activityForm.correct_order.split(',').map((s) => s.trim()).filter(Boolean),
            words: activityForm.words.split(',').map((s) => s.trim()).filter(Boolean),
        });
        const payload = {
            ...activityForm,
            lesson_id: Number(activityForm.lesson_id),
            correct_order: activityForm.correct_order.split(',').map((s) => s.trim()).filter(Boolean),
            words: activityForm.words.split(',').map((s) => s.trim()).filter(Boolean),
            config: {
                ...activityForm,

            }
        }
        console.log('ACTIVITY Payload');
        
        LessonService.createLearningActivity(payload).then((res) => {
            console.log("created activity", res);
            
        })
        setActivityModalOpen(false);
    }

    function fetchLessons(p: number) {
        setLessonsLoading(true);
        LessonService.getSystemLessonsList(p, LIMIT)
            .then((res) => {
                setLessons(res?.data ?? res ?? []);
                setTotal(res?.total ?? 0);
            })
            .finally(() => setLessonsLoading(false));
    }

    useEffect(() => {
        Promise.all([
            QuestionService.getCategoryList(),
            QuestionService.getGradeList(),
        ]).then(([cats, grs]) => {
            setCategories(cats);
            setGrades(grs);
        });
    }, []);

    useEffect(() => {
        fetchLessons(page);
    }, [page]);

    function openModal() {
        setForm(EMPTY_FORM);
        setError('');
        setModalOpen(true);
    }

    function handleCategoryChange(categoryId: string) {
        setForm((f) => ({ ...f, categoryId, topicId: '' }));
        setTopics([]);
        if (categoryId) {
            QuestionService.getTopicList(Number(categoryId)).then(setTopics);
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!form.title.trim()) {
            setError('Title is required.');
            return;
        }
        setSubmitting(true);
        setError('');
        try {
            // TODO: replace with ActivityService.createLesson(form)
            console.log('Create lesson payload', {
                ...form,
                gradeId: form.gradeId ? Number(form.gradeId) : undefined,
                categoryId: form.categoryId ? Number(form.categoryId) : undefined,
                topicId: form.topicId ? Number(form.topicId) : undefined,
            });

            const lessonPayload = {
                ...form,
                gradeId: form.gradeId ? Number(form.gradeId) : undefined,
                categoryId: form.categoryId ? Number(form.categoryId) : undefined,
                topicId: form.topicId ? Number(form.topicId) : undefined,
                media_url: '',
                estimated_minutes: 15,
            }

            console.log('PAYLOAD', lessonPayload);
            

            await LessonService.createLesson(lessonPayload);
            setModalOpen(false);
            fetchLessons(page);
        } catch {
            setError('Failed to create lesson. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    const selectClass = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white";

    return (
        <div>
            {/* Page header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-lg font-semibold text-gray-900">Activity Lessons</h1>
                    <p className="text-xs text-gray-500 mt-0.5">Manage and create activity-based lessons.</p>
                </div>
                <button
                    onClick={openModal}
                    className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                    + Create Lesson
                </button>
            </div>

            {/* Lesson list */}
            {lessonsLoading ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                    Loading…
                </div>
            ) : lessons.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                    No lessons yet. Click <span className="font-medium text-gray-600">Create Lesson</span> to get started.
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-[11px] text-gray-400 uppercase tracking-wide">
                                <th className="text-left px-4 py-3 font-medium">Title</th>
                                <th className="text-left px-4 py-3 font-medium">Content</th>
                                <th className="text-left px-4 py-3 font-medium">Grade</th>
                                <th className="text-left px-4 py-3 font-medium">Category</th>
                                <th className="text-left px-4 py-3 font-medium">Topic</th>
                                <th className="px-4 py-3" />
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map((lesson: any) => (
                                <tr key={lesson.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 font-medium text-gray-900">
                                        <Link href={`/admin/lessons/${lesson.id}`}>{lesson.title ?? '—'}</Link>
                                        
                                    </td>
                                    <td className="px-4 py-3 text-gray-500 max-w-xs truncate">{lesson.content ?? '—'}</td>
                                    <td className="px-4 py-3 text-gray-500">{lesson.grade?.name ?? '—'}</td>
                                    <td className="px-4 py-3 text-gray-500">{lesson.category?.name ?? '—'}</td>
                                    <td className="px-4 py-3 text-gray-500">{lesson.topic?.name ?? '—'}</td>
                                    <td className="px-4 py-3 text-right">
                                        <button
                                            onClick={() => openActivityModal(lesson)}
                                            className="px-3 py-1.5 text-xs font-medium bg-violet-50 text-violet-700 border border-violet-200 rounded-lg hover:bg-violet-100 transition-colors whitespace-nowrap"
                                        >
                                            + Activity
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                        <span className="text-[12px] text-gray-400">
                            Page {page} of {totalPages} &middot; {total} total
                        </span>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page <= 1}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                Previous
                            </button>
                            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                                const pageNum = totalPages <= 7
                                    ? i + 1
                                    : page <= 4
                                        ? i + 1
                                        : page >= totalPages - 3
                                            ? totalPages - 6 + i
                                            : page - 3 + i;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setPage(pageNum)}
                                        className={`w-7 h-7 text-[12px] rounded-md border transition-colors ${page === pageNum
                                            ? 'bg-blue-500 border-blue-500 text-white'
                                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                            <button
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page >= totalPages}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
                        {/* Modal header */}
                        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                            <h2 className="text-[15px] font-semibold text-gray-900">Create Lesson</h2>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X size={16} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">
                            {/* Title */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    placeholder="Lesson title"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Content</label>
                                <textarea
                                    value={form.content}
                                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                                    placeholder="Brief description (optional)"
                                    rows={3}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                                />
                            </div>

                            {/* Grade + Category */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Grade</label>
                                    <select
                                        value={form.gradeId}
                                        onChange={(e) => setForm({ ...form, gradeId: e.target.value })}
                                        className={selectClass}
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
                                        onChange={(e) => handleCategoryChange(e.target.value)}
                                        className={selectClass}
                                    >
                                        <option value="">— optional —</option>
                                        {categories.map((c) => (
                                            <option key={c.id} value={c.id}>{c.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Topic */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Topic</label>
                                <select
                                    value={form.topicId}
                                    onChange={(e) => setForm({ ...form, topicId: e.target.value })}
                                    disabled={!form.categoryId}
                                    className={`${selectClass} disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    <option value="">— select a category first —</option>
                                    {topics.map((t) => (
                                        <option key={t.id} value={t.id}>{t.name}</option>
                                    ))}
                                </select>
                            </div>

                            {error && <p className="text-xs text-red-500">{error}</p>}

                            {/* Actions */}
                            <div className="flex justify-end gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60 transition-colors"
                                >
                                    {submitting ? 'Saving…' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Learning Activity modal */}
            {activityModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
                            <div>
                                <h2 className="text-[15px] font-semibold text-gray-900">Create Learning Activity</h2>
                                <p className="text-[11px] text-gray-400 mt-0.5">Lesson #{activityForm.lesson_id}</p>
                            </div>
                            <button
                                onClick={() => setActivityModalOpen(false)}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X size={16} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleActivitySubmit} className="px-6 py-5 flex flex-col gap-4 overflow-y-auto">
                            {/* Activity type */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Activity Type</label>
                                <select
                                    value={activityForm.activity_type}
                                    onChange={(e) => setActivityForm({ ...activityForm, activity_type: e.target.value })}
                                    className={selectClass}
                                >
                                    <option value="sentence_order">Sentence Order</option>
                                    <option value="fill_blank">Fill in the Blank</option>
                                    <option value="multiple_choice">Multiple Choice</option>
                                    <option value="matching">Matching</option>
                                </select>
                            </div>

                            {/* Instruction — common */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Instruction</label>
                                <input
                                    type="text"
                                    value={activityForm.instruction}
                                    onChange={(e) => setActivityForm({ ...activityForm, instruction: e.target.value })}
                                    placeholder={
                                        activityForm.activity_type === 'sentence_order'  ? 'e.g. Drag the words to form a correct sentence.' :
                                        activityForm.activity_type === 'fill_blank'       ? 'e.g. Fill in the missing word.' :
                                        activityForm.activity_type === 'multiple_choice'  ? 'e.g. Choose the correct answer.' :
                                        'e.g. Match each word with its meaning.'
                                    }
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />
                            </div>

                            {/* ── Sentence Order ── */}
                            {activityForm.activity_type === 'sentence_order' && (<>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Sentence</label>
                                    <input
                                        type="text"
                                        value={activityForm.sentence}
                                        onChange={(e) => setActivityForm({ ...activityForm, sentence: e.target.value })}
                                        placeholder="e.g. The cat sat on the mat."
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Correct Order <span className="text-gray-400 font-normal">(comma-sep)</span></label>
                                        <textarea
                                            value={activityForm.correct_order}
                                            onChange={(e) => setActivityForm({ ...activityForm, correct_order: e.target.value })}
                                            placeholder="The, cat, sat, on, the, mat."
                                            rows={3}
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Words (shuffled) <span className="text-gray-400 font-normal">(comma-sep)</span></label>
                                        <textarea
                                            value={activityForm.words}
                                            onChange={(e) => setActivityForm({ ...activityForm, words: e.target.value })}
                                            placeholder="sat, mat., The, on, the, cat"
                                            rows={3}
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                        />
                                    </div>
                                </div>
                            </>)}

                            {/* ── Fill the Blank ── */}
                            {activityForm.activity_type === 'fill_blank' && (<>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Sentence <span className="text-gray-400 font-normal">(use ___ for blank)</span></label>
                                    <input
                                        type="text"
                                        value={activityForm.blank_sentence}
                                        onChange={(e) => setActivityForm({ ...activityForm, blank_sentence: e.target.value })}
                                        placeholder="e.g. The cat ___ on the mat."
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Correct Answer</label>
                                        <input
                                            type="text"
                                            value={activityForm.answer}
                                            onChange={(e) => setActivityForm({ ...activityForm, answer: e.target.value })}
                                            placeholder="e.g. sat"
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Distractors <span className="text-gray-400 font-normal">(comma-sep)</span></label>
                                        <input
                                            type="text"
                                            value={activityForm.distractors}
                                            onChange={(e) => setActivityForm({ ...activityForm, distractors: e.target.value })}
                                            placeholder="e.g. ran, slept, jumped"
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                        />
                                    </div>
                                </div>
                            </>)}

                            {/* ── Multiple Choice ── */}
                            {activityForm.activity_type === 'multiple_choice' && (<>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Question</label>
                                    <input
                                        type="text"
                                        value={activityForm.question}
                                        onChange={(e) => setActivityForm({ ...activityForm, question: e.target.value })}
                                        placeholder="e.g. What is the capital of France?"
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Choices <span className="text-gray-400 font-normal">(comma-sep, e.g. Paris, London, Berlin, Rome)</span></label>
                                    <textarea
                                        value={activityForm.choices}
                                        onChange={(e) => setActivityForm({ ...activityForm, choices: e.target.value })}
                                        placeholder="Paris, London, Berlin, Rome"
                                        rows={2}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Correct Choice</label>
                                    <input
                                        type="text"
                                        value={activityForm.correct_choice}
                                        onChange={(e) => setActivityForm({ ...activityForm, correct_choice: e.target.value })}
                                        placeholder="e.g. Paris"
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                    />
                                </div>
                            </>)}

                            {/* ── Matching ── */}
                            {activityForm.activity_type === 'matching' && (<>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Left Items <span className="text-gray-400 font-normal">(comma-sep)</span></label>
                                        <textarea
                                            value={activityForm.left_items}
                                            onChange={(e) => setActivityForm({ ...activityForm, left_items: e.target.value })}
                                            placeholder="cat, dog, bird"
                                            rows={4}
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Right Items <span className="text-gray-400 font-normal">(matching order)</span></label>
                                        <textarea
                                            value={activityForm.right_items}
                                            onChange={(e) => setActivityForm({ ...activityForm, right_items: e.target.value })}
                                            placeholder="mèo, chó, chim"
                                            rows={4}
                                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                        />
                                    </div>
                                </div>
                            </>)}

                            {/* Explanation — common */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Explanation</label>
                                <textarea
                                    value={activityForm.explanation}
                                    onChange={(e) => setActivityForm({ ...activityForm, explanation: e.target.value })}
                                    placeholder="Explain the correct answer (optional)"
                                    rows={2}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                />
                            </div>

                            {/* Media URL — common */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Media URL</label>
                                <input
                                    type="text"
                                    value={activityForm.media_url}
                                    onChange={(e) => setActivityForm({ ...activityForm, media_url: e.target.value })}
                                    placeholder="https://… (optional)"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-2 pt-1 flex-shrink-0">
                                <button
                                    type="button"
                                    onClick={() => setActivityModalOpen(false)}
                                    className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors"
                                >
                                    Save Activity
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
