'use client'
import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";

type Props = { onBack: () => void };

const DICE_DOTS: Record<number, [number, number][]> = {
    1: [[50, 50]],
    2: [[25, 25], [75, 75]],
    3: [[25, 25], [50, 50], [75, 75]],
    4: [[25, 25], [75, 25], [25, 75], [75, 75]],
    5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
    6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
};

function DieFace({
    value, size = 80, selected = false, dim = false, onClick,
}: {
    value: number; size?: number; selected?: boolean; dim?: boolean; onClick?: () => void;
}) {
    const dots = DICE_DOTS[value] ?? [];
    return (
        <svg
            width={size} height={size} viewBox="0 0 100 100"
            onClick={onClick}
            className={`transition-all duration-150 ${onClick ? "cursor-pointer" : ""} ${dim ? "opacity-30" : "opacity-100"}`}
        >
            <rect
                x="2" y="2" width="96" height="96" rx="16" ry="16"
                fill={selected ? "#eff6ff" : "white"}
                stroke={selected ? "#3b82f6" : "#d1d5db"}
                strokeWidth={selected ? 4 : 3}
            />
            {dots.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="8" fill={selected ? "#2563eb" : "#1f2937"} />
            ))}
        </svg>
    );
}

function rand6() { return Math.floor(Math.random() * 6) + 1; }

export function DiceGame({ onBack }: Props) {
    const [target, setTarget] = useState<number | null>(null);
    const [result, setResult] = useState<number | null>(null);
    const [rolling, setRolling] = useState(false);
    const [rollingFace, setRollingFace] = useState(1);
    const [attempts, setAttempts] = useState(0);
    const [wins, setWins] = useState(0);

    useEffect(() => {
        if (!rolling) return;
        const id = setInterval(() => setRollingFace(rand6()), 80);
        return () => clearInterval(id);
    }, [rolling]);

    const roll = () => {
        if (rolling || target === null) return;
        setResult(null);
        setRolling(true);
        setTimeout(() => {
            const rolled = rand6();
            setRolling(false);
            setResult(rolled);
            setAttempts(a => a + 1);
            if (rolled === target) setWins(w => w + 1);
        }, 900);
    };

    const reset = () => {
        setTarget(null);
        setResult(null);
        setRolling(false);
        setAttempts(0);
        setWins(0);
    };

    const newRound = () => {
        setTarget(null);
        setResult(null);
    };

    const won = result !== null && result === target;
    const lost = result !== null && result !== target;
    const revealed = result !== null;

    return (
        <div className="max-w-sm mx-auto">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h3 className="text-[15px] font-semibold text-gray-900">Dice Game</h3>
                    <p className="text-[12px] text-gray-400 mt-0.5">Pick a number, then roll</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={reset} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                        <RotateCcw size={13} /> Reset
                    </button>
                    <button onClick={onBack} className="px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                        ← Games
                    </button>
                </div>
            </div>

            {/* Score */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
                    <p className="text-[11px] text-gray-400">Attempts</p>
                    <p className="text-[15px] font-semibold text-gray-900">{attempts}</p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 px-4 py-3">
                    <p className="text-[11px] text-gray-400">Wins</p>
                    <p className="text-[15px] font-semibold text-green-600">{wins}</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center gap-6">

                {/* Step 1 — pick target */}
                <div className="w-full flex flex-col items-center gap-3">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                        {revealed ? "Your pick" : "1. Pick your number"}
                    </span>
                    <div className="grid grid-cols-6 gap-2">
                        {[1, 2, 3, 4, 5, 6].map(n => (
                            <DieFace
                                key={n}
                                value={n}
                                size={48}
                                selected={target === n}
                                dim={revealed && target !== n}
                                onClick={revealed ? undefined : () => setTarget(n)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full border-t border-gray-100" />

                {/* Step 2 — roll */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                        {revealed ? "Result" : "2. Roll the dice"}
                    </span>

                    <div className="h-24 flex items-center justify-center">
                        {rolling ? (
                            <DieFace value={rollingFace} size={96} />
                        ) : result !== null ? (
                            <DieFace value={result} size={96} dim={lost} />
                        ) : (
                            <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                                <span className="text-[12px] text-gray-300">?</span>
                            </div>
                        )}
                    </div>

                    {won && (
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-2xl">🎉</span>
                            <p className="text-[13px] font-semibold text-green-600">You matched it!</p>
                        </div>
                    )}
                    {lost && (
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-2xl">😬</span>
                            <p className="text-[13px] font-medium text-red-500">
                                Got {result}, needed {target}
                            </p>
                        </div>
                    )}

                    {revealed ? (
                        <button
                            onClick={newRound}
                            className="px-6 py-2.5 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 transition-colors"
                        >
                            Next Round
                        </button>
                    ) : (
                        <button
                            onClick={roll}
                            disabled={target === null || rolling}
                            className="px-6 py-2.5 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            {rolling ? "Rolling…" : "Roll Dice"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
