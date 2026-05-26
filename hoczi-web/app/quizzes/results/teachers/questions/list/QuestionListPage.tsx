'use client'

import { QuestionService } from "@/data/services/question.service"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { HelpCircle, Loader2, Plus } from "lucide-react"
import { CommonModal } from "@/app/components/modal/CommonModal"
import { CreateQuestionForm } from "@/app/admin/questions/CreateQuestionForm"

const LIMIT = 20

export function QuestionListPage() {
    const router = useRouter()
    const [questions, setQuestions] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [source, setSource] = useState<'teacher' | 'system' | 'all'>('teacher')
    const [categoryMap, setCategoryMap] = useState<Record<number, string>>({})
    const [gradeMap, setGradeMap] = useState<Record<number, string>>({})
    const [showCreateModal, setShowCreateModal] = useState(false)

    const totalPages = Math.max(1, Math.ceil(total / LIMIT))

    const fetchQuestions = (p: number, src: typeof source) => {
        setLoading(true)
        QuestionService.getAllTeacherQuestions({ page: p, limit: LIMIT, source: src })
            .then(res => {
                setQuestions(Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [])
                setTotal(res?.total ?? 0)
            })
            .catch(() => { })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        Promise.all([
            QuestionService.getCategoryList(),
            QuestionService.getGradeList(),
        ]).then(([cats, grades]) => {
            setCategoryMap(Object.fromEntries((cats ?? []).map((c: any) => [c.id, c.name])))
            setGradeMap(Object.fromEntries((grades ?? []).map((g: any) => [g.id, g.name])))
        }).catch(() => { })
    }, [])

    useEffect(() => {
        fetchQuestions(page, source)
    }, [page, source])

    const handleSourceChange = (s: typeof source) => {
        setSource(s)
        setPage(1)
    }

    return (
        <div>
            <button
                onClick={() => router.back()}
                className="mb-4 flex items-center gap-1 text-[13px] text-gray-500 hover:text-gray-800 transition-colors"
            >
                ← Back
            </button>

            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium text-gray-900">My Question Bank</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500 transition-colors"
                        >
                            <Plus size={12} /> New Question
                        </button>
                        {(['teacher', 'system', 'all'] as const).map(s => (
                            <button
                                key={s}
                                onClick={() => handleSourceChange(s)}
                                className={`px-3 py-1 text-[12px] rounded-lg border transition-colors ${source === s
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {s.charAt(0).toUpperCase() + s.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 size={20} className="animate-spin text-gray-400" />
                    </div>
                ) : questions.length === 0 ? (
                    <div className="py-14 text-center">
                        <HelpCircle size={28} className="mx-auto text-gray-300 mb-2" />
                        <p className="text-[13px] text-gray-400">No questions found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 text-left text-[12px] text-gray-500">
                                    <th className="pb-2 pr-4 font-medium">#</th>
                                    <th className="pb-2 pr-4 font-medium">Content</th>
                                    <th className="pb-2 pr-4 font-medium">Difficulty</th>
                                    <th className="pb-2 pr-4 font-medium">Category</th>
                                    <th className="pb-2 pr-4 font-medium">Grade</th>
                                    <th className="pb-2 pr-4 font-medium">Type</th>
                                    <th className="pb-2 pr-4 font-medium">Answers</th>
                                    <th className="pb-2 pr-4 font-medium">Status</th>
                                    <th className="pb-2 font-medium">Created</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {questions.map((q: any, idx: number) => (
                                    <tr
                                        key={q.id ?? idx}
                                        onClick={() => router.push(`/quizzes/results/teachers/questions/${q.id}`)}
                                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <td className="py-2.5 pr-4 text-gray-400 text-[12px]">
                                            {(page - 1) * LIMIT + idx + 1}
                                        </td>
                                        <td className="py-2.5 pr-4 text-gray-900 max-w-[320px]">
                                            <p className="text-[13px] font-medium truncate">{q.content ?? '—'}</p>
                                        </td>
                                        <td className="py-2.5 pr-4">
                                            {q.difficulty ? (
                                                <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${q.difficulty === 'easy'
                                                    ? 'bg-green-50 text-green-600'
                                                    : q.difficulty === 'hard'
                                                        ? 'bg-red-50 text-red-600'
                                                        : 'bg-yellow-50 text-yellow-600'
                                                    }`}>
                                                    {q.difficulty}
                                                </span>
                                            ) : (
                                                <span className="text-[12px] text-gray-400">—</span>
                                            )}
                                        </td>
                                        <td className="py-2.5 pr-4 text-[12px] text-gray-500">
                                            {categoryMap[q.category_id] ?? '—'}
                                        </td>
                                        <td className="py-2.5 pr-4 text-[12px] text-gray-500">
                                            {gradeMap[q.grade_id] ?? '—'}
                                        </td>
                                        <td className="py-2.5 pr-4 text-[12px] text-gray-500 uppercase">{q.type ?? '—'}</td>
                                        <td className="py-2.5 pr-4 text-[12px] text-gray-500">{q.answers?.length ?? 0}</td>
                                        <td className="py-2.5 pr-4">
                                            <span className={`text-[11px] px-2 py-0.5 rounded-full ${q.status === 'active'
                                                ? 'bg-green-50 text-green-700'
                                                : 'bg-gray-100 text-gray-500'
                                                }`}>
                                                {q.status ?? 'N/A'}
                                            </span>
                                        </td>
                                        <td className="py-2.5 text-[12px] text-gray-400">
                                            {q.created_at ? new Date(q.created_at).toLocaleDateString() : '—'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-[12px] text-gray-400">
                        Page {page} of {totalPages} &middot; {total} total
                    </span>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
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
                                        : page - 3 + i
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
                            )
                        })}
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page >= totalPages}
                            className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <CommonModal
                open={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                title="New Question"
            >
                <CreateQuestionForm
                    onSuccess={id => {
                        setShowCreateModal(false)
                        router.push(`/quizzes/results/teachers/questions/${id}`)
                    }}
                />
            </CommonModal>
        </div>
    )
}
