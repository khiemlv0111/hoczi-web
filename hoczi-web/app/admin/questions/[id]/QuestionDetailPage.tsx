'use client'

import { QuestionService } from "@/data/services/question.service";
import { useEffect, useState } from "react";

export function QuestionDetailPage({ id }: any) {
    const [question, setQuestion] = useState<any | undefined>(undefined);
    const [showModal, setShowModal] = useState(false);
    const [answerContent, setAnswerContent] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const fetchQuestion = () => {
        QuestionService.getQuestionDetail(id).then((res) => {
            setQuestion(res.data);
        }).catch(() => {});
    };

    useEffect(() => {
        fetchQuestion();
    }, []);

    const openModal = () => {
        setAnswerContent('');
        setIsCorrect(false);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async () => {
        if (!answerContent.trim()) return;
        setSubmitting(true);
        try {
            await QuestionService.createAnswer({
                questionId: id,
                content: answerContent.trim(),
                isCorrect: isCorrect,
            } as any);
            closeModal();
            fetchQuestion();
        } catch (err) {
        } finally {
            setSubmitting(false);
        }
    };

    if (!question) {
        return null;
    }

    return (
        <>
            <div>
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[13px] font-medium text-gray-900">Question Detail</span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                                {question.content}
                            </span>
                        </div>

                        <div className="mb-4">
                            <div>
                                <p className="text-lg font-semibold">{question.content}</p>
                            </div>

                            <div className="flex items-center justify-between mt-3 mb-2">
                                <span className="text-[12px] text-gray-500 font-medium">Answers</span>
                                <button
                                    onClick={openModal}
                                    className="text-[12px] px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    + Create Answer
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <ul className="w">
                                    {question.answers?.map((item: any, index: number) => (
                                        <li
                                            className={`px-2 py-1 ${item.is_correct ? 'bg-blue-100' : 'bg-white'} mb-1 rounded`}
                                            key={index}
                                        >
                                            {String.fromCharCode(65 + index)}. {item.content}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-[15px] font-semibold text-gray-900">Create Answer</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="mb-4">
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">
                                Answer Content
                            </label>
                            <textarea
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                                rows={3}
                                placeholder="Enter answer content..."
                                value={answerContent}
                                onChange={(e) => setAnswerContent(e.target.value)}
                            />
                        </div>

                        <div className="mb-6 flex items-center gap-2">
                            <input
                                id="is_correct"
                                type="checkbox"
                                checked={isCorrect}
                                onChange={(e) => setIsCorrect(e.target.checked)}
                                className="w-4 h-4 accent-blue-600"
                            />
                            <label htmlFor="is_correct" className="text-[13px] text-gray-700">
                                Mark as correct answer
                            </label>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={closeModal}
                                className="px-4 py-1.5 text-[13px] rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={submitting || !answerContent.trim()}
                                className="px-4 py-1.5 text-[13px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
                            >
                                {submitting ? 'Saving...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}