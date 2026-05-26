'use client'

import { CourseService, CourseItem } from "@/data/services/course.service";
import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Plus } from "lucide-react";
import { CommonModal } from "@/app/components/modal/CommonModal";
import { CreateCourseForm } from "./CreateCourseForm";
import Link from "next/link";

const SUBJECTS = [
    { code: 'math', label: 'Mathematics' },
    { code: 'mathematic', label: 'Toán học' },
    { code: 'science', label: 'Science' },
    { code: 'chemistry', label: 'Chemistry' },
    { code: 'history', label: 'Lịch sử' },
    { code: 'literature', label: 'Văn học' },
    { code: 'computer_science', label: 'Computer Science' },
    { code: 'it', label: 'IT' },
    { code: 'english', label: 'English' },
    { code: 'chinese', label: 'Chinese' },
];

type SubjectState = {
    open: boolean;
    loading: boolean;
    courses: CourseItem[];
    loaded: boolean;
};

export function AdminCourseTab() {
    const [subjects, setSubjects] = useState<Record<string, SubjectState>>(
        Object.fromEntries(SUBJECTS.map(s => [s.code, { open: false, loading: false, courses: [], loaded: false }]))
    );
    const [modalOpen, setModalOpen] = useState(false);

    const toggle = async (code: string) => {
        const current = subjects[code];

        if (current.open) {
            setSubjects(prev => ({ ...prev, [code]: { ...prev[code], open: false } }));
            return;
        }

        if (current.loaded) {
            setSubjects(prev => ({ ...prev, [code]: { ...prev[code], open: true } }));
            return;
        }

        setSubjects(prev => ({ ...prev, [code]: { ...prev[code], open: true, loading: true } }));

        try {
            const res = await CourseService.getCoursesBySubjectCode(code);
            setSubjects(prev => ({
                ...prev,
                [code]: { open: true, loading: false, courses: res ?? [], loaded: true },
            }));
        } catch {
            setSubjects(prev => ({ ...prev, [code]: { ...prev[code], loading: false, loaded: true } }));
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Courses</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Browse courses by subject.</p>
                </div>
                <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                >
                    <Plus size={14} />
                    Add Course
                </button>
            </div>

            <CommonModal open={modalOpen} onClose={() => setModalOpen(false)} title="Add New Course">
                <CreateCourseForm
                    onSuccess={(course) => {
                        setModalOpen(false);
                        const key = course.subjectCode ?? course.subject_code;
                        if (key) {
                            setSubjects(prev => ({
                                ...prev,
                                [key]: {
                                    ...prev[key],
                                    courses: [course, ...(prev[key]?.courses ?? [])],
                                    loaded: true,
                                    open: true,
                                },
                            }));
                        }
                    }}
                    onCancel={() => setModalOpen(false)}
                />
            </CommonModal>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                {SUBJECTS.map(({ code, label }, idx) => {
                    const state = subjects[code];
                    console.log('SUBJESTSSSS', state);
                    
                    return (
                        <div key={code}>
                            <button
                                onClick={() => toggle(code)}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left group"
                            >
                                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 text-xs font-bold flex items-center justify-center transition-colors">
                                    {idx + 1}
                                </span>
                                <span className="flex-1 text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                                    {label}
                                </span>
                                <span className="text-gray-400 transition-transform duration-150">
                                    {state.open
                                        ? <ChevronDown size={15} />
                                        : <ChevronRight size={15} />
                                    }
                                </span>
                            </button>

                            {state.open && (
                                <div className="bg-gray-50 border-t border-gray-100 px-4 py-2">
                                    {state.loading ? (
                                        <div className="space-y-2 py-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="flex items-center gap-3 animate-pulse">
                                                    <div className="w-7 h-7 rounded-lg bg-gray-200" />
                                                    <div className="h-3 bg-gray-200 rounded w-48" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : state.courses.length === 0 ? (
                                        <p className="text-xs text-gray-400 py-3 text-center">No courses found for this subject.</p>
                                    ) : (
                                        <ul className="py-1 space-y-0.5">
                                            {state.courses.map((course) => (
                                                <li key={course.id}>
                                                    <Link
                                                        href={`/admin/studies/courses/${course.id}`}
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white hover:shadow-sm transition-all text-sm text-gray-700 hover:text-blue-700 group/item"
                                                    >
                                                        <BookOpen size={14} className="text-gray-400 group-hover/item:text-blue-500 flex-shrink-0" />
                                                        <span className="flex-1 truncate">{course.title}</span>
                                                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                                                            course.status === 'active'
                                                                ? 'bg-green-100 text-green-600'
                                                                : 'bg-gray-100 text-gray-400'
                                                        }`}>
                                                            {course.status}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
