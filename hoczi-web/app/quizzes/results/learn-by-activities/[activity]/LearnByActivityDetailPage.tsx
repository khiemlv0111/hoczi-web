'use client'

import { LessonService } from "@/data/services/lesson.service";
import Link from "next/link";
import { useEffect, useState } from "react";

type Topic = {
    id: number;
    name: string;
    category_id: number;
    description?: string;
};

type Lesson = {
    id: number;
    title: string;
    lesson_type: string;
    content: string;
    media_url?: string;
    thumbnail_url?: string;
    created_at: string;
    topic?: Topic;
};

const CATEGORIES = [
    { id: 13, slug: 'chinese',  name: 'Tiếng Trung',        emoji: '🇨🇳', gradient: 'from-red-500 to-orange-500' },
    { id: 3,  slug: 'english',  name: 'English',             emoji: '🇬🇧', gradient: 'from-blue-500 to-indigo-600' },
    { id: 14, slug: 'math',     name: 'Math',                emoji: '🔢', gradient: 'from-green-500 to-teal-600' },
    { id: 16, slug: 'science',  name: 'Science',             emoji: '🔬', gradient: 'from-purple-500 to-violet-600' },
    { id: 18, slug: 'ESL',      name: 'ESL',                 emoji: '📚', gradient: 'from-amber-500 to-yellow-500' },
];

const TYPE_LABELS: Record<string, string> = {
    sentence_order: 'Sentence Order',
    fill_blank:     'Fill in Blank',
    multiple_choice:'Multiple Choice',
    matching:       'Matching',
    video:          'Video',
    reading:        'Reading',
};

export function LearnByActivityDetailPage({ activity }: { activity: string }) {
    const category = CATEGORIES.find((c) => c.slug === activity);

    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!category) { setLoading(false); return; }
        LessonService.getLessonsByCategoryId(category.id)
            .then((res) => setLessons(res?.data ?? res ?? []))
            .finally(() => setLoading(false));
    }, []);

    if (!category) {
        return (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">
                Category not found.
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-sm`}>
                    {category.emoji}
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-900">{category.name}</h1>
                    <p className="text-xs text-gray-500 mt-0.5">
                        {loading ? 'Loading…' : `${lessons.length} lesson${lessons.length !== 1 ? 's' : ''} available`}
                    </p>
                </div>
            </div>

            {/* States */}
            {loading ? (
                <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 animate-pulse">
                            <div className="h-4 bg-gray-100 rounded w-1/3 mb-2" />
                            <div className="h-3 bg-gray-100 rounded w-2/3" />
                        </div>
                    ))}
                </div>
            ) : lessons.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
                    <p className="text-3xl mb-2">📭</p>
                    <p className="text-sm text-gray-500">No lessons found for this category yet.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {lessons.map((lesson, index) => (
                        <Link
                            key={lesson.id}
                            href={`/quizzes/results/learn-by-activities/lessons/${lesson.id}`}
                            className="group flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-blue-300 hover:shadow-sm transition-all duration-150"
                        >
                            {/* Index */}
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 text-xs font-bold flex items-center justify-center transition-colors">
                                {index + 1}
                            </span>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                                    {lesson.title}
                                </p>
                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                    {lesson.topic && (
                                        <span className="text-[11px] text-gray-400">{lesson.topic.name}</span>
                                    )}
                                    {lesson.lesson_type && (
                                        <span className="text-[11px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-medium">
                                            {TYPE_LABELS[lesson.lesson_type] ?? lesson.lesson_type}
                                        </span>
                                    )}
                                </div>
                                {lesson.content && (
                                    <p className="text-xs text-gray-400 mt-1 truncate">{lesson.content}</p>
                                )}
                            </div>

                            {/* Arrow */}
                            <span className="flex-shrink-0 text-gray-300 group-hover:text-blue-400 text-lg transition-colors">
                                →
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
