'use client'

import { useRef, useState } from "react";

type Word = { id: string; text: string };
type Question = { id: number; content: string; image_url?: string };

const STATIC_QUESTIONS: Question[] = [
    { id: 1, content: "The fish swam in the tank." },
    { id: 2, content: "She reads a book every night." },
    { id: 3, content: "The dog ran across the park." },
];

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function buildWords(content: string): Word[] {
    return content.trim().split(/\s+/).map((text, i) => ({ id: `w-${i}-${text}`, text }));
}

export function LearnByTopicDetailPage() {
    const [current, setCurrent] = useState(0);

    const q = STATIC_QUESTIONS[current];

    const [bank, setBank] = useState<Word[]>(() => shuffle(buildWords(q.content)));
    const [slots, setSlots] = useState<(Word | null)[]>(() => new Array(buildWords(q.content).length).fill(null));
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState(false);

    const [speaking, setSpeaking] = useState(false);
    const dragSource = useRef<{ from: 'bank' | 'slot'; index: number } | null>(null);

    function speak(text: string) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.onstart = () => setSpeaking(true);
        utt.onend = () => setSpeaking(false);
        utt.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(utt);
    }

    function initQuestion(index: number) {
        window.speechSynthesis?.cancel();
        setSpeaking(false);
        const words = buildWords(STATIC_QUESTIONS[index].content);
        setBank(shuffle(words));
        setSlots(new Array(words.length).fill(null));
        setChecked(false);
        setCorrect(false);
    }

    function goTo(index: number) {
        setCurrent(index);
        initQuestion(index);
    }

    function onDragStartBank(index: number) {
        dragSource.current = { from: 'bank', index };
    }

    function onDragStartSlot(index: number) {
        dragSource.current = { from: 'slot', index };
    }

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

    function handleCheck() {
        const expected = buildWords(q.content);
        const isCorrect = expected.every((w, i) => slots[i]?.text === w.text);
        setCorrect(isCorrect);
        setChecked(true);
    }

    function handleReset() {
        initQuestion(current);
    }

    const allPlaced = slots.every((s) => s !== null);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 select-none">
            {/* Header bar */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-900 text-white text-sm font-bold flex items-center justify-center">
                    {current + 1}
                </span>
                <p className="flex-1 text-gray-800 font-medium text-sm leading-snug pt-0.5">
                    Drag and drop the words into the correct order to make a sentence.
                </p>
                <button
                    onClick={() => speak(q.content)}
                    className={`flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm transition-colors ${speaking ? "bg-blue-700 animate-pulse" : "bg-blue-500 hover:bg-blue-600"}`}
                >
                    🔊
                </button>
            </div>

            {/* Question image */}
            {q.image_url && (
                <div className="flex justify-center mb-6">
                    <img src={q.image_url} alt="question" className="max-h-48 object-contain rounded-xl" />
                </div>
            )}

            {/* Drop slots */}
            <div
                className="flex flex-wrap gap-2 border-2 border-dashed border-gray-300 rounded-xl p-4 mb-6 min-h-[72px]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDropBank}
            >
                {slots.map((word, i) => (
                    <div
                        key={i}
                        draggable={!!word}
                        onDragStart={() => word && onDragStartSlot(i)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => { e.stopPropagation(); onDropSlot(i); }}
                        className={[
                            "h-10 min-w-[80px] px-3 flex items-center justify-center rounded-lg border-2 border-dashed text-sm font-medium transition-colors",
                            word ? "bg-white border-gray-400 text-gray-800 cursor-grab shadow-sm" : "bg-gray-50 border-gray-200 text-transparent",
                            checked && word
                                ? correct
                                    ? "border-green-400 bg-green-50 text-green-800"
                                    : "border-red-400 bg-red-50 text-red-800"
                                : "",
                        ].join(" ")}
                    >
                        {word?.text ?? " "}
                    </div>
                ))}
            </div>

            {/* Word bank */}
            <div
                className="flex flex-wrap gap-2 mb-8"
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDropBank}
            >
                {bank.map((word, i) => (
                    <div
                        key={word.id}
                        draggable
                        onDragStart={() => onDragStartBank(i)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium cursor-grab shadow-sm transition-colors"
                    >
                        {word.text}
                    </div>
                ))}
            </div>

            {/* Feedback */}
            {checked && (
                <div className={`text-sm font-semibold mb-4 ${correct ? "text-green-600" : "text-red-600"}`}>
                    {correct ? "✓ Correct!" : "✗ Not quite — try again."}
                </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleCheck}
                    disabled={!allPlaced}
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    ✓ Check
                </button>
                <button
                    onClick={handleReset}
                    className="px-5 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                    Reset
                </button>
                {checked && correct && current < STATIC_QUESTIONS.length - 1 && (
                    <button
                        onClick={() => goTo(current + 1)}
                        className="px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-colors ml-auto"
                    >
                        Next →
                    </button>
                )}
            </div>

            {/* Progress dots */}
            {STATIC_QUESTIONS.length > 1 && (
                <div className="flex gap-1.5 mt-8">
                    {STATIC_QUESTIONS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-blue-500" : "bg-gray-200 hover:bg-gray-300"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
