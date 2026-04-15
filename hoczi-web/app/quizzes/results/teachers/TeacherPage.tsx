'use client'

import { useEffect, useState } from "react"
import { useAppData, User } from "@/app/context/AppContext"
import { ClassService, ClassItem } from "@/data/services/class.service"
import { QuestionService } from "@/data/services/question.service"
import {
    Plus, X, Users, BookOpen, Trash2, UserPlus, ChevronRight,
    Loader2, School, Hash, ClipboardList, GraduationCap, FileText, LayoutList,
} from "lucide-react"
import { postRequest, getRequest } from "@/data/http"
import { LessonService } from "@/data/services/lesson.service"

// ── Types ──────────────────────────────────────────────────────────────────

type Member = {
    id: number
    class_id: number
    status: string
    student: User
}

type Lesson = {
    id: number
    title: string
    description?: string
    content?: string
    class_id: number
    grade_id?: number
    topic_id?: number
    subject_id?: number
    lesson_type?: string
    created_at?: string
}

type Assignment = {
    id: number
    title: string
    description?: string
    due_date?: string
    class_id: number
    student_id?: number
    created_at?: string
}

type AssignTarget =
    | { type: 'class'; classId: number; className: string }
    | { type: 'student'; classId: number; studentId: number; studentName: string }

type Tab = 'classes' | 'lessons' | 'assignments'

// ── Shared ─────────────────────────────────────────────────────────────────

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
    return (
        <div>
            <label className="block text-[12px] font-medium text-gray-600 mb-1">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            {children}
        </div>
    )
}

const INPUT = "w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"

// ── Assign Modal ───────────────────────────────────────────────────────────

function AssignModal({ target, onClose }: { target: AssignTarget; onClose: () => void }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [done, setDone] = useState(false)

    const heading = target.type === 'class'
        ? `Assign to class · ${target.className}`
        : `Assign to · ${target.studentName}`

    const submit = async () => {
        if (!title.trim()) { setError('Title is required'); return }
        setLoading(true); setError('')
        try {
            const payload = target.type === 'class'
                ? { title: title.trim(), description: description.trim() || undefined, due_date: dueDate || undefined, class_id: target.classId }
                : { title: title.trim(), description: description.trim() || undefined, due_date: dueDate || undefined, class_id: target.classId, student_id: target.studentId }
            await postRequest('/api/classes/assign-assignment', payload, true)
            setDone(true)
        } catch { setError('Failed to assign — please try again') }
        finally { setLoading(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="text-[15px] font-semibold text-gray-900">New Assignment</h3>
                        <p className="text-[11px] text-gray-400 mt-0.5">{heading}</p>
                    </div>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                {done ? (
                    <div className="py-6 flex flex-col items-center gap-3 text-center">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                            <ClipboardList size={18} className="text-green-500" />
                        </div>
                        <p className="text-[13px] font-medium text-gray-900">Assignment sent!</p>
                        <p className="text-[12px] text-gray-400">
                            {target.type === 'class' ? `All members of ${target.className} were notified.` : `${target.studentName} was notified.`}
                        </p>
                        <button onClick={onClose} className="mt-2 px-5 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500">Done</button>
                    </div>
                ) : (
                    <>
                        <div className="space-y-3">
                            <Field label="Title" required><input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Chapter 3 exercises" className={INPUT} /></Field>
                            <Field label="Due Date"><input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className={INPUT} /></Field>
                            <Field label="Description"><textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Instructions or details…" rows={3} className={INPUT + " resize-none"} /></Field>
                            {error && <p className="text-[12px] text-red-500">{error}</p>}
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Cancel</button>
                            <button onClick={submit} disabled={loading} className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center gap-1.5">
                                {loading && <Loader2 size={13} className="animate-spin" />} Assign
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

// ── Create Class Modal ─────────────────────────────────────────────────────

function CreateClassModal({ onClose, onCreate, teacherId }: {
    onClose: () => void; onCreate: (cls: ClassItem) => void; teacherId: number
}) {
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const submit = async () => {
        if (!name.trim()) { setError('Class name is required'); return }
        if (!code.trim()) { setError('Class code is required'); return }
        setLoading(true); setError('')
        try {
            const cls = await ClassService.createClass({ name: name.trim(), code: code.trim().toUpperCase(), description: description.trim() || undefined, teacher_id: teacherId, school_name: schoolName.trim() || undefined })
            onCreate(cls)
        } catch { setError('Failed to create class') }
        finally { setLoading(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[15px] font-semibold text-gray-900">Create Class</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Class Name" required><input value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Math Grade 10" className={INPUT} /></Field>
                        <Field label="Class Code" required><input value={code} onChange={e => setCode(e.target.value)} placeholder="e.g. MATH10A" className={INPUT + " uppercase"} /></Field>
                    </div>
                    <Field label="School Name"><input value={schoolName} onChange={e => setSchoolName(e.target.value)} placeholder="e.g. Hanoi High School" className={INPUT} /></Field>
                    <Field label="Description"><textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Optional description" rows={3} className={INPUT + " resize-none"} /></Field>
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

// ── Add Member Modal ───────────────────────────────────────────────────────

function AddMemberModal({ classId, existingIds, allUsers, onClose, onAdded }: {
    classId: number; existingIds: number[]; allUsers: User[]; onClose: () => void; onAdded: (userId: number) => void
}) {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState<number | null>(null)

    const available = allUsers.filter(u =>
        !existingIds.includes(u.id) &&
        (u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
    )

    const add = async (user: User) => {
        setLoading(user.id)
        try { await ClassService.addMember({ class_id: classId, user_id: user.id }); onAdded(user.id) }
        finally { setLoading(null) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[15px] font-semibold text-gray-900">Add Member</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or email…" className={INPUT + " mb-3"} />
                <div className="max-h-64 overflow-y-auto space-y-1">
                    {available.length === 0
                        ? <p className="text-[12px] text-gray-400 text-center py-6">No users available</p>
                        : available.map(u => (
                            <div key={u.id} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50">
                                <div>
                                    <p className="text-[13px] font-medium text-gray-800">{u.name}</p>
                                    <p className="text-[11px] text-gray-400">{u.email}</p>
                                </div>
                                <button onClick={() => add(u)} disabled={loading === u.id} className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-blue-600 text-white text-[12px] hover:bg-blue-500 disabled:opacity-50">
                                    {loading === u.id ? <Loader2 size={11} className="animate-spin" /> : <UserPlus size={11} />} Add
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

// ── Tab 1: Classes ─────────────────────────────────────────────────────────

function ClassesTab({ classes, allUsers, loadingClasses, teacherId, setClasses }: {
    classes: ClassItem[]
    allUsers: User[]
    loadingClasses: boolean
    teacherId: number
    setClasses: React.Dispatch<React.SetStateAction<ClassItem[]>>
}) {
    const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null)
    const [members, setMembers] = useState<Member[]>([])
    const [removingId, setRemovingId] = useState<number | null>(null)
    const [showCreate, setShowCreate] = useState(false)
    const [showAddMember, setShowAddMember] = useState(false)
    const [assignTarget, setAssignTarget] = useState<AssignTarget | null>(null)

    const selectClass = (cls: ClassItem) => {
        setSelectedClass(cls)
        setMembers((cls.members as Member[]) ?? [])
    }

    const handleClassCreated = (cls: ClassItem) => {
        setClasses(prev => [cls, ...prev])
        setShowCreate(false)
        selectClass(cls)
    }

    const handleMemberAdded = (userId: number) => {
        const found = allUsers.find(u => u.id === userId)
        if (!found) return
        const newMember: Member = { id: Date.now(), class_id: selectedClass!.id, status: 'active', student: found }
        const updated = [...members, newMember]
        setMembers(updated)
        setClasses(prev => prev.map(c => c.id === selectedClass!.id ? { ...c, members: updated as any } : c))
    }

    const removeMember = async (member: Member) => {
        setRemovingId(member.student.id)
        try {
            await ClassService.removeMember(selectedClass!.id, member.student.id)
            const updated = members.filter(m => m.student.id !== member.student.id)
            setMembers(updated)
            setClasses(prev => prev.map(c => c.id === selectedClass!.id ? { ...c, members: updated as any } : c))
        } finally { setRemovingId(null) }
    }

    const memberIds = members.map(m => m.student.id)

    return (
        <div className="flex gap-5">
            {/* Left: class list */}
            <div className="w-64 flex-shrink-0 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-[14px] font-semibold text-gray-900">Classes</h2>
                    <button onClick={() => setShowCreate(true)} className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500">
                        <Plus size={12} /> New
                    </button>
                </div>
                {loadingClasses ? (
                    [1,2,3].map(i => <div key={i} className="h-14 bg-white rounded-lg border border-gray-200 animate-pulse" />)
                ) : classes.length === 0 ? (
                    <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                        <BookOpen size={20} className="mx-auto text-gray-300 mb-2" />
                        <p className="text-[12px] text-gray-400">No classes yet</p>
                    </div>
                ) : (
                    <div className="space-y-1.5">
                        {classes.map(cls => (
                            <button key={cls.id} onClick={() => selectClass(cls)}
                                className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex items-center justify-between ${selectedClass?.id === cls.id ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-gray-50'}`}
                            >
                                <div className="min-w-0">
                                    <p className="text-[13px] font-medium truncate">{cls.name}</p>
                                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                                        {cls.code && <span className="text-[10px] font-mono text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">{cls.code}</span>}
                                        {cls.school_name && <span className="text-[11px] text-gray-400 truncate">{cls.school_name}</span>}
                                    </div>
                                </div>
                                <ChevronRight size={13} className="flex-shrink-0 text-gray-400" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Right: detail */}
            <div className="flex-1 min-w-0">
                {!selectedClass ? (
                    <div className="h-64 flex items-center justify-center text-center text-gray-400">
                        <div><BookOpen size={32} className="mx-auto mb-2 opacity-30" /><p className="text-[13px]">Select a class to manage members</p></div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {/* Header */}
                        <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-[15px] font-semibold text-gray-900">{selectedClass.name}</h3>
                                    {selectedClass.code && (
                                        <span className="flex items-center gap-1 text-[11px] font-mono text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                                            <Hash size={10} />{selectedClass.code}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 mt-1">
                                    {selectedClass.school_name && <span className="flex items-center gap-1 text-[11px] text-gray-500"><School size={11} />{selectedClass.school_name}</span>}
                                    {selectedClass.description && <p className="text-[12px] text-gray-400">{selectedClass.description}</p>}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1.5 text-[12px] text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                                    <Users size={12} /> {members.length} member{members.length !== 1 ? 's' : ''}
                                </span>
                                <button onClick={() => setAssignTarget({ type: 'class', classId: selectedClass.id, className: selectedClass.name })}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white text-[12px] font-medium rounded-lg hover:bg-green-500">
                                    <ClipboardList size={12} /> Assign
                                </button>
                                <button onClick={() => setShowAddMember(true)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-[12px] font-medium rounded-lg hover:bg-blue-500">
                                    <UserPlus size={12} /> Add Member
                                </button>
                            </div>
                        </div>

                        {/* Members */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="px-5 py-3 border-b border-gray-100">
                                <p className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Members</p>
                            </div>
                            {members.length === 0 ? (
                                <div className="py-10 text-center"><Users size={24} className="mx-auto text-gray-300 mb-2" /><p className="text-[13px] text-gray-400">No members yet — add some!</p></div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {members.map(member => (
                                        <div key={member.student.id} className="px-5 py-3 flex items-center gap-3 hover:bg-gray-50">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                                <span className="text-[12px] font-semibold text-blue-500">{member.student.name?.charAt(0)?.toUpperCase() ?? '?'}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[13px] font-medium text-gray-900 truncate">{member.student.name}</p>
                                                <p className="text-[11px] text-gray-400 truncate">{member.student.email}</p>
                                            </div>
                                            <button onClick={() => setAssignTarget({ type: 'student', classId: selectedClass.id, studentId: member.student.id, studentName: member.student.name })}
                                                className="p-1.5 rounded-md text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors" title="Assign">
                                                <ClipboardList size={13} />
                                            </button>
                                            <button onClick={() => removeMember(member)} disabled={removingId === member.student.id}
                                                className="p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40">
                                                {removingId === member.student.id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {showCreate && <CreateClassModal onClose={() => setShowCreate(false)} onCreate={handleClassCreated} teacherId={teacherId} />}
            {showAddMember && selectedClass && (
                <AddMemberModal classId={selectedClass.id} existingIds={memberIds} allUsers={allUsers}
                    onClose={() => setShowAddMember(false)} onAdded={handleMemberAdded} />
            )}
            {assignTarget && <AssignModal target={assignTarget} onClose={() => setAssignTarget(null)} />}
        </div>
    )
}

// ── Tab 2: Lessons ─────────────────────────────────────────────────────────

function LessonsTab({ classes }: { classes: ClassItem[] }) {
    const [lessons, setLessons] = useState<Lesson[]>([])
    const [loading, setLoading] = useState(true)
    const [filterClass, setFilterClass] = useState<number | 'all'>('all')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getRequest('/api/classes/lessons', true)
            .then(res => setLessons(res?.data ?? res ?? []))
            .catch(() => {})
            .finally(() => setLoading(false))
    }, [])

    const visible = filterClass === 'all' ? lessons : lessons.filter(l => l.class_id === filterClass)

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
                        {[1,2,3].map(i => (
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
                                        {lesson.content && <p className="text-[11px] text-gray-400 truncate mt-0.5">{lesson.content}</p>}
                                    </div>
                                    {cls && <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{cls.name}</span>}
                                    {lesson.created_at && <span className="text-[11px] text-gray-400 flex-shrink-0">{new Date(lesson.created_at).toLocaleDateString()}</span>}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {showModal && <CreateLessonModal classes={classes} onClose={() => setShowModal(false)} onCreate={l => { setLessons(prev => [l, ...prev]); setShowModal(false) }} />}
        </div>
    )
}

const LESSON_TYPES = ['video', 'text', 'exercise', 'quiz', 'presentation', 'other']

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
        QuestionService.getGradeList().then(setGrades).catch(() => {})
        QuestionService.getCategoryList().then(setSubjects).catch(() => {})
        LessonService.getMyLessons().then((res) => {
            console.log('RESSS LESSON', res);
            
        })
    }, [])

    const handleSubjectChange = (id: number | '') => {
        setSubjectId(id)
        setTopicId('')
        setTopics([])
        if (id) QuestionService.getTopicList(id as number).then(setTopics).catch(() => {})
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
                classId: classId,
                gradeId: gradeId || undefined,
                subjectId: subjectId || undefined,
                topicId: topicId || undefined,
                media_url: 'no-url.png',
                estimated_minutes: 15,
                lesson_type: lessonType || undefined,
            }
            let res = await LessonService.createLesson(payload);
            console.log('RESSS===', res);
            
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
                    {/* Title */}
                    <Field label="Title" required>
                        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Introduction to Algebra" className={INPUT} />
                    </Field>

                    {/* Class + Lesson Type */}
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

                    {/* Grade + Subject */}
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

                    {/* Topic — only shown when subject selected */}
                    {subjectId !== '' && (
                        <Field label="Topic">
                            <select value={topicId} onChange={e => setTopicId(e.target.value ? Number(e.target.value) : '')} className={SELECT}>
                                <option value="">Any topic</option>
                                {topics.map((t: any) => <option key={t.id} value={t.id}>{t.name}</option>)}
                            </select>
                        </Field>
                    )}

                    {/* Description */}
                    <Field label="Description">
                        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Short summary of the lesson…" rows={2} className={INPUT + " resize-none"} />
                    </Field>

                    {/* Content */}
                    <Field label="Content">
                        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Lesson content or notes…" rows={4} className={INPUT + " resize-none"} />
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

// ── Tab 3: Assignments ─────────────────────────────────────────────────────

function AssignmentsTab({ classes }: { classes: ClassItem[] }) {
    const [assignments, setAssignments] = useState<Assignment[]>([])
    const [loading, setLoading] = useState(true)
    const [filterClass, setFilterClass] = useState<number | 'all'>('all')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getRequest('/api/classes/assignments', true)
            .then(res => setAssignments(res?.data ?? res ?? []))
            .catch(() => {})
            .finally(() => setLoading(false))
    }, [])

    const visible = filterClass === 'all' ? assignments : assignments.filter(a => a.class_id === filterClass)

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
                        {[1,2,3].map(i => (
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
                                <div key={a.id} className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50">
                                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                        <ClipboardList size={14} className="text-green-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-medium text-gray-900">{a.title}</p>
                                        {a.description && <p className="text-[11px] text-gray-400 truncate mt-0.5">{a.description}</p>}
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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const submit = async () => {
        if (!title.trim()) { setError('Title is required'); return }
        if (!classId) { setError('Select a class'); return }
        setLoading(true); setError('')
        try {
            const res = await postRequest('/api/classes/assign-assignment', { title: title.trim(), description: description.trim() || undefined, due_date: dueDate || undefined, class_id: classId }, true)
            onCreate(res?.data ?? res)
        } catch { setError('Failed to create assignment') }
        finally { setLoading(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[15px] font-semibold text-gray-900">New Assignment</h3>
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
                    <Field label="Description"><textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Instructions or details…" rows={3} className={INPUT + " resize-none"} /></Field>
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

// ── Main Page ──────────────────────────────────────────────────────────────

export function TeacherPage() {
    const { handleGetUsers, user } = useAppData()
    const [tab, setTab] = useState<Tab>('classes')
    const [classes, setClasses] = useState<ClassItem[]>([])
    const [allUsers, setAllUsers] = useState<User[]>([])
    const [loadingClasses, setLoadingClasses] = useState(true)

    useEffect(() => {
        ClassService.getClassList()
            .then(setClasses)
            .catch(() => {})
            .finally(() => setLoadingClasses(false))
        handleGetUsers({ page: 1, limit: 999 })
            .then(res => setAllUsers(res?.users ?? []))
            .catch(() => {})
    }, [])

    const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: 'classes',     label: 'Classes',     icon: <GraduationCap size={14} /> },
        { id: 'lessons',     label: 'Lessons',     icon: <FileText size={14} /> },
        { id: 'assignments', label: 'Assignments', icon: <LayoutList size={14} /> },
    ]

    return (
        <div>
            {/* Tab bar */}
            <div className="flex gap-1 mb-6 border-b border-gray-200">
                {TABS.map(t => (
                    <button key={t.id} onClick={() => setTab(t.id)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium border-b-2 -mb-px transition-colors ${tab === t.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                    >
                        {t.icon}{t.label}
                    </button>
                ))}
            </div>

            {tab === 'classes'     && <ClassesTab classes={classes} allUsers={allUsers} loadingClasses={loadingClasses} teacherId={user?.id ?? 0} setClasses={setClasses} />}
            {tab === 'lessons'     && <LessonsTab classes={classes} />}
            {tab === 'assignments' && <AssignmentsTab classes={classes} />}
        </div>
    )
}
