'use client'

import { useEffect, useState } from "react"
import { ClassItem } from "@/data/services/class.service"
import { QuestionService } from "@/data/services/question.service"
import { LessonService } from "@/data/services/lesson.service"
import { Plus, X, FileText, Loader2, Eye } from "lucide-react"
import { getRequest } from "@/data/http"
import { RichTextEditor } from "@/app/components/RichTextEditor"
import { Field, INPUT, Lesson } from "./shared"

const LESSON_TYPES = ['video', 'text', 'exercise', 'quiz', 'presentation', 'other']

function LessonDetailModal({ lesson, classes, onClose }: { lesson: Lesson; classes: ClassItem[]; onClose: () => void }) {
    const cls = classes.find(c => Number(c.id) === Number(lesson.class_id))

    const rows: { label: string; value?: string | number }[] = [
        { label: 'Class', value: cls?.name },
        { label: 'Type', value: lesson.lesson_type },
        { label: 'Grade ID', value: lesson.grade_id },
        { label: 'Subject ID', value: lesson.subject_id },
        { label: 'Topic ID', value: lesson.topic_id },
        { label: 'Created', value: lesson.created_at ? new Date(lesson.created_at).toLocaleString() : undefined },
    ].filter(r => r.value !== undefined && r.value !== '')

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                            <FileText size={16} className="text-purple-500" />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-gray-900">{lesson.title}</h3>
                            {cls && <p className="text-[12px] text-gray-400">{cls.name}</p>}
                        </div>
                    </div>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>

                {rows.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {rows.map(r => (
                            <span key={r.label} className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                                <span className="text-gray-400">{r.label}: </span>{r.value}
                            </span>
                        ))}
                    </div>
                )}

                {lesson.description && (
                    <div className="mb-4">
                        <p className="text-[12px] font-medium text-gray-500 mb-1">Description</p>
                        <p className="text-[13px] text-gray-700 leading-relaxed">{lesson.description}</p>
                    </div>
                )}

                {lesson.content && (
                    <div className="mb-4">
                        <p className="text-[12px] font-medium text-gray-500 mb-1">Content</p>
                        <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
                    </div>
                )}

                {!lesson.description && !lesson.content && (
                    <p className="text-[13px] text-gray-400 text-center py-6">No additional details</p>
                )}

                <div className="mt-5 flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Close</button>
                </div>
            </div>
        </div>
    )
}

function CreateLessonModal({ classes, onClose, onCreate }: {
    classes: ClassItem[]; onClose: () => void; onCreate: (l: Lesson) => void
}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [classId, setClassId] = useState<number | ''>(classes[0]?.id ?? '')
    const [gradeId, setGradeId] = useState<number | ''>('')
    const [subjectId, setSubjectId] = useState<number | ''>('')
    const [topicId, setTopicId] = useState<number | ''>('')
    const [lessonType, setLessonType] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [grades, setGrades] = useState<any[]>([])
    const [subjects, setSubjects] = useState<any[]>([])
    const [topics, setTopics] = useState<any[]>([])

    useEffect(() => {
        QuestionService.getGradeList().then(setGrades).catch(() => { })
        QuestionService.getCategoryList().then(setSubjects).catch(() => { })
    }, [])

    const handleSubjectChange = (id: number | '') => {
        setSubjectId(id)
        setTopicId('')
        setTopics([])
        if (id) QuestionService.getTopicList(id as number).then(setTopics).catch(() => { })
    }

    const submit = async () => {
        if (!title.trim()) { setError('Title is required'); return }
        if (!classId) { setError('Select a class'); return }
        setLoading(true); setError('')
        try {
            const payload = {
                title: title.trim(),
                description: description.trim() || undefined,
                content: content.trim() || undefined,
                classId,
                gradeId: gradeId || undefined,
                subjectId: subjectId || undefined,
                topicId: topicId || undefined,
                media_url: 'no-url.png',
                estimated_minutes: 15,
                lesson_type: lessonType || undefined,
            }
            const res = await LessonService.createLesson(payload)
            onCreate(res?.data ?? res)
        } catch { setError('Failed to create lesson') }
        finally { setLoading(false) }
    }

    const SELECT = INPUT + " appearance-none"

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[15px] font-semibold text-gray-900">New Lesson</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                <div className="space-y-3">
                    <Field label="Title" required>
                        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Introduction to Algebra" className={INPUT} />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Class" required>
                            <select value={classId} onChange={e => setClassId(Number(e.target.value))} className={SELECT}>
                                <option value="">Select class</option>
                                {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </Field>
                        <Field label="Lesson Type">
                            <select value={lessonType} onChange={e => setLessonType(e.target.value)} className={SELECT}>
                                <option value="">Any type</option>
                                {LESSON_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
                            </select>
                        </Field>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Grade">
                            <select value={gradeId} onChange={e => setGradeId(e.target.value ? Number(e.target.value) : '')} className={SELECT}>
                                <option value="">Any grade</option>
                                {grades.map((g: any) => <option key={g.id} value={g.id}>{g.name}</option>)}
                            </select>
                        </Field>
                        <Field label="Subject">
                            <select value={subjectId} onChange={e => handleSubjectChange(e.target.value ? Number(e.target.value) : '')} className={SELECT}>
                                <option value="">Any subject</option>
                                {subjects.map((s: any) => <option key={s.id} value={s.id}>{s.name}</option>)}
                            </select>
                        </Field>
                    </div>
                    {subjectId !== '' && (
                        <Field label="Topic">
                            <select value={topicId} onChange={e => setTopicId(e.target.value ? Number(e.target.value) : '')} className={SELECT}>
                                <option value="">Any topic</option>
                                {topics.map((t: any) => <option key={t.id} value={t.id}>{t.name}</option>)}
                            </select>
                        </Field>
                    )}
                    <Field label="Description">
                        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Short summary of the lesson…" rows={2} className={INPUT + " resize-none"} />
                    </Field>
                    <Field label="Content">
                        <RichTextEditor onChange={v => setContent(v)} />
                    </Field>
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

export function LessonsTab({ classes }: { classes: ClassItem[] }) {
    const [lessons, setLessons] = useState<Lesson[]>([])
    const [loading, setLoading] = useState(true)
    const [filterClass, setFilterClass] = useState<number | 'all'>('all')
    const [showModal, setShowModal] = useState(false)
    const [detailLesson, setDetailLesson] = useState<Lesson | null>(null)

    useEffect(() => {
        getRequest('/api/lessons/get-my-lessons', true)
            .then(res => setLessons(res?.data ?? res ?? []))
            .catch(() => { })
            .finally(() => setLoading(false))
    }, [])

    const visible = filterClass === 'all' ? lessons : lessons.filter(l => Number(l.class_id) === Number(filterClass))

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <h2 className="text-[14px] font-semibold text-gray-900">Lessons</h2>
                    <select value={filterClass} onChange={e => setFilterClass(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="all">All classes</option>
                        {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500">
                    <Plus size={12} /> New Lesson
                </button>
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
                    <div className="py-14 text-center"><FileText size={28} className="mx-auto text-gray-300 mb-2" /><p className="text-[13px] text-gray-400">No lessons yet</p></div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {visible.map(lesson => {
                            const cls = classes.find(c => c.id === lesson.class_id)
                            return (
                                <div key={lesson.id} className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50">
                                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                                        <FileText size={14} className="text-purple-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-medium text-gray-900">{lesson.title}</p>
                                        {lesson.content && <p className="text-[11px] text-gray-400 truncate mt-0.5">{lesson.description}</p>}
                                    </div>
                                    {cls && <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{cls.name}</span>}
                                    {lesson.created_at && <span className="text-[11px] text-gray-400 flex-shrink-0">{new Date(lesson.created_at).toLocaleDateString()}</span>}
                                    <button onClick={() => setDetailLesson(lesson)} className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
                                        <Eye size={13} />
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {showModal && <CreateLessonModal classes={classes} onClose={() => setShowModal(false)} onCreate={l => { setLessons(prev => [l, ...prev]); setShowModal(false) }} />}
            {detailLesson && <LessonDetailModal lesson={detailLesson} classes={classes} onClose={() => setDetailLesson(null)} />}
        </div>
    )
}
