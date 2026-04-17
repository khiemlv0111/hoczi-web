'use client'

import { useEffect, useState } from "react"
import { useAppData, User } from "@/app/context/AppContext"
import { ClassService, ClassItem } from "@/data/services/class.service"
import { GraduationCap, FileText, LayoutList, BookOpen, HelpCircle } from "lucide-react"
import { ClassesTab } from "./tabs/ClassesTab"
import { LessonsTab } from "./tabs/LessonsTab"
import { AssignmentsTab } from "./tabs/AssignmentsTab"
import { SubjectsTab } from "./tabs/SubjectsTab"
import { QuizzesTab } from "./tabs/QuizzesTab"

type Tab = 'classes' | 'lessons' | 'assignments' | 'subjects' | 'quizzes'

export function TeacherPage() {
    const { handleGetUsers, user } = useAppData()
    const [tab, setTab] = useState<Tab>('classes')
    const [classes, setClasses] = useState<ClassItem[]>([])
    const [allUsers, setAllUsers] = useState<User[]>([])
    const [loadingClasses, setLoadingClasses] = useState(true)

    useEffect(() => {
        ClassService.getClassList()
            .then(setClasses)
            .catch(() => { })
            .finally(() => setLoadingClasses(false))
        handleGetUsers({ page: 1, limit: 999 })
            .then(res => setAllUsers(res?.users ?? []))
            .catch(() => { })
    }, [])

    const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: 'classes', label: 'Classes', icon: <GraduationCap size={14} /> },
        { id: 'lessons', label: 'Lessons', icon: <FileText size={14} /> },
        { id: 'assignments', label: 'Assignments', icon: <LayoutList size={14} /> },
        { id: 'subjects', label: 'Subjects', icon: <BookOpen size={14} /> },
        { id: 'quizzes', label: 'Quizzes', icon: <HelpCircle size={14} /> },
    ]

    return (
        <div>
            <div className="flex gap-1 mb-6 border-b border-gray-200">
                {TABS.map(t => (
                    <button key={t.id} onClick={() => setTab(t.id)}
                        className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium border-b-2 -mb-px transition-colors ${tab === t.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                    >
                        {t.icon}{t.label}
                    </button>
                ))}
            </div>

            {tab === 'classes' && <ClassesTab classes={classes} allUsers={allUsers} loadingClasses={loadingClasses} teacherId={user?.id ?? 0} setClasses={setClasses} />}
            {tab === 'lessons' && <LessonsTab classes={classes} />}
            {tab === 'assignments' && <AssignmentsTab classes={classes} />}
            {tab === 'subjects' && <SubjectsTab classes={classes} setClasses={setClasses} />}
            {tab === 'quizzes' && <QuizzesTab classes={classes} />}
        </div>
    )
}
