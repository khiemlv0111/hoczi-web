'use client'

import { useEffect, useRef, useState } from "react";
import { Activity, ContentProps } from "./types";

type Word = { id: string; text: string };
type Question = {
    id: number;
    content: string;
    instruction?: string;
    image_url?: string;
    explanation?: string;
    words?: string[];
    correct_order?: string[];
};
type Selected = { from: 'bank' | 'slot'; index: number } | null;

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function buildWords(content: string): Word[] {
    return content.trim().split(/\s+/).map((text, i) => ({ id: `w-${i}-${text}`, text }));
}

function splitCSV(val: string | undefined): string[] {
    if (!val) return [];
    return val.split(',').map((s) => s.trim()).filter(Boolean);
}

function mapToQuestion(a: Activity, index: number): Question {
    const cfg = a.config ?? {};
    return {
        id: Number(a.id) || index,
        content: cfg.sentence ?? '',
        instruction: a.instruction || cfg.instruction,
        image_url: cfg.media_url || undefined,
        explanation: cfg.explanation,
        words: splitCSV(cfg.words),
        correct_order: splitCSV(cfg.correct_order),
    };
}

const COUNTDOWN = 20;

function ResultsScreen({ scores, questions, userAnswers, emoji, pct, totalCorrect, onRestart }: {
    scores: boolean[];
    questions: Question[];
    userAnswers: string[][];
    emoji: string;
    pct: number;
    totalCorrect: number;
    onRestart: () => void;
}) {
    const [reviewIdx, setReviewIdx] = useState<number | null>(null);

    const reviewQ = reviewIdx !== null ? questions[reviewIdx] : null;
    const reviewAnswer = reviewIdx !== null ? (userAnswers[reviewIdx] ?? []) : [];
    const correctAnswer = reviewQ
        ? (reviewQ.correct_order && reviewQ.correct_order.length > 0
            ? reviewQ.correct_order
            : buildWords(reviewQ.content).map((w) => w.text))
        : [];

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
                    <button key={i}
                        onClick={() => setReviewIdx(i)}
                        className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 ${s ? 'bg-green-500 hover:bg-green-600' : 'bg-red-400 hover:bg-red-500'}`}>
                        {i + 1}
                    </button>
                ))}
            </div>

            <button onClick={onRestart}
                className="flex items-center gap-2 px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors text-sm">
                🔄 Redo Quiz
            </button>

            {/* Review modal */}
            {reviewIdx !== null && reviewQ && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                    onClick={() => setReviewIdx(null)}>
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 text-left"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="font-bold text-gray-900 text-base">Question {reviewIdx + 1} Review</h3>
                            <button onClick={() => setReviewIdx(null)}
                                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 text-lg">
                                ×
                            </button>
                        </div>

                        <div className="mb-5">
                            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Correct Answer</p>
                            <div className="flex flex-wrap gap-2">
                                {correctAnswer.map((word, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                                        {word}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Your Answer</p>
                            {reviewAnswer.every((w) => !w) ? (
                                <p className="text-sm text-gray-400 italic">No answer given — time ran out</p>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {reviewAnswer.map((word, i) => {
                                        const ok = word && word === correctAnswer[i];
                                        return (
                                            <span key={i} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                                                !word ? 'bg-gray-100 text-gray-400 italic'
                                                    : ok ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}>
                                                {word || '(empty)'}
                                            </span>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export function SentenceOrderContent({ activities }: ContentProps) {
    const questions = activities.map(mapToQuestion);

    const [current, setCurrent] = useState(0);
    const [bank, setBank] = useState<Word[]>(() => initBank(questions[0]));
    const [slots, setSlots] = useState<(Word | null)[]>(() => initSlots(questions[0]));
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selected, setSelected] = useState<Selected>(null);
    const [timeLeft, setTimeLeft] = useState(COUNTDOWN);
    const [scores, setScores] = useState<boolean[]>([]);
    const [userAnswers, setUserAnswers] = useState<string[][]>([]);
    const [done, setDone] = useState(false);

    // drag state (desktop only)
    const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
    const dragSource = useRef<{ from: 'bank' | 'slot'; index: number } | null>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const slotsRef = useRef(slots);

    useEffect(() => { slotsRef.current = slots; }, [slots]);

    useEffect(() => {
        const check = () => setIsMobile('ontouchstart' in window || window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    function startTimer() {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeLeft(COUNTDOWN);
        timerRef.current = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(timerRef.current!);
                    timerRef.current = null;
                    setChecked(true);
                    setCorrect(false);
                    setSelected(null);
                    setScores((s) => [...s, false]);
                    setUserAnswers((ua) => [...ua, slotsRef.current.map((s) => s?.text ?? '')]);
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
    }

    function stopTimer() {
        if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    }

    // start timer on mount and whenever question changes
    useEffect(() => {
        startTimer();
        return () => stopTimer();
    }, [current]);

    // stop timer as soon as checked
    useEffect(() => {
        if (checked) stopTimer();
    }, [checked]);

    function initBank(q: Question): Word[] {
        const texts = q.words && q.words.length > 0 ? q.words : buildWords(q.content).map((w) => w.text);
        return shuffle(texts.map((text, i) => ({ id: `w-${i}-${text}`, text })));
    }

    function initSlots(q: Question): (Word | null)[] {
        const count = q.correct_order && q.correct_order.length > 0
            ? q.correct_order.length
            : (q.words?.length ?? buildWords(q.content).length);
        return new Array(count).fill(null);
    }

    function initWithQuestion(q: Question) {
        window.speechSynthesis?.cancel();
        setSpeaking(false);
        setBank(initBank(q));
        setSlots(initSlots(q));
        setChecked(false);
        setCorrect(false);
        setSelected(null);
    }

    function goTo(index: number) {
        setCurrent(index);
        initWithQuestion(questions[index]);
    }

    function speak(text: string) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.onstart = () => setSpeaking(true);
        utt.onend = () => setSpeaking(false);
        utt.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(utt);
    }

    // ── Desktop drag handlers ──────────────────────────────────────
    function onDragStartBank(index: number) { dragSource.current = { from: 'bank', index }; }
    function onDragStartSlot(index: number) { dragSource.current = { from: 'slot', index }; }

    function onDropSlot(slotIndex: number) {
        const src = dragSource.current;
        if (!src) return;
        if (src.from === 'bank') {
            const word = bank[src.index];
            const displaced = slots[slotIndex];
            const newBank = bank.filter((_, i) => i !== src.index);
            if (displaced) newBank.push(displaced);
            const newSlots = [...slots];
            newSlots[slotIndex] = word;
            setBank(newBank);
            setSlots(newSlots);
        } else {
            const newSlots = [...slots];
            const tmp = newSlots[slotIndex];
            newSlots[slotIndex] = newSlots[src.index];
            newSlots[src.index] = tmp;
            setSlots(newSlots);
        }
        dragSource.current = null;
        setChecked(false);
    }

    function onDropBank() {
        const src = dragSource.current;
        if (!src || src.from === 'bank') return;
        const word = slots[src.index];
        if (!word) return;
        const newSlots = [...slots];
        newSlots[src.index] = null;
        setBank((b) => [...b, word]);
        setSlots(newSlots);
        dragSource.current = null;
        setChecked(false);
    }

    // ── Mobile tap handlers ────────────────────────────────────────
    function handleBankTap(index: number) {
        if (checked) return;
        if (selected?.from === 'bank' && selected.index === index) {
            setSelected(null);
            return;
        }
        setSelected({ from: 'bank', index });
    }

    function handleSlotTap(slotIndex: number) {
        if (checked) return;
        if (!selected) {
            if (slots[slotIndex]) setSelected({ from: 'slot', index: slotIndex });
            return;
        }
        if (selected.from === 'bank') {
            const word = bank[selected.index];
            const displaced = slots[slotIndex];
            const newBank = bank.filter((_, i) => i !== selected.index);
            if (displaced) newBank.push(displaced);
            const newSlots = [...slots];
            newSlots[slotIndex] = word;
            setBank(newBank);
            setSlots(newSlots);
        } else {
            if (selected.index === slotIndex) {
                // return to bank
                const word = slots[slotIndex];
                if (word) {
                    const newSlots = [...slots];
                    newSlots[slotIndex] = null;
                    setBank((b) => [...b, word]);
                    setSlots(newSlots);
                }
            } else {
                // swap slots
                const newSlots = [...slots];
                const tmp = newSlots[slotIndex];
                newSlots[slotIndex] = newSlots[selected.index];
                newSlots[selected.index] = tmp;
                setSlots(newSlots);
            }
        }
        setSelected(null);
        setChecked(false);
    }

    // ── Check ─────────────────────────────────────────────────────
    function handleCheck() {
        const q = questions[current];
        const expected = q.correct_order && q.correct_order.length > 0
            ? q.correct_order
            : buildWords(q.content).map((w) => w.text);
        const isCorrect = expected.every((word, i) => slots[i]?.text === word);
        setCorrect(isCorrect);
        setChecked(true);
        setSelected(null);
        setScores((s) => [...s, isCorrect]);
        setUserAnswers((ua) => [...ua, slots.map((s) => s?.text ?? '')]);
    }

    function restartQuiz() {
        setScores([]);
        setUserAnswers([]);
        setDone(false);
        setCurrent(0);
        initWithQuestion(questions[0]);
    }

    const q = questions[current];
    const allPlaced = slots.every((s) => s !== null);
    const isLastQuestion = current === questions.length - 1;

    if (done) {
        const totalCorrect = scores.filter(Boolean).length;
        const pct = Math.round((totalCorrect / questions.length) * 100);
        const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
        return <ResultsScreen
            scores={scores}
            questions={questions}
            userAnswers={userAnswers}
            emoji={emoji}
            pct={pct}
            totalCorrect={totalCorrect}
            onRestart={restartQuiz}
        />;
    }

    const pct = (timeLeft / COUNTDOWN) * 100;
    const timerColor = timeLeft > 10 ? 'bg-green-400' : timeLeft > 5 ? 'bg-amber-400' : 'bg-red-500';

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 select-none">
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
                        <div
                            className={`h-full rounded-full transition-all duration-1000 ${timerColor}`}
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-900 text-white text-sm font-bold flex items-center justify-center">
                    {current + 1}
                </span>
                <p className="flex-1 text-gray-800 font-medium text-sm leading-snug pt-0.5">
                    {q.instruction || (isMobile
                        ? 'Tap a word to select it, then tap a box to place it.'
                        : 'Drag and drop the words into the correct order to make a sentence.')}
                </p>
                <button
                    onClick={() => speak(q.content)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm transition-colors ${speaking ? 'bg-blue-700 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    🔊
                </button>
            </div>

            {q.image_url && (
                <div className="flex justify-center mb-6">
                    <img src={q.image_url} alt="question" className="max-h-48 object-contain rounded-xl" />
                </div>
            )}

            {/* Selected hint (mobile) */}
            {isMobile && selected && (
                <p className="text-xs text-blue-600 font-medium mb-2 text-center animate-pulse">
                    {selected.from === 'bank'
                        ? `"${bank[selected.index]?.text}" selected — tap a box to place it`
                        : `"${slots[selected.index]?.text}" selected — tap another box to swap, or tap it again to remove`}
                </p>
            )}

            {/* Drop slots */}
            <div
                className="flex flex-wrap gap-2 border-2 border-dashed border-gray-300 rounded-xl p-4 mb-6 min-h-[72px]"
                onDragOver={!isMobile ? (e) => e.preventDefault() : undefined}
                onDrop={!isMobile ? onDropBank : undefined}
            >
                {slots.map((word, i) => {
                    const isSelectedSlot = selected?.from === 'slot' && selected.index === i;
                    const slotState = checked && word
                        ? (correct ? 'border-green-400 bg-green-50 text-green-800' : 'border-red-400 bg-red-50 text-red-800')
                        : isSelectedSlot
                            ? 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-300 scale-105'
                            : dragOverSlot === i && !checked
                                ? 'border-blue-400 bg-blue-50 text-blue-800 scale-105'
                                : word
                                    ? 'bg-white border-gray-400 text-gray-800 shadow-sm'
                                    : 'bg-gray-50 border-gray-200 text-transparent';

                    return (
                        <div
                            key={i}
                            draggable={!isMobile && !!word}
                            onDragStart={!isMobile ? () => word && onDragStartSlot(i) : undefined}
                            onDragOver={!isMobile ? (e) => { e.preventDefault(); setDragOverSlot(i); } : undefined}
                            onDragLeave={!isMobile ? () => setDragOverSlot(null) : undefined}
                            onDrop={!isMobile ? (e) => { e.stopPropagation(); onDropSlot(i); setDragOverSlot(null); } : undefined}
                            onClick={isMobile ? () => handleSlotTap(i) : undefined}
                            className={[
                                'h-10 min-w-[80px] px-3 flex items-center justify-center rounded-lg border-2 border-dashed text-sm font-medium transition-all',
                                slotState,
                                isMobile && !checked ? 'cursor-pointer active:scale-95' : !isMobile && word ? 'cursor-grab' : '',
                            ].join(' ')}
                        >
                            {word?.text ?? ' '}
                        </div>
                    );
                })}
            </div>

            {/* Word bank */}
            <div
                className="flex flex-wrap gap-2 mb-8"
                onDragOver={!isMobile ? (e) => e.preventDefault() : undefined}
                onDrop={!isMobile ? onDropBank : undefined}
            >
                {bank.map((word, i) => {
                    const isSelectedBank = selected?.from === 'bank' && selected.index === i;
                    return (
                        <div
                            key={word.id}
                            draggable={!isMobile}
                            onDragStart={!isMobile ? () => onDragStartBank(i) : undefined}
                            onClick={isMobile ? () => handleBankTap(i) : undefined}
                            className={[
                                'px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all',
                                isSelectedBank
                                    ? 'bg-blue-500 text-white ring-2 ring-blue-300 scale-105'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800',
                                isMobile ? 'cursor-pointer active:scale-95' : 'cursor-grab',
                            ].join(' ')}
                        >
                            {word.text}
                        </div>
                    );
                })}
            </div>

            {checked && (
                <div className={`text-sm font-semibold mb-1 ${correct ? 'text-green-600' : 'text-red-600'}`}>
                    {correct ? '✓ Correct!' : timeLeft === 0 ? '⏰ Time\'s up!' : '✗ Not quite.'}
                </div>
            )}
            {checked && q.explanation && (
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{q.explanation}</p>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3">
                {!checked && (
                    <>
                        <button onClick={handleCheck} disabled={!allPlaced}
                            className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                            ✓ Check
                        </button>
                        <button onClick={() => initWithQuestion(q)}
                            className="px-5 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
                            Reset
                        </button>
                    </>
                )}
                {checked && (
                    <button
                        onClick={() => isLastQuestion ? setDone(true) : goTo(current + 1)}
                        className={`px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-colors ml-auto ${correct ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-800'}`}
                    >
                        {isLastQuestion ? 'Finish ✓' : 'Next →'}
                    </button>
                )}
            </div>

            {questions.length > 1 && (
                <div className="flex gap-1.5 mt-8">
                    {questions.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-blue-500' : 'bg-gray-200 hover:bg-gray-300'}`} />
                    ))}
                </div>
            )}
        </div>
    );
}
