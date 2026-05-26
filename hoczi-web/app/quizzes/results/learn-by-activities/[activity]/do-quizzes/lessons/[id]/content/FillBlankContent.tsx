'use client'

import { useEffect, useRef, useState } from "react";
import { Activity, ContentProps } from "./types";

const COUNTDOWN = 20;

type FillBlankQuestion = {
    id: number;
    instruction: string;
    blank_sentence: string;
    answer: string;
    options: string[];
    explanation: string;
    image_url?: string;
};

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }

function splitCSV(val: string | undefined): string[] {
    if (!val) return [];
    return val.split(',').map((s) => s.trim()).filter(Boolean);
}

function mapToQuestion(a: Activity, index: number): FillBlankQuestion {
    const cfg = a.config ?? {};
    const distractors = splitCSV(cfg.distractors);
    return {
        id: Number(a.id) || index,
        instruction: a.instruction || cfg.instruction || 'Fill in the blank.',
        blank_sentence: cfg.blank_sentence ?? '',
        answer: cfg.answer ?? '',
        options: shuffle([cfg.answer, ...distractors].filter(Boolean)),
        explanation: cfg.explanation ?? '',
        image_url: cfg.media_url || undefined,
    };
}

function SentenceDisplay({ sentence, selected }: { sentence: string; selected: string | null }) {
    const parts = sentence.split('__');
    return (
        <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            {parts.map((part, i) => (
                <span key={i}>
                    {part}
                    {i < parts.length - 1 && (
                        <span className={`inline-block min-w-[80px] mx-1 px-3 py-0.5 rounded-lg border-b-2 text-center align-baseline transition-all
                            ${selected ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-gray-400 bg-gray-50 text-transparent'}`}>
                            {selected ?? '___'}
                        </span>
                    )}
                </span>
            ))}
        </p>
    );
}

function ResultsScreen({ scores, questions, userAnswers, onRestart }: {
    scores: boolean[];
    questions: FillBlankQuestion[];
    userAnswers: (string | null)[];
    onRestart: () => void;
}) {
    const [reviewIdx, setReviewIdx] = useState<number | null>(null);
    const totalCorrect = scores.filter(Boolean).length;
    const pct = Math.round((totalCorrect / questions.length) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';

    const rq = reviewIdx !== null ? questions[reviewIdx] : null;
    const userAns = reviewIdx !== null ? userAnswers[reviewIdx] : null;

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
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-left" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="font-bold text-gray-900 text-base">Question {reviewIdx + 1} Review</h3>
                            <button onClick={() => setReviewIdx(null)}
                                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 text-lg">×</button>
                        </div>
                        <p className="text-sm text-gray-700 mb-4 italic">{rq.blank_sentence.replace('__', `[${rq.answer}]`)}</p>
                        <div className="mb-4">
                            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Correct Answer</p>
                            <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-sm font-medium">{rq.answer}</span>
                        </div>
                        <div>
                            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Your Answer</p>
                            {userAns
                                ? <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${userAns === rq.answer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{userAns}</span>
                                : <span className="text-sm text-gray-400 italic">No answer given — time ran out</span>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function QuestionView({ q, index, isLast, onResult, onNext, onFinish }: {
    q: FillBlankQuestion; index: number; isLast: boolean;
    onResult: (isCorrect: boolean, answer: string | null) => void;
    onNext: () => void; onFinish: () => void;
}) {
    const [selected, setSelected] = useState<string | null>(null);
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [timeLeft, setTimeLeft] = useState(COUNTDOWN);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const selectedRef = useRef<string | null>(null);
    useEffect(() => { selectedRef.current = selected; }, [selected]);

    function stopTimer() { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } }

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(timerRef.current!); timerRef.current = null;
                    setChecked(true); setCorrect(false);
                    onResult(false, selectedRef.current);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => stopTimer();
    }, []);

    useEffect(() => { if (checked) stopTimer(); }, [checked]);

    function handleCheck() {
        const isCorrect = selected === q.answer;
        setCorrect(isCorrect); setChecked(true);
        onResult(isCorrect, selected);
    }

    function speak() {
        if (!window.speechSynthesis || !q.blank_sentence) return;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(q.blank_sentence.replace('__', q.answer));
        utt.onstart = () => setSpeaking(true);
        utt.onend = () => setSpeaking(false);
        utt.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(utt);
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
                <button onClick={speak} className={`flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm transition-colors ${speaking ? 'bg-blue-700 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'}`}>🔊</button>
            </div>
            {q.image_url && <div className="flex justify-center mb-6"><img src={q.image_url} alt="question" className="max-h-48 object-contain rounded-xl" /></div>}
            <div className="bg-white border border-gray-200 rounded-xl px-6 py-6 mb-6 text-center">
                <SentenceDisplay sentence={q.blank_sentence} selected={selected} />
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {q.options.map((opt) => {
                    const isSelected = selected === opt;
                    const isCorrectOpt = checked && opt === q.answer;
                    const isWrongOpt = checked && isSelected && !correct;
                    return (
                        <button key={opt} onClick={() => { if (!checked) setSelected(opt); }} disabled={checked}
                            className={['px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all',
                                isCorrectOpt ? 'bg-green-50 border-green-400 text-green-800'
                                    : isWrongOpt ? 'bg-red-50 border-red-400 text-red-800'
                                    : isSelected ? 'bg-blue-50 border-blue-400 text-blue-800'
                                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50',
                                checked ? 'cursor-default' : 'cursor-pointer'].join(' ')}>
                            {opt}
                        </button>
                    );
                })}
            </div>
            {checked && (
                <div className={`text-sm font-semibold mb-2 ${correct ? 'text-green-600' : 'text-red-600'}`}>
                    {correct ? '✓ Correct!' : timeLeft === 0 ? `⏰ Time's up! Answer: "${q.answer}"` : `✗ The answer is "${q.answer}".`}
                </div>
            )}
            {checked && q.explanation && <p className="text-xs text-gray-500 mb-4 leading-relaxed">{q.explanation}</p>}
            <div className="flex items-center gap-3">
                {!checked && <button onClick={handleCheck} disabled={!selected} className="px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">✓ Check</button>}
                {checked && <button onClick={isLast ? onFinish : onNext} className={`px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-colors ml-auto ${correct ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-800'}`}>{isLast ? 'Finish ✓' : 'Next →'}</button>}
            </div>
        </div>
    );
}

export function FillBlankContent({ activities }: ContentProps) {
    const questions = activities.map(mapToQuestion);
    const [current, setCurrent] = useState(0);
    const [scores, setScores] = useState<boolean[]>([]);
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
    const [done, setDone] = useState(false);

    if (questions.length === 0) return <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">No fill-in-the-blank activities found.</div>;

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
