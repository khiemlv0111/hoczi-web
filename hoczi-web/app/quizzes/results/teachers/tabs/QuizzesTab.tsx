'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ClassItem } from "@/data/services/class.service"
import { QuestionService } from "@/data/services/question.service"
import { LessonService } from "@/data/services/lesson.service"
import { Plus, X, HelpCircle, Loader2, CheckCircle2, Circle } from "lucide-react"
import { CommonModal } from "@/app/components/modal/CommonModal"
import { CreateQuestionForm } from "@/app/admin/questions/CreateQuestionForm"
import { Field, INPUT, Quiz } from "./shared"

const DIFFICULTIES = ['easy', 'medium', 'hard']

function CreateQuizModal({ onClose, onCreate }: {
    onClose: () => void; onCreate: (q: Quiz) => void
}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [gradeId, setGradeId] = useState<number | ''>('')
    const [categoryId, setCategoryId] = useState<number | ''>('')
    const [topicId, setTopicId] = useState<number | ''>('')
    const [difficulty, setDifficulty] = useState('')
    const [durationMinutes, setDurationMinutes] = useState<number>(15)
    const [grades, setGrades] = useState<any[]>([])
    const [categories, setCategories] = useState<any[]>([])
    const [topics, setTopics] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        QuestionService.getGradeList().then(setGrades).catch(() => { })
        QuestionService.getCategoryList().then(setCategories).catch(() => { })
    }, [])

    const handleCategoryChange = (id: number | '') => {
        setCategoryId(id)
        setTopicId('')
        setTopics([])
        if (id) QuestionService.getTopicList(id as number).then(setTopics).catch(() => { })
    }

    const submit = async () => {
        if (!title.trim()) { setError('Title is required'); return }
        setLoading(true); setError('')
        try {
            const payload = {
                title: title.trim(),
                description: description.trim() || undefined,
                grade_id: gradeId || undefined,
                category_id: categoryId || undefined,
                topic_id: topicId || undefined,
                difficulty: difficulty || undefined,
                duration_minutes: durationMinutes,
                quiz_type: 'assignment',
            }
            LessonService.createQuizAssignment(payload).then(res => onCreate(res?.data ?? res))
        } catch { setError('Failed to create quiz') }
        finally { setLoading(false) }
    }

    const SELECT = INPUT + " appearance-none"

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[15px] font-semibold text-gray-900">New Quiz</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                <div className="space-y-3">
                    <Field label="Title" required>
                        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Chapter 1 Quiz" className={INPUT} />
                    </Field>
                    <Field label="Description">
                        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Optional description…" rows={2} className={INPUT + " resize-none"} />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Grade">
                            <select value={gradeId} onChange={e => setGradeId(e.target.value ? Number(e.target.value) : '')} className={SELECT}>
                                <option value="">Any grade</option>
                                {grades.map((g: any) => <option key={g.id} value={g.id}>{g.name}</option>)}
                            </select>
                        </Field>
                        <Field label="Category">
                            <select value={categoryId} onChange={e => handleCategoryChange(e.target.value ? Number(e.target.value) : '')} className={SELECT}>
                                <option value="">Any category</option>
                                {categories.map((c: any) => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </Field>
                        {topics.length > 0 && (
                            <Field label="Topic">
                                <select value={topicId} onChange={e => setTopicId(e.target.value ? Number(e.target.value) : '')} className={SELECT}>
                                    <option value="">Any topic</option>
                                    {topics.map((t: any) => <option key={t.id} value={t.id}>{t.name}</option>)}
                                </select>
                            </Field>
                        )}
                        <Field label="Difficulty">
                            <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className={SELECT}>
                                <option value="">Any difficulty</option>
                                {DIFFICULTIES.map(d => <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>)}
                            </select>
                        </Field>
                        <Field label="Duration (min)">
                            <input type="number" min={1} value={durationMinutes}
                                onChange={e => setDurationMinutes(Math.max(1, Number(e.target.value)))} className={INPUT} />
                        </Field>
                    </div>
                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                </div>
                <div className="flex gap-2 mt-5">
                    <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Cancel</button>
                    <button onClick={submit} disabled={loading} className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center gap-1.5">
                        {loading && <Loader2 size={13} className="animate-spin" />} Create
                    </button>
                </div>
            </div>
        </div>
    )
}

function QuizDetailModal({ quiz, onClose, onUpdated }: {
    quiz: Quiz; onClose: () => void; onUpdated: (q: Quiz) => void
}) {
    const [bankQuestions, setBankQuestions] = useState<any[]>([])
    const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
    const [loadingQ, setLoadingQ] = useState(false)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoadingQ(true)
        QuestionService.getAllTeacherQuestions({ page: 1, limit: 50 })
            .then(res => setBankQuestions(res?.data ?? res ?? []))
            .catch(() => { })
            .finally(() => setLoadingQ(false))
    }, [])

    const toggleQuestion = (id: number) => {
        setSelectedIds(prev => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })
    }

    const save = async () => {
        if (selectedIds.size === 0) { setError('Select at least one question'); return }
        setSaving(true); setError('')
        try {
            console.log('SELECTED', Array.from(selectedIds))
        } catch { setError('Failed to save questions') }
        finally { setSaving(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-6 max-h-[90vh] flex flex-col">
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <h3 className="text-[15px] font-semibold text-gray-900">{quiz.title}</h3>
                        {quiz.description && <p className="text-[12px] text-gray-400 mt-0.5">{quiz.description}</p>}
                    </div>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 flex-shrink-0"><X size={15} className="text-gray-400" /></button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                    <div className="flex items-center justify-between">
                        <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
                            Questions ({bankQuestions.length})
                        </p>
                        {selectedIds.size > 0 && (
                            <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                {selectedIds.size} selected
                            </span>
                        )}
                    </div>

                    {loadingQ ? (
                        <div className="space-y-2">
                            {[1, 2, 3].map(i => <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />)}
                        </div>
                    ) : bankQuestions.length === 0 ? (
                        <p className="text-[12px] text-gray-400 text-center py-6">No questions in your bank yet</p>
                    ) : (
                        <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100 max-h-72 overflow-y-auto">
                            {bankQuestions.map((q: any) => {
                                const checked = selectedIds.has(q.id)
                                return (
                                    <button key={q.id} onClick={() => toggleQuestion(q.id)}
                                        className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${checked ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                                        <div className={`mt-0.5 flex-shrink-0 transition-colors ${checked ? 'text-blue-600' : 'text-gray-300'}`}>
                                            {checked ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[13px] text-gray-800 leading-snug line-clamp-2">{q.content}</p>
                                            {q.difficulty && (
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded mt-1 inline-block font-medium ${q.difficulty === 'easy' ? 'bg-green-50 text-green-600' : q.difficulty === 'hard' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                                    {q.difficulty}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    )}

                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                </div>

                <div className="flex gap-2 mt-5 pt-4 border-t border-gray-100">
                    <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Close</button>
                    {selectedIds.size > 0 && (
                        <button onClick={save} disabled={saving} className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center gap-1.5">
                            {saving && <Loader2 size={13} className="animate-spin" />} Add {selectedIds.size} Question{selectedIds.size !== 1 ? 's' : ''}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export function QuizzesTab({ classes }: { classes: ClassItem[] }) {
    const router = useRouter()
    const [quizzes, setQuizzes] = useState<Quiz[]>([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [showQuestionModal, setShowQuestionModal] = useState(false)
    const [selected, setSelected] = useState<Quiz | null>(null)
    const [filterClass, setFilterClass] = useState<number | 'all'>('all')

    useEffect(() => {
        LessonService.getMyQuizzes()
            .then(res => setQuizzes(res?.data ?? res ?? []))
            .catch(() => { })
            .finally(() => setLoading(false))
    }, [])

    const visible = filterClass === 'all' ? quizzes : quizzes.filter(q => Number(q.class_id) === Number(filterClass))

    const handleUpdated = (updated: Quiz) => {
        setQuizzes(prev => prev.map(q => q.id === updated.id ? updated : q))
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <h2 className="text-[14px] font-semibold text-gray-900">Quizzes</h2>
                    <select value={filterClass} onChange={e => setFilterClass(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="all">All classes</option>
                        {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setShowQuestionModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 text-white rounded-lg text-[12px] font-medium hover:bg-violet-500">
                        <Plus size={12} /> New Question
                    </button>
                    <button onClick={() => setShowModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500">
                        <Plus size={12} /> New Quiz
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {loading ? (
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="px-5 py-4 flex gap-3 animate-pulse">
                                <div className="flex-1 space-y-2"><div className="h-3 bg-gray-100 rounded w-1/3" /><div className="h-2.5 bg-gray-100 rounded w-1/4" /></div>
                            </div>
                        ))}
                    </div>
                ) : visible.length === 0 ? (
                    <div className="py-14 text-center">
                        <HelpCircle size={28} className="mx-auto text-gray-300 mb-2" />
                        <p className="text-[13px] text-gray-400">No quizzes yet — create one!</p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {visible.map(q => {
                            const cls = classes.find(c => c.id === q.class_id)
                            const qCount = q.question_count ?? 0
                            return (
                                <div key={q.id} onClick={() => setSelected(q)}
                                    className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer">
                                    <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                                        <HelpCircle size={14} className="text-violet-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-medium text-gray-900">{q.title}</p>
                                        {q.description && <p className="text-[11px] text-gray-400 truncate mt-0.5">{q.description}</p>}
                                    </div>
                                    {qCount > 0 && (
                                        <span className="text-[11px] text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full flex-shrink-0">
                                            {qCount} question{qCount !== 1 ? 's' : ''}
                                        </span>
                                    )}
                                    {q.difficulty && (
                                        <span className={`text-[11px] px-2 py-0.5 rounded-full flex-shrink-0 font-medium ${q.difficulty === 'easy' ? 'bg-green-50 text-green-600' : q.difficulty === 'hard' ? 'bg-red-50 text-red-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                            {q.difficulty}
                                        </span>
                                    )}
                                    {cls && <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full flex-shrink-0">{cls.name}</span>}
                                    {q.created_at && <span className="text-[11px] text-gray-400 flex-shrink-0">{new Date(q.created_at).toLocaleDateString()}</span>}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {showModal && (
                <CreateQuizModal
                    onClose={() => setShowModal(false)}
                    onCreate={q => { setQuizzes(prev => [q, ...prev]); setShowModal(false) }}
                />
            )}
            <CommonModal open={showQuestionModal} onClose={() => setShowQuestionModal(false)}>
                <CreateQuestionForm onSuccess={id => { setShowQuestionModal(false); router.push(`/admin/questions/${id}`) }} />
            </CommonModal>
            {selected && (
                <QuizDetailModal
                    quiz={selected}
                    onClose={() => setSelected(null)}
                    onUpdated={handleUpdated}
                />
            )}
        </div>
    )
}
