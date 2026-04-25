"use client";

import { useState } from "react";
import {
  ChevronDown,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Eye,
  RotateCcw,
  Trophy,
  X,
} from "lucide-react";
import { useAppData } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";

interface QuizSession {
  id: number;
  quiz_id: number;
  status: string;
  score: number | string;
  total_questions?: number | string;
  correct_answers?: number | string;
  start_time?: string;
  end_time?: string;
  user_id: number;
  quiz?: {
    id: number;
    title?: string;
    duration_minutes?: number;
  };
}

const statusConfig: Record<string, { label: string; className: string }> = {
  completed: { label: "Completed", className: "bg-emerald-100 text-emerald-700" },
  in_progress: { label: "In Progress", className: "bg-sky-100 text-sky-700" },
  failed: { label: "Failed", className: "bg-rose-100 text-rose-700" },
};

function getStatusConfig(status: string) {
  return statusConfig[status] ?? { label: status, className: "bg-gray-100 text-gray-600" };
}

function ScoreBadge({ score }: { score: number | string }) {
  const num = Number(score);
  const color =
    num >= 80 ? "text-emerald-600" :
      num >= 60 ? "text-amber-600" :
        num > 0 ? "text-rose-600" :
          "text-gray-400";
  return (
    <span className={`font-semibold tabular-nums ${color}`}>
      {num > 0 ? `${num}%` : "—"}
    </span>
  );
}

function ProgressBar({ value }: { value: number | string }) {
  const num = Number(value);
  const color =
    num >= 80 ? "bg-emerald-400" :
      num >= 60 ? "bg-amber-400" :
        num > 0 ? "bg-rose-400" :
          "bg-gray-200";
  return (
    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${num}%` }} />
    </div>
  );
}

export default function QuizSessionTable() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const { quizSessions, handleRetryQuiz } = useAppData();
  const router = useRouter()

  const EXCLUDED_STATUSES = ['assigned', 'draft'] as const;

  const sessions: QuizSession[] = (quizSessions ?? []).filter(
    (session) => !EXCLUDED_STATUSES.includes(session.status)
  );

  const filtered =
    filterStatus === "all"
      ? sessions
      : sessions.filter((s) => s.status === filterStatus);

  const detail = selected !== null ? filtered.find((s) => s.id === selected) ?? null : null;

  const handleRetry = () => {
    console.log('CLICK detail', detail);
    const quizId = Number(detail?.quiz_id)
    if (quizId) {
      handleRetryQuiz(quizId).then((res) => {
        console.log("QUESTION LIST", res.questions);
        router.push(`/quizzes`);


      })
    }


    // router.push(`/`)
  }

  const handleViewSession = () => {
    const quizId = Number(detail?.quiz_id)

    console.log('View detail', detail);
    router.push(`/quizzes/results/sessions/${detail?.id}`);
    // const quizId = Number(detail?.quiz_id)


  }

  return (
    <div className="flex flex-col md:flex-row h-full bg-gray-50 font-sans overflow-hidden">
      {/* Main table */}
      <div className="flex flex-col flex-1 min-w-0 transition-all duration-200">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 px-4 sm:px-6 py-3 border-b border-gray-200 bg-white">
          <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
            <span className="text-xs font-mono text-indigo-500">&lt;/&gt;</span>
            <span className="hidden sm:inline">2 hidden fields</span>
            <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <Filter size={14} /> <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <ArrowUpDown size={14} /> <span className="hidden sm:inline">Sort</span>
          </button>
          <div className="flex gap-1.5 flex-wrap">
            {(["all", "completed", "in_progress", "failed"] as const).map((s) => (
              <button
                key={s}
                onClick={() => { setFilterStatus(s); setSelected(null); }}
                className={`text-xs px-2.5 py-1.5 rounded-lg transition-colors ${filterStatus === s
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 hover:bg-gray-100"
                  }`}
              >
                {s === "all" ? "All" : s === "in_progress" ? "In Progress" : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-white sticky top-0 z-10">
                <th className="hidden sm:table-cell text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider w-10">#</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Quiz name</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Score</th>
                <th className="hidden md:table-cell text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Questions</th>
                <th className="hidden md:table-cell text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="hidden sm:table-cell text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 w-10" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((session) => {
                const cfg = getStatusConfig(session.status);
                return (
                  <tr
                    key={session.id}
                    onClick={() => setSelected(selected === session.id ? null : session.id)}
                    className={`border-b border-gray-100 cursor-pointer transition-colors ${selected === session.id
                      ? "bg-indigo-50 border-l-2 border-l-indigo-500"
                      : "hover:bg-gray-50"
                      }`}
                  >
                    <td className="hidden sm:table-cell px-6 py-3 text-gray-400 text-xs">{session.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{session.quiz?.title ?? "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cfg.className}`}>
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <ScoreBadge score={session.score} />
                        <ProgressBar value={session.score} />
                      </div>
                    </td>
                    <td className="hidden md:table-cell px-4 py-3 text-gray-600 tabular-nums">
                      {session.correct_answers ?? 0}/{session.total_questions ?? 0}
                    </td>
                    <td className="hidden md:table-cell px-4 py-3 text-gray-500 text-xs">
                      {session.quiz?.duration_minutes != null ? `${session.quiz.duration_minutes}m` : "—"}
                    </td>
                    <td className="hidden sm:table-cell px-4 py-3 text-gray-500 text-xs">{session.start_time ?? "—"}</td>
                    <td className="px-4 py-3">
                      <button className="p-1 rounded hover:bg-gray-200 text-gray-400">
                        <MoreHorizontal size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail panel */}
      {detail && (
        <div className="fixed bottom-0 left-0 right-0 z-20 md:static md:z-auto md:w-80 md:border-l md:border-t-0 border-t border-gray-200 bg-white flex flex-col overflow-y-auto shrink-0 max-h-[55vh] md:max-h-[85vh] shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:shadow-none">
          {/* Header */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between h-[67px]">
            <h2 className="font-semibold text-gray-900 text-base leading-tight">
              {detail.quiz?.title ?? "—"}
            </h2>
            <button
              onClick={() => setSelected(null)}
              className="md:hidden p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 px-5 py-4 space-y-5">
            {/* Score circle */}
            <div className="flex flex-col items-center py-4">
              {(() => {
                const num = Number(detail.score);
                const ringColor =
                  num >= 80 ? "border-emerald-400 text-emerald-600" :
                    num >= 60 ? "border-amber-400 text-amber-600" :
                      num > 0 ? "border-rose-400 text-rose-600" :
                        "border-gray-200 text-gray-400";
                return (
                  <>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold border-4 ${ringColor}`}>
                      {num > 0 ? `${num}%` : "—"}
                    </div>
                    {num === 100 && (
                      <div className="flex items-center gap-1 mt-2 text-amber-500 text-xs font-medium">
                        <Trophy size={12} /> Perfect score!
                      </div>
                    )}
                  </>
                );
              })()}
            </div>

            {/* Fields */}
            {(() => {
              const cfg = getStatusConfig(detail.status);
              const num = Number(detail.score);
              const fields = [
                { label: "Session ID", value: `#${detail.id}` },
                {
                  label: "Status",
                  value: (
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cfg.className}`}>
                      {cfg.label}
                    </span>
                  ),
                },
                {
                  label: "Correct answers",
                  value: `${detail.correct_answers ?? 0} / ${detail.total_questions ?? 0}`,
                },
                {
                  label: "Duration",
                  value: detail.quiz?.duration_minutes != null ? `${detail.quiz.duration_minutes}m` : "—",
                },
                { label: "Start date", value: detail.start_time ?? "—" },
              ];
              return fields.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-1">{label}</p>
                  <div className="text-sm font-medium text-gray-800">{value}</div>
                </div>
              ));
            })()}

            {/* Accuracy bar */}
            <div>
              <p className="text-xs text-gray-400 mb-2">Accuracy</p>
              {(() => {
                const num = Number(detail.score);
                const barColor =
                  num >= 80 ? "bg-emerald-400" :
                    num >= 60 ? "bg-amber-400" :
                      "bg-rose-400";
                return (
                  <>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${barColor}`}
                        style={{ width: `${num}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Actions */}
          <div className="sticky bottom-0 px-5 py-4 border-t border-gray-100 bg-white flex gap-2">
            <button onClick={handleViewSession} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Eye size={14} /> Review
            </button>
            <button onClick={handleRetry} className="flex-1 cursor-pointer flex items-center justify-center gap-1.5 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              <RotateCcw size={14} /> Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
