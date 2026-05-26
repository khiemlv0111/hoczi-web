import Link from "next/link";
import { TabProps } from "./types";

export function FillTheBlankTab({ lessons, loading }: TabProps) {
    if (loading) {
        return (
            <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 animate-pulse">
                        <div className="h-4 bg-gray-100 rounded w-1/3 mb-2" />
                        <div className="h-3 bg-gray-100 rounded w-2/3" />
                    </div>
                ))}
            </div>
        );
    }

    if (lessons.length === 0) {
        return (
            <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
                <p className="text-3xl mb-2">📭</p>
                <p className="text-sm text-gray-500">No Fill the Blank lessons found.</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {lessons.map((lesson, index) => (
                <Link
                    key={lesson.id}
                    href={`/quizzes/results/learn-by-activities/lessons/${lesson.id}?activity_type=fill_blank`}
                    className="group flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-blue-300 hover:shadow-sm transition-all duration-150"
                >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-50 text-gray-500 group-hover:text-blue-600 text-xs font-bold flex items-center justify-center transition-colors">
                        {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors">
                            {lesson.title}
                        </p>
                        {lesson.topic && (
                            <span className="text-[11px] text-gray-400">{lesson.topic.name}</span>
                        )}
                        {lesson.content && (
                            <p className="text-xs text-gray-400 mt-1 truncate">{lesson.content}</p>
                        )}
                    </div>
                    <span className="flex-shrink-0 text-gray-300 group-hover:text-blue-400 text-lg transition-colors">→</span>
                </Link>
            ))}
        </div>
    );
}
