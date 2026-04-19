'use client'

import { LessonService } from "@/data/services/lesson.service";
import { StudentAssignmentDetail } from "@/data/types";
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation";
import {
    Calendar, ChartBarStacked, CheckCircle2, Clock, GraduationCap, Loader2,
    MessageSquare, RotateCcw, Send, Users, XCircle,
} from "lucide-react";
import { useAppData } from "@/app/context/AppContext";

function StatusBadge({ status }: { status?: string }) {
    if (!status) return null;
    const map: Record<string, string> = {
        completed: 'bg-green-50 text-green-600',
        submitted: 'bg-green-50 text-green-600',
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

export function AssignmentStudentDetailPage({ id }: { id: number }) {
    const router = useRouter();
    const [detail, setDetail] = useState<StudentAssignmentDetail | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState('');
    const [sending, setSending] = useState(false);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    const { user } = useAppData()

    const fetchDetail = () => {
        LessonService.getAssignmentStudentDetail(id).then((res) => {
            setDetail(res.data);
        }).finally(() => setLoading(false));
    };

    useEffect(() => { fetchDetail(); }, []);

    const sendComment = async () => {
        if (!comment.trim() || sending) return;
        setSending(true);
        try {
            await LessonService.commentOnAssignment({ assignmentStudentId: id, content: comment.trim() });
            setComment('');
            fetchDetail();
        } finally {
            setSending(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) sendComment();
    };

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse" />
                ))}
            </div>
        );
    }

    if (!detail) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-8 text-center">
                <p className="text-[13px] text-gray-400">Assignment not found</p>
            </div>
        );
    }

    const a = detail.assignment;
    const submitted = !!detail.submitted_at;
    const overdue = a.due_date && new Date(a.due_date) < new Date();

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-800"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                Back
            </button>

            {/* Assignment info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <h1 className="text-[18px] font-semibold text-gray-900">{a.title}</h1>
                        {a.description && (
                            <div
                                className="text-[13px] text-gray-500 mt-1 prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: a.description }}
                            />
                        )}
                    </div>
                    <StatusBadge status={detail.status} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {a.due_date && (
                        <div className="flex items-center gap-2 text-[12px]">
                            <Calendar size={13} className={`flex-shrink-0 ${overdue ? 'text-red-400' : 'text-gray-400'}`} />
                            <span className={overdue ? 'text-red-500' : 'text-gray-600'}>
                                Due {new Date(a.due_date).toLocaleDateString()}
                            </span>
                        </div>
                    )}
                    {detail.attempt_count != null && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-600">
                            <RotateCcw size={13} className="text-gray-400 flex-shrink-0" />
                            <span>{detail.attempt_count} attempt{detail.attempt_count !== 1 ? 's' : ''}</span>
                        </div>
                    )}
                    {detail.assigned_at && (
                        <div className="flex items-center gap-2 text-[12px] text-gray-500">
                            <Clock size={13} className="text-gray-400 flex-shrink-0" />
                            <span>Assigned {new Date(detail.assigned_at).toLocaleDateString()}</span>
                        </div>
                    )}

                    <div className="flex items-center gap-2 text-[12px] text-gray-500">
                        <ChartBarStacked size={13} className="text-gray-400 flex-shrink-0" />
                        <span className="capitalize">Type: {detail.assignment.assignment_type}</span>
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Student Progress
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Score</p>
                        <p className={`text-[20px] font-bold ${detail.score == null ? 'text-gray-400' : detail.score >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                            {detail.score != null ? `${detail.score}` : '—'}
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Status</p>
                        <div className="flex justify-center mt-1">
                            {submitted
                                ? <CheckCircle2 size={18} className="text-green-500" />
                                : <XCircle size={18} className="text-gray-300" />}
                        </div>
                        <p className="text-[10px] text-gray-500 mt-0.5">{submitted ? 'Submitted' : 'Not submitted'}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Started</p>
                        <p className="text-[11px] text-gray-700">
                            {detail.started_at ? new Date(detail.started_at).toLocaleString() : '—'}
                        </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">Submitted</p>
                        <p className="text-[11px] text-gray-700">
                            {detail.submitted_at ? new Date(detail.submitted_at).toLocaleString() : '—'}
                        </p>
                    </div>
                </div>

                {detail.feedback && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                        <p className="text-[10px] font-semibold text-yellow-600 uppercase tracking-wide mb-1">Feedback</p>
                        <p className="text-[13px] text-gray-700">{detail.feedback}</p>
                    </div>
                )}
            </div>

            {/* Comments */}
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={14} className="text-gray-400" />
                    <h2 className="text-[13px] font-semibold text-gray-700">
                        Comments <span className="text-gray-400 font-normal">({detail.comments?.length ?? 0})</span>
                    </h2>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    {(!detail.comments || detail.comments.length === 0) ? (
                        <div className="py-10 text-center">

                            <MessageSquare size={24} className="mx-auto text-gray-200 mb-2" />
                            <p className="text-[12px] text-gray-400">No comments yet</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {detail.comments.map((c, i) => (
                                <div key={i} className="px-5 py-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0`}>
                                            {
                                                user?.id == c.user_id ? (<Users color="blue" size={12} />) : (<GraduationCap size={11} className="text-blue-500" />)
                                            }
                                            {/* <GraduationCap size={11} className="text-blue-500" /> */}

                                        </div>
                                        <span className="text-[11px] text-gray-400">
                                            {new Date(c.created_at).toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-gray-700 ml-8">{c.content}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                        <textarea
                            ref={commentRef}
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Write a comment… (Ctrl+Enter to send)"
                            rows={2}
                            className="w-full text-[13px] border border-gray-200 rounded-lg px-3 py-2 resize-none outline-none focus:border-blue-400 bg-white"
                        />
                        <div className="flex justify-end mt-2">
                            <button
                                onClick={sendComment}
                                disabled={sending || !comment.trim()}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500 disabled:opacity-40"
                            >
                                {sending ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
