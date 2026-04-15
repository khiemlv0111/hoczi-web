'use client'

import { useEffect, useState } from "react"
import { useAppData, User } from "@/app/context/AppContext"
import { ClassService, ClassItem, ClassMember } from "@/data/services/class.service"
import { Plus, X, Users, BookOpen, Trash2, UserPlus, ChevronRight, Loader2, School, Hash } from "lucide-react"

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

// ── Create Class Modal ─────────────────────────────────────────────────────

function CreateClassModal({ onClose, onCreate, teacherId }: {
    onClose: () => void
    onCreate: (cls: ClassItem) => void
    teacherId: number
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
        setLoading(true)
        setError('')
        try {
            const cls = await ClassService.createClass({
                name: name.trim(),
                code: code.trim().toUpperCase(),
                description: description.trim() || undefined,
                teacher_id: teacherId,
                school_name: schoolName.trim() || undefined,
            })
            onCreate(cls)
        } catch {
            setError('Failed to create class')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[15px] font-semibold text-gray-900">Create Class</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
                        <X size={15} className="text-gray-400" />
                    </button>
                </div>
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Class Name" required>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="e.g. Math Grade 10"
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </Field>
                        <Field label="Class Code" required>
                            <input
                                value={code}
                                onChange={e => setCode(e.target.value)}
                                placeholder="e.g. MATH10A"
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                            />
                        </Field>
                    </div>
                    <Field label="School Name">
                        <input
                            value={schoolName}
                            onChange={e => setSchoolName(e.target.value)}
                            placeholder="e.g. Hanoi High School"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </Field>
                    <Field label="Description">
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Optional description"
                            rows={3}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </Field>
                    {error && <p className="text-[12px] text-red-500">{error}</p>}
                </div>
                <div className="flex gap-2 mt-5">
                    <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">
                        Cancel
                    </button>
                    <button
                        onClick={submit}
                        disabled={loading}
                        className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center gap-1.5"
                    >
                        {loading && <Loader2 size={13} className="animate-spin" />}
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}

// ── Add Member Modal ───────────────────────────────────────────────────────

function AddMemberModal({ classId, existingIds, allUsers, onClose, onAdded }: {
    classId: number
    existingIds: number[]
    allUsers: User[]
    onClose: () => void
    onAdded: (userId: number) => void
}) {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState<number | null>(null)

    const available = allUsers.filter(
        u => !existingIds.includes(u.id) &&
            (u.name.toLowerCase().includes(search.toLowerCase()) ||
             u.email.toLowerCase().includes(search.toLowerCase()))
    )

    const add = async (user: User) => {
        setLoading(user.id)
        try {
            await ClassService.addMember({ class_id: classId, user_id: user.id })
            onAdded(user.id)
        } finally {
            setLoading(null)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[15px] font-semibold text-gray-900">Add Member</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
                        <X size={15} className="text-gray-400" />
                    </button>
                </div>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search by name or email…"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="max-h-64 overflow-y-auto space-y-1">
                    {available.length === 0 ? (
                        <p className="text-[12px] text-gray-400 text-center py-6">No users available</p>
                    ) : available.map(u => (
                        <div key={u.id} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50">
                            <div>
                                <p className="text-[13px] font-medium text-gray-800">{u.name}</p>
                                <p className="text-[11px] text-gray-400">{u.email}</p>
                            </div>
                            <button
                                onClick={() => add(u)}
                                disabled={loading === u.id}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-blue-600 text-white text-[12px] hover:bg-blue-500 disabled:opacity-50"
                            >
                                {loading === u.id ? <Loader2 size={11} className="animate-spin" /> : <UserPlus size={11} />}
                                Add
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ── Main Page ──────────────────────────────────────────────────────────────

export function TeacherPage() {
    const { handleGetUsers, user } = useAppData()

    const [classes, setClasses] = useState<ClassItem[]>([])
    const [allUsers, setAllUsers] = useState<User[]>([])
    const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null)
    const [members, setMembers] = useState<ClassMember[]>([])

    const [loadingClasses, setLoadingClasses] = useState(true)
    const [loadingMembers, setLoadingMembers] = useState(false)
    const [removingId, setRemovingId] = useState<number | null>(null)

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showAddMember, setShowAddMember] = useState(false)

    // Load classes + users on mount
    useEffect(() => {
        ClassService.getClassList()
            .then((res) => {
                console.log('All class', res);
                
                setClasses(res)
            })
            .catch(() => {})
            .finally(() => setLoadingClasses(false))

        handleGetUsers({ page: 1, limit: 999 })
            .then(res => setAllUsers(res?.users ?? []))
            .catch(() => {})
    }, [])

    // Load members when a class is selected
    const selectClass = async (cls: ClassItem) => {
        setSelectedClass(cls)
        setMembers([])
        setLoadingMembers(true)
        try {
            const detail = await ClassService.getClassDetail(cls.id)
            setMembers(detail.members ?? [])
        } finally {
            setLoadingMembers(false)
        }
    }

    const handleClassCreated = (cls: ClassItem) => {
        setClasses(prev => [cls, ...prev])
        setShowCreateModal(false)
        selectClass(cls)
    }

    const handleMemberAdded = (userId: number) => {
        const user = allUsers.find(u => u.id === userId)
        if (user) {
            setMembers(prev => [...prev, {
                id: Date.now(),
                user_id: user.id,
                class_id: selectedClass!.id,
                name: user.name,
                email: user.email,
            }])
        }
    }

    const removeMember = async (member: ClassMember) => {
        setRemovingId(member.user_id)
        try {
            await ClassService.removeMember(selectedClass!.id, member.user_id)
            setMembers(prev => prev.filter(m => m.user_id !== member.user_id))
        } finally {
            setRemovingId(null)
        }
    }

    const memberIds = members.map(m => m.user_id)

    return (
        <div className="flex gap-5 h-full">

            {/* ── Left: class list ───────────────────────────────────────── */}
            <div className="w-64 flex-shrink-0 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-[14px] font-semibold text-gray-900">Classes</h2>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-600 text-white rounded-lg text-[12px] font-medium hover:bg-blue-500 transition-colors"
                    >
                        <Plus size={12} /> New
                    </button>
                </div>

                {loadingClasses ? (
                    <div className="space-y-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="h-14 bg-white rounded-lg border border-gray-200 animate-pulse" />
                        ))}
                    </div>
                ) : classes.length === 0 ? (
                    <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                        <BookOpen size={20} className="mx-auto text-gray-300 mb-2" />
                        <p className="text-[12px] text-gray-400">No classes yet</p>
                    </div>
                ) : (
                    <div className="space-y-1.5">
                        {classes.map(cls => (
                            <button
                                key={cls.id}
                                onClick={() => selectClass(cls)}
                                className={`w-full text-left px-3 py-2.5 rounded-lg border transition-all flex items-center justify-between
                                    ${selectedClass?.id === cls.id
                                        ? 'bg-blue-50 border-blue-200 text-blue-800'
                                        : 'bg-white border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-gray-50'
                                    }`}
                            >
                                <div className="min-w-0">
                                    <p className="text-[13px] font-medium truncate">{cls.name}</p>
                                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                                        {cls.code && (
                                            <span className="text-[10px] font-mono text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">
                                                {cls.code}
                                            </span>
                                        )}
                                        {cls.school_name && (
                                            <span className="text-[11px] text-gray-400 truncate">{cls.school_name}</span>
                                        )}
                                    </div>
                                </div>
                                <ChevronRight size={13} className="flex-shrink-0 text-gray-400" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Right: class detail / members ─────────────────────────── */}
            <div className="flex-1 min-w-0">
                {!selectedClass ? (
                    <div className="h-full flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <BookOpen size={32} className="mx-auto mb-2 opacity-30" />
                            <p className="text-[13px]">Select a class to manage members</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {/* Class header */}
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
                                    {selectedClass.school_name && (
                                        <span className="flex items-center gap-1 text-[11px] text-gray-500">
                                            <School size={11} />{selectedClass.school_name}
                                        </span>
                                    )}
                                    {selectedClass.description && (
                                        <p className="text-[12px] text-gray-400">{selectedClass.description}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1.5 text-[12px] text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                                    <Users size={12} /> {members.length} member{members.length !== 1 ? 's' : ''}
                                </span>
                                <button
                                    onClick={() => setShowAddMember(true)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-[12px] font-medium rounded-lg hover:bg-blue-500 transition-colors"
                                >
                                    <UserPlus size={12} /> Add Member
                                </button>
                            </div>
                        </div>

                        {/* Members table */}
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                            <div className="px-5 py-3 border-b border-gray-100">
                                <p className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Members</p>
                            </div>
                            {loadingMembers ? (
                                <div className="divide-y divide-gray-100">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="px-5 py-3 flex items-center gap-3 animate-pulse">
                                            <div className="w-8 h-8 rounded-full bg-gray-100" />
                                            <div className="flex-1 space-y-1.5">
                                                <div className="h-3 bg-gray-100 rounded w-1/3" />
                                                <div className="h-2.5 bg-gray-100 rounded w-1/4" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : members.length === 0 ? (
                                <div className="py-10 text-center">
                                    <Users size={24} className="mx-auto text-gray-300 mb-2" />
                                    <p className="text-[13px] text-gray-400">No members yet — add some!</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {members.map(member => (
                                        <div key={member.user_id} className="px-5 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                                <span className="text-[12px] font-semibold text-blue-500">
                                                    {member.name?.charAt(0)?.toUpperCase() ?? '?'}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[13px] font-medium text-gray-900 truncate">{member.name}</p>
                                                <p className="text-[11px] text-gray-400 truncate">{member.email}</p>
                                            </div>
                                            <button
                                                onClick={() => removeMember(member)}
                                                disabled={removingId === member.user_id}
                                                className="p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40"
                                            >
                                                {removingId === member.user_id
                                                    ? <Loader2 size={13} className="animate-spin" />
                                                    : <Trash2 size={13} />
                                                }
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            {showCreateModal && (
                <CreateClassModal
                    onClose={() => setShowCreateModal(false)}
                    onCreate={handleClassCreated}
                    teacherId={user?.id ?? 0}
                />
            )}
            {showAddMember && selectedClass && (
                <AddMemberModal
                    classId={selectedClass.id}
                    existingIds={memberIds}
                    allUsers={allUsers}
                    onClose={() => setShowAddMember(false)}
                    onAdded={(userId) => {
                        handleMemberAdded(userId)
                    }}
                />
            )}
        </div>
    )
}
