'use client'

import { useAppData } from "@/app/context/AppContext"
import { LessonService } from "@/data/services/lesson.service"
import { Mail, MessageSquare, Send, ChevronRight, Loader2, Inbox, RefreshCw, ArrowLeft } from "lucide-react"
import { useEffect, useState, useRef } from "react"

type Comment = {
    id: number
    content: string
    created_at?: string
    user?: { id: number; name: string; email?: string }
}

type AssignmentThread = {
    id: number
    status?: string
    feedback?: string
    score?: number
    assignment: {
        id: number
        title: string
        description?: string
        due_date?: string
        class_id: number
    }
    comments?: Comment[]
}

const DEMO_THREAD: AssignmentThread = {
    id: 0,
    status: 'pending',
    feedback: 'Good effort on the first attempt! Please review section 3 and resubmit.',
    score: 72,
    assignment: {
        id: 0,
        title: 'Chapter 3 – Algebra Exercises',
        description: 'Complete exercises 1–20 from the textbook. Show your working clearly for each problem. Due by end of week.',
        due_date: '2026-04-20',
        class_id: 1,
    },
    comments: [
        {
            id: 1,
            content: 'Hi, I finished exercises 1–15 but I\'m stuck on problems 16–18. Could you give me a hint?',
            created_at: '2026-04-14T09:10:00Z',
            user: { id: 999, name: 'You' },
        },
        {
            id: 2,
            content: 'Sure! For problem 16, try factoring the left side first before moving terms across. That should unlock 17 and 18 as well.',
            created_at: '2026-04-14T10:30:00Z',
            user: { id: 1, name: 'Ms. Nguyen' },
        },
        {
            id: 3,
            content: 'Thank you! That made sense. I\'ve submitted the full set now.',
            created_at: '2026-04-14T11:45:00Z',
            user: { id: 999, name: 'You' },
        },
    ],
}

export function InboxPage() {
    const { myAssignments, handleGetMyAssignments, user } = useAppData()
    const [selected, setSelected] = useState<AssignmentThread | null>(DEMO_THREAD)
    // on mobile: true = showing thread detail, false = showing thread list
    const [showDetail, setShowDetail] = useState(false)
    const [reply, setReply] = useState('')
    const [sending, setSending] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const threadEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        handleGetMyAssignments(1, 999)
    }, [])

    useEffect(() => {
        if (myAssignments && myAssignments.length > 0 && !selected) {
            setSelected(myAssignments[0] as AssignmentThread)
        }
    }, [myAssignments])

    useEffect(() => {
        threadEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [selected?.comments?.length])

    const refresh = async () => {
        setRefreshing(true)
        handleGetMyAssignments(1, 999)
        if (selected && myAssignments) {
            const updated = (myAssignments as AssignmentThread[]).find(a => a.id === selected.id)
            if (updated) setSelected(updated)
        }
        setRefreshing(false)
    }

    const sendReply = async () => {
        if (!reply.trim() || !selected) return
        setSending(true)
        try {
            await LessonService.commentOnAssignment({
                assignmentStudentId: selected.id,
                content: reply.trim(),
            })
            setReply('')
            handleGetMyAssignments(1, 999)
            // re-sync selected thread
            const updated = (myAssignments as AssignmentThread[] | undefined)?.find(a => a.id === selected.id)
            if (updated) setSelected({ ...updated })
        } finally {
            setSending(false)
        }
    }

    const threads: AssignmentThread[] = [DEMO_THREAD, ...((myAssignments ?? []) as AssignmentThread[])]
    const unreadCount = threads.filter(t => (t.comments?.length ?? 0) > 0).length

    return (
        <div className="flex h-[calc(100vh-3.5rem)] gap-0 bg-white border-y border-r border-gray-200 overflow-hidden -mx-6 -my-6">

            {/* Left pane — thread list (hidden on mobile when a thread is open) */}
            <div className={`w-full md:w-72 flex-shrink-0 border-r border-gray-200 flex flex-col ${showDetail ? 'hidden md:flex' : 'flex'}`}>
                {/* Header */}
                <div className="px-4 py-3.5 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Mail size={15} className="text-gray-500" />
                        <span className="text-[13px] font-semibold text-gray-900">Inbox</span>
                        {unreadCount > 0 && (
                            <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-blue-600 text-white font-medium">
                                {unreadCount}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={refresh}
                        disabled={refreshing}
                        className="p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-40"
                    >
                        <RefreshCw size={13} className={refreshing ? 'animate-spin' : ''} />
                    </button>
                </div>

                {/* Thread list */}
                <div className="flex-1 overflow-y-auto">
                    {!myAssignments ? (
                        <div className="py-12 flex flex-col items-center gap-2 text-gray-400">
                            <Loader2 size={18} className="animate-spin" />
                            <span className="text-[12px]">Loading…</span>
                        </div>
                    ) : threads.length === 0 ? (
                        <div className="py-16 flex flex-col items-center gap-3 text-gray-400">
                            <Inbox size={28} className="opacity-50" />
                            <p className="text-[13px]">No messages yet</p>
                        </div>
                    ) : (
                        threads.map(thread => {
                            const hasComments = (thread.comments?.length ?? 0) > 0
                            const lastComment = thread.comments?.[thread.comments.length - 1]
                            const isActive = selected?.id === thread.id
                            return (
                                <button
                                    key={thread.id}
                                    onClick={() => { setSelected(thread); setShowDetail(true) }}
                                    className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-colors flex items-start gap-2.5 ${isActive ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                >
                                    <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-semibold ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {thread.assignment.title.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-1">
                                            <p className={`text-[13px] truncate ${hasComments ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                                                {thread.assignment.title}
                                            </p>
                                            {hasComments && (
                                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            )}
                                        </div>
                                        <p className="text-[11px] text-gray-400 truncate mt-0.5">
                                            {lastComment
                                                ? lastComment.content
                                                : thread.assignment.description ?? 'No messages'}
                                        </p>
                                        {lastComment?.created_at && (
                                            <p className="text-[10px] text-gray-400 mt-0.5">
                                                {new Date(lastComment.created_at).toLocaleDateString()}
                                            </p>
                                        )}
                                    </div>
                                    <ChevronRight size={13} className="text-gray-300 flex-shrink-0 mt-1" />
                                </button>
                            )
                        })
                    )}
                </div>
            </div>

            {/* Right pane — thread detail (hidden on mobile when list is showing) */}
            <div className={`flex-1 flex flex-col min-w-0 ${showDetail ? 'flex' : 'hidden md:flex'}`}>
                {!selected ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-3">
                        <MessageSquare size={36} className="opacity-30" />
                        <p className="text-[13px]">Select a conversation</p>
                    </div>
                ) : (
                    <>
                        {/* Thread header */}
                        <div className="px-5 py-3.5 border-b border-gray-100 flex items-center gap-3">
                            {/* Back button — mobile only */}
                            <button
                                onClick={() => setShowDetail(false)}
                                className="md:hidden flex-shrink-0 p-1.5 -ml-1 rounded-md hover:bg-gray-100 text-gray-500 transition-colors"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <div className="min-w-0 flex-1">
                                <p className="text-[14px] font-semibold text-gray-900 truncate">{selected.assignment.title}</p>
                                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                    {selected.assignment.due_date && (
                                        <span className="text-[11px] text-gray-400">
                                            Due {new Date(selected.assignment.due_date).toLocaleDateString()}
                                        </span>
                                    )}
                                    {selected.status && (
                                        <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                                            selected.status === 'submitted'
                                                ? 'bg-green-50 text-green-600'
                                                : 'bg-yellow-50 text-yellow-600'
                                        }`}>
                                            {selected.status}
                                        </span>
                                    )}
                                    {selected.score != null && (
                                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                                            Score: {selected.score}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Messages */}

                        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                            {/* Assignment description as first "message" */}
                            {selected.assignment.description && (
                                <div className="flex gap-3">
                                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[11px] font-bold text-white">T</span>
                                    </div>
                                    <div className="flex-1 max-w-xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[12px] font-semibold text-gray-800">Teacher</span>
                                            <span className="text-[11px] text-gray-400">Assignment brief</span>
                                        </div>
                                        <div className="bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2.5 text-[13px] text-gray-700 leading-relaxed">
                                            {selected.assignment.description}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Feedback from teacher if present */}
                            {selected.feedback && (
                                <div className="flex gap-3">
                                    <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[11px] font-bold text-purple-600">T</span>
                                    </div>
                                    <div className="flex-1 max-w-xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[12px] font-semibold text-gray-800">Teacher</span>
                                            <span className="text-[11px] text-gray-400">Feedback</span>
                                        </div>
                                        <div className="bg-purple-50 border border-purple-100 rounded-xl px-3.5 py-2.5 text-[13px] text-purple-800 leading-relaxed">
                                            {selected.feedback}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Comments thread */}
                            {(selected.comments ?? []).length === 0 && !selected.assignment.description && !selected.feedback && (
                                <div className="py-12 text-center text-gray-400">
                                    <MessageSquare size={24} className="mx-auto mb-2 opacity-40" />
                                    <p className="text-[13px]">No messages yet — start the conversation</p>
                                </div>
                            )}

                            {(selected.comments ?? []).map((comment, i) => {
                                const isOwn = comment.user?.id === user?.id
                                return (
                                    <div key={comment.id ?? i} className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : ''}`}>
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-semibold ${
                                            isOwn ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {(comment.user?.name ?? '?').charAt(0).toUpperCase()}
                                        </div>
                                        <div className={`flex-1 max-w-xl ${isOwn ? 'flex flex-col items-end' : ''}`}>
                                            <div className={`flex items-center gap-2 mb-1 ${isOwn ? 'flex-row-reverse' : ''}`}>
                                                <span className="text-[12px] font-semibold text-gray-800">
                                                    {isOwn ? 'You' : (comment.user?.name ?? 'Unknown')}
                                                </span>
                                                {comment.created_at && (
                                                    <span className="text-[11px] text-gray-400">
                                                        {new Date(comment.created_at).toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={`rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                                                isOwn
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {comment.content}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <div ref={threadEndRef} />
                        </div>

                        {/* Compose */}
                        <div className="px-5 py-3 border-t border-gray-100">
                            <div className="flex items-end gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition">
                                <textarea
                                    value={reply}
                                    onChange={e => setReply(e.target.value)}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault()
                                            sendReply()
                                        }
                                    }}
                                    placeholder="Write a message… (Enter to send)"
                                    rows={1}
                                    className="flex-1 bg-transparent text-[13px] text-gray-800 placeholder-gray-400 resize-none focus:outline-none"
                                />
                                <button
                                    onClick={sendReply}
                                    disabled={sending || !reply.trim()}
                                    className="flex-shrink-0 p-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    {sending
                                        ? <Loader2 size={14} className="animate-spin" />
                                        : <Send size={14} />
                                    }
                                </button>
                            </div>
                            <p className="text-[11px] text-gray-400 mt-1.5 ml-1">Shift+Enter for new line</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
