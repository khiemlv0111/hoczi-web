'use client'

import { FullScreenLoading } from "@/app/components/FullScreenLoading";
import { UserService } from "@/data/services/user.service";
import { Question } from "@/data/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Clock, BarChart2, BookOpen } from "lucide-react";

type Answer = {
    id: number;
    content: string;
    is_correct: boolean;
}

type UserAnswer = {
    id: number;
    question_id: number;
    answer_id: number;
    is_correct: boolean;
}

type SessionData = {
    id: number;
    correct_answers: number;
    end_time: string;
    quiz_id: number;
    quiz: { id: number; title?: string; duration_minutes?: number };
    user_id: number;
    score: number;
    status: string;
    start_time: string;
    total_questions: number;
    user: any;
    user_answers: UserAnswer[];
}

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E'];

function tokenize(line: string): { type: string; value: string }[] {
    const tokens: { type: string; value: string }[] = [];
    let remaining = line;
    const patterns: [string, RegExp][] = [
        ["keyword", /^(function|var|let|const|return|for|if|else|of|new|this|=>)(?!\w)/],
        ["builtin", /^(console|Math)\b/],
        ["method", /^\.(log|error|warn|PI)\b/],
        ["string", /^'[^']*'/],
        ["number", /^\b\d+\.?\d*\b/],
        ["identifier", /^[a-zA-Z_$][a-zA-Z0-9_$]*/],
        ["operator", /^[=+\-*/<>!&|?:]+/],
        ["punct", /^[{}()\[\],;.]/],
        ["space", /^\s+/],
    ];
    while (remaining.length > 0) {
        let matched = false;
        for (const [type, regex] of patterns) {
            const m = remaining.match(regex);
            if (m) {
                tokens.push({ type, value: m[0] });
                remaining = remaining.slice(m[0].length);
                matched = true;
                break;
            }
        }
        if (!matched) {
            tokens.push({ type: "plain", value: remaining[0] });
            remaining = remaining.slice(1);
        }
    }
    return tokens;
}

const tokenColors: Record<string, string> = {
    keyword: "#c792ea", builtin: "#82aaff", method: "#82aaff",
    string: "#c3e88d", number: "#f78c6c", identifier: "#eeffff",
    operator: "#89ddff", punct: "#cdd3de", space: "inherit", plain: "#cdd3de",
};

function CodeBlock({ code }: { code?: string | null }) {
    if (!code) return null;
    return (
        <pre className="p-5 text-sm leading-relaxed font-mono overflow-x-auto rounded-lg mb-4"
            style={{ background: "#1a2b2e", color: "#cdd3de" }}>
            {code.split("\n").map((line, i) => (
                <div key={i} className="min-h-[1.5em]">
                    {tokenize(line).map((tok, j) => (
                        <span key={j} style={{ color: tokenColors[tok.type] }}>{tok.value}</span>
                    ))}
                </div>
            ))}
        </pre>
    );
}

function InlineCode({ children }: { children: string }) {
    return (
        <code className="px-1.5 py-0.5 rounded text-xs font-mono bg-gray-100 text-gray-700">
            {children}
        </code>
    );
}

function ExplanationText({ text }: { text: string }) {
    const parts = text.split(/`([^`]+)`/g);
    return (
        <>
            {parts.map((part, i) =>
                i % 2 === 1 ? <InlineCode key={i}>{part}</InlineCode> : <span key={i}>{part}</span>
            )}
        </>
    );
}

function formatDate(iso?: string) {
    if (!iso) return "—";
    return new Date(iso).toLocaleString();
}

function ScoreRing({ score }: { score: number }) {
    const ringColor =
        score >= 80 ? "border-emerald-400 text-emerald-600" :
            score >= 60 ? "border-amber-400 text-amber-600" :
                score > 0 ? "border-rose-400 text-rose-600" :
                    "border-gray-200 text-gray-400";
    return (
        <div className={`w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 ${ringColor}`}>
            <span className="text-2xl font-bold leading-none">{score}%</span>
            {score === 100 && <span className="text-xs mt-1 text-amber-500 font-medium">Perfect</span>}
        </div>
    );
}

const statusConfig: Record<string, { label: string; className: string }> = {
    completed: { label: "Completed", className: "bg-emerald-100 text-emerald-700" },
    in_progress: { label: "In Progress", className: "bg-sky-100 text-sky-700" },
    failed: { label: "Failed", className: "bg-rose-100 text-rose-700" },
};

function StatusBadge({ status }: { status: string }) {
    const cfg = statusConfig[status] ?? { label: status, className: "bg-gray-100 text-gray-600" };
    return (
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cfg.className}`}>
            {cfg.label}
        </span>
    );
}

export function SessionDetailPage({ sessionId }: any) {
    const [questions, setQuestions] = useState<Question[] | undefined>(undefined);
    const [sessionData, setSessionData] = useState<SessionData | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        UserService.getSessionDetail(sessionId).then((res) => {
            setQuestions(res.data.questions);
            setSessionData(res.data.session);
        });
    }, []);

    if (!sessionData || !questions) {
        return <FullScreenLoading />;
    }

    const userAnswerMap: Record<number, UserAnswer> = {};
    for (const ua of sessionData.user_answers ?? []) {
        userAnswerMap[ua.question_id] = ua;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <div className="flex-1 min-w-0">
                        <h1 className="font-semibold text-gray-900 truncate">
                            {sessionData.quiz?.title ?? "Quiz Review"}
                        </h1>
                        <p className="text-xs text-gray-400 mt-0.5">Session #{sessionData.id}</p>
                    </div>
                    <StatusBadge status={sessionData.status} />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
                {/* Summary card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 flex flex-col sm:flex-row items-center gap-6">
                        <ScoreRing score={Number(sessionData.score)} />

                        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                            <div className="flex flex-col items-center sm:items-start gap-1">
                                <div className="flex items-center gap-1.5 text-gray-400">
                                    <CheckCircle2 size={14} />
                                    <span className="text-xs">Correct</span>
                                </div>
                                <span className="font-semibold text-gray-800 text-lg tabular-nums">
                                    {sessionData.correct_answers} / {sessionData.total_questions}
                                </span>
                            </div>

                            <div className="flex flex-col items-center sm:items-start gap-1">
                                <div className="flex items-center gap-1.5 text-gray-400">
                                    <BarChart2 size={14} />
                                    <span className="text-xs">Score</span>
                                </div>
                                <span className="font-semibold text-gray-800 text-lg tabular-nums">
                                    {sessionData.score}%
                                </span>
                            </div>

                            <div className="flex flex-col items-center sm:items-start gap-1">
                                <div className="flex items-center gap-1.5 text-gray-400">
                                    <Clock size={14} />
                                    <span className="text-xs">Duration</span>
                                </div>
                                <span className="font-semibold text-gray-800 text-sm">
                                    {sessionData.quiz?.duration_minutes != null
                                        ? `${sessionData.quiz.duration_minutes}m`
                                        : "—"}
                                </span>
                            </div>

                            <div className="flex flex-col items-center sm:items-start gap-1">
                                <div className="flex items-center gap-1.5 text-gray-400">
                                    <BookOpen size={14} />
                                    <span className="text-xs">Date</span>
                                </div>
                                <span className="font-semibold text-gray-800 text-xs">
                                    {formatDate(sessionData.start_time)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Accuracy bar */}
                    <div className="px-6 pb-6">
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all ${Number(sessionData.score) >= 80 ? "bg-emerald-400" : Number(sessionData.score) >= 60 ? "bg-amber-400" : "bg-rose-400"}`}
                                style={{ width: `${sessionData.score}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>0%</span>
                            <span>100%</span>
                        </div>
                    </div>

                    {Number(sessionData.score) === 100 && (
                        <div className="px-6 pb-5 flex items-center gap-2 text-amber-600">
                            <Trophy size={16} />
                            <span className="text-sm font-medium">Perfect score! Outstanding work.</span>
                        </div>
                    )}
                </div>

                {/* Questions */}
                <div className="space-y-4">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Question Review
                    </h2>

                    {questions.map((q: any, idx: number) => {
                        const options: { label: string; text: string; id: number }[] = (q.answers ?? []).map(
                            (a: Answer, i: number) => ({
                                label: OPTION_LABELS[i] ?? String(i + 1),
                                text: a.content,
                                id: a.id,
                            })
                        );
                        const correctOption = options.find((_, i) => (q.answers?.[i] as Answer)?.is_correct);
                        const userAnswer = userAnswerMap[q.id];
                        const chosenOption = userAnswer
                            ? options.find((o) => o.id === userAnswer.answer_id)
                            : null;
                        const isCorrect = userAnswer?.is_correct ?? false;
                        const isSkipped = !userAnswer;

                        return (
                            <div
                                key={q.id}
                                className={`bg-white rounded-xl border shadow-sm overflow-hidden ${isCorrect ? "border-emerald-200" : isSkipped ? "border-gray-200" : "border-rose-200"}`}
                            >
                                {/* Question header */}
                                <div className={`flex items-start gap-3 px-5 py-4 border-b ${isCorrect ? "border-emerald-100 bg-emerald-50/40" : isSkipped ? "border-gray-100" : "border-rose-100 bg-rose-50/40"}`}>
                                    <span className={`mt-0.5 shrink-0 ${isCorrect ? "text-emerald-500" : isSkipped ? "text-gray-400" : "text-rose-500"}`}>
                                        {isCorrect
                                            ? <CheckCircle2 size={18} />
                                            : isSkipped
                                                ? <XCircle size={18} className="opacity-40" />
                                                : <XCircle size={18} />
                                        }
                                    </span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-gray-800 font-medium text-sm leading-snug">
                                            <span className="text-gray-400 mr-1.5">{idx + 1}.</span>
                                            {q.content ?? q.title}
                                        </p>
                                    </div>
                                    {isSkipped && (
                                        <span className="text-xs text-gray-400 shrink-0">Not answered</span>
                                    )}
                                </div>

                                <div className="px-5 py-4 space-y-4">
                                    {/* Code block */}
                                    {q.code?.code && <CodeBlock code={q.code.code} />}

                                    {/* Options */}
                                    <div className="space-y-1.5">
                                        {options.map((opt) => {
                                            const isChosen = chosenOption?.label === opt.label;
                                            const isCorrectOpt = correctOption?.label === opt.label;

                                            let optClass = "flex items-start gap-3 px-4 py-2.5 rounded-lg text-sm border ";
                                            if (isCorrectOpt && isChosen) {
                                                optClass += "bg-emerald-50 border-emerald-300 text-emerald-800";
                                            } else if (isCorrectOpt) {
                                                optClass += "bg-emerald-50 border-emerald-200 text-emerald-700";
                                            } else if (isChosen) {
                                                optClass += "bg-rose-50 border-rose-300 text-rose-800";
                                            } else {
                                                optClass += "border-gray-100 text-gray-500";
                                            }

                                            return (
                                                <div key={opt.label} className={optClass}>
                                                    <span className="font-mono text-xs font-semibold mt-0.5 w-5 shrink-0">
                                                        {opt.label}
                                                    </span>
                                                    <span className="flex-1">{opt.text}</span>
                                                    <span className="shrink-0 ml-2">
                                                        {isCorrectOpt && isChosen && <CheckCircle2 size={15} className="text-emerald-500" />}
                                                        {isCorrectOpt && !isChosen && <CheckCircle2 size={15} className="text-emerald-400" />}
                                                        {!isCorrectOpt && isChosen && <XCircle size={15} className="text-rose-400" />}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Explanation */}
                                    {q.explanation && (
                                        <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                                            <p className="text-xs font-semibold text-gray-500 mb-1">Explanation</p>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                <ExplanationText text={q.explanation} />
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
