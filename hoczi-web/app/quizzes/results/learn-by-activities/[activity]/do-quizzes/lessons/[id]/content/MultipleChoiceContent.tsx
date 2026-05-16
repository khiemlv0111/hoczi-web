'use client'

import { useEffect, useRef, useState } from "react";
import { Activity, ContentProps } from "./types";

const COUNTDOWN = 20;

type MCQuestion = {
    id: number;
    instruction: string;
    question: string;
    choices: { label: string; text: string }[];
    correct_choice: string;
    explanation: string;
    image_url?: string;
};

const LABELS = ['A', 'B', 'C', 'D', 'E'];

function splitCSV(val: string | undefined): string[] {
    if (!val) return [];
    return val.split(',').map((s) => s.trim()).filter(Boolean);
}

function mapToQuestion(a: Activity, index: number): MCQuestion {
    const cfg = a.config ?? {};
    const choiceTexts = splitCSV(cfg.choices);
    return {
        id: Number(a.id) || index,
        instruction: a.instruction || cfg.instruction || 'Choose the correct answer.',
        question: cfg.question ?? '',
        choices: choiceTexts.map((text, i) => ({ label: LABELS[i] ?? String(i + 1), text })),
        correct_choice: cfg.correct_choice ?? '',
        explanation: cfg.explanation ?? '',
        image_url: cfg.media_url || undefined,
    };
}

function QuestionView({ q, index, isLast, onResult, onNext, onFinish }: {
    q: MCQuestion;
    index: number;
    isLast: boolean;
    onResult: (isCorrect: boolean) => void;
    onNext: () => void;
    onFinish: () => void;
}) {
    const [selected, setSelected] = useState<string | null>(null);
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [timeLeft, setTimeLeft] = useState(COUNTDOWN);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    function stopTimer() {
        if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    }

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(timerRef.current!);
                    timerRef.current = null;
                    setChecked(true);
                    setCorrect(false);
                    onResult(false);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => stopTimer();
    }, []);

    useEffect(() => { if (checked) stopTimer(); }, [checked]);

    function handleCheck() {
        const isCorrect = selected === q.correct_choice;
        setCorrect(isCorrect);
        setChecked(true);
        onResult(isCorrect);
    }

    function speak() {
        if (!window.speechSynthesis || !q.question) return;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(q.question);
        utt.onstart = () => setSpeaking(true);
        utt.onend = () => setSpeaking(false);
        utt.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(utt);
    }

    function getChoiceClass(choice: { label: string; text: string }) {
        const isSelected = selected === choice.text;
        const isCorrectChoice = checked && choice.text === q.correct_choice;
        const isWrongChoice = checked && isSelected && !correct;
        if (isCorrectChoice) return 'border-green-400 bg-green-50 text-green-800';
        if (isWrongChoice)   return 'border-red-400 bg-red-50 text-red-800';
        if (isSelected)      return 'border-blue-400 bg-blue-50 text-blue-800';
        return 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50';
    }

    function getLabelClass(choice: { label: string; text: string }) {
        const isSelected = selected === choice.text;
        const isCorrectChoice = checked && choice.text === q.correct_choice;
        const isWrongChoice = checked && isSelected && !correct;
        if (isCorrectChoice) return 'bg-green-400 text-white';
        if (isWrongChoice)   return 'bg-red-400 text-white';
        if (isSelected)      return 'bg-blue-400 text-white';
        return 'bg-gray-100 text-gray-500';
    }

    const pct = (timeLeft / COUNTDOWN) * 100;
    const timerColor = timeLeft > 10 ? 'bg-green-400' : timeLeft > 5 ? 'bg-amber-400' : 'bg-red-500';

    return (
        <div>
            {/* Countdown bar */}
            {!checked && (
                <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">Time remaining</span>
                        <span className={`text-sm font-bold tabular-nums ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : timeLeft <= 10 ? 'text-amber-500' : 'text-green-600'}`}>
                            {timeLeft}s
                        </span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-1000 ${timerColor}`} style={{ width: `${pct}%` }} />
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-900 text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                </span>
                <p className="flex-1 text-gray-800 font-medium text-sm leading-snug pt-0.5">{q.instruction}</p>
                <button onClick={speak}
                    className={`flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm transition-colors ${speaking ? 'bg-blue-700 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'}`}>
                    🔊
                </button>
            </div>

            {q.image_url && (
                <div className="flex justify-center mb-6">
                    <img src={q.image_url} alt="question" className="max-h-48 object-contain rounded-xl" />
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 mb-6">
                <p className="text-lg font-semibold text-gray-800 leading-snug">{q.question}</p>
            </div>

            <div className="flex flex-col gap-3 mb-8">
                {q.choices.map((choice) => (
                    <button key={choice.label}
                        onClick={() => { if (!checked) setSelected(choice.text); }}
                        disabled={checked}
                        className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${getChoiceClass(choice)} ${checked ? 'cursor-default' : 'cursor-pointer'}`}>
                        <span className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${getLabelClass(choice)}`}>
                            {choice.label}
                        </span>
                        <span className="text-sm font-medium">{choice.text}</span>
                        {checked && choice.text === q.correct_choice && <span className="ml-auto text-green-500 text-base">✓</span>}
                        {checked && selected === choice.text && !correct && <span className="ml-auto text-red-500 text-base">✗</span>}
                    </button>
                ))}
            </div>

            {checked && (
                <div className={`text-sm font-semibold mb-2 ${correct ? 'text-green-600' : 'text-red-600'}`}>
                    {correct ? '✓ Correct!' : timeLeft === 0 ? `⏰ Time's up! Answer: "${q.correct_choice}"` : `✗ The correct answer is "${q.correct_choice}".`}
                </div>
            )}
            {checked && q.explanation && (
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{q.explanation}</p>
            )}

            <div className="flex items-center gap-3">
                {!checked && (
                    <button onClick={handleCheck} disabled={!selected}
                        className="px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                        ✓ Check
                    </button>
                )}
                {checked && (
                    <button onClick={isLast ? onFinish : onNext}
                        className={`px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-colors ml-auto ${correct ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-800'}`}>
                        {isLast ? 'Finish ✓' : 'Next →'}
                    </button>
                )}
            </div>
        </div>
    );
}

function ResultsScreen({ scores, total, onRestart }: { scores: boolean[]; total: number; onRestart: () => void }) {
    const totalCorrect = scores.filter(Boolean).length;
    const pct = Math.round((totalCorrect / total) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
    return (
        <div className="max-w-md mx-auto px-4 py-16 flex flex-col items-center text-center">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Quiz Complete!</h2>
            <p className="text-sm text-gray-500 mb-8">{total} question{total !== 1 ? 's' : ''} finished</p>
            <div className="w-36 h-36 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center mb-6">
                <span className="text-4xl font-extrabold text-blue-600">{pct}%</span>
                <span className="text-xs text-gray-400 mt-0.5">{totalCorrect} / {total} correct</span>
            </div>
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
                {scores.map((s, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center text-white ${s ? 'bg-green-500' : 'bg-red-400'}`}>
                        {i + 1}
                    </div>
                ))}
            </div>
            <button onClick={onRestart}
                className="flex items-center gap-2 px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors text-sm">
                🔄 Redo Quiz
            </button>
        </div>
    );
}

export function MultipleChoiceContent({ activities }: ContentProps) {
    const questions = activities.map(mapToQuestion);
    const [current, setCurrent] = useState(0);
    const [scores, setScores] = useState<boolean[]>([]);
    const [done, setDone] = useState(false);

    if (questions.length === 0) {
        return <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">No multiple choice activities found.</div>;
    }

    function restartQuiz() { setScores([]); setDone(false); setCurrent(0); }

    if (done) return <ResultsScreen scores={scores} total={questions.length} onRestart={restartQuiz} />;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 select-none">
            <QuestionView
                key={current}
                q={questions[current]}
                index={current}
                isLast={current === questions.length - 1}
                onResult={(isCorrect) => setScores((s) => [...s, isCorrect])}
                onNext={() => setCurrent((c) => c + 1)}
                onFinish={() => setDone(true)}
            />
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
