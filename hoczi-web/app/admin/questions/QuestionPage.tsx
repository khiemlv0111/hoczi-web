'use client'

import { QuestionService } from "@/data/services/question.service";
import Link from "next/link";
import { useEffect, useState } from "react"

interface Question {
    id: string | number;
    title: string;
    content?: string;
    explanation?: string;
    status?: string;
    answers?: any[]|undefined;
    createdAt?: string;
    [key: string]: unknown;
}

export function QuestionPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        QuestionService.getAllQuestions()
            .then((res) => {
                setQuestions(Array.isArray(res) ? res : res?.data ?? []);
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[13px] font-medium text-gray-900">Question List</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                            Admin
                        </span>
                    </div>

                    {loading ? (
                        <div className="text-center py-8 text-sm text-gray-400">Loading...</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-100 text-left text-[12px] text-gray-500">
                                        <th className="pb-2 pr-4 font-medium">#</th>
                                        <th className="pb-2 pr-4 font-medium">Title</th>
                                        <th className="pb-2 pr-4 font-medium">Content</th>
                                        <th className="pb-2 pr-4 font-medium">Status</th>
                                        <th className="pb-2 pr-4 font-medium">Answer</th>
                                        <th className="pb-2 pr-4 font-medium">Created At</th>
                                        <th className="pb-2 font-medium text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {questions.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="py-6 text-center text-gray-400 text-[12px]">
                                                No questions found.
                                            </td>
                                        </tr>
                                    ) : (
                                        questions.map((q, idx) => (
                                            <tr key={q.id ?? idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-2 pr-4 text-gray-400">{idx + 1}</td>
                                                <td className="py-2 pr-4 font-medium text-gray-900 max-w-[200px] truncate">
                                                    <Link href={`/admin/questions/${q.id}`}>
                                                        {q.content ?? '—'}
                                                    </Link>

                                                </td>
                                                <td className="py-2 pr-4 text-gray-500 max-w-[260px] truncate">
                                                    {q.explanation ?? '—'}
                                                </td>
                                                <td className="py-2 pr-4">
                                                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${q.status === 'active'
                                                            ? 'bg-green-50 text-green-700'
                                                            : 'bg-gray-100 text-gray-500'
                                                        }`}>
                                                        {q.status ?? 'N/A'}
                                                    </span>
                                                </td>
                                                <td className="py-2 pr-4 text-gray-500 max-w-[260px] truncate">
                                                    {JSON.stringify(q.answers?.length)}
                                                </td>
                                                <td className="py-2 pr-4 text-gray-400 text-[12px]">
                                                    {q.createdAt
                                                        ? new Date(q.createdAt).toLocaleDateString()
                                                        : '—'}
                                                </td>
                                                <td className="py-2 text-right">
                                                    <button
                                                        onClick={() => console.log('Add answer for question', q.id)}
                                                        className="text-[11px] px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                                    >
                                                        + Add Answer
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
