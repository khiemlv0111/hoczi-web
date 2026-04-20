'use client'

import { useEffect, useState } from "react"
import { useAppData, User } from "@/app/context/AppContext"
import { ClassService, ClassItem } from "@/data/services/class.service"
import { LessonService } from "@/data/services/lesson.service"
import { QuestionService } from "@/data/services/question.service"
import {
    Plus, X, Users, BookOpen, Trash2, UserPlus, ChevronRight,
    Loader2, School, Hash, ClipboardList, GraduationCap,
} from "lucide-react"
import { Field, INPUT, Member, Assignment, AssignTarget } from "./shared"

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
            const assignmentPayload: Assignment = {
                title: title.trim(),
                description: description.trim(),
                due_date: dueDate,
                class_id: target.classId,
                class_subject_id: 1,
            }
            await LessonService.createAssignment(assignmentPayload)
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

function AssignToStudentModal({ studentId, studentName, onClose }: {
    classId: number; studentId: number; studentName: string; onClose: () => void
}) {
    const [assignments, setAssignments] = useState<Assignment[]>([])
    const [selected, setSelected] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [done, setDone] = useState(false)

    useEffect(() => {
        LessonService.getAllAssignments()
            .then(res => setAssignments(res?.data ?? res ?? []))
            .catch(() => setError('Failed to load assignments'))
            .finally(() => setLoading(false))
    }, [])

    const submit = async () => {
        if (!selected) { setError('Select an assignment'); return }
        const base = assignments.find(a => a.id === selected)!
        setSubmitting(true); setError('')
        try {
            await LessonService.assignStudentAssignment({ assignment_id: base.id!, student_id: studentId })
            setDone(true)
        } catch { setError('Failed to assign') }
        finally { setSubmitting(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="text-[15px] font-semibold text-gray-900">Assign to {studentName}</h3>
                        <p className="text-[11px] text-gray-400 mt-0.5">Pick an existing assignment</p>
                    </div>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                {done ? (
                    <div className="py-6 flex flex-col items-center gap-3 text-center">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                            <ClipboardList size={18} className="text-green-500" />
                        </div>
                        <p className="text-[13px] font-medium text-gray-900">Assignment sent!</p>
                        <p className="text-[12px] text-gray-400">{studentName} has been assigned.</p>
                        <button onClick={onClose} className="mt-2 px-5 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500">Done</button>
                    </div>
                ) : (
                    <>
                        <div className="flex-1 overflow-y-auto -mx-6 px-6">
                            {loading ? (
                                <div className="space-y-2">
                                    {[1, 2, 3].map(i => <div key={i} className="h-14 bg-gray-100 rounded-lg animate-pulse" />)}
                                </div>
                            ) : assignments.length === 0 ? (
                                <div className="py-10 text-center">
                                    <ClipboardList size={24} className="mx-auto text-gray-300 mb-2" />
                                    <p className="text-[12px] text-gray-400">No assignments available</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {assignments.map(a => (
                                        <button key={a.id} onClick={() => setSelected(a.id!)}
                                            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${selected === a.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}>
                                            <p className="text-[13px] font-medium text-gray-900">{a.title}</p>
                                            <div className="flex gap-3 mt-0.5">
                                                {a.due_date && <p className="text-[11px] text-gray-400">Due {new Date(a.due_date).toLocaleDateString()}</p>}
                                                {a.description && <p className="text-[11px] text-gray-400 truncate">{a.description}</p>}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        {error && <p className="text-[12px] text-red-500 mt-3">{error}</p>}
                        <div className="flex gap-2 mt-5">
                            <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Cancel</button>
                            <button onClick={submit} disabled={submitting || !selected} className="flex-1 py-2 rounded-lg bg-green-600 text-white text-[13px] font-medium hover:bg-green-500 disabled:opacity-50 flex items-center justify-center gap-1.5">
                                {submitting && <Loader2 size={13} className="animate-spin" />} Assign
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

function CreateClassModal({ onClose, onCreate, teacherId }: {
    onClose: () => void; onCreate: (cls: ClassItem) => void; teacherId: number
}) {
    const { user } = useAppData()
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [description, setDescription] = useState('')
    const [gradeId, setGradeId] = useState<number | ''>('')
    const [grades, setGrades] = useState<any[]>([])
    const [loadingGrades, setLoadingGrades] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        QuestionService.getGradeList()
            .then(res => setGrades(res ?? []))
            .catch(() => { })
            .finally(() => setLoadingGrades(false))
    }, [])

    const submit = async () => {
        if (!name.trim()) { setError('Class name is required'); return }
        if (!code.trim()) { setError('Class code is required'); return }
        if (!user?.tenant?.id) { setError('User has no tenant assigned'); return }
        setLoading(true); setError('')
        try {
            const cls = await ClassService.createClass({
                name: name.trim(),
                code: code.trim().toUpperCase(),
                description: description.trim() || undefined,
                teacher_id: teacherId,
                school_name: user.tenant.name,
                tenant_id: user.tenant.id,
                grade_id: gradeId !== '' ? gradeId as number : undefined,
            })
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

                    <Field label="Grade">
                        {loadingGrades ? (
                            <div className={INPUT + " flex items-center gap-2 text-gray-400"}>
                                <Loader2 size={13} className="animate-spin" />
                                <span className="text-[13px]">Loading grades…</span>
                            </div>
                        ) : (
                            <div className="relative">
                                <GraduationCap size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                <select
                                    value={gradeId}
                                    onChange={e => setGradeId(e.target.value ? Number(e.target.value) : '')}
                                    className={INPUT + " pl-8 appearance-none"}
                                >
                                    <option value="">Select a grade…</option>
                                    {grades.map(g => (
                                        <option key={g.id} value={g.id}>{g.name}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </Field>
                    <Field label="Description"><textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Optional description" rows={3} className={INPUT + " resize-none"} /></Field>
                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                </div>
                <div className="flex gap-2 mt-5">
                    <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Cancel</button>
                    <button onClick={submit} disabled={loading || loadingGrades} className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center gap-1.5">
                        {loading && <Loader2 size={13} className="animate-spin" />} Create
                    </button>
                </div>
            </div>
        </div>
    )
}

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

export function ClassesTab({ classes, allUsers, loadingClasses, teacherId, setClasses }: {
    classes: ClassItem[]
    allUsers: User[]
    loadingClasses: boolean
    teacherId: number
    setClasses: React.Dispatch<React.SetStateAction<ClassItem[]>>
}) {
    const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null)
    const [members, setMembers] = useState<Member[]>([])
    const [removingId, setRemovingId] = useState<number | null>(null)
    const [confirmRemoveId, setConfirmRemoveId] = useState<number | null>(null)
    const [showCreate, setShowCreate] = useState(false)
    const [showAddMember, setShowAddMember] = useState(false)
    const [assignTarget, setAssignTarget] = useState<AssignTarget | null>(null)
    const [assignStudentTarget, setAssignStudentTarget] = useState<{ classId: number; studentId: number; studentName: string } | null>(null)

    const selectClass = (cls: ClassItem) => {
        setSelectedClass(cls)
        setMembers((cls.members as Member[]) ?? [])

        console.log('ClassItem', cls);
        
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
        setConfirmRemoveId(null)
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
        <div className="flex flex-col md:flex-row gap-5">
            {/* Left: class list */}
            <div className={`md:w-64 md:flex-shrink-0 flex flex-col gap-3 ${selectedClass ? 'hidden md:flex' : 'flex'}`}>
                <div className="flex items-center justify-between">
                    <h2 className="text-[14px] font-semibold text-gray-900">Classes</h2>
                    <button onClick={() => setShowCreate(true)} className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500">
                        <Plus size={12} /> New
                    </button>
                </div>
                {loadingClasses ? (
                    [1, 2, 3].map(i => <div key={i} className="h-14 bg-white rounded-lg border border-gray-200 animate-pulse" />)
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
            <div className={`flex-1 min-w-0 ${selectedClass ? 'block' : 'hidden md:block'}`}>
                {!selectedClass ? (
                    <div className="h-64 flex items-center justify-center text-center text-gray-400">
                        <div><BookOpen size={32} className="mx-auto mb-2 opacity-30" /><p className="text-[13px]">Select a class to manage members</p></div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        <button onClick={() => setSelectedClass(null)} className="md:hidden flex items-center gap-1.5 text-[13px] text-blue-600 font-medium mb-1 self-start">
                            <ChevronRight size={14} className="rotate-180" /> Back to Classes
                        </button>
                        <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-center justify-between flex-wrap gap-3">
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
                                    {selectedClass.tenant && <span className="flex items-center gap-1 text-[11px] text-gray-500"><School size={11} />{selectedClass.tenant.code}</span>}
                                    {selectedClass.tenant && <p className="text-[12px] text-gray-400">{selectedClass.tenant.name}</p>}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
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

                        {(selectedClass.class_subjects ?? []).length > 0 && (
                            <div className="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center gap-2 flex-wrap">
                                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mr-1">Subjects</span>
                                {(selectedClass.class_subjects ?? []).map(cs => (
                                    <span key={cs.id} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[12px] font-medium text-indigo-700">
                                        <BookOpen size={11} className="flex-shrink-0" />
                                        {cs.subject?.name ?? `Subject #${cs.subject_id}`}
                                    </span>
                                ))}
                            </div>
                        )}

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
                                            <button onClick={() => setAssignStudentTarget({ classId: selectedClass.id, studentId: member.student.id, studentName: member.student.name })}
                                                className="p-1.5 rounded-md text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors" title="Assign">
                                                <ClipboardList size={13} />
                                            </button>
                                            {confirmRemoveId === member.student.id ? (
                                                <div className="flex items-center gap-1">
                                                    <button onClick={() => removeMember(member)} disabled={removingId === member.student.id}
                                                        className="px-2 py-0.5 text-[11px] font-medium rounded bg-red-500 text-white hover:bg-red-600 disabled:opacity-40">
                                                        {removingId === member.student.id ? <Loader2 size={11} className="animate-spin" /> : 'Remove'}
                                                    </button>
                                                    <button onClick={() => setConfirmRemoveId(null)}
                                                        className="px-2 py-0.5 text-[11px] font-medium rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <button onClick={() => setConfirmRemoveId(member.student.id)} disabled={removingId === member.student.id}
                                                    className="p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40">
                                                    {removingId === member.student.id ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
                                                </button>
                                            )}
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
            {assignStudentTarget && (
                <AssignToStudentModal
                    classId={assignStudentTarget.classId}
                    studentId={assignStudentTarget.studentId}
                    studentName={assignStudentTarget.studentName}
                    onClose={() => setAssignStudentTarget(null)}
                />
            )}
        </div>
    )
}
