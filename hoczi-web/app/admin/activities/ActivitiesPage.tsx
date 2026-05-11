'use client'

import { LessonService } from "@/data/services/lesson.service";
import { QuestionService } from "@/data/services/question.service";
import { Category, Grade, Topic } from "@/data/types";
import { X } from "lucide-react";
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

    const EMPTY_ACTIVITY = { lesson_id: '', activity_type: 'sentence_order', instruction: '', sentence: '', correct_order: '', words: '', explanation: '', media_url: '' };
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
        LessonService.createLearningActivity(payload).then((res) => {
            console.log("created activity", res);
            
        })
        setActivityModalOpen(false);
    }

    useEffect(() => {
        Promise.all([
            QuestionService.getCategoryList(),
            QuestionService.getGradeList(),
        ]).then(([cats, grs]) => {
            setCategories(cats);
            setGrades(grs);
        });

        LessonService.getSystemLessonsList()
            .then((res) => setLessons(res?.data ?? res ?? []))
            .finally(() => setLessonsLoading(false));
    }, []);

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

            await LessonService.createLesson(lessonPayload);
            setModalOpen(false);
            LessonService.getSystemLessonsList().then((res) => setLessons(res?.data ?? res ?? []));
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
                                    <td className="px-4 py-3 font-medium text-gray-900">{lesson.title ?? '—'}</td>
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

                            {/* Instruction */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Instruction</label>
                                <input
                                    type="text"
                                    value={activityForm.instruction}
                                    onChange={(e) => setActivityForm({ ...activityForm, instruction: e.target.value })}
                                    placeholder="e.g. Drag the words to form a correct sentence."
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />
                            </div>

                            {/* Sentence */}
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

                            {/* Correct order + Words side by side */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Correct Order <span className="text-gray-400 font-normal">(comma-separated)</span></label>
                                    <textarea
                                        value={activityForm.correct_order}
                                        onChange={(e) => setActivityForm({ ...activityForm, correct_order: e.target.value })}
                                        placeholder="The, cat, sat, on, the, mat."
                                        rows={3}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Words <span className="text-gray-400 font-normal">(comma-separated)</span></label>
                                    <textarea
                                        value={activityForm.words}
                                        onChange={(e) => setActivityForm({ ...activityForm, words: e.target.value })}
                                        placeholder="sat, mat., The, on, the, cat"
                                        rows={3}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Explanation */}
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

                            {/* Media URL */}
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
