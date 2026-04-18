'use client'

import { useEffect, useState } from "react"
import { ClassItem } from "@/data/services/class.service"
import { QuestionService } from "@/data/services/question.service"
import { LessonService } from "@/data/services/lesson.service"
import { Plus, X, ClipboardList, Loader2, Users, GraduationCap } from "lucide-react"
import { Field, INPUT, Assignment, Lesson } from "./shared"
import { RichTextEditor } from "@/app/components/RichTextEditor"
import { useRouter } from "next/navigation"


function AssignmentDetailModal({ assignment, classes, onClose }: {
    assignment: Assignment; classes: ClassItem[]; onClose: () => void
}) {
    const a = assignment.detail ?? assignment
    const students = assignment.assignment_students ?? []
    const cls = classes.find(c => c.id === a.class_id)
    const overdue = a.due_date && new Date(a.due_date) < new Date();

    const router = useRouter()

    const handleViewAssignmentStudentDetail = (assignment: any) => {
        const assignmentStudentId = assignment.id;
        router.push(`/quizzes/results/teachers/assignments/students/${assignmentStudentId}`)


        console.log('ASSSIGNMENT', assignment);
        

    }

    
    

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-6 max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="text-[15px] font-semibold text-gray-900">{a.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            {cls && <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{cls.name}</span>}
                            {a.due_date && (
                                <span className={`text-[11px] px-2 py-0.5 rounded-full ${overdue ? 'text-red-600 bg-red-50' : 'text-gray-500 bg-gray-100'}`}>
                                    Due {new Date(a.due_date).toLocaleDateString()}
                                </span>
                            )}
                        </div>
                    </div>
                    <button onClick={() => {}}>View Detail</button>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>

                {a.description && (
                    <div dangerouslySetInnerHTML={{ __html: a.description }} />
                )}

                <div className="flex-1 overflow-y-auto">
                    <p className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Students ({students.length})
                    </p>
                    {students.length === 0 ? (
                        <div className="py-8 text-center">
                            <Users size={24} className="mx-auto text-gray-300 mb-2" />
                            <p className="text-[12px] text-gray-400">No students assigned</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                            {students.map(s => {
                                const name = s.student ? s.student.name || s.student.email : `Student #${s.student_id}`
                                const submitted = !!s.submitted_at
                                return (
                                    <div key={s.id} className="px-4 py-4" onClick={() => handleViewAssignmentStudentDetail(s)}>
                                        <div className="flex items-center justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                    <GraduationCap size={13} className="text-blue-500" />
                                                </div>
                                                <p className="text-[13px] font-medium text-gray-900 truncate">{name}</p>
                                            </div>
                                            <span className={`text-[11px] px-2 py-0.5 rounded-full flex-shrink-0 ${submitted ? 'text-green-600 bg-green-50' : 'text-yellow-600 bg-yellow-50'}`}>
                                                {s.status ?? (submitted ? 'Submitted' : 'Pending')}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 ml-9">
                                            {s.started_at && (
                                                <div>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Started</p>
                                                    <p className="text-[12px] text-gray-700">{new Date(s.started_at).toLocaleString()}</p>
                                                </div>
                                            )}
                                            {s.submitted_at && (
                                                <div>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Submitted</p>
                                                    <p className="text-[12px] text-gray-700">{new Date(s.submitted_at).toLocaleString()}</p>
                                                </div>
                                            )}
                                            {s.due_at && (
                                                <div>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Due</p>
                                                    <p className="text-[12px] text-gray-700">{new Date(s.due_at).toLocaleString()}</p>
                                                </div>
                                            )}
                                            {(s.score != null || s.total_points != null) && (
                                                <div>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">Score</p>
                                                    <p className="text-[12px] text-gray-700 font-medium">{s.score ?? '—'}{s.total_points != null ? ` / ${s.total_points}` : ''}</p>
                                                </div>
                                            )}
                                        </div>
                                        {s.feedback && (
                                            <div className="mt-2 ml-9">
                                                <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Feedback</p>
                                                <p className="text-[12px] text-gray-600 italic">{s.feedback}</p>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100">
                    <button onClick={onClose} className="w-full py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Close</button>
                </div>
            </div>
        </div>
    )
}

function CreateAssignmentModal({ classes, onClose, onCreate }: {
    classes: ClassItem[]; onClose: () => void; onCreate: (a: Assignment) => void
}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [classId, setClassId] = useState<number | ''>(classes[0]?.id ?? '')
    const [subjectId, setSubjectId] = useState<number | ''>('')
    const [lessonId, setLessonId] = useState<number | ''>('')
    const [subjects, setSubjects] = useState<{ id: number; name: string }[]>([])
    const [lessons, setLessons] = useState<Lesson[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        QuestionService.getCategoryList().then(res => setSubjects(res ?? [])).catch(() => { })
        LessonService.getMyLessons().then(res => setLessons(res?.data ?? res ?? [])).catch(() => { })
    }, [])

    const submit = async () => {
        if (!title.trim()) { setError('Title is required'); return }
        if (!classId) { setError('Select a class'); return }
        setLoading(true); setError('')
        try {
            const assignmentPayload: Assignment = {
                title: title.trim(),
                description: description.trim() || undefined,
                due_date: dueDate || undefined,
                class_id: classId,
                class_subject_id: subjectId || undefined,
                lesson_id: lessonId || undefined,
                assignment_type: 'lesson', // quiz, lesson, mixed
            }
            const res = await LessonService.createAssignment(assignmentPayload)
            onCreate(res?.data ?? res)
        } catch { setError('Failed to create assignment') }
        finally { setLoading(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[15px] font-semibold text-gray-900">New Assignment -!</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                <div className="space-y-3">
                    <Field label="Title" required><input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Chapter 3 exercises" className={INPUT} /></Field>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Class" required>
                            <select value={classId} onChange={e => setClassId(Number(e.target.value))} className={INPUT}>
                                <option value="">Select class</option>
                                {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </Field>
                        <Field label="Due Date"><input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className={INPUT} /></Field>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Subject">
                            <select value={subjectId} onChange={e => setSubjectId(e.target.value ? Number(e.target.value) : '')} className={INPUT}>
                                <option value="">Select subject</option>
                                {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                            </select>
                        </Field>
                        <Field label="Lesson">
                            <select value={lessonId} onChange={e => setLessonId(e.target.value ? Number(e.target.value) : '')} className={INPUT} disabled={lessons.length === 0}>
                                <option value="">{lessons.length === 0 ? 'No lessons' : 'Select lesson'}</option>
                                {lessons.map(l => <option key={l.id} value={l.id}>{l.title}</option>)}
                            </select>
                        </Field>
                    </div>
                    <Field label="Description">

                        <RichTextEditor onChange={v => setDescription(v)} />

                    </Field>
                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                </div>
                <div className="flex gap-2 mt-5">
                    <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Cancel</button>
                    <button onClick={submit} disabled={loading} className="flex-1 py-2 rounded-lg bg-green-600 text-white text-[13px] font-medium hover:bg-green-500 disabled:opacity-50 flex items-center justify-center gap-1.5">
                        {loading && <Loader2 size={13} className="animate-spin" />} Assign
                    </button>
                </div>
            </div>
        </div>
    )
}

export function AssignmentsTab({ classes }: { classes: ClassItem[] }) {
    const [assignments, setAssignments] = useState<Assignment[]>([])
    const [loading, setLoading] = useState(true)
    const [filterClass, setFilterClass] = useState<number | 'all'>('all')
    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState<Assignment | null>(null)

    useEffect(() => {
        LessonService.getAllAssignments()
            .then(res => setAssignments(res?.data ?? res ?? []))
            .catch(() => { })
            .finally(() => setLoading(false))
    }, [])

    const visible = filterClass === 'all' ? assignments : assignments.filter(a => Number(a.class_id) === Number(filterClass))

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <h2 className="text-[14px] font-semibold text-gray-900">Assignments</h2>
                    <select value={filterClass} onChange={e => setFilterClass(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="all">All classes</option>
                        {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white rounded-lg text-[12px] font-medium hover:bg-green-500">
                    <Plus size={12} /> New Assignment
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
                    <div className="py-14 text-center"><ClipboardList size={28} className="mx-auto text-gray-300 mb-2" /><p className="text-[13px] text-gray-400">No assignments yet</p></div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {visible.map(a => {
                            const cls = classes.find(c => c.id === a.class_id)
                            const overdue = a.due_date && new Date(a.due_date) < new Date()
                            return (
                                <div key={a.id} onClick={() => setSelected(a)} className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer">
                                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                        <ClipboardList size={14} className="text-green-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-medium text-gray-900">{a.title}</p>
                                        {a.description && <div className="text-[11px] text-gray-400 truncate-20 mt-0.5" dangerouslySetInnerHTML={{
                                            __html: a.description.length > 20
                                                ? a.description.slice(0, 20) + '...'
                                                : a.description
                                        }} />
                                        }
                                    </div>
                                    {cls && <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{cls.name}</span>}
                                    {a.due_date && (
                                        <span className={`text-[11px] px-2 py-0.5 rounded-full flex-shrink-0 ${overdue ? 'text-red-600 bg-red-50' : 'text-gray-500 bg-gray-100'}`}>
                                            Due {new Date(a.due_date).toLocaleDateString()}
                                        </span>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {showModal && (
                <CreateAssignmentModal classes={classes} onClose={() => setShowModal(false)}
                    onCreate={a => { setAssignments(prev => [a, ...prev]); setShowModal(false) }} />
            )}
            {selected && (
                <AssignmentDetailModal assignment={selected} classes={classes} onClose={() => setSelected(null)} />
            )}
        </div>
    )
}
