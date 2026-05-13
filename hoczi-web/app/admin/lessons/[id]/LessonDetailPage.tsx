'use client'

import { LessonService } from "@/data/services/lesson.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Lesson = {
    id: number;
    title: string;
    content?: string;
    media_url?: string;
    estimated_minutes?: number;
    grade?: { name: string };
    category?: { name: string };
    topic?: { name: string };
    created_at?: string;
};

type Activity = {
    id: string;
    activity_type: string;
    instruction: string;
    order_index: number;
    points: number;
    config: Record<string, any>;
    created_at?: string;
};

const TYPE_LABELS: Record<string, { label: string; emoji: string; color: string }> = {
    sentence_order:  { label: 'Sentence Order',  emoji: '📝', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    fill_blank:      { label: 'Fill the Blank',  emoji: '✏️', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    multiple_choice: { label: 'Multiple Choice', emoji: '🔤', color: 'bg-violet-50 text-violet-700 border-violet-200' },
    matching:        { label: 'Matching',        emoji: '🔗', color: 'bg-teal-50 text-teal-700 border-teal-200' },
};

function ActivityCard({ activity, index, onDelete }: { activity: Activity; index: number; onDelete: (id: string) => void }) {
    const [expanded, setExpanded] = useState(false);
    const [deleting, setDeleting] = useState(false);

    async function handleDelete() {
        if (!confirm(`Delete this ${activity.activity_type} activity?`)) return;
        setDeleting(true);
        try {
            await LessonService.deleteLearningActivity(Number(activity.id));
            onDelete(activity.id);
        } finally {
            setDeleting(false);
        }
    }
    const meta = TYPE_LABELS[activity.activity_type] ?? { label: activity.activity_type, emoji: '📄', color: 'bg-gray-50 text-gray-700 border-gray-200' };
    const cfg = activity.config ?? {};

    const previewFields: { label: string; value: string }[] = [];
    if (cfg.sentence)       previewFields.push({ label: 'Sentence',      value: cfg.sentence });
    if (cfg.blank_sentence) previewFields.push({ label: 'Blank',         value: cfg.blank_sentence });
    if (cfg.question)       previewFields.push({ label: 'Question',      value: cfg.question });
    if (cfg.left_items)     previewFields.push({ label: 'Left',          value: cfg.left_items });
    if (cfg.right_items)    previewFields.push({ label: 'Right',         value: cfg.right_items });
    if (cfg.answer)         previewFields.push({ label: 'Answer',        value: cfg.answer });
    if (cfg.correct_choice) previewFields.push({ label: 'Correct',       value: cfg.correct_choice });
    if (cfg.correct_order)  previewFields.push({ label: 'Order',         value: cfg.correct_order });
    if (cfg.words)          previewFields.push({ label: 'Words',         value: cfg.words });
    if (cfg.choices)        previewFields.push({ label: 'Choices',       value: cfg.choices });
    if (cfg.distractors)    previewFields.push({ label: 'Distractors',   value: cfg.distractors });
    if (cfg.explanation)    previewFields.push({ label: 'Explanation',   value: cfg.explanation });

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                </span>
                <span className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${meta.color}`}>
                    {meta.emoji} {meta.label}
                </span>
                <span className="flex-1 text-sm text-gray-700 truncate">{activity.instruction}</span>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-[11px] text-gray-400">{activity.points} pt{activity.points !== 1 ? 's' : ''}</span>
                    <button
                        onClick={() => setExpanded((v) => !v)}
                        className="text-[11px] text-blue-500 hover:text-blue-700 font-medium transition-colors"
                    >
                        {expanded ? 'Hide' : 'Details'}
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="text-[11px] text-red-400 hover:text-red-600 font-medium transition-colors disabled:opacity-50"
                    >
                        {deleting ? 'Deleting…' : 'Delete'}
                    </button>
                </div>
            </div>

            {expanded && previewFields.length > 0 && (
                <div className="border-t border-gray-100 px-4 py-3 grid grid-cols-2 gap-x-6 gap-y-2 bg-gray-50">
                    {previewFields.map(({ label, value }) => (
                        <div key={label}>
                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                            <p className="text-xs text-gray-700 break-words">{value}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export function LessonDetailPage({ id }: { id: number }) {
    const router = useRouter();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);
    const [activitiesLoading, setActivitiesLoading] = useState(true);
    const [deletingLesson, setDeletingLesson] = useState(false);

    async function handleDeleteLesson() {
        if (!confirm(`Delete lesson "${lesson?.title}"? This cannot be undone.`)) return;
        setDeletingLesson(true);
        try {
            await LessonService.deleteLesson(id);
            router.push('/admin/activities');
        } finally {
            setDeletingLesson(false);
        }
    }

    function handleDeleteActivity(activityId: string) {
        setActivities((prev) => prev.filter((a) => a.id !== activityId));
    }

    useEffect(() => {
        LessonService.getLessonDetail(id)
            .then((res) => setLesson(res?.data ?? res))
            .finally(() => setLoading(false));

        LessonService.getActivitiesByLessonId(id)
            .then((res) => setActivities(res?.data ?? res ?? []))
            .finally(() => setActivitiesLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="space-y-4 animate-pulse">
                <div className="h-28 bg-white border border-gray-200 rounded-xl" />
                <div className="h-10 bg-white border border-gray-200 rounded-xl" />
                <div className="h-10 bg-white border border-gray-200 rounded-xl" />
            </div>
        );
    }

    if (!lesson) {
        return (
            <div className="flex items-center justify-center min-h-[200px] text-gray-400 text-sm">
                Lesson not found.
            </div>
        );
    }

    const typeCounts = activities.reduce<Record<string, number>>((acc, a) => {
        acc[a.activity_type] = (acc[a.activity_type] ?? 0) + 1;
        return acc;
    }, {});

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* Lesson header card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">{lesson.title}</h1>
                        {lesson.content && (
                            <p className="text-sm text-gray-500 mt-1">{lesson.content}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {lesson.estimated_minutes && (
                            <span className="text-[11px] text-gray-400 border border-gray-200 rounded-full px-2.5 py-1">
                                ⏱ {lesson.estimated_minutes} min
                            </span>
                        )}
                        <button
                            onClick={handleDeleteLesson}
                            disabled={deletingLesson}
                            className="text-[11px] font-medium px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 disabled:opacity-50 transition-colors"
                        >
                            {deletingLesson ? 'Deleting…' : 'Delete Lesson'}
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {lesson.grade && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 font-medium">
                            Grade: {lesson.grade.name}
                        </span>
                    )}
                    {lesson.category && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                            {lesson.category.name}
                        </span>
                    )}
                    {lesson.topic && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200 font-medium">
                            {lesson.topic.name}
                        </span>
                    )}
                </div>
            </div>

            {/* Activity type summary */}
            {Object.keys(typeCounts).length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {Object.entries(typeCounts).map(([type, count]) => {
                        const meta = TYPE_LABELS[type] ?? { label: type, emoji: '📄', color: 'bg-gray-50 text-gray-700 border-gray-200' };
                        return (
                            <div key={type} className={`rounded-xl border px-4 py-3 ${meta.color}`}>
                                <p className="text-lg">{meta.emoji}</p>
                                <p className="text-xs font-semibold mt-1">{meta.label}</p>
                                <p className="text-xl font-bold">{count}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Activities list */}
            <div>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[13px] font-semibold text-gray-700">
                        Activities
                        {!activitiesLoading && (
                            <span className="ml-2 text-gray-400 font-normal">({activities.length})</span>
                        )}
                    </h2>
                </div>

                {activitiesLoading ? (
                    <div className="space-y-2 animate-pulse">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-12 bg-white border border-gray-200 rounded-xl" />
                        ))}
                    </div>
                ) : activities.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                        No activities yet for this lesson.
                    </div>
                ) : (
                    <div className="space-y-2">
                        {activities
                            .sort((a, b) => a.order_index - b.order_index)
                            .map((activity, i) => (
                                <ActivityCard key={activity.id} activity={activity} index={i} onDelete={handleDeleteActivity} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}
