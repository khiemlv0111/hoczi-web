'use client'

import { TrendingUp, TrendingDown, Clock, Star, FileText, CheckCircle } from "lucide-react";
import { useAppData } from "@/app/context/AppContext";

const stats = [
    { label: "Quizzes Taken", value: "24", delta: "+3 this week", positive: true },
    { label: "Avg. Score", value: "78%", delta: "+5% vs last week", positive: true },
    { label: "Best Streak", value: "7", delta: "+2 this week", positive: true },
    { label: "Time Spent", value: "3.2h", delta: "-0.5h vs last week", positive: false },
];

const recentQuizzes = [
    { name: "JS Fundamentals", date: "Apr 13, 2026", score: 85 },
    { name: "CSS Basics", date: "Apr 11, 2026", score: 72 },
    { name: "React Essentials", date: "Apr 9, 2026", score: 91 },
    { name: "TypeScript Intro", date: "Apr 7, 2026", score: 64 },
];

const achievements = [
    { title: "First Quiz Completed", earned: true },
    { title: "Score 90%+ on any quiz", earned: true },
    { title: "Complete 10 quizzes", earned: true },
    { title: "7-day streak", earned: false },
];

export function DashboardPage() {
    const { user } = useAppData();

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
                {stats.map(({ label, value, delta, positive }) => (
                    <div key={label} className="bg-white border border-gray-200 rounded-xl p-4">
                        <p className="text-xs text-gray-500 mb-1">{label}</p>
                        <p className="text-2xl font-medium text-gray-900">{value}</p>
                        <div className={`flex items-center gap-1 mt-1 text-xs ${positive ? "text-green-600" : "text-red-500"}`}>
                            {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                            {delta}
                        </div>
                    </div>
                ))}
            </div>

            {/* Two-col row */}
            <div className="grid grid-cols-2 gap-4">
                {/* Recent Quizzes */}
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[13px] font-medium text-gray-900">Recent quizzes</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                            My history
                        </span>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentQuizzes.map(({ name, date, score }) => (
                            <div key={name} className="flex items-center gap-3 py-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                    <Clock size={14} className="text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[13px] text-gray-900">{name}</p>
                                    <p className="text-[11px] text-gray-400">{date}</p>
                                </div>
                                <span className={`text-[13px] font-medium ${score >= 80 ? "text-green-600" : score >= 65 ? "text-yellow-600" : "text-red-500"}`}>
                                    {score}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[13px] font-medium text-gray-900">Achievements</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700">
                            {achievements.filter(a => a.earned).length}/{achievements.length} earned
                        </span>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {achievements.map(({ title, earned }) => (
                            <div key={title} className="flex items-center gap-3 py-2">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${earned ? "bg-yellow-50" : "bg-gray-50"}`}>
                                    {earned ? <Star size={14} className="text-yellow-500" /> : <Star size={14} className="text-gray-300" />}
                                </div>
                                <p className={`text-[13px] ${earned ? "text-gray-900" : "text-gray-400"}`}>{title}</p>
                                {earned && <CheckCircle size={13} className="ml-auto text-green-500" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
