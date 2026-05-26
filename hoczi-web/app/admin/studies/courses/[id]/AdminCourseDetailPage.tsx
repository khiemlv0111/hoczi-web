'use client'

import { CourseService } from "@/data/services/course.service";
import { LessonService } from "@/data/services/lesson.service";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, ArrowLeft, BookOpen, Plus, X, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import slugify from "slugify";

type CourseModuleLesson = {
    id: string;
    courseModuleId: string;
    lessonId: number;
    orderIndex: number;
    isPreview: boolean;
};

type CourseModule = {
    id: string;
    courseId: string;
    title: string;
    slug: string;
    description: string | null;
    status: string;
    orderIndex: number;
    createdAt: string;
    updatedAt: string;
    courseModuleLessons: CourseModuleLesson[];
};

type CourseDetail = {
    id: string;
    description: string;
    languageCode: string;
    levelCode: string;
    coverUrl: string | null;
    createdAt: string;
    createdBy: string;
    modules: CourseModule[];
};

const STATUS_STYLE: Record<string, string> = {
    draft:     'bg-amber-100 text-amber-700',
    published: 'bg-green-100 text-green-700',
    archived:  'bg-gray-100 text-gray-500',
};

function ModuleRow({ module, index }: { module: CourseModule; index: number }) {
    const [open, setOpen] = useState(false);
    const lessonCount = module.courseModuleLessons?.length ?? 0;
    const statusStyle = STATUS_STYLE[module.status] ?? 'bg-gray-100 text-gray-500';

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(v => !v)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left group"
            >
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 text-xs font-bold flex items-center justify-center transition-colors">
                    {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                        {module.title}
                    </p>
                    <p className="text-[11px] text-gray-400 truncate">{module.slug}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusStyle}`}>
                        {module.status}
                    </span>
                    <span className="text-[11px] text-gray-400">
                        {lessonCount} lesson{lessonCount !== 1 ? 's' : ''}
                    </span>
                    <span className="text-gray-400">
                        {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                    </span>
                </div>
            </button>

            {open && (
                <div className="border-t border-gray-100 bg-gray-50 px-4 py-2">
                    {lessonCount === 0 ? (
                        <p className="text-xs text-gray-400 py-3 text-center">No lessons in this module.</p>
                    ) : (
                        <ul className="py-1 space-y-0.5">
                            {[...module.courseModuleLessons]
                                .sort((a, b) => a.orderIndex - b.orderIndex)
                                .map((ml) => (
                                    <li key={ml.id}>
                                        <Link
                                            href={`/admin/lessons/${ml.lessonId}`}
                                            className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white hover:shadow-sm transition-all text-sm text-gray-700 hover:text-blue-700 group/item"
                                        >
                                            <BookOpen size={13} className="text-gray-400 group-hover/item:text-blue-500 flex-shrink-0" />
                                            <span className="flex-1 text-xs">Lesson #{ml.lessonId}</span>
                                            <span className="text-[10px] text-gray-400">#{ml.orderIndex + 1}</span>
                                            {ml.isPreview && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-medium">
                                                    Preview
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

type Modal = 'module' | 'lesson' | null;

export function AdminCourseDetailPage({ id }: { id: number }) {
    const router = useRouter();
    const [course, setCourse] = useState<CourseDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState<Modal>(null);

    // Module form
    const [moduleForm, setModuleForm] = useState({ title: '', slug: '', description: '', status: 'draft', orderIndex: 0 });
    const [moduleSubmitting, setModuleSubmitting] = useState(false);
    const [moduleError, setModuleError] = useState('');

    // Lesson form
    const [lessonForm, setLessonForm] = useState({ courseModuleId: '', lessonId: '', orderIndex: '0', isPreview: false });
    const [lessonSubmitting, setLessonSubmitting] = useState(false);
    const [lessonError, setLessonError] = useState('');
    const [lessonSearch, setLessonSearch] = useState('');
    const [lessonResults, setLessonResults] = useState<{ id: number; title: string }[]>([]);
    const [lessonSearching, setLessonSearching] = useState(false);
    const [lessonSelected, setLessonSelected] = useState<{ id: number; title: string } | null>(null);
    const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        CourseService.getCourseDetail(id)
            .then(res => setCourse(res?.data ?? res))
            .finally(() => setLoading(false));
    }, [id]);

    function openModal(m: Modal) {
        setModuleError('');
        setLessonError('');
        if (m === 'module' && course) {
            const nextIndex = (course.modules?.length ?? 0);
            setModuleForm({ title: '', slug: '', description: '', status: 'draft', orderIndex: nextIndex });
        }
        if (m === 'lesson') {
            const firstModuleId = course?.modules?.[0]?.id ?? '';
            setLessonForm({ courseModuleId: firstModuleId, lessonId: '', orderIndex: '0', isPreview: false });
            setLessonSearch('');
            setLessonResults([]);
            setLessonSelected(null);
        }
        setModal(m);
    }

    async function handleModuleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (!moduleForm.title.trim()) { setModuleError('Title is required.'); return; }
        setModuleSubmitting(true);
        setModuleError('');
        try {
            const res = await CourseService.createModule({ ...moduleForm, courseId: String(id) });
            const created: CourseModule = res?.data ?? res;
            setCourse(prev => prev ? { ...prev, modules: [...(prev.modules ?? []), { ...created, courseModuleLessons: [] }] } : prev);
            setModal(null);
        } catch {
            setModuleError('Failed to create module. Please try again.');
        } finally {
            setModuleSubmitting(false);
        }
    }

    async function handleLessonSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (!lessonForm.courseModuleId) { setLessonError('Module is required.'); return; }
        if (!lessonForm.lessonId) { setLessonError('Lesson ID is required.'); return; }
        setLessonSubmitting(true);
        setLessonError('');
        try {
            const res = await CourseService.addLessonToModule({
                courseModuleId: lessonForm.courseModuleId,
                lessonId: Number(lessonForm.lessonId),
                orderIndex: Number(lessonForm.orderIndex),
                isPreview: lessonForm.isPreview,
            });
            const created: CourseModuleLesson = res?.data ?? res;
            setCourse(prev => {
                if (!prev) return prev;
                return {
                    ...prev,
                    modules: prev.modules.map(m =>
                        m.id === lessonForm.courseModuleId
                            ? { ...m, courseModuleLessons: [...m.courseModuleLessons, created] }
                            : m
                    ),
                };
            });
            setModal(null);
        } catch {
            setLessonError('Failed to add lesson. Please try again.');
        } finally {
            setLessonSubmitting(false);
        }
    }

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto space-y-4 animate-pulse">
                <div className="h-28 bg-white border border-gray-200 rounded-xl" />
                <div className="h-14 bg-white border border-gray-200 rounded-xl" />
                <div className="h-14 bg-white border border-gray-200 rounded-xl" />
                <div className="h-14 bg-white border border-gray-200 rounded-xl" />
            </div>
        );
    }

    if (!course) {
        return (
            <div className="flex items-center justify-center min-h-[200px] text-gray-400 text-sm">
                Course not found.
            </div>
        );
    }

    const sortedModules = [...(course.modules ?? [])].sort((a, b) => a.orderIndex - b.orderIndex);
    const totalLessons = sortedModules.reduce((sum, m) => sum + (m.courseModuleLessons?.length ?? 0), 0);

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
                <ArrowLeft size={14} />
                Back
            </button>

            {/* Course header */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4">
                {course.coverUrl && (
                    <img src={course.coverUrl} alt="cover" className="w-full h-36 object-cover rounded-lg border border-gray-100" />
                )}
                <div>
                    <p className="text-xs text-gray-400 mb-1">Course #{course.id}</p>
                    <p className="text-base font-semibold text-gray-900 leading-snug">
                        {course.description || <span className="text-gray-400 italic">No description</span>}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {course.languageCode && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                            Lang: {course.languageCode.toUpperCase()}
                        </span>
                    )}
                    {course.levelCode && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200 font-medium">
                            {course.levelCode}
                        </span>
                    )}
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200 font-medium">
                        {sortedModules.length} module{sortedModules.length !== 1 ? 's' : ''}
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200 font-medium">
                        {totalLessons} lesson{totalLessons !== 1 ? 's' : ''}
                    </span>
                    {course.createdAt && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 border border-gray-200">
                            {new Date(course.createdAt).toLocaleDateString()}
                        </span>
                    )}
                </div>
            </div>

            {/* Modules section */}
            <div>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[13px] font-semibold text-gray-700">
                        Modules
                        <span className="ml-2 text-gray-400 font-normal">({sortedModules.length})</span>
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => openModal('lesson')}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <Plus size={13} />
                            Add Lesson
                        </button>
                        <button
                            onClick={() => openModal('module')}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            <Plus size={13} />
                            Add Module
                        </button>
                    </div>
                </div>

                {sortedModules.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                        No modules yet.
                    </div>
                ) : (
                    <div className="space-y-2">
                        {sortedModules.map((mod, i) => (
                            <ModuleRow key={mod.id} module={mod} index={i} />
                        ))}
                    </div>
                )}
            </div>

            {/* Create Module modal */}
            {modal === 'module' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
                            <h2 className="text-[15px] font-semibold text-gray-900">Add Module</h2>
                            <button onClick={() => setModal(null)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={15} className="text-gray-500" />
                            </button>
                        </div>
                        <form onSubmit={handleModuleSubmit} className="px-5 py-4 flex flex-col gap-3">
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={moduleForm.title}
                                    onChange={e => setModuleForm(f => ({ ...f, title: e.target.value, slug: slugify(e.target.value, { lower: true }) }))}
                                    placeholder="Module title"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Slug</label>
                                <input
                                    type="text"
                                    value={moduleForm.slug}
                                    onChange={e => setModuleForm(f => ({ ...f, slug: e.target.value }))}
                                    placeholder="auto-generated"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={moduleForm.description}
                                    onChange={e => setModuleForm(f => ({ ...f, description: e.target.value }))}
                                    placeholder="Optional"
                                    rows={2}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Status</label>
                                    <select
                                        value={moduleForm.status}
                                        onChange={e => setModuleForm(f => ({ ...f, status: e.target.value }))}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                        <option value="archived">Archived</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Order</label>
                                    <input
                                        type="number"
                                        min={0}
                                        value={moduleForm.orderIndex}
                                        onChange={e => setModuleForm(f => ({ ...f, orderIndex: Number(e.target.value) }))}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>
                            {moduleError && <p className="text-[12px] text-red-500">{moduleError}</p>}
                            <div className="flex justify-end gap-2 mt-1">
                                <button type="button" onClick={() => setModal(null)} className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">Cancel</button>
                                <button type="submit" disabled={moduleSubmitting} className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                                    {moduleSubmitting ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Lesson to Module modal */}
            {modal === 'lesson' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
                            <h2 className="text-[15px] font-semibold text-gray-900">Add Lesson to Module</h2>
                            <button onClick={() => setModal(null)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={15} className="text-gray-500" />
                            </button>
                        </div>
                        <form onSubmit={handleLessonSubmit} className="px-5 py-4 flex flex-col gap-3">
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Module <span className="text-red-500">*</span></label>
                                <select
                                    value={lessonForm.courseModuleId}
                                    onChange={e => setLessonForm(f => ({ ...f, courseModuleId: e.target.value }))}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <option value="">— select module —</option>
                                    {sortedModules.map(m => (
                                        <option key={m.id} value={m.id}>{m.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative">
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Lesson <span className="text-red-500">*</span></label>
                                {lessonSelected ? (
                                    <div className="flex items-center gap-2 px-3 py-2 border border-blue-300 rounded-lg bg-blue-50">
                                        <BookOpen size={13} className="text-blue-500 flex-shrink-0" />
                                        <span className="flex-1 text-sm text-blue-800 truncate">{lessonSelected.title}</span>
                                        <button
                                            type="button"
                                            onClick={() => { setLessonSelected(null); setLessonForm(f => ({ ...f, lessonId: '' })); setLessonSearch(''); setLessonResults([]); }}
                                            className="text-blue-400 hover:text-blue-600"
                                        >
                                            <X size={13} />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="relative">
                                            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            <input
                                                type="text"
                                                value={lessonSearch}
                                                onChange={e => {
                                                    const q = e.target.value;
                                                    setLessonSearch(q);
                                                    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
                                                    if (!q.trim()) { setLessonResults([]); return; }
                                                    searchTimerRef.current = setTimeout(async () => {
                                                        setLessonSearching(true);
                                                        try {
                                                            const res = await LessonService.searchLessons(q);
                                                            setLessonResults(res?.data ?? res ?? []);
                                                        } finally {
                                                            setLessonSearching(false);
                                                        }
                                                    }, 300);
                                                }}
                                                placeholder="Search lessons by title..."
                                                className="w-full border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            />
                                            {lessonSearching && (
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 animate-pulse">Searching…</span>
                                            )}
                                        </div>
                                        {lessonResults.length > 0 && (
                                            <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-44 overflow-y-auto">
                                                {lessonResults.map(l => (
                                                    <li key={l.id}>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setLessonSelected(l);
                                                                setLessonForm(f => ({ ...f, lessonId: String(l.id) }));
                                                                setLessonResults([]);
                                                            }}
                                                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 text-left transition-colors"
                                                        >
                                                            <BookOpen size={12} className="text-gray-400 flex-shrink-0" />
                                                            <span className="truncate">{l.title}</span>
                                                            <span className="ml-auto text-[10px] text-gray-400">#{l.id}</span>
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Order</label>
                                    <input
                                        type="number"
                                        min={0}
                                        value={lessonForm.orderIndex}
                                        onChange={e => setLessonForm(f => ({ ...f, orderIndex: e.target.value }))}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div className="flex items-end pb-2">
                                    <label className="flex items-center gap-2 cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            checked={lessonForm.isPreview}
                                            onChange={e => setLessonForm(f => ({ ...f, isPreview: e.target.checked }))}
                                            className="w-4 h-4 rounded border-gray-300 accent-blue-500"
                                        />
                                        <span className="text-sm text-gray-700">Preview</span>
                                    </label>
                                </div>
                            </div>
                            {lessonError && <p className="text-[12px] text-red-500">{lessonError}</p>}
                            <div className="flex justify-end gap-2 mt-1">
                                <button type="button" onClick={() => setModal(null)} className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">Cancel</button>
                                <button type="submit" disabled={lessonSubmitting} className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                                    {lessonSubmitting ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
