'use client'

import { useEffect, useRef, useState } from "react";
import { Activity, ContentProps } from "./types";

const COUNTDOWN = 20;

type MatchingQuestion = {
    id: number; instruction: string;
    leftItems: string[]; rightItems: string[];
    correctPairs: Record<string, string>;
    explanation: string; image_url?: string;
};

function splitCSV(val: string | undefined): string[] {
    if (!val) return [];
    return val.split(',').map((s) => s.trim()).filter(Boolean);
}

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }

function mapToQuestion(a: Activity, index: number): MatchingQuestion {
    const cfg = a.config ?? {};
    const left = splitCSV(cfg.left_items);
    const right = splitCSV(cfg.right_items);
    const correctPairs: Record<string, string> = {};
    left.forEach((l, i) => { if (right[i]) correctPairs[l] = right[i]; });
    return {
        id: Number(a.id) || index,
        instruction: a.instruction || cfg.instruction || 'Match the words.',
        leftItems: left, rightItems: shuffle(right), correctPairs,
        explanation: cfg.explanation ?? '', image_url: cfg.media_url || undefined,
    };
}

const PAIR_COLORS = [
    'bg-blue-100 border-blue-400 text-blue-800', 'bg-violet-100 border-violet-400 text-violet-800',
    'bg-amber-100 border-amber-400 text-amber-800', 'bg-rose-100 border-rose-400 text-rose-800',
    'bg-teal-100 border-teal-400 text-teal-800',
];

function ResultsScreen({ scores, questions, userAnswers, onRestart }: {
    scores: boolean[];
    questions: MatchingQuestion[];
    userAnswers: Record<string, string>[];
    onRestart: () => void;
}) {
    const [reviewIdx, setReviewIdx] = useState<number | null>(null);
    const totalCorrect = scores.filter(Boolean).length;
    const pct = Math.round((totalCorrect / questions.length) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';

    const rq = reviewIdx !== null ? questions[reviewIdx] : null;
    const userMatch = reviewIdx !== null ? (userAnswers[reviewIdx] ?? {}) : {};

    return (
        <div className="max-w-md mx-auto px-4 py-16 flex flex-col items-center text-center">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Quiz Complete!</h2>
            <p className="text-sm text-gray-500 mb-8">{questions.length} question{questions.length !== 1 ? 's' : ''} finished</p>
            <div className="w-36 h-36 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center mb-6">
                <span className="text-4xl font-extrabold text-blue-600">{pct}%</span>
                <span className="text-xs text-gray-400 mt-0.5">{totalCorrect} / {questions.length} correct</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">Tap a question to review your answer</p>
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
                {scores.map((s, i) => (
                    <button key={i} onClick={() => setReviewIdx(i)}
                        className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 ${s ? 'bg-green-500 hover:bg-green-600' : 'bg-red-400 hover:bg-red-500'}`}>
                        {i + 1}
                    </button>
                ))}
            </div>
            <button onClick={onRestart}
                className="flex items-center gap-2 px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors text-sm">
                🔄 Redo Quiz
            </button>

            {reviewIdx !== null && rq && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setReviewIdx(null)}>
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-left max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-gray-900 text-base">Question {reviewIdx + 1} Review</h3>
                            <button onClick={() => setReviewIdx(null)} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 text-lg">×</button>
                        </div>
                        <div className="space-y-2">
                            {rq.leftItems.map((left) => {
                                const correctRight = rq.correctPairs[left];
                                const userRight = userMatch[left];
                                const isCorrect = userRight === correctRight;
                                return (
                                    <div key={left} className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                        <span className="flex-1 text-sm font-medium text-gray-800">{left}</span>
                                        <span className="text-gray-300 text-xs">→</span>
                                        <div className="flex flex-col items-end gap-0.5">
                                            {userRight && userRight !== correctRight && (
                                                <span className="text-xs text-red-600 line-through opacity-70">{userRight}</span>
                                            )}
                                            <span className={`text-sm font-medium ${isCorrect ? 'text-green-700' : 'text-green-700'}`}>{correctRight}</span>
                                        </div>
                                        <span className={isCorrect ? 'text-green-500' : 'text-red-400'}>{isCorrect ? '✓' : '✗'}</span>
                                    </div>
                                );
                            })}
                        </div>
                        {!Object.keys(userMatch).length && (
                            <p className="text-sm text-gray-400 italic mt-3">No matches given — time ran out</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function QuestionView({ q, index, isLast, onResult, onNext, onFinish }: {
    q: MatchingQuestion; index: number; isLast: boolean;
    onResult: (isCorrect: boolean, answer: Record<string, string>) => void;
    onNext: () => void; onFinish: () => void;
}) {
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matches, setMatches] = useState<Record<string, string>>({});
    const [checked, setChecked] = useState(false);
    const [timeLeft, setTimeLeft] = useState(COUNTDOWN);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const matchesRef = useRef<Record<string, string>>({});
    useEffect(() => { matchesRef.current = matches; }, [matches]);

    const matchedLeftByRight = Object.fromEntries(Object.entries(matches).map(([l, r]) => [r, l]));
    const pairIndex = (leftItem: string) => Object.keys(matches).indexOf(leftItem);
    const correctCount = Object.entries(matches).filter(([l, r]) => q.correctPairs[l] === r).length;
    const allCorrect = checked && correctCount === q.leftItems.length;
    const allMatched = Object.keys(matches).length === q.leftItems.length;

    function stopTimer() { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } }

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(timerRef.current!); timerRef.current = null;
                    setChecked(true);
                    onResult(false, matchesRef.current);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => stopTimer();
    }, []);

    useEffect(() => { if (checked) stopTimer(); }, [checked]);

    function handleCheck() {
        const isCorrect = correctCount === q.leftItems.length;
        setChecked(true);
        onResult(isCorrect, matches);
    }

    function handleLeftClick(item: string) {
        if (checked) return;
        setSelectedLeft(selectedLeft === item ? null : item);
    }

    function handleRightClick(item: string) {
        if (checked || !selectedLeft) return;
        setMatches((prev) => {
            const next = { ...prev };
            const prevLeft = matchedLeftByRight[item];
            if (prevLeft) delete next[prevLeft];
            next[selectedLeft] = item;
            return next;
        });
        setSelectedLeft(null);
    }

    function getLeftClass(item: string) {
        if (checked) {
            const ok = matches[item] && q.correctPairs[item] === matches[item];
            return ok ? 'border-green-400 bg-green-50 text-green-800' : matches[item] ? 'border-red-400 bg-red-50 text-red-800' : 'border-gray-200 bg-gray-50 text-gray-400';
        }
        if (selectedLeft === item) return 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-300';
        if (matches[item]) return PAIR_COLORS[pairIndex(item) % PAIR_COLORS.length] + ' border-2';
        return 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50';
    }

    function getRightClass(item: string) {
        if (checked) {
            const left = matchedLeftByRight[item];
            const ok = left && q.correctPairs[left] === item;
            return ok ? 'border-green-400 bg-green-50 text-green-800' : left ? 'border-red-400 bg-red-50 text-red-800' : 'border-gray-200 bg-gray-50 text-gray-400';
        }
        if (matchedLeftByRight[item]) return PAIR_COLORS[pairIndex(matchedLeftByRight[item]) % PAIR_COLORS.length] + ' border-2';
        if (selectedLeft) return 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
        return 'border-gray-200 bg-white text-gray-500';
    }

    const pct = (timeLeft / COUNTDOWN) * 100;
    const timerColor = timeLeft > 10 ? 'bg-green-400' : timeLeft > 5 ? 'bg-amber-400' : 'bg-red-500';

    return (
        <div>
            {!checked && (
                <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">Time remaining</span>
                        <span className={`text-sm font-bold tabular-nums ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : timeLeft <= 10 ? 'text-amber-500' : 'text-green-600'}`}>{timeLeft}s</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-1000 ${timerColor}`} style={{ width: `${pct}%` }} />
                    </div>
                </div>
            )}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-900 text-white text-sm font-bold flex items-center justify-center">{index + 1}</span>
                <p className="flex-1 text-gray-800 font-medium text-sm leading-snug pt-0.5">{q.instruction}</p>
            </div>
            {q.image_url && <div className="flex justify-center mb-6"><img src={q.image_url} alt="question" className="max-h-48 object-contain rounded-xl" /></div>}
            {!checked && (
                <p className="text-[11px] text-gray-400 mb-4 text-center">
                    {selectedLeft ? `"${selectedLeft}" selected — now pick a match on the right` : 'Click a word on the left, then its match on the right'}
                </p>
            )}
            <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex flex-col gap-2">
                    {q.leftItems.map((item) => (
                        <button key={item} onClick={() => handleLeftClick(item)}
                            className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${getLeftClass(item)}`}>
                            <span className="flex items-center justify-between">
                                {item}
                                {!checked && matches[item] && <span className="text-[10px] opacity-60">→ {matches[item]}</span>}
                                {checked && matches[item] && <span>{q.correctPairs[item] === matches[item] ? '✓' : '✗'}</span>}
                            </span>
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    {q.rightItems.map((item) => (
                        <button key={item} onClick={() => handleRightClick(item)}
                            className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${getRightClass(item)}`}>
                            <span className="flex items-center justify-between">
                                {item}
                                {checked && matchedLeftByRight[item] && <span>{q.correctPairs[matchedLeftByRight[item]] === item ? '✓' : '✗'}</span>}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            {checked && (
                <div className={`text-sm font-semibold mb-2 ${allCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {allCorrect ? '✓ Perfect match!'
                        : timeLeft === 0 ? `⏰ Time's up! ${correctCount} of ${q.leftItems.length} correct.`
                        : `✗ ${correctCount} of ${q.leftItems.length} correct.`}
                </div>
            )}
            {checked && q.explanation && <p className="text-xs text-gray-500 mb-4 leading-relaxed">{q.explanation}</p>}
            <div className="flex items-center gap-3">
                {!checked && <button onClick={handleCheck} disabled={!allMatched} className="px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">✓ Check</button>}
                {checked && <button onClick={isLast ? onFinish : onNext} className={`px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-colors ml-auto ${allCorrect ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-800'}`}>{isLast ? 'Finish ✓' : 'Next →'}</button>}
            </div>
        </div>
    );
}

export function MatchingContent({ activities }: ContentProps) {
    const questions = activities.map(mapToQuestion);
    const [current, setCurrent] = useState(0);
    const [scores, setScores] = useState<boolean[]>([]);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>[]>([]);
    const [done, setDone] = useState(false);

    if (questions.length === 0) return <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">No matching activities found.</div>;

    function restartQuiz() { setScores([]); setUserAnswers([]); setDone(false); setCurrent(0); }

    if (done) return <ResultsScreen scores={scores} questions={questions} userAnswers={userAnswers} onRestart={restartQuiz} />;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 select-none">
            <QuestionView key={current} q={questions[current]} index={current}
                isLast={current === questions.length - 1}
                onResult={(isCorrect, answer) => { setScores((s) => [...s, isCorrect]); setUserAnswers((ua) => [...ua, answer]); }}
                onNext={() => setCurrent((c) => c + 1)}
                onFinish={() => setDone(true)} />
            {questions.length > 1 && (
                <div className="flex gap-1.5 mt-8">
                    {questions.map((_, i) => (
                        <button key={i} onClick={() => setCurrent(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-blue-500' : 'bg-gray-200 hover:bg-gray-300'}`} />
                    ))}
                </div>
            )}
        </div>
    );
}
