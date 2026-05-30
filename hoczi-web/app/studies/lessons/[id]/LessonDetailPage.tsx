'use client'

import { CourseService } from "@/data/services/course.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, ChevronRight, Clock, Volume2 } from "lucide-react";

type Vocabulary = {
    id: string;
    word: string;
    pinyin?: string;
    hanViet?: string | null;
    meaningEn?: string;
    meaningVi?: string;
    exampleSentence?: string;
    audioUrl?: string | null;
};

type LessonVocabulary = {
    id: string;
    lessonId: number;
    orderIndex: number;
    vocabulary: Vocabulary;
};

type Lesson = {
    id: number;
    title: string;
    content?: string;
    description?: string;
    lesson_type?: string;
    media_url?: string | null;
    thumbnail_url?: string | null;
    estimated_minutes?: number | null;
    status?: string;
    visibility?: string;
    lessonVocabularies: LessonVocabulary[];
};

type CourseModule = {
    id: string;
    title: string;
    slug: string;
    orderIndex: number;
    course: {
        id: string;
        title: string;
        slug: string;
        description: string;
    };
};

type CourseLessonDetail = {
    id: string;
    courseModuleId: string;
    isPreview: boolean;
    lesson: Lesson;
    courseModule: CourseModule;
};

function VocabCard({ lv }: { lv: LessonVocabulary }) {
    const v = lv.vocabulary;
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-xl font-bold text-gray-900">{v.word}</span>
                        {v.pinyin && (
                            <span className="text-sm text-blue-500 font-medium">{v.pinyin}</span>
                        )}
                        {v.hanViet && (
                            <span className="text-sm text-violet-500">{v.hanViet}</span>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-x-3 mt-1">
                        {v.meaningVi && (
                            <span className="text-sm text-gray-600">
                                <span className="text-xs text-gray-400 mr-1">VI</span>{v.meaningVi}
                            </span>
                        )}
                        {v.meaningEn && (
                            <span className="text-sm text-gray-600">
                                <span className="text-xs text-gray-400 mr-1">EN</span>{v.meaningEn}
                            </span>
                        )}
                    </div>
                    {v.exampleSentence && (
                        <p className="text-xs text-gray-400 italic mt-2 leading-relaxed border-t border-gray-100 pt-2">
                            {v.exampleSentence}
                        </p>
                    )}
                </div>
                {v.audioUrl && (
                    <a href={v.audioUrl} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-500 transition-colors flex-shrink-0">
                        <Volume2 size={15} />
                    </a>
                )}
            </div>
        </div>
    );
}

export function LessonDetailPage({ id }: { id: string }) {
    const router = useRouter();
    const [data, setData] = useState<CourseLessonDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        CourseService.getCourseLessonDetail(Number(id))
            .then(res => setData(res?.data ?? res))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <main className="min-h-screen bg-gray-50 px-4 py-8 animate-pulse pt-[60px]">
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-64" />
                    <div className="h-8 bg-gray-200 rounded w-3/4" />
                    <div className="h-40 bg-white border border-gray-200 rounded-xl" />
                    <div className="grid grid-cols-2 gap-3">
                        {[1,2,3,4].map(i => <div key={i} className="h-28 bg-white border border-gray-200 rounded-xl" />)}
                    </div>
                </div>
            </main>
        );
    }

    if (!data) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-400">Lesson not found.</p>
            </main>
        );
    }

    const { lesson, courseModule } = data;
    const sortedVocab = [...(lesson.lessonVocabularies ?? [])].sort((a, b) => a.orderIndex - b.orderIndex);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Top bar */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-14 z-10">
                <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-gray-400 flex-wrap">
                    <button onClick={() => router.back()} className="hover:text-gray-700 transition-colors">
                        ← Back
                    </button>
                    {courseModule?.course && (
                        <>
                            <ChevronRight size={13} />
                            <span className="text-gray-500 truncate max-w-[140px]">
                                {courseModule.course.title}
                            </span>
                        </>
                    )}
                    {courseModule && (
                        <>
                            <ChevronRight size={13} />
                            <span className="text-gray-500 truncate max-w-[140px]">
                                {courseModule.title}
                            </span>
                        </>
                    )}
                    <ChevronRight size={13} />
                    <span className="text-gray-800 font-medium truncate max-w-[160px]">{lesson.title}</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 pt-[60px]">
                {/* Lesson header */}
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    {lesson.thumbnail_url ? (
                        <img src={lesson.thumbnail_url} alt={lesson.title} className="w-full h-48 object-cover" />
                    ) : (
                        <div className="h-36 bg-gradient-to-r from-red-500 to-orange-400 flex items-center justify-center gap-3">
                            <BookOpen size={32} className="text-white/80" />
                        </div>
                    )}
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                            <h1 className="text-xl font-bold text-gray-900 leading-snug">{lesson.title}</h1>
                            {data.isPreview && (
                                <span className="flex-shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-green-50 text-green-600 border border-green-100 font-medium">
                                    Free Preview
                                </span>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                            {lesson.lesson_type && (
                                <span className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium capitalize">
                                    {lesson.lesson_type}
                                </span>
                            )}
                            {lesson.estimated_minutes && (
                                <span className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium flex items-center gap-1">
                                    <Clock size={10} /> {lesson.estimated_minutes} min
                                </span>
                            )}
                        </div>

                        {lesson.description && (
                            <p className="text-sm text-gray-500 leading-relaxed">{lesson.description}</p>
                        )}
                    </div>
                </div>

                {/* Content */}
                {lesson.content && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <BookOpen size={14} className="text-red-500" /> Nội dung bài học
                        </h2>
                        <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {lesson.content}
                        </div>
                    </div>
                )}

                {/* Vocabulary */}
                {sortedVocab.length > 0 && (
                    <div>
                        <h2 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2 px-1">
                            <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-[10px] font-bold">
                                {sortedVocab.length}
                            </span>
                            Từ vựng trong bài
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {sortedVocab.map(lv => (
                                <VocabCard key={lv.id} lv={lv} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Media */}
                {lesson.media_url && (
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <h2 className="text-sm font-semibold text-gray-700 mb-3">Media</h2>
                        <audio controls src={lesson.media_url} className="w-full" />
                    </div>
                )}
            </div>
        </main>
    );
}
