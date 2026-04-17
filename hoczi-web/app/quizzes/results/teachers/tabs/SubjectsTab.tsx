'use client'

import { useEffect, useState } from "react"
import { ClassItem } from "@/data/services/class.service"
import { LessonService } from "@/data/services/lesson.service"
import { Plus, X, BookOpen, Loader2 } from "lucide-react"
import { Field, INPUT, SubjectOption } from "./shared"

function AddToClassModal({ subject, classes, onClose, onDone, onSubjectAdded }: {
    subject: SubjectOption; classes: ClassItem[]; onClose: () => void; onDone: () => void
    onSubjectAdded: (classId: number, subject: SubjectOption) => void
}) {
    const [classId, setClassId] = useState<number | ''>(classes[0]?.id ?? '')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [done, setDone] = useState(false)

    const submit = async () => {
        if (!classId) { setError('Select a class'); return }
        setLoading(true); setError('')
        try {
            await LessonService.addSubjectToClass({ class_id: classId, subject_id: subject.id })
            onSubjectAdded(classId, subject)
            setDone(true)
            setTimeout(onDone, 800)
        } catch { setError('Failed — please try again') }
        finally { setLoading(false) }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4 p-6">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[15px] font-semibold text-gray-900">Add to Class</h3>
                    <button onClick={onClose} className="p-1 rounded hover:bg-gray-100"><X size={15} className="text-gray-400" /></button>
                </div>
                {done ? (
                    <p className="text-[13px] text-green-600 text-center py-4">Added successfully!</p>
                ) : (
                    <>
                        <div className="space-y-3">
                            <p className="text-[13px] text-gray-500">Subject: <span className="font-medium text-gray-900">{subject.name}</span></p>
                            <Field label="Class" required>
                                <select value={classId} onChange={e => setClassId(Number(e.target.value))} className={INPUT}>
                                    <option value="">Select class</option>
                                    {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                </select>
                            </Field>
                            {error && <p className="text-[12px] text-red-500">{error}</p>}
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50">Cancel</button>
                            <button onClick={submit} disabled={loading} className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 disabled:opacity-50 flex items-center justify-center gap-1.5">
                                {loading && <Loader2 size={13} className="animate-spin" />} Add
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export function SubjectsTab({ classes, setClasses }: {
    classes: ClassItem[]
    setClasses: React.Dispatch<React.SetStateAction<ClassItem[]>>
}) {
    const [subjects, setSubjects] = useState<SubjectOption[]>([])
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState<SubjectOption | null>(null)

    useEffect(() => {
        LessonService.getAllSubjects().then(res => {
            setSubjects(res?.data ?? res ?? [])
        }).catch(() => { }).finally(() => setLoading(false))
    }, [])

    const handleSubjectAdded = (classId: number, subject: SubjectOption) => {
        setClasses(prev => prev.map(c => {
            if (c.id !== classId) return c
            const alreadyAdded = (c.class_subjects ?? []).some(cs => cs.subject_id === subject.id)
            if (alreadyAdded) return c
            const newEntry = { id: Date.now(), class_id: classId, subject_id: subject.id, status: 'active', subject: { id: subject.id, name: subject.name } }
            return { ...c, class_subjects: [...(c.class_subjects ?? []), newEntry] }
        }))
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[15px] font-semibold text-gray-900">Subjects</h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                {loading ? (
                    <div className="py-14 text-center"><Loader2 size={20} className="mx-auto text-gray-300 animate-spin" /></div>
                ) : subjects.length === 0 ? (
                    <div className="py-14 text-center"><BookOpen size={28} className="mx-auto text-gray-300 mb-2" /><p className="text-[13px] text-gray-400">No subjects found</p></div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {subjects.map((s, i) => (
                            <div key={s.id ?? i} className="px-5 py-3.5 flex items-center gap-4 hover:bg-gray-50">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <BookOpen size={14} className="text-blue-500" />
                                </div>
                                <p className="text-[13px] font-medium text-gray-900 flex-1">{s.name}</p>
                                <button
                                    onClick={() => setSelected(s)}
                                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-blue-600 text-white text-[12px] hover:bg-blue-500"
                                >
                                    <Plus size={11} /> Add to class
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {selected && (
                <AddToClassModal
                    subject={selected}
                    classes={classes}
                    onClose={() => setSelected(null)}
                    onDone={() => setSelected(null)}
                    onSubjectAdded={handleSubjectAdded}
                />
            )}
        </div>
    )
}
