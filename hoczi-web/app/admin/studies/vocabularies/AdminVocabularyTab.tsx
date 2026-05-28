'use client'

import { VocabularyService, VocabularyItem } from "@/data/services/vocabulary.service";
import { LessonService } from "@/data/services/lesson.service";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Volume2, Plus, X, Search } from "lucide-react";

type Language = 'chinese' | 'english';

const LANG_TABS: { key: Language; label: string; flag: string }[] = [
    { key: 'chinese', label: 'Chinese', flag: '🇨🇳' },
    { key: 'english', label: 'English', flag: '🇬🇧' },
];

type LessonResult = { id: number; title: string };

function VocabCard({ item, onAddToLesson }: { item: VocabularyItem; onAddToLesson: (item: VocabularyItem) => void }) {
    const lessons = item.lessonVocabularies ?? [];

    return (
        <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-base font-semibold text-gray-900">{item.word}</span>
                        {item.pinyin && (
                            <span className="text-xs text-blue-500 font-medium">{item.pinyin}</span>
                        )}
                        {item.hanViet && (
                            <span className="text-xs text-violet-500">{item.hanViet}</span>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-0.5">
                        {item.meaningVi && (
                            <span className="text-xs text-gray-600">
                                <span className="text-gray-400">VI</span> {item.meaningVi}
                            </span>
                        )}
                        {item.meaningEn && (
                            <span className="text-xs text-gray-600">
                                <span className="text-gray-400">EN</span> {item.meaningEn}
                            </span>
                        )}
                    </div>

                    {item.exampleSentence && (
                        <p className="text-xs text-gray-400 mt-1 italic leading-relaxed">
                            {item.exampleSentence}
                        </p>
                    )}

                    {lessons.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                            {lessons.map(lv => (
                                <span
                                    key={lv.id}
                                    className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                                >
                                    <BookOpen size={9} />
                                    {lv.lesson?.title ?? `Lesson #${lv.lessonId}`}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex-shrink-0 flex items-center gap-2">
                    {item.audioUrl && (
                        <a
                            href={item.audioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-500 transition-colors"
                        >
                            <Volume2 size={14} />
                        </a>
                    )}
                    <button
                        onClick={() => onAddToLesson(item)}
                        className="flex items-center gap-1 px-2 py-1 text-[11px] font-medium rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                    >
                        <Plus size={11} />
                        Add to Lesson
                    </button>
                    <span className="text-[10px] text-gray-300">#{item.id}</span>
                </div>
            </div>
        </div>
    );
}

export function AdminVocabularyTab() {
    const [lang, setLang] = useState<Language>('chinese');
    const [allItems, setAllItems] = useState<VocabularyItem[]>([]);
    const [loading, setLoading] = useState(true);

    // Add to lesson modal
    const [targetVocab, setTargetVocab] = useState<VocabularyItem | null>(null);
    const [lessonSearch, setLessonSearch] = useState('');
    const [lessonResults, setLessonResults] = useState<LessonResult[]>([]);
    const [lessonSearching, setLessonSearching] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState<LessonResult | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        VocabularyService.getVocabularies()
            .then(res => setAllItems(res?.data ?? res ?? []))
            .catch(() => setAllItems([]))
            .finally(() => setLoading(false));
    }, []);

    function openModal(item: VocabularyItem) {
        setTargetVocab(item);
        setLessonSearch('');
        setLessonResults([]);
        setSelectedLesson(null);
        setSubmitError('');
    }

    function handleLessonSearch(q: string) {
        setLessonSearch(q);
        setSelectedLesson(null);
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
    }

    async function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (!selectedLesson) { setSubmitError('Please select a lesson.'); return; }
        if (!targetVocab) return;

        setSubmitting(true);
        setSubmitError('');
        try {
            const res = await VocabularyService.addToLesson({
                vocabularyId: targetVocab.id,
                lessonId: selectedLesson.id,
                orderIndex: 0,
            });
            const created = res?.data ?? res;
            // Append the new lessonVocabulary to the item in local state
            setAllItems(prev => prev.map(v => {
                if (v.id !== targetVocab.id) return v;
                const newLv = {
                    id: created?.id ?? String(Date.now()),
                    lessonId: selectedLesson.id,
                    vocabularyId: targetVocab.id,
                    orderIndex: 0,
                    lesson: { id: selectedLesson.id, title: selectedLesson.title },
                };
                return { ...v, lessonVocabularies: [...(v.lessonVocabularies ?? []), newLv] };
            }));
            setTargetVocab(null);
        } catch {
            setSubmitError('Failed to add to lesson. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    const items = allItems.filter(v =>
        lang === 'chinese' ? !!v.pinyin : !v.pinyin
    );

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Vocabulary</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Browse vocabulary by language.</p>
                </div>
            </div>

            <div className="flex gap-2 mb-4">
                {LANG_TABS.map(({ key, label, flag }) => (
                    <button
                        key={key}
                        onClick={() => setLang(key)}
                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            lang === key
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                        }`}
                    >
                        <span>{flag}</span>
                        {label}
                        {!loading && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                                lang === key ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                            }`}>
                                {allItems.filter(v => key === 'chinese' ? !!v.pinyin : !v.pinyin).length}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 animate-pulse">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="px-4 py-3 space-y-1.5">
                            <div className="flex gap-2">
                                <div className="h-4 bg-gray-100 rounded w-16" />
                                <div className="h-4 bg-gray-100 rounded w-20" />
                            </div>
                            <div className="h-3 bg-gray-100 rounded w-48" />
                            <div className="h-3 bg-gray-100 rounded w-64" />
                        </div>
                    ))}
                </div>
            ) : items.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-sm text-gray-400">
                    No vocabulary found.
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                    {items.map(item => (
                        <VocabCard key={item.id} item={item} onAddToLesson={openModal} />
                    ))}
                </div>
            )}

            {/* Add to Lesson modal */}
            {targetVocab && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100">
                            <div>
                                <h2 className="text-[15px] font-semibold text-gray-900">Add to Lesson</h2>
                                <p className="text-[11px] text-gray-400 mt-0.5">
                                    <span className="font-medium text-gray-700">{targetVocab.word}</span>
                                    {targetVocab.pinyin && <span className="ml-1.5 text-blue-500">{targetVocab.pinyin}</span>}
                                    {targetVocab.meaningVi && <span className="ml-1.5">— {targetVocab.meaningVi}</span>}
                                </p>
                            </div>
                            <button onClick={() => setTargetVocab(null)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                                <X size={15} className="text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="px-5 py-4 flex flex-col gap-3">
                            <div className="relative">
                                <label className="block text-[12px] font-medium text-gray-700 mb-1">
                                    Search Lesson <span className="text-red-500">*</span>
                                </label>

                                {selectedLesson ? (
                                    <div className="flex items-center gap-2 px-3 py-2 border border-green-300 rounded-lg bg-green-50">
                                        <BookOpen size={13} className="text-green-500 flex-shrink-0" />
                                        <span className="flex-1 text-sm text-green-800 truncate">{selectedLesson.title}</span>
                                        <button
                                            type="button"
                                            onClick={() => { setSelectedLesson(null); setLessonSearch(''); setLessonResults([]); }}
                                            className="text-green-400 hover:text-green-600"
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
                                                onChange={e => handleLessonSearch(e.target.value)}
                                                placeholder="Search by lesson title..."
                                                autoFocus
                                                className="w-full border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
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
                                                            onClick={() => { setSelectedLesson(l); setLessonResults([]); }}
                                                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 text-left transition-colors"
                                                        >
                                                            <BookOpen size={12} className="text-gray-400 flex-shrink-0" />
                                                            <span className="truncate">{l.title}</span>
                                                            <span className="ml-auto text-[10px] text-gray-400 flex-shrink-0">#{l.id}</span>
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </div>

                            {submitError && <p className="text-[12px] text-red-500">{submitError}</p>}

                            <div className="flex justify-end gap-2 mt-1">
                                <button type="button" onClick={() => setTargetVocab(null)} className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting || !selectedLesson}
                                    className="px-4 py-1.5 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600 disabled:opacity-60 transition-colors"
                                >
                                    {submitting ? 'Saving...' : 'Add to Lesson'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
