"use client";

import { useState } from "react";
import {
  ChevronDown,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  RotateCcw,
  Trophy,
  ChevronRight,
} from "lucide-react";

type SessionStatus = "completed" | "in_progress" | "failed";
type Priority = "high" | "medium" | "low";

interface QuizSession {
  id: number;
  quiz_name: string;
  status: SessionStatus;
  score: number;
  total_questions: number;
  correct_answers: number;
  start_time: string;
  end_time?: string;
  duration?: string;
}

const mockSessions: QuizSession[] = [
  { id: 1, quiz_name: "JavaScript Fundamentals", status: "completed", score: 87, total_questions: 15, correct_answers: 13, start_time: "Apr 12, 2026", end_time: "Apr 12, 2026", duration: "14m 32s" },
  { id: 2, quiz_name: "React Hooks Deep Dive", status: "completed", score: 60, total_questions: 10, correct_answers: 6, start_time: "Apr 11, 2026", duration: "9m 14s" },
  { id: 3, quiz_name: "TypeScript Advanced", status: "in_progress", score: 0, total_questions: 20, correct_answers: 0, start_time: "Apr 10, 2026" },
  { id: 4, quiz_name: "Node.js & Express", status: "completed", score: 95, total_questions: 20, correct_answers: 19, start_time: "Apr 9, 2026", duration: "22m 05s" },
  { id: 5, quiz_name: "CSS Grid & Flexbox", status: "failed", score: 40, total_questions: 10, correct_answers: 4, start_time: "Apr 8, 2026", duration: "7m 48s" },
  { id: 6, quiz_name: "REST API Design", status: "completed", score: 73, total_questions: 15, correct_answers: 11, start_time: "Apr 7, 2026", duration: "18m 21s" },
  { id: 7, quiz_name: "SQL & PostgreSQL", status: "completed", score: 80, total_questions: 15, correct_answers: 12, start_time: "Apr 6, 2026", duration: "16m 10s" },
  { id: 8, quiz_name: "Rust Basics", status: "in_progress", score: 0, total_questions: 25, correct_answers: 0, start_time: "Apr 5, 2026" },
  { id: 9, quiz_name: "Docker & Containers", status: "completed", score: 55, total_questions: 20, correct_answers: 11, start_time: "Apr 4, 2026", duration: "25m 33s" },
  { id: 10, quiz_name: "Git & Version Control", status: "completed", score: 100, total_questions: 10, correct_answers: 10, start_time: "Apr 3, 2026", duration: "8m 02s" },
  { id: 11, quiz_name: "Algorithms & Data Structures", status: "failed", score: 35, total_questions: 20, correct_answers: 7, start_time: "Apr 2, 2026", duration: "30m 00s" },
  { id: 12, quiz_name: "System Design", status: "completed", score: 68, total_questions: 25, correct_answers: 17, start_time: "Apr 1, 2026", duration: "28m 44s" },
];

const statusConfig: Record<SessionStatus, { label: string; className: string }> = {
  completed: { label: "Completed", className: "bg-emerald-100 text-emerald-700" },
  in_progress: { label: "In Progress", className: "bg-sky-100 text-sky-700" },
  failed: { label: "Failed", className: "bg-rose-100 text-rose-700" },
};

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 80 ? "text-emerald-600" :
    score >= 60 ? "text-amber-600" :
    score > 0   ? "text-rose-600" :
    "text-gray-400";
  return <span className={`font-semibold tabular-nums ${color}`}>{score > 0 ? `${score}%` : "—"}</span>;
}

function ProgressBar({ value }: { value: number }) {
  const color =
    value >= 80 ? "bg-emerald-400" :
    value >= 60 ? "bg-amber-400" :
    value > 0   ? "bg-rose-400" :
    "bg-gray-200";
  return (
    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function QuizSessionTable() {
  const [selected, setSelected] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState<SessionStatus | "all">("all");

  const filtered = filterStatus === "all"
    ? mockSessions
    : mockSessions.filter((s) => s.status === filterStatus);

  const detail = selected !== null ? mockSessions.find((s) => s.id === selected) : null;

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Main table */}
      <div className={`flex flex-col flex-1 min-w-0 transition-all duration-200 ${detail ? "mr-0" : ""}`}>
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 bg-white">
          <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
            <span className="text-xs font-mono text-indigo-500">&lt;/&gt;</span>
            2 hidden fields
            <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <Filter size={14} /> Filter
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <ArrowUpDown size={14} /> Sort
          </button>
          <div className="ml-auto flex gap-2">
            {(["all", "completed", "in_progress", "failed"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                  filterStatus === s
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
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider w-10">#</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Quiz name</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Score</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Questions</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 w-10" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((session) => (
                <tr
                  key={session.id}
                  onClick={() => setSelected(selected === session.id ? null : session.id)}
                  className={`border-b border-gray-100 cursor-pointer transition-colors ${
                    selected === session.id
                      ? "bg-indigo-50 border-l-2 border-l-indigo-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-3 text-gray-400 text-xs">{session.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{session.quiz_name}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusConfig[session.status].className}`}>
                      {statusConfig[session.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <ScoreBadge score={session.score} />
                      <ProgressBar value={session.score} />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 tabular-nums">
                    {session.correct_answers}/{session.total_questions}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">
                    {session.duration ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{session.start_time}</td>
                  <td className="px-4 py-3">
                    <button className="p-1 rounded hover:bg-gray-200 text-gray-400">
                      <MoreHorizontal size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail panel */}
      {detail && (
        <div className="w-80 border-l border-gray-200 bg-white flex flex-col overflow-y-auto shrink-0">
          {/* Header */}
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900 text-base leading-tight">{detail.quiz_name}</h2>
          </div>

          <div className="flex-1 px-5 py-4 space-y-5">
            {/* Score circle */}
            <div className="flex flex-col items-center py-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold border-4 ${
                detail.score >= 80 ? "border-emerald-400 text-emerald-600" :
                detail.score >= 60 ? "border-amber-400 text-amber-600" :
                detail.score > 0  ? "border-rose-400 text-rose-600" :
                "border-gray-200 text-gray-400"
              }`}>
                {detail.score > 0 ? `${detail.score}%` : "—"}
              </div>
              {detail.score === 100 && (
                <div className="flex items-center gap-1 mt-2 text-amber-500 text-xs font-medium">
                  <Trophy size={12} /> Perfect score!
                </div>
              )}
            </div>

            {/* Fields */}
            {[
              { label: "Session ID", value: `#${detail.id}` },
              { label: "Status", value: (
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusConfig[detail.status].className}`}>
                  {statusConfig[detail.status].label}
                </span>
              )},
              { label: "Correct answers", value: `${detail.correct_answers} / ${detail.total_questions}` },
              { label: "Duration", value: detail.duration ?? "—" },
              { label: "Start date", value: detail.start_time },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-gray-400 mb-1">{label}</p>
                <div className="text-sm font-medium text-gray-800">{value}</div>
              </div>
            ))}

            {/* Progress breakdown */}
            <div>
              <p className="text-xs text-gray-400 mb-2">Accuracy</p>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    detail.score >= 80 ? "bg-emerald-400" :
                    detail.score >= 60 ? "bg-amber-400" :
                    "bg-rose-400"
                  }`}
                  style={{ width: `${detail.score}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-5 py-4 border-t border-gray-100 flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Eye size={14} /> Review
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              <RotateCcw size={14} /> Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
