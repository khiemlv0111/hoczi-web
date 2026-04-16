'use client'

import { useAppData } from "@/app/context/AppContext";
import { User, Mail, BookOpen, Shield, Clock, CheckCircle, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const roleLabel: Record<string, { label: string; color: string }> = {
    admin: { label: "Admin", color: "bg-purple-50 text-purple-700 border-purple-200" },
    teacher: { label: "Teacher", color: "bg-blue-50 text-blue-700 border-blue-200" },
    user: { label: "Student", color: "bg-green-50 text-green-700 border-green-200" },
};

export function ProfilePage() {
    const { user, getUserProfile, quizSessions, handleGetQuizSessions } = useAppData();

    useEffect(() => {
        if (!user) {
            getUserProfile();
        }
        handleGetQuizSessions();
    }, []);

    const role = user?.role ?? "user";
    const badge = roleLabel[role] ?? { label: role, color: "bg-gray-50 text-gray-600 border-gray-200" };

    const sessions = quizSessions ?? [];
    const completedSessions = sessions.filter((s: any) => s.status === "completed");
    const avgScore = completedSessions.length
        ? Math.round(
              completedSessions.reduce((sum: number, s: any) => sum + parseFloat(s.score ?? "0"), 0) /
                  completedSessions.length
          )
        : null;

    return (
        <div className="space-y-5">
            {/* Top row: profile card + stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Profile card — spans 1 col on md */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 md:col-span-1">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <User size={26} className="text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="text-[15px] font-semibold text-gray-900 truncate">
                                    {user?.name ?? "—"}
                                </h2>
                                <span className={`text-[11px] px-2 py-0.5 rounded-full border font-medium ${badge.color}`}>
                                    {badge.label}
                                </span>
                            </div>
                            <p className="text-[12px] text-gray-400 mt-0.5">@{user?.username ?? "—"}</p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-[13px] text-gray-600">
                            <Mail size={14} className="text-gray-400 flex-shrink-0" />
                            <span className="truncate">{user?.email ?? "—"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[13px] text-gray-600">
                            <Shield size={14} className="text-gray-400 flex-shrink-0" />
                            <span>{badge.label}</span>
                        </div>
                    </div>
                </div>

                {/* Stats — span 2 cols on md */}
                <div className="md:col-span-2 grid grid-cols-3 gap-3 content-start">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                        <p className="text-2xl font-medium text-gray-900">{sessions.length}</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">Total quizzes</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                        <p className="text-2xl font-medium text-gray-900">{completedSessions.length}</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">Completed</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                        <p className="text-2xl font-medium text-gray-900">
                            {avgScore !== null ? `${avgScore}%` : "—"}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">Avg. score</p>
                    </div>
                </div>
            </div>

            {/* Quiz history — full width */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[13px] font-medium text-gray-900">Quiz history</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                        {sessions.length} sessions
                    </span>
                </div>

                {sessions.length === 0 ? (
                    <div className="py-8 flex flex-col items-center gap-2 text-gray-400">
                        <BookOpen size={28} strokeWidth={1.5} />
                        <p className="text-[13px]">No quizzes taken yet</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 divide-y md:divide-y-0 divide-gray-100">
                        {sessions.slice(0, 8).map((s: any) => {
                            const score = parseFloat(s.score ?? "0");
                            const scoreColor =
                                score >= 80
                                    ? "text-green-600"
                                    : score >= 60
                                    ? "text-yellow-600"
                                    : "text-red-500";
                            const endDate = s.end_time
                                ? new Date(s.end_time).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                  })
                                : null;

                            return (
                                <div key={s.id} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-b-0">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        {s.status === "completed" ? (
                                            <CheckCircle size={14} className="text-blue-600" />
                                        ) : (
                                            <Clock size={14} className="text-gray-400" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] text-gray-900">Session #{s.id}</p>
                                        <p className="text-[11px] text-gray-400">
                                            {endDate ?? s.status}
                                            {s.total_questions ? ` · ${s.total_questions} questions` : ""}
                                        </p>
                                    </div>
                                    {s.status === "completed" && (
                                        <div className="flex items-center gap-1">
                                            <TrendingUp size={12} className={scoreColor} />
                                            <span className={`text-[13px] font-medium ${scoreColor}`}>
                                                {score}%
                                            </span>
                                        </div>
                                    )}
                                    {s.status !== "completed" && (
                                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                                            {s.status}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
