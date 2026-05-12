'use client'

import { useState } from "react";
import { Activity, ContentProps } from "./types";

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

function QuestionView({
    q,
    index,
    total,
    onNext,
}: {
    q: MCQuestion;
    index: number;
    total: number;
    onNext: () => void;
}) {
    const [selected, setSelected] = useState<string | null>(null);
    const [checked, setChecked] = useState(false);
    const [speaking, setSpeaking] = useState(false);

    const isCorrect = selected === q.correct_choice;

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
        const isWrongChoice = checked && isSelected && !isCorrect;

        if (isCorrectChoice) return 'border-green-400 bg-green-50 text-green-800';
        if (isWrongChoice)   return 'border-red-400 bg-red-50 text-red-800';
        if (isSelected)      return 'border-blue-400 bg-blue-50 text-blue-800';
        return 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50';
    }

    function getLabelClass(choice: { label: string; text: string }) {
        const isSelected = selected === choice.text;
        const isCorrectChoice = checked && choice.text === q.correct_choice;
        const isWrongChoice = checked && isSelected && !isCorrect;

        if (isCorrectChoice) return 'bg-green-400 text-white';
        if (isWrongChoice)   return 'bg-red-400 text-white';
        if (isSelected)      return 'bg-blue-400 text-white';
        return 'bg-gray-100 text-gray-500';
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

            {/* Question */}
            <div className="bg-white border border-gray-200 rounded-xl px-6 py-5 mb-6">
                <p className="text-lg font-semibold text-gray-800 leading-snug">{q.question}</p>
            </div>

            {/* Choices */}
            <div className="flex flex-col gap-3 mb-8">
                {q.choices.map((choice) => (
                    <button
                        key={choice.label}
                        onClick={() => { if (!checked) setSelected(choice.text); }}
                        disabled={checked}
                        className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${getChoiceClass(choice)} ${checked ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                        <span className={`flex-shrink-0 w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${getLabelClass(choice)}`}>
                            {choice.label}
                        </span>
                        <span className="text-sm font-medium">{choice.text}</span>
                        {checked && choice.text === q.correct_choice && (
                            <span className="ml-auto text-green-500 text-base">✓</span>
                        )}
                        {checked && selected === choice.text && !isCorrect && (
                            <span className="ml-auto text-red-500 text-base">✗</span>
                        )}
                    </button>
                ))}
            </div>

            {/* Feedback */}
            {checked && (
                <div className={`text-sm font-semibold mb-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrect ? '✓ Correct!' : `✗ The correct answer is "${q.correct_choice}".`}
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
                    onClick={() => { setSelected(null); setChecked(false); }}
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

export function MultipleChoiceContent({ activities }: ContentProps) {
    const questions = activities.map(mapToQuestion);
    const [current, setCurrent] = useState(0);

    if (questions.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">
                No multiple choice activities found.
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
