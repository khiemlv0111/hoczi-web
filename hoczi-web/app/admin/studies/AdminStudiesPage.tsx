'use client'

import { useState } from "react";
import { AdminCourseTab } from "./courses/AdminCourseTab";
import { AdminVocabularyTab } from "./vocabularies/AdminVocabularyTab";
import { AdminLessonsTab } from "./lessons/AdminLessonsTab";

type Tab = 'courses' | 'lessons' | 'vocabulary';

const TABS: { key: Tab; label: string }[] = [
    { key: 'courses', label: 'Courses' },
    { key: 'lessons', label: 'Lessons' },
    { key: 'vocabulary', label: 'Vocabulary' },
];

export function AdminStudiesPage() {
    const [activeTab, setActiveTab] = useState<Tab>('courses');

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-lg font-semibold text-gray-900">Studies</h1>
                <p className="text-xs text-gray-500 mt-0.5">Manage courses, lessons, and vocabulary content.</p>
            </div>

            <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit mb-6">
                {TABS.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`px-5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            activeTab === key
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {activeTab === 'courses' && <AdminCourseTab />}
            {activeTab === 'lessons' && <AdminLessonsTab />}
            {activeTab === 'vocabulary' && <AdminVocabularyTab />}
        </div>
    );
}
