'use client'

import { useState } from "react";
import { Activity, ContentProps } from "./types";

type MatchingQuestion = {
    id: number;
    instruction: string;
    leftItems: string[];
    rightItems: string[];       // shuffled for display
    correctPairs: Record<string, string>; // left → right
    explanation: string;
    image_url?: string;
};

function splitCSV(val: string | undefined): string[] {
    if (!val) return [];
    return val.split(',').map((s) => s.trim()).filter(Boolean);
}

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function mapToQuestion(a: Activity, index: number): MatchingQuestion {
    const cfg = a.config ?? {};
    const left = splitCSV(cfg.left_items);
    const right = splitCSV(cfg.right_items);
    const correctPairs: Record<string, string> = {};
    left.forEach((l, i) => { if (right[i]) correctPairs[l] = right[i]; });
    return {
        id: Number(a.id) || index,
        instruction: a.instruction || cfg.instruction || 'Match the words.',
        leftItems: left,
        rightItems: shuffle(right),
        correctPairs,
        explanation: cfg.explanation ?? '',
        image_url: cfg.media_url || undefined,
    };
}

// pastel palette for matched pairs
const PAIR_COLORS = [
    'bg-blue-100 border-blue-400 text-blue-800',
    'bg-violet-100 border-violet-400 text-violet-800',
    'bg-amber-100 border-amber-400 text-amber-800',
    'bg-rose-100 border-rose-400 text-rose-800',
    'bg-teal-100 border-teal-400 text-teal-800',
];

function QuestionView({ q, index, total, onNext }: {
    q: MatchingQuestion; index: number; total: number; onNext: () => void;
}) {
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    // matches: left → right
    const [matches, setMatches] = useState<Record<string, string>>({});
    const [checked, setChecked] = useState(false);

    const matchedLeftByRight = Object.fromEntries(
        Object.entries(matches).map(([l, r]) => [r, l])
    );
    const pairIndex = (leftItem: string) =>
        Object.keys(matches).indexOf(leftItem);

    function handleLeftClick(item: string) {
        if (checked) return;
        setSelectedLeft(selectedLeft === item ? null : item);
    }

    function handleRightClick(item: string) {
        if (checked) return;
        if (!selectedLeft) return;

        setMatches((prev) => {
            const next = { ...prev };
            // remove previous match for this right item
            const prevLeft = matchedLeftByRight[item];
            if (prevLeft) delete next[prevLeft];
            // remove previous right match for selectedLeft
            next[selectedLeft] = item;
            return next;
        });
        setSelectedLeft(null);
    }

    function reset() {
        setMatches({});
        setSelectedLeft(null);
        setChecked(false);
    }

    const allMatched = Object.keys(matches).length === q.leftItems.length;
    const correctCount = Object.entries(matches).filter(
        ([l, r]) => q.correctPairs[l] === r
    ).length;
    const allCorrect = correctCount === q.leftItems.length;

    function getLeftClass(item: string) {
        if (checked) {
            const isCorrect = matches[item] && q.correctPairs[item] === matches[item];
            return isCorrect
                ? 'border-green-400 bg-green-50 text-green-800'
                : matches[item]
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-400';
        }
        if (selectedLeft === item) return 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-300';
        if (matches[item]) {
            const idx = pairIndex(item);
            return PAIR_COLORS[idx % PAIR_COLORS.length] + ' border-2';
        }
        return 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50';
    }

    function getRightClass(item: string) {
        if (checked) {
            const left = matchedLeftByRight[item];
            const isCorrect = left && q.correctPairs[left] === item;
            return isCorrect
                ? 'border-green-400 bg-green-50 text-green-800'
                : left
                    ? 'border-red-400 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-400';
        }
        if (matchedLeftByRight[item]) {
            const left = matchedLeftByRight[item];
            const idx = pairIndex(left);
            return PAIR_COLORS[idx % PAIR_COLORS.length] + ' border-2';
        }
        if (selectedLeft) return 'border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
        return 'border-gray-200 bg-white text-gray-500';
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
            </div>

            {q.image_url && (
                <div className="flex justify-center mb-6">
                    <img src={q.image_url} alt="question" className="max-h-48 object-contain rounded-xl" />
                </div>
            )}

            {/* Hint */}
            {!checked && (
                <p className="text-[11px] text-gray-400 mb-4 text-center">
                    {selectedLeft
                        ? `"${selectedLeft}" selected — now pick a match on the right`
                        : 'Click a word on the left, then its match on the right'}
                </p>
            )}

            {/* Matching grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                {/* Left column */}
                <div className="flex flex-col gap-2">
                    {q.leftItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleLeftClick(item)}
                            className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${getLeftClass(item)}`}
                        >
                            <span className="flex items-center justify-between">
                                {item}
                                {!checked && matches[item] && (
                                    <span className="text-[10px] opacity-60">→ {matches[item]}</span>
                                )}
                                {checked && matches[item] && (
                                    <span>{q.correctPairs[item] === matches[item] ? '✓' : '✗'}</span>
                                )}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-2">
                    {q.rightItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleRightClick(item)}
                            className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-medium text-left transition-all ${getRightClass(item)}`}
                        >
                            <span className="flex items-center justify-between">
                                {item}
                                {checked && matchedLeftByRight[item] && (
                                    <span>{q.correctPairs[matchedLeftByRight[item]] === item ? '✓' : '✗'}</span>
                                )}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Feedback */}
            {checked && (
                <div className={`text-sm font-semibold mb-2 ${allCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {allCorrect ? '✓ Perfect match!' : `✗ ${correctCount} of ${q.leftItems.length} correct.`}
                </div>
            )}
            {checked && q.explanation && (
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{q.explanation}</p>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setChecked(true)}
                    disabled={!allMatched || checked}
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

export function MatchingContent({ activities }: ContentProps) {
    const questions = activities.map(mapToQuestion);
    const [current, setCurrent] = useState(0);

    if (questions.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[300px] text-gray-400 text-sm">
                No matching activities found.
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
