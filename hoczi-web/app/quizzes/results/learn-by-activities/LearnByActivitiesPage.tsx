'use client'
import Link from "next/link";

const topics = [
    {
        id: 1,
        label: "Learn English",
        description: "Arrange words to build correct English sentences step by step.",
        path: '/quizzes/results/learn-by-activities/english-words',
        emoji: "🇬🇧",
        gradient: "from-blue-500 to-indigo-600",
        badge: "Beginner friendly",
        badgeColor: "bg-blue-100 text-blue-700",
    },
    {
        id: 2,
        label: "Learn Chinese",
        description: "Practice Chinese sentence structure with drag-and-drop exercises.",
        path: '/quizzes/results/learn-by-activities/chinese-words',
        emoji: "🇨🇳",
        gradient: "from-red-500 to-orange-500",
        badge: "Intermediate",
        badgeColor: "bg-orange-100 text-orange-700",
    },
];

export function LearnByActivitiesPage() {
    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Learn by Activities</h1>
                <p className="text-sm text-gray-500">Pick a topic and practice building sentences with drag-and-drop exercises.</p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topics.map((topic) => (
                    <Link
                        key={topic.id}
                        href={topic.path}
                        className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                        {/* Coloured top strip */}
                        <div className={`h-2 w-full bg-gradient-to-r ${topic.gradient}`} />

                        <div className="p-5">
                            {/* Emoji + badge */}
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-4xl leading-none">{topic.emoji}</span>
                                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${topic.badgeColor}`}>
                                    {topic.badge}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-[15px] font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                {topic.label}
                            </h2>

                            {/* Description */}
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                {topic.description}
                            </p>

                            {/* CTA */}
                            <div className={`inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r ${topic.gradient} text-white px-3 py-1.5 rounded-lg`}>
                                Start learning →
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
