'use client'

import { useState } from "react";
import { Activity, ContentProps } from "./types";

type FillBlankQuestion = {
    id: number;
    instruction: string;
    blank_sentence: string;
    answer: string;
    options: string[];
    explanation: string;
    image_url?: string;
};

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

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
                            ${selected
                                ? 'border-blue-400 bg-blue-50 text-blue-700'
                                : 'border-gray-400 bg-gray-50 text-transparent'
                            }`}>
                            {selected ?? '___'}
                        </span>
                    )}
                </span>
            ))}
        </p>
    );
}

function QuestionView({
    q,
    index,
    total,
    onNext,
}: {
    q: FillBlankQuestion;
    index: number;
    total: number;
    onNext: () => void;
}) {
    const [selected, setSelected] = useState<string | null>(null);
    const [checked, setChecked] = useState(false);
    const [speaking, setSpeaking] = useState(false);

    const correct = selected === q.answer;

    function speak() {
        if (!window.speechSynthesis || !q.blank_sentence) return;
        window.speechSynthesis.cancel();
        const full = q.blank_sentence.replace('__', q.answer);
        const utt = new SpeechSynthesisUtterance(full);
        utt.onstart = () => setSpeaking(true);
        utt.onend = () => setSpeaking(false);
        utt.onerror = () => setSpeaking(false);
        window.speechSynthesis.speak(utt);
    }

    function reset() {
        setSelected(null);
        setChecked(false);
    }

    return (
        <div>
            {/* Header */}
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-900 text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                </span>
                <p className="flex-1 text-gray-800 font-medium text-sm leading-snug pt-0.5">
                    {q.instruction}
                </p>
                <button
                    onClick={speak}
                    className={`flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm transition-colors ${speaking ? 'bg-blue-700 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    🔊
                </button>
            </div>

            {/* Image */}
            {q.image_url && (
                <div className="flex justify-center mb-6">
                    <img src={q.image_url} alt="question" className="max-h-48 object-contain rounded-xl" />
                </div>
            )}

            {/* Sentence with blank */}
            <div className="bg-white border border-gray-200 rounded-xl px-6 py-6 mb-6 text-center">
                <SentenceDisplay sentence={q.blank_sentence} selected={selected} />
            </div>

            {/* Options */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {q.options.map((opt) => {
                    const isSelected = selected === opt;
                    const isCorrectOpt = checked && opt === q.answer;
                    const isWrongOpt = checked && isSelected && !correct;
                    return (
                        <button
                            key={opt}
                            onClick={() => { if (!checked) setSelected(opt); }}
                            disabled={checked}
                            className={[
                                'px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all',
                                isCorrectOpt
                                    ? 'bg-green-50 border-green-400 text-green-800'
                                    : isWrongOpt
                                        ? 'bg-red-50 border-red-400 text-red-800'
                                        : isSelected
                                            ? 'bg-blue-50 border-blue-400 text-blue-800'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50',
                                checked ? 'cursor-default' : 'cursor-pointer',
                            ].join(' ')}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>

            {/* Feedback */}
            {checked && (
                <div className={`text-sm font-semibold mb-2 ${correct ? 'text-green-600' : 'text-red-600'}`}>
                    {correct ? '✓ Correct!' : `✗ The answer is "${q.answer}".`}
                </div>
            )}
            {checked && q.explanation && (
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{q.explanation}</p>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setChecked(true)}
                    disabled={!selected || checked}
                    className="px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    ✓ Check
                </button>
                <button
                    onClick={reset}
                    className="px-5 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                    Reset
                </button>
                {checked && index < total - 1 && (
                    <button
                        onClick={onNext}
                        className="px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-colors ml-auto"
                    >
                        Next →
                    </button>
                )}
            </div>
        </div>
    );
}

export function FillBlankContent({ activities }: ContentProps) {
    const questions = activities.map(mapToQuestion);
    const [current, setCurrent] = useState(0);

    if (questions.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">
                No fill-in-the-blank activities found.
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 select-none">
            <QuestionView
                key={current}
                q={questions[current]}
                index={current}
                total={questions.length}
                onNext={() => setCurrent((c) => c + 1)}
            />

            {/* Progress dots */}
            {questions.length > 1 && (
                <div className="flex gap-1.5 mt-8">
                    {questions.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-blue-500' : 'bg-gray-200 hover:bg-gray-300'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
