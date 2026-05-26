'use client'

import { LessonService } from "@/data/services/lesson.service";
import { useEffect, useState } from "react";
import { FillTheBlankTab } from "./tabs/FillTheBlankTab";
import { MatchingTab } from "./tabs/MatchingTab";
import { MultipleChoiceTab } from "./tabs/MultipleChoiceTab";
import { SentenceOrderTab } from "./tabs/SentenceOrderTab";
import { Lesson } from "./tabs/types";
import Link from "next/link";

const CATEGORIES = [
    { id: 13, slug: 'chinese', name: 'Tiếng Trung', emoji: '🀄', gradient: 'from-rose-500 to-red-600' },
    { id: 3, slug: 'english', name: 'English', emoji: '📝', gradient: 'from-sky-400 to-blue-600' },
    { id: 14, slug: 'math', name: 'Math', emoji: '📐', gradient: 'from-emerald-400 to-green-600' },
    { id: 16, slug: 'science', name: 'Science', emoji: '🧪', gradient: 'from-violet-500 to-purple-700' },
    { id: 18, slug: 'ESL', name: 'ESL', emoji: '🗣️', gradient: 'from-amber-400 to-orange-500' },
    { id: 7, slug: 'programming', name: 'Lập trình - Programming', emoji: '🖥️', gradient: 'from-amber-400 to-orange-500' },
];

const TABS = [
    { key: 'sentence_order', label: 'Sentence Order', emoji: '📝', component: SentenceOrderTab },
    { key: 'fill_blank', label: 'Fill the Blank', emoji: '✏️', component: FillTheBlankTab },
    { key: 'multiple_choice', label: 'Multiple Choice', emoji: '🔤', component: MultipleChoiceTab },
    { key: 'matching', label: 'Matching', emoji: '🔗', component: MatchingTab },
];

export function LearnByActivityDetailPage({ activity }: { activity: string }) {
    const category = CATEGORIES.find((c) => c.slug === activity);

    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('sentence_order');

    useEffect(() => {
        if (!category) { setLoading(false); return; }
        setLoading(true);
        LessonService.getLessonsByCategoryId(category.id, activeTab)
            .then((res) => setLessons(res?.data ?? res ?? []))
            .finally(() => setLoading(false));
    }, [activeTab]);

    if (!category) {
        return (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">
                Category not found.
            </div>
        );
    }

    const ActiveTabComponent = TABS.find(t => t.key === activeTab)!.component;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex justify-between">
                <div className="flex gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-sm`}>
                        {category.emoji}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">{category.name}</h1>
                        <p className="text-xs text-gray-500 mt-0.5">
                            {loading ? 'Loading…' : `${lessons.length} lesson${lessons.length !== 1 ? 's' : ''} available`}
                        </p>
                    </div>
                </div>
                <div>
                    <Link className="primary-btn border border-blue-400 rounded-lg text-gray-600 px-4 py-2" 
                        href={`/quizzes/results/learn-by-activities/${activity}/do-quizzes`}>Quiz to learn</Link>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6">
                {TABS.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-medium transition-all duration-150
                            ${activeTab === tab.key
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <span>{tab.emoji}</span>
                        <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Active tab content */}
            <ActiveTabComponent lessons={lessons} loading={loading} />
        </div>
    );
}
