'use client'

import { FullScreenLoading } from "@/app/components/FullScreenLoading"
import { useAppData } from "@/app/context/AppContext"
import { LessonService } from "@/data/services/lesson.service"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

type Tab = 'assignments' | 'student-list'

function AssignmentModal({ assignment, onClose }: { assignment: any, onClose: () => void }) {
    const [feedback, setFeedback] = useState('')
    const { handleGetMyAssignments } = useAppData()
    const a = assignment.assignment

    const submitFeedBack = () => {

        const payload = {
            content: feedback,
            assignmentStudentId: assignment.id,

        }
        LessonService.commentOnAssignment(payload).then((res) => {
            handleGetMyAssignments();
            onClose()
        })
        setFeedback('')

    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
                    <span className="text-[14px] font-semibold text-gray-900">Assignment Detail</span>
                    <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none">
                        <X />
                    </button>
                </div>

                {/* Body */}
                <div className="px-5 py-4 flex flex-col gap-4 overflow-y-auto">
                    {/* Title */}
                    <div>
                        <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1">Title</p>
                        <p className="text-[14px] font-semibold text-gray-900">{a.title}</p>
                    </div>

                    {/* Description */}
                    {a.description && (
                        <div>
                            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1">Description</p>
                            <p className="text-[13px] text-gray-700 leading-relaxed">{a.description}</p>
                        </div>
                    )}

                    {/* Meta row */}
                    <div className="flex gap-6">
                        {a.due_date && (
                            <div>
                                <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1">Due Date</p>
                                <p className="text-[13px] text-gray-700">{a.due_date}</p>
                            </div>
                        )}
                        {a.class_id && (
                            <div>
                                <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1">Class ID</p>
                                <p className="text-[13px] text-gray-700">{a.class_id}</p>
                            </div>
                        )}
                        {a.created_at && (
                            <div>
                                <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1">Created</p>
                                <p className="text-[13px] text-gray-700">{new Date(a.created_at).toLocaleDateString()}</p>
                            </div>
                        )}
                    </div>

                    {/* Feedback */}
                    <div>
                        <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-1">Your Feedback</p>
                        <textarea
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                            placeholder="Write your feedback here..."
                            rows={4}
                            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                        />
                    </div>

                    {/* Comments */}
                    {assignment.comments && assignment.comments.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">Comments</p>
                            {assignment.comments.map((c: any, i: number) => (
                                <div key={c.id ?? i} className="flex gap-3">
                                    <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[11px] font-semibold shrink-0">
                                        {c.user?.name?.[0]?.toUpperCase() ?? '?'}
                                    </div>
                                    <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2">
                                        <div className="flex items-center justify-between gap-2 mb-1">
                                            <span className="text-[12px] font-medium text-gray-700">{c.user?.name ?? 'Student'}</span>
                                            {c.created_at && (
                                                <span className="text-[11px] text-gray-400">{new Date(c.created_at).toLocaleDateString()}</span>
                                            )}
                                        </div>
                                        <p className="text-[13px] text-gray-600 leading-relaxed">{c.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2 px-5 py-3 border-t border-gray-100 shrink-0">
                    <button onClick={onClose} className="px-4 py-2 text-[13px] font-medium text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button
                        onClick={() => submitFeedBack()}
                        disabled={!feedback.trim()}
                        className="px-4 py-2 text-[13px] font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        Submit Feedback
                    </button>
                </div>

            </div>
        </div>
    )
}

export function StudentsdPage() {
    const [activeTab, setActiveTab] = useState<Tab>('assignments')
    const [completedIds, setCompletedIds] = useState<Set<number>>(new Set())
    const [selectedAssignment, setSelectedAssignment] = useState<any | null>(null)
    const { myAssignments, handleGetMyAssignments } = useAppData();

    const toggleCompleted = (id: number) => {
        setCompletedIds(prev => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })
    }

    useEffect(() => {
        handleGetMyAssignments()

    }, []);

    if (!myAssignments) {
        return <FullScreenLoading />
    }

    return (
        <div>
            {selectedAssignment && (
                <AssignmentModal assignment={selectedAssignment} onClose={() => setSelectedAssignment(null)} />
            )}

            <div className="flex gap-1 border-b border-gray-200 mb-4">
                <button
                    onClick={() => setActiveTab('assignments')}
                    className={`px-4 py-2 text-[13px] font-medium transition-colors border-b-2 -mb-px ${activeTab === 'assignments'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Assignments
                </button>
                <button
                    onClick={() => setActiveTab('student-list')}
                    className={`px-4 py-2 text-[13px] font-medium transition-colors border-b-2 -mb-px ${activeTab === 'student-list'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Student List
                </button>
            </div>

            {activeTab === 'assignments' && (
                <div className="flex flex-col gap-2">
                    {myAssignments.length === 0 ? (
                        <div className="bg-white border border-gray-200 rounded-xl px-4 py-8 text-center text-[13px] text-gray-400">
                            No assignments found.
                        </div>
                    ) : (
                        myAssignments.map((a, i) => {
                            const id = a.id ?? i
                            const done = completedIds.has(id)
                            return (
                                <div key={id} className={`bg-white border rounded-xl px-4 py-3 flex items-center justify-between gap-4 transition-colors ${done ? 'border-green-200 bg-green-50/40' : 'border-gray-200 hover:border-blue-200'}`}>
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0 ${done ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-500'}`}>
                                            {done ? '✓' : i + 1}
                                        </div>
                                        <div className="min-w-0">
                                            <p className={`text-[13px] font-semibold truncate ${done ? 'line-through text-gray-400' : 'text-gray-900'}`}>{a.assignment.title}</p>
                                            {a.assignment.description && (
                                                <p className="text-[12px] text-gray-500 truncate">{a.assignment.description}</p>
                                            )}
                                            {a.assignment.due_date && (
                                                <p className="text-[11px] text-gray-400 mt-0.5">Due: {a.assignment.due_date}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            onClick={() => setSelectedAssignment(a)}
                                            className="px-3 py-1.5 text-[12px] font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => toggleCompleted(id)}
                                            className={`px-3 py-1.5 text-[12px] font-medium rounded-lg border transition-colors ${done
                                                    ? 'bg-green-500 border-green-500 text-white hover:bg-green-600'
                                                    : 'border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600'
                                                }`}
                                        >
                                            {done ? 'Completed' : 'Mark done'}
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            )}

            {activeTab === 'student-list' && (
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <span className="text-[13px] font-medium text-gray-900">Student List</span>
                </div>
            )}
        </div>
    )
}
