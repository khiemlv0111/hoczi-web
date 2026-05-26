'use client'

import { LessonService } from "@/data/services/lesson.service";
import { useFileUpload } from "@/data/hooks/useFileUpload";
import { Mic, Square } from "lucide-react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

const EMPTY_ACTIVITY = {
    lesson_id: '', activity_type: 'sentence_order', instruction: '', explanation: '', media_url: '',
    sentence: '', correct_order: '', words: '',
    blank_sentence: '', answer: '', distractors: '',
    question: '', choices: '', correct_choice: '',
    left_items: '', right_items: '',
};

export function LessonDetailPage({ id }: { id: number }) {
    const router = useRouter();
    const [lesson, setLesson] = useState<Lesson | null>(null);
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);
    const [activitiesLoading, setActivitiesLoading] = useState(true);
    const [deletingLesson, setDeletingLesson] = useState(false);
    const [activityModalOpen, setActivityModalOpen] = useState(false);
    const [activityForm, setActivityForm] = useState(EMPTY_ACTIVITY);
    const [recording, setRecording] = useState(false);
    const [recordingSeconds, setRecordingSeconds] = useState(0);
    const [uploadingAudio, setUploadingAudio] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const { upload } = useFileUpload();

    async function startRecording() {
        chunksRef.current = [];
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mr = new MediaRecorder(stream);
        mediaRecorderRef.current = mr;
        mr.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
        mr.onstop = async () => {
            stream.getTracks().forEach((t) => t.stop());
            if (timerRef.current) clearInterval(timerRef.current);
            const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
            const file = new File([blob], `voice-${Date.now()}.webm`, { type: 'audio/webm' });
            setUploadingAudio(true);
            try {
                const { publicUrl } = await upload(file);
                setActivityForm((f) => ({ ...f, media_url: publicUrl }));
            } finally {
                setUploadingAudio(false);
                setRecording(false);
                setRecordingSeconds(0);
            }
        };
        mr.start();
        setRecording(true);
        setRecordingSeconds(0);
        timerRef.current = setInterval(() => setRecordingSeconds((s) => s + 1), 1000);
    }

    function stopRecording() {
        mediaRecorderRef.current?.stop();
    }

    function openActivityModal() {
        const defaultType = activities[0]?.activity_type ?? EMPTY_ACTIVITY.activity_type;
        setActivityForm({ ...EMPTY_ACTIVITY, lesson_id: String(id), activity_type: defaultType });
        setActivityModalOpen(true);
    }

    function handleActivitySubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        const payload = {
            ...activityForm,
            lesson_id: Number(activityForm.lesson_id),
            correct_order: activityForm.correct_order.split(',').map((s) => s.trim()).filter(Boolean),
            words: activityForm.words.split(',').map((s) => s.trim()).filter(Boolean),
            config: { ...activityForm },
        };
        LessonService.createLearningActivity(payload).then((res) => {
            const created = res?.data ?? res;
            if (created) setActivities((prev) => [...prev, created]);
        });
        setActivityModalOpen(false);
    }

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
                    <button
                        onClick={openActivityModal}
                        className="px-3 py-1.5 text-xs font-medium bg-violet-50 text-violet-700 border border-violet-200 rounded-lg hover:bg-violet-100 transition-colors"
                    >
                        + Create Activity
                    </button>
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

            {/* Create Activity modal */}
            {activityModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
                            <div>
                                <h2 className="text-[15px] font-semibold text-gray-900">Create Learning Activity</h2>
                                <p className="text-[11px] text-gray-400 mt-0.5">Lesson #{id}</p>
                            </div>
                            <button
                                onClick={() => setActivityModalOpen(false)}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <X size={16} className="text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleActivitySubmit} className="px-6 py-5 flex flex-col gap-4 overflow-y-auto">
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Activity Type</label>
                                <select
                                    value={activityForm.activity_type}
                                    onChange={(e) => setActivityForm({ ...activityForm, activity_type: e.target.value })}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white"
                                >
                                    <option value="sentence_order">Sentence Order</option>
                                    <option value="fill_blank">Fill in the Blank</option>
                                    <option value="multiple_choice">Multiple Choice</option>
                                    <option value="matching">Matching</option>
                                </select>
                            </div>

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
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Choices <span className="text-gray-400 font-normal">(comma-sep)</span></label>
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

                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className="block text-[12px] font-medium text-gray-700">Media URL</label>
                                    {uploadingAudio ? (
                                        <span className="text-[11px] text-violet-500 animate-pulse">Uploading…</span>
                                    ) : recording ? (
                                        <button
                                            type="button"
                                            onClick={stopRecording}
                                            className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors"
                                        >
                                            <Square size={10} className="fill-red-600" />
                                            Stop · {recordingSeconds}s
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={startRecording}
                                            className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-200 hover:bg-violet-100 transition-colors"
                                        >
                                            <Mic size={11} />
                                            Record Voice
                                        </button>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    value={activityForm.media_url}
                                    onChange={(e) => setActivityForm({ ...activityForm, media_url: e.target.value })}
                                    placeholder="https://… (optional)"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                                />
                            </div>

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
