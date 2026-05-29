'use client'

import { CourseService } from "@/data/services/course.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Lock } from "lucide-react";

type CourseModuleLesson = {
    id: string;
    lessonId: number;
    orderIndex: number;
    isPreview: boolean;
};

type CourseModule = {
    id: string;
    title: string;
    slug: string;
    description: string | null;
    status: string;
    orderIndex: number;
    courseModuleLessons: CourseModuleLesson[];
};

type CourseDetail = {
    id: string;
    description: string;
    languageCode: string;
    levelCode: string;
    coverUrl: string | null;
    createdAt: string;
    modules: CourseModule[];
};

function ModuleRow({ module, index }: { module: CourseModule; index: number }) {
    const [open, setOpen] = useState(index === 0);
    const lessons = [...(module.courseModuleLessons ?? [])].sort((a, b) => a.orderIndex - b.orderIndex);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors text-left"
            >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 text-sm font-bold flex items-center justify-center">
                    {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{module.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{lessons.length} lesson{lessons.length !== 1 ? 's' : ''}</p>
                </div>
                <span className="text-gray-400 flex-shrink-0">
                    {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
            </button>

            {open && (
                <div className="border-t border-gray-100 divide-y divide-gray-100">
                    {lessons.length === 0 ? (
                        <p className="text-xs text-gray-400 py-4 text-center">No lessons yet.</p>
                    ) : lessons.map((ml, li) => (
                        <div
                            key={ml.id}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold flex items-center justify-center">
                                {li + 1}
                            </span>
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <BookOpen size={13} className="text-gray-400 flex-shrink-0" />
                                <span className="text-sm text-gray-700 truncate">Lesson {li + 1}</span>
                                {ml.isPreview && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-medium border border-blue-100">
                                        Preview
                                    </span>
                                )}
                            </div>
                            {!ml.isPreview && (
                                <Lock size={12} className="text-gray-300 flex-shrink-0" />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

interface Props {
    slug: string;
}

export function EnglishBookDetailPage({ slug }: Props) {
    const router = useRouter();
    const [course, setCourse] = useState<CourseDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        CourseService.getCourseDetail(Number(slug))
            .then(res => setCourse(res?.data ?? res))
            .finally(() => setLoading(false));
    }, [slug]);

    const sortedModules = [...(course?.modules ?? [])].sort((a, b) => a.orderIndex - b.orderIndex);
    const totalLessons = sortedModules.reduce((s, m) => s + (m.courseModuleLessons?.length ?? 0), 0);

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="max-w-2xl mx-auto">
                <button
                    onClick={() => router.back()}
                    className="text-gray-400 hover:text-gray-700 text-sm mb-6 flex items-center gap-1 transition-colors"
                >
                    ← Back
                </button>

                {loading ? (
                    <div className="space-y-4 animate-pulse">
                        <div className="h-40 bg-white border border-gray-200 rounded-2xl" />
                        <div className="h-20 bg-white border border-gray-200 rounded-xl" />
                        <div className="h-20 bg-white border border-gray-200 rounded-xl" />
                        <div className="h-20 bg-white border border-gray-200 rounded-xl" />
                    </div>
                ) : !course ? (
                    <div className="text-center py-20 text-gray-400">Course not found.</div>
                ) : (
                    <div className="space-y-5">
                        {/* Header card */}
                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            {course.coverUrl ? (
                                <img src={course.coverUrl} alt="" className="w-full h-44 object-cover" />
                            ) : (
                                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-5xl">
                                    🇬🇧
                                </div>
                            )}
                            <div className="p-5">
                                <p className="text-xs text-gray-400 mb-1">Course #{course.id}</p>
                                <h1 className="text-xl font-bold text-gray-900 leading-snug mb-3">
                                    {course.description}
                                </h1>
                                <div className="flex flex-wrap gap-2">
                                    {course.languageCode && (
                                        <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-medium">
                                            {course.languageCode.toUpperCase()}
                                        </span>
                                    )}
                                    {course.levelCode && (
                                        <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 font-medium">
                                            {course.levelCode}
                                        </span>
                                    )}
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">
                                        {sortedModules.length} module{sortedModules.length !== 1 ? 's' : ''}
                                    </span>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">
                                        {totalLessons} lesson{totalLessons !== 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Modules */}
                        {sortedModules.length > 0 && (
                            <div className="space-y-3">
                                <h2 className="text-sm font-semibold text-gray-700 px-1">Course Content</h2>
                                {sortedModules.map((mod, i) => (
                                    <ModuleRow key={mod.id} module={mod} index={i} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
