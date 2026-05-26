'use client'

import { CourseService, CourseItem } from "@/data/services/course.service";
import { useState } from "react";
import slugify from "slugify";

const SUBJECTS = [
    { code: 'math', label: 'Mathematics' },
    { code: 'mathematic', label: 'Mathematic' },
    { code: 'science', label: 'Science' },
    { code: 'chemistry', label: 'Chemistry' },
    { code: 'history', label: 'History' },
    { code: 'literature', label: 'Literature' },
    { code: 'computer_science', label: 'Computer Science' },
    { code: 'it', label: 'IT' },
    { code: 'english', label: 'English' },
    { code: 'chinese', label: 'Chinese' },
];

const EMPTY_FORM = {
    title: '',
    description: '',
    course_url: '',
    cover_image_url: '',
    status: 'draft',
    is_public: true,
    subjectCode: '',
    slug: '',
    category_id: 0,
    topic_id: 0,
};

interface Props {
    onSuccess?: (course: CourseItem) => void;
    onCancel?: () => void;
}

export function CreateCourseForm({ onSuccess, onCancel }: Props) {
    const [form, setForm] = useState(EMPTY_FORM);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const set = (field: string, value: string | boolean | number) =>
        setForm(prev => ({ ...prev, [field]: value }));

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.title.trim()) { setError('Title is required.'); return; }
        if (!form.course_url.trim()) { setError('Course URL is required.'); return; }
        if (!form.subjectCode) { setError('Subject is required.'); return; }

        setSubmitting(true);
        setError('');
        try {
            const res = await CourseService.createCourse(form as unknown as CourseItem);
            onSuccess?.(res?.data ?? res);
        } catch {
            setError('Failed to create course. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
            <div>
                <label className="block text-[12px] font-medium text-gray-700 mb-1">
                    Title <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={form.title}
                    onChange={e => {
                        set('title', e.target.value);
                        set('slug', slugify(e.target.value, { lower: true }));
                    }}
                    placeholder="Course title"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div>
                <label className="block text-[12px] font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    value={form.description}
                    onChange={e => set('description', e.target.value)}
                    placeholder="Short description (optional)"
                    rows={2}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                />
            </div>

            <div>
                <label className="block text-[12px] font-medium text-gray-700 mb-1">
                    Course URL <span className="text-red-500">*</span>
                </label>
                <input
                    type="url"
                    value={form.course_url}
                    onChange={e => set('course_url', e.target.value)}
                    placeholder="https://..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div>
                <label className="block text-[12px] font-medium text-gray-700 mb-1">Cover Image URL</label>
                <input
                    type="url"
                    value={form.cover_image_url}
                    onChange={e => set('cover_image_url', e.target.value)}
                    placeholder="https://... (optional)"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                        value={form.subjectCode}
                        onChange={e => set('subjectCode', e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">— select —</option>
                        {SUBJECTS.map(s => (
                            <option key={s.code} value={s.code}>{s.label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Status</label>
                    <select
                        value={form.status}
                        onChange={e => set('status', e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                    type="checkbox"
                    checked={form.is_public}
                    onChange={e => set('is_public', e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 accent-blue-500"
                />
                <span className="text-sm text-gray-700">Public</span>
            </label>

            {error && <p className="text-[12px] text-red-500">{error}</p>}

            <div className="flex justify-end gap-2 mt-1">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={submitting}
                    className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60"
                >
                    {submitting ? 'Saving...' : 'Save'}
                </button>
            </div>
        </form>
    );
}
