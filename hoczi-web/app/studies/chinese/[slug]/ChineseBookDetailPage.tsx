'use client'

import { CourseService } from "@/data/services/course.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Lock, PlayCircle } from "lucide-react";

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

const MODULE_COLORS = [
    "from-red-400 to-orange-400",
    "from-orange-400 to-yellow-400",
    "from-pink-500 to-rose-400",
    "from-purple-500 to-indigo-400",
    "from-teal-500 to-emerald-400",
    "from-blue-500 to-cyan-400",
];

interface Props { slug: string }

export function ChineseBookDetailPage({ slug }: Props) {
    const router = useRouter();
    const [course, setCourse] = useState<CourseDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeModuleId, setActiveModuleId] = useState<string | null>(null);

    useEffect(() => {
        CourseService.getCourseDetail(Number(slug))
            .then(res => {
                const data: CourseDetail = res?.data ?? res;
                setCourse(data);
                const first = [...(data?.modules ?? [])].sort((a, b) => a.orderIndex - b.orderIndex)[0];
                if (first) setActiveModuleId(first.id);
            })
            .finally(() => setLoading(false));
    }, [slug]);

    const sortedModules = [...(course?.modules ?? [])].sort((a, b) => a.orderIndex - b.orderIndex);
    const totalLessons = sortedModules.reduce((s, m) => s + (m.courseModuleLessons?.length ?? 0), 0);
    const activeModule = sortedModules.find(m => m.id === activeModuleId) ?? sortedModules[0];
    const activeLessons = [...(activeModule?.courseModuleLessons ?? [])].sort((a, b) => a.orderIndex - b.orderIndex);
    const activeModuleIndex = sortedModules.findIndex(m => m.id === activeModuleId);

    const handleSelectLesson = (lesson: any) => {
        console.log('Lessons', lesson);
        
        // const first = lessons[0];
        // if (!first) return;
        router.push(`/studies/lessons/${lesson.lesson.id}`);
    }

    if (loading) {
        return (
            <main className="min-h-screen bg-gray-50 px-4 py-8">
                <div className="max-w-6xl mx-auto flex gap-8 animate-pulse">
                    <div className="w-56 flex-shrink-0 space-y-3">
                        <div className="h-5 bg-gray-200 rounded w-3/4" />
                        {[1,2,3,4,5].map(i => <div key={i} className="h-4 bg-gray-100 rounded" />)}
                    </div>
                    <div className="flex-1 space-y-4">
                        {[1,2,3].map(i => (
                            <div key={i} className="bg-white border border-gray-200 rounded-xl flex gap-4 p-4 h-28">
                                <div className="w-32 bg-gray-100 rounded-lg flex-shrink-0" />
                                <div className="flex-1 space-y-2 py-1">
                                    <div className="h-3 bg-gray-100 rounded w-24" />
                                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                                    <div className="h-3 bg-gray-100 rounded w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    if (!course) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-400">Course not found.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Top header strip */}
            <div className="bg-white border-b border-gray-200 px-4 py-4">
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="text-gray-400 hover:text-gray-700 text-sm mb-3 flex items-center gap-1 transition-colors"
                    >
                        ← Back
                    </button>
                    <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                {course.languageCode && (
                                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium">
                                        {course.languageCode.toUpperCase()}
                                    </span>
                                )}
                                {course.levelCode && (
                                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-100 font-medium">
                                        {course.levelCode}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-xl font-bold text-gray-900 leading-snug">{course.description}</h1>
                            <p className="text-xs text-gray-400 mt-1">
                                {sortedModules.length} modules · {totalLessons} lessons
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8 items-start">
                {/* Sidebar */}
                <aside className="w-56 flex-shrink-0 sticky top-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">Nội dung khoá học</p>
                    <nav className="space-y-0.5">
                        {sortedModules.map((mod, i) => {
                            const isActive = mod.id === activeModuleId;
                            const count = mod.courseModuleLessons?.length ?? 0;
                            return (
                                <button
                                    key={mod.id}
                                    onClick={() => setActiveModuleId(mod.id)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-start gap-2 ${
                                        isActive
                                            ? 'bg-red-50 text-red-700 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                                >
                                    <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                                        isActive ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                        {i + 1}
                                    </span>
                                    <span className="flex-1 leading-snug">
                                        {mod.title}
                                        <span className="block text-[10px] font-normal text-gray-400 mt-0.5">{count} bài</span>
                                    </span>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main lesson list */}
                <div className="flex-1 min-w-0">
                    {activeModule && (
                        <div className="mb-5">
                            <h2 className="text-base font-bold text-gray-800">{activeModule.title}</h2>
                            {activeModule.description && (
                                <p className="text-sm text-gray-500 mt-1">{activeModule.description}</p>
                            )}
                        </div>
                    )}

                    {activeLessons.length === 0 ? (
                        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-sm text-gray-400">
                            No lessons in this module yet.
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {activeLessons.map((ml, li) => {
                                const gradient = MODULE_COLORS[activeModuleIndex % MODULE_COLORS.length];
                                return (
                                    <div
                                        key={ml.id}
                                        onClick={() => handleSelectLesson(ml)}
                                        className="bg-white border border-gray-200 rounded-xl flex gap-0 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
                                    >
                                        {/* Thumbnail */}
                                        <div className={`w-36 flex-shrink-0 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-1 p-3`}>
                                            <span className="text-white/80 text-xs font-medium">Bài {li + 1}</span>
                                            {ml.isPreview
                                                ? <PlayCircle size={28} className="text-white" />
                                                : <Lock size={22} className="text-white/60" />
                                            }
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 px-4 py-3 min-w-0">
                                            <p className="text-[11px] font-semibold text-red-500 uppercase tracking-wide mb-1">
                                                {activeModule?.title}
                                            </p>
                                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                                                Bài {li + 1} — {activeModule?.title}
                                            </h3>
                                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                              {activeModule?.description ?? `Lesson ${li + 1} of the ${activeModule?.title} module.`}
                                            </p>
                                            <div className="flex items-center gap-3 mt-2">
                                                {ml.isPreview ? (
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-100 font-medium">
                                                        Xem trước miễn phí
                                                    </span>
                                                ) : (
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-400 font-medium flex items-center gap-1">
                                                        <Lock size={9} /> Yêu cầu đăng ký
                                                    </span>
                                                )}
                                                <span className="text-[10px] text-gray-300">Lesson #{ml.lessonId}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
