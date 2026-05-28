'use client'

import { LessonService } from "@/data/services/lesson.service";
import { VocabularyService, VocabularyItem } from "@/data/services/vocabulary.service";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, ChevronLeft, Plus, X } from "lucide-react";

type LessonRow = {
    id: number;
    title: string;
    content?: string;
    description?: string;
    lesson_type?: string;
    estimated_minutes?: number;
    subject?: { name: string };
    topic?: { name: string };
};

type LessonState = {
    open: boolean;
    loading: boolean;
    vocab: VocabularyItem[];
    loaded: boolean;
};

const PAGE_SIZE = 15;

const EMPTY_VOCAB_FORM = {
    word: '',
    pinyin: '',
    hanViet: '',
    meaningVi: '',
    meaningEn: '',
    exampleSentence: '',
};

function VocabPill({ item }: { item: VocabularyItem }) {
    return (
        <div className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-white transition-colors">
            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-sm font-semibold text-gray-800">{item.word}</span>
                    {item.pinyin && <span className="text-xs text-blue-500">{item.pinyin}</span>}
                    {item.meaningVi && <span className="text-xs text-gray-500">— {item.meaningVi}</span>}
                    {item.meaningEn && <span className="text-xs text-gray-400">/ {item.meaningEn}</span>}
                </div>
                {item.exampleSentence && (
                    <p className="text-[11px] text-gray-400 italic mt-0.5 truncate">{item.exampleSentence}</p>
                )}
            </div>
        </div>
    );
}

export function AdminLessonsTab() {
    const [lessons, setLessons] = useState<LessonRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [states, setStates] = useState<Record<number, LessonState>>({});

    // Add vocab modal
    const [addVocabLessonId, setAddVocabLessonId] = useState<number | null>(null);
    const [vocabForm, setVocabForm] = useState(EMPTY_VOCAB_FORM);
    const [vocabSubmitting, setVocabSubmitting] = useState(false);
    const [vocabError, setVocabError] = useState('');

    useEffect(() => {
        setLoading(true);
        LessonService.getSystemLessonsList(page, PAGE_SIZE)
            .then(res => {
                const data = res?.data ?? res;

                const raw: LessonRow[] = Array.isArray(data) ? data : (data?.items ?? data?.lessons ?? []);
                const filtered = raw.filter(l => l.lesson_type !== 'quiz' && l.lesson_type !== 'assignment');
                setLessons(filtered);
                setTotal(data?.total ?? data?.count ?? 0);
            })
            .finally(() => setLoading(false));
    }, [page]);

    async function toggle(lessonId: number) {
        const cur = states[lessonId];
        if (cur?.open) {
            setStates(prev => ({ ...prev, [lessonId]: { ...prev[lessonId], open: false } }));
            return;
        }
        if (cur?.loaded) {
            setStates(prev => ({ ...prev, [lessonId]: { ...prev[lessonId], open: true } }));
            return;
        }
        setStates(prev => ({ ...prev, [lessonId]: { open: true, loading: true, vocab: [], loaded: false } }));
        try {
            const res = await VocabularyService.getVocabulariesByLesson(lessonId);
            const vocab: VocabularyItem[] = res?.data ?? res ?? [];
            setStates(prev => ({ ...prev, [lessonId]: { open: true, loading: false, vocab, loaded: true } }));
        } catch {
            setStates(prev => ({ ...prev, [lessonId]: { open: true, loading: false, vocab: [], loaded: true } }));
        }
    }

    function openAddVocab(e: React.MouseEvent, lessonId: number) {
        e.stopPropagation();
        setVocabForm(EMPTY_VOCAB_FORM);
        setVocabError('');
        setAddVocabLessonId(lessonId);
    }

    async function handleVocabSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (!vocabForm.word.trim()) { setVocabError('Word is required.'); return; }
        if (addVocabLessonId === null) return;

        setVocabSubmitting(true);
        setVocabError('');
        try {
            const res = await VocabularyService.createVocabulary(vocabForm as unknown as VocabularyItem, addVocabLessonId);
            const created: VocabularyItem = res?.data ?? res;
            setStates(prev => {
                const cur = prev[addVocabLessonId];
                return {
                    ...prev,
                    [addVocabLessonId]: {
                        open: true,
                        loading: false,
                        loaded: true,
                        vocab: cur ? [...cur.vocab, created] : [created],
                    },
                };
            });
            setAddVocabLessonId(null);
        } catch {
            setVocabError('Failed to create vocabulary. Please try again.');
        } finally {
            setVocabSubmitting(false);
        }
    }

    const totalPages = Math.ceil(total / PAGE_SIZE);
    const addVocabLesson = lessons.find(l => l.id === addVocabLessonId);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Lessons</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Browse lessons and their vocabulary.</p>
                </div>
                {total > 0 && (
                    <span className="text-xs text-gray-400">{total} lesson{total !== 1 ? 's' : ''}</span>
                )}
            </div>

            {loading ? (
                <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 animate-pulse">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex items-center gap-3 px-4 py-3">
                            <div className="w-7 h-7 rounded-lg bg-gray-100" />
                            <div className="flex-1 space-y-1.5">
                                <div className="h-3 bg-gray-100 rounded w-48" />
                                <div className="h-2.5 bg-gray-100 rounded w-32" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : lessons.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                    No lessons found.
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                    {lessons.map((lesson, idx) => {
                        const state = states[lesson.id];
                        const vocabCount = state?.vocab?.length ?? 0;

                        return (
                            <div key={lesson.id}>
                                <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
                                    {/* Clickable area for accordion */}
                                    <button
                                        onClick={() => toggle(lesson.id)}
                                        className="flex items-center gap-3 flex-1 min-w-0 text-left"
                                    >
                                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 text-xs font-bold flex items-center justify-center transition-colors">
                                            {(page - 1) * PAGE_SIZE + idx + 1}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                                                {lesson.title}
                                            </p>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                {lesson.subject && (
                                                    <span className="text-[10px] text-gray-400">{lesson.subject.name}</span>
                                                )}
                                                {lesson.topic && (
                                                    <span className="text-[10px] text-gray-400">· {lesson.topic.name}</span>
                                                )}
                                                {lesson.estimated_minutes && (
                                                    <span className="text-[10px] text-gray-400">· {lesson.estimated_minutes}m</span>
                                                )}
                                            </div>
                                        </div>
                                    </button>

                                    {/* Right controls */}
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {state?.loaded && (
                                            <span className="flex items-center gap-1 text-[10px] text-gray-400">
                                                <BookOpen size={10} />
                                                {vocabCount}
                                            </span>
                                        )}
                                        <button
                                            onClick={e => openAddVocab(e, lesson.id)}
                                            className="flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                                        >
                                            <Plus size={11} />
                                            Vocab
                                        </button>
                                        <button
                                            onClick={() => toggle(lesson.id)}
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {state?.open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                                        </button>
                                    </div>
                                </div>

                                {state?.open && (
                                    <div className="border-t border-gray-100 bg-gray-50 px-4 py-2">
                                        {state.loading ? (
                                            <div className="space-y-2 py-2 animate-pulse">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="flex gap-2">
                                                        <div className="h-3 bg-gray-200 rounded w-12" />
                                                        <div className="h-3 bg-gray-200 rounded w-20" />
                                                        <div className="h-3 bg-gray-200 rounded w-32" />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : state.vocab.length === 0 ? (
                                            <p className="text-xs text-gray-400 py-3 text-center">No vocabulary yet. Click "+ Vocab" to add one.</p>
                                        ) : (
                                            <div className="py-1 divide-y divide-gray-100">
                                                {state.vocab.map(v => (
                                                    <VocabPill key={v.id} item={v} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {totalPages > 1 && (
                <div className="flex items-center justify-between mt-4">
                    <button
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={14} /> Prev
                    </button>
                    <span className="text-xs text-gray-500">Page {page} of {totalPages}</span>
                    <button
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        Next <ChevronRight size={14} />
                    </button>
                </div>
            )}

            {/* Add Vocabulary modal */}
            {addVocabLessonId !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
                            <div>
                                <h2 className="text-[15px] font-semibold text-gray-900">Add Vocabulary</h2>
                                {addVocabLesson && (
                                    <p className="text-[11px] text-gray-400 mt-0.5 truncate max-w-xs">{addVocabLesson.title}</p>
                                )}
                            </div>
                            <button onClick={() => setAddVocabLessonId(null)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={15} className="text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleVocabSubmit} className="px-5 py-4 flex flex-col gap-3">
                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Word <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={vocabForm.word}
                                    onChange={e => setVocabForm(f => ({ ...f, word: e.target.value }))}
                                    placeholder="e.g. 电脑"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    autoFocus
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Pinyin</label>
                                    <input
                                        type="text"
                                        value={vocabForm.pinyin}
                                        onChange={e => setVocabForm(f => ({ ...f, pinyin: e.target.value }))}
                                        placeholder="e.g. diànnǎo"
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Hán Việt</label>
                                    <input
                                        type="text"
                                        value={vocabForm.hanViet}
                                        onChange={e => setVocabForm(f => ({ ...f, hanViet: e.target.value }))}
                                        placeholder="e.g. Điện não"
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Meaning (VI)</label>
                                    <input
                                        type="text"
                                        value={vocabForm.meaningVi}
                                        onChange={e => setVocabForm(f => ({ ...f, meaningVi: e.target.value }))}
                                        placeholder="e.g. máy tính"
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-700 mb-1">Meaning (EN)</label>
                                    <input
                                        type="text"
                                        value={vocabForm.meaningEn}
                                        onChange={e => setVocabForm(f => ({ ...f, meaningEn: e.target.value }))}
                                        placeholder="e.g. computer"
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">Example Sentence</label>
                                <textarea
                                    value={vocabForm.exampleSentence}
                                    onChange={e => setVocabForm(f => ({ ...f, exampleSentence: e.target.value }))}
                                    placeholder="e.g. 这台电脑运行很快。— Máy tính này chạy rất nhanh."
                                    rows={2}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                                />
                            </div>

                            {vocabError && <p className="text-[12px] text-red-500">{vocabError}</p>}

                            <div className="flex justify-end gap-2 mt-1">
                                <button type="button" onClick={() => setAddVocabLessonId(null)} className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                                    Cancel
                                </button>
                                <button type="submit" disabled={vocabSubmitting} className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                                    {vocabSubmitting ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
