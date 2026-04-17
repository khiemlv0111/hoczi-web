'use client'

import { FullScreenLoading } from "@/app/components/FullScreenLoading";
import { LessonService } from "@/data/services/lesson.service";
import { QuestionService } from "@/data/services/question.service";
import { Grade, Topic } from "@/data/types.d";
import { useEffect, useState } from "react";
import {
    Clock, BookOpen, Tag, GraduationCap, Calendar, Users,
    CheckCircle2, XCircle, Circle, Plus, X, Shuffle, ListChecks, Loader2, Eye,
} from "lucide-react";

interface QuizSession {
    id: number;
    student_id?: number;
    student?: { id: number; name?: string; email?: string };
    status?: string;
    score?: number;
    started_at?: string;
    finished_at?: string;
    created_at?: string;
}

interface QuizDetail {
    title: string;
    category_id?: number;
    duration_minutes?: number;
    description?: string;
    quiz_type?: string;
    status?: string;
    created_at: string;
    grade?: Grade;
    topic?: Topic;
    quiz_sessions: QuizSession[];
    category?: any;
    difficulty?: string;
    total_questions?: number;
}

function StatusBadge({ status }: { status?: string }) {
    if (!status) return null;
    const map: Record<string, string> = {
        completed: 'bg-green-50 text-green-600',
        in_progress: 'bg-blue-50 text-blue-600',
        pending: 'bg-gray-100 text-gray-500',
        failed: 'bg-red-50 text-red-500',
    };
    const cls = map[status] ?? 'bg-gray-100 text-gray-500';
    return (
        <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium capitalize ${cls}`}>
            {status.replace('_', ' ')}
        </span>
    );
}

function ScoreIcon({ score }: { score?: number }) {
    if (score == null) return <Circle size={14} className="text-gray-300" />;
    if (score >= 70) return <CheckCircle2 size={14} className="text-green-500" />;
    return <XCircle size={14} className="text-red-400" />;
}

type Mode = 'manual' | 'random';

function CreateAssignmentModal({ quizId, onClose, onCreated }: {
    quizId: number;
    onClose: () => void;
    onCreated: () => void;
}) {
    const [mode, setMode] = useState<Mode>('manual');
    const [questions, setQuestions] = useState<any[]>([]);
    const [loadingQ, setLoadingQ] = useState(false);
    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
    const [randomCount, setRandomCount] = useState(5);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoadingQ(true);
        QuestionService.getAllTeacherQuestions({ page: 1, limit: 100 })
            .then(res => setQuestions(res?.data ?? res ?? []))
            .catch(() => setError('Failed to load questions'))
            .finally(() => setLoadingQ(false));
    }, []);

    const toggle = (id: number) => {
        setSelectedIds(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const handleRandomGenerate = () => {
        const count = Math.min(randomCount, questions.length);
        const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, count);
        setSelectedIds(new Set(shuffled.map((q: any) => q.id)));
    };

    const finalIds = Array.from(selectedIds);

    const submit = async () => {
        if (finalIds.length === 0) { setError('Select at least one question'); return; }
        setSaving(true); setError('');
        try {
            await LessonService.addQuestionsToQuiz(quizId, finalIds);
            onCreated();
            onClose();
        } catch {
            setError('Failed to create assignment');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                    <h3 className="text-[15px] font-semibold text-gray-900">Create Assignment</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
                        <X size={15} className="text-gray-400" />
                    </button>
                </div>

                {/* Mode tabs */}
                <div className="flex gap-1 px-6 pt-4">
                    <button
                        onClick={() => setMode('manual')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${mode === 'manual' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        <ListChecks size={13} /> Pick manually
                    </button>
                    <button
                        onClick={() => setMode('random')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${mode === 'random' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        <Shuffle size={13} /> Random
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
                    {mode === 'random' && (
                        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                            <label className="text-[13px] text-gray-700 flex-shrink-0">Number of questions</label>
                            <input
                                type="number"
                                min={1}
                                max={questions.length || 100}
                                value={randomCount}
                                onChange={e => setRandomCount(Math.max(1, Number(e.target.value)))}
                                className="w-20 border border-gray-200 rounded-lg px-3 py-1.5 text-[13px] text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleRandomGenerate}
                                disabled={loadingQ || questions.length === 0}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500 disabled:opacity-40"
                            >
                                <Shuffle size={12} /> Generate
                            </button>
                        </div>
                    )}

                    {selectedIds.size > 0 && (
                        <div className="flex items-center justify-between">
                            <span className="text-[12px] text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full font-medium">
                                {selectedIds.size} selected
                            </span>
                            <button onClick={() => setSelectedIds(new Set())} className="text-[11px] text-gray-400 hover:text-gray-600">
                                Clear all
                            </button>
                        </div>
                    )}

                    {loadingQ ? (
                        <div className="space-y-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                            ))}
                        </div>
                    ) : questions.length === 0 ? (
                        <p className="text-[12px] text-gray-400 text-center py-8">No questions in your bank yet</p>
                    ) : (
                        <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                            {questions.map((q: any) => {
                                const checked = selectedIds.has(q.id);
                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => toggle(q.id)}
                                        className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${checked ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                    >
                                        <div className={`mt-0.5 flex-shrink-0 transition-colors ${checked ? 'text-blue-600' : 'text-gray-300'}`}>
                                            {checked ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[13px] text-gray-800 leading-snug line-clamp-2">
                                                {q.content ?? q.title}
                                            </p>
                                            {q.difficulty && (
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded mt-1 inline-block font-medium ${q.difficulty === 'easy' ? 'bg-green-50 text-green-600' : q.difficulty === 'hard' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                                    {q.difficulty}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                </div>

                {/* Footer */}
                <div className="flex gap-2 px-6 py-4 border-t border-gray-100">
                    <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">
                        Cancel
                    </button>
                    <button
                        onClick={submit}
                        disabled={saving || finalIds.length === 0}
                        className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center gap-1.5"
                    >
                        {saving && <Loader2 size={13} className="animate-spin" />}
                        Create{finalIds.length > 0 ? ` (${finalIds.length})` : ''}
                    </button>
                </div>
            </div>
        </div>
    );
}

function SessionDetailModal({ session, onClose }: { session: QuizSession; onClose: () => void }) {
    const [detail, setDetail] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        LessonService.getSessionDetail(session.id)
            .then(res => setDetail(res?.data ?? res))
            .catch(() => setDetail(null))
            .finally(() => setLoading(false));
    }, [session.id]);

    const studentName = session.student?.name ?? session.student?.email ?? `Student #${session.student_id ?? session.id}`;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                    <div>
                        <h3 className="text-[15px] font-semibold text-gray-900">Session Detail</h3>
                        <p className="text-[12px] text-gray-400 mt-0.5">{studentName}</p>
                    </div>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
                        <X size={15} className="text-gray-400" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                    {loading ? (
                        <div className="space-y-2">
                            {[1, 2, 3].map(i => <div key={i} className="h-10 bg-gray-100 rounded-lg animate-pulse" />)}
                        </div>
                    ) : (
                        <>
                            {/* Summary row */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-[11px] text-gray-400 mb-1">Score</p>
                                    <p className={`text-[18px] font-bold ${(session.score ?? 0) >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                                        {session.score != null ? `${session.score}%` : '—'}
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-[11px] text-gray-400 mb-1">Status</p>
                                    <div className="flex justify-center mt-1">
                                        <StatusBadge status={session.status} />
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-3 text-center">
                                    <p className="text-[11px] text-gray-400 mb-1">Started</p>
                                    <p className="text-[11px] text-gray-700">
                                        {session.started_at ? new Date(session.started_at).toLocaleString() : '—'}
                                    </p>
                                </div>
                            </div>

                            {/* Answers */}
                            {Array.isArray(detail?.answers) && detail.answers.length > 0 && (
                                <div>
                                    <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        Answers ({detail.answers.length})
                                    </p>
                                    <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                                        {detail.answers.map((a: any, i: number) => (
                                            <div key={a.id ?? i} className="px-4 py-3 flex items-start gap-3">
                                                <div className="mt-0.5 flex-shrink-0">
                                                    {a.is_correct
                                                        ? <CheckCircle2 size={14} className="text-green-500" />
                                                        : <XCircle size={14} className="text-red-400" />}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[12px] text-gray-700 leading-snug">
                                                        {a.question?.content ?? a.question_content ?? `Q${i + 1}`}
                                                    </p>
                                                    {a.selected_answer != null && (
                                                        <p className="text-[11px] text-gray-400 mt-0.5">
                                                            Answer: {a.selected_answer?.content ?? a.selected_answer}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {!detail && (
                                <p className="text-[12px] text-gray-400 text-center py-6">No detail available</p>
                            )}
                        </>
                    )}
                </div>

                <div className="px-6 py-4 border-t border-gray-100">
                    <button onClick={onClose} className="w-full py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export function QuizDetailPage({ id }: { id: number }) {
    const [quizDetail, setQuizDetail] = useState<QuizDetail | undefined>(undefined);
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [viewSession, setViewSession] = useState<QuizSession | null>(null);
    const [completingId, setCompletingId] = useState<number | null>(null);

    const fetchDetail = () => {
        LessonService.getQuizDetail(id).then((res) => {
            setQuizDetail(res?.data ?? res);
        });
    };

    const markComplete = async (sessionId: number) => {
        setCompletingId(sessionId);
        try {
            await LessonService.markSessionComplete(sessionId);
            fetchDetail();
        } finally {
            setCompletingId(null);
        }
    };

    useEffect(() => { fetchDetail(); }, []);

    if (!quizDetail) return <FullScreenLoading />;

    const sessions = quizDetail.quiz_sessions ?? [];

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
            {/* Detail card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <h1 className="text-[18px] font-semibold text-gray-900">{quizDetail.title}</h1>
                        {quizDetail.description && (
                            <p className="text-[13px] text-gray-500 mt-1">{quizDetail.description}</p>
                        )}
                    </div>
                    <StatusBadge status={quizDetail.status} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {quizDetail.duration_minutes != null && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-600">
                            <Clock size={13} className="text-gray-400 flex-shrink-0" />
                            <span>{quizDetail.duration_minutes} min</span>
                        </div>
                    )}
                    {quizDetail.total_questions != null && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-600">
                            <BookOpen size={13} className="text-gray-400 flex-shrink-0" />
                            <span>{quizDetail.total_questions} questions</span>
                        </div>
                    )}
                    {quizDetail.grade && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-600">
                            <GraduationCap size={13} className="text-gray-400 flex-shrink-0" />
                            <span>{quizDetail.grade.name}</span>
                        </div>
                    )}
                    {quizDetail.topic && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-600">
                            <Tag size={13} className="text-gray-400 flex-shrink-0" />
                            <span>{quizDetail.topic.name}</span>
                        </div>
                    )}
                    {quizDetail.category && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-600">
                            <BookOpen size={13} className="text-gray-400 flex-shrink-0" />
                            <span>{quizDetail.category.name}</span>
                        </div>
                    )}
                    {quizDetail.difficulty && (
                        <div className="flex items-center gap-2 text-[12px]">
                            <span className={`px-2 py-0.5 rounded-full font-medium capitalize ${quizDetail.difficulty === 'easy' ? 'bg-green-50 text-green-600' : quizDetail.difficulty === 'hard' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                {quizDetail.difficulty}
                            </span>
                        </div>
                    )}
                    {quizDetail.created_at && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-500">
                            <Calendar size={13} className="text-gray-400 flex-shrink-0" />
                            <span>{new Date(quizDetail.created_at).toLocaleDateString()}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Sessions list */}
            <div>
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <Users size={14} className="text-gray-400" />
                        <h2 className="text-[13px] font-semibold text-gray-700">
                            Sessions <span className="text-gray-400 font-normal">({sessions.length})</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => setShowAssignModal(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500"
                    >
                        <Plus size={12} /> Create Assignment
                    </button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    {sessions.length === 0 ? (
                        <div className="py-12 text-center">
                            <Users size={26} className="mx-auto text-gray-300 mb-2" />
                            <p className="text-[13px] text-gray-400">No sessions yet</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {sessions.map((s) => (
                                <div key={s.id} className="px-5 py-4 flex items-center gap-3">
                                    <ScoreIcon score={s.score} />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-medium text-gray-800">
                                            {s.student?.name ?? s.student?.email ?? `Student #${s.student_id ?? s.id}`}
                                        </p>
                                        {s.started_at && (
                                            <p className="text-[11px] text-gray-400 mt-0.5">
                                                {new Date(s.started_at).toLocaleString()}
                                            </p>
                                        )}
                                    </div>
                                    {s.score != null && (
                                        <span className={`text-[12px] font-semibold ${s.score >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                                            {s.score}%
                                        </span>
                                    )}
                                    <StatusBadge status={s.status} />
                                    <button
                                        onClick={() => setViewSession(s)}
                                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 text-[11px] text-gray-600 hover:bg-gray-50 flex-shrink-0"
                                    >
                                        <Eye size={11} /> View
                                    </button>
                                    {s.status !== 'completed' && (
                                        <button
                                            onClick={() => markComplete(s.id)}
                                            disabled={completingId === s.id}
                                            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 text-[11px] font-medium hover:bg-green-100 disabled:opacity-50 flex-shrink-0"
                                        >
                                            {completingId === s.id
                                                ? <Loader2 size={11} className="animate-spin" />
                                                : <CheckCircle2 size={11} />}
                                            Complete
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {showAssignModal && (
                <CreateAssignmentModal
                    quizId={id}
                    onClose={() => setShowAssignModal(false)}
                    onCreated={fetchDetail}
                />
            )}
            {viewSession && (
                <SessionDetailModal
                    session={viewSession}
                    onClose={() => setViewSession(null)}
                />
            )}
        </div>
    );
}
