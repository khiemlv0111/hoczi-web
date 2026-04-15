'use client'
import { useState, useEffect, useRef, useCallback } from "react";
import { RotateCcw, Trophy } from "lucide-react";

type Props = { onBack: () => void };

type Question = {
    image: string;
    answer: string;
    options: string[];
};

const QUESTIONS: Question[] = [
    {
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format",
        answer: "Cat",
        options: ["Cat", "Fox", "Rabbit", "Lynx"],
    },
    {
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&auto=format",
        answer: "Dog",
        options: ["Dog", "Wolf", "Bear", "Coyote"],
    },
    {
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format",
        answer: "Lion",
        options: ["Lion", "Tiger", "Cheetah", "Leopard"],
    },
    {
        image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format",
        answer: "Elephant",
        options: ["Elephant", "Hippo", "Rhino", "Mammoth"],
    },
    {
        image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=500&auto=format",
        answer: "Giraffe",
        options: ["Giraffe", "Camel", "Zebra", "Antelope"],
    },
    {
        image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=500&auto=format",
        answer: "Tiger",
        options: ["Tiger", "Jaguar", "Puma", "Ocelot"],
    },
    {
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500&auto=format",
        answer: "Panda",
        options: ["Panda", "Koala", "Bear", "Sloth"],
    },
    {
        image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=500&auto=format",
        answer: "Penguin",
        options: ["Penguin", "Puffin", "Pelican", "Toucan"],
    },
];

const TIMER = 5;

function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function prepareQuestions(): Question[] {
    return shuffle(QUESTIONS).map(q => ({ ...q, options: shuffle(q.options) }));
}

export function GuessingGame({ onBack }: Props) {
    const [questions] = useState<Question[]>(prepareQuestions);
    const [index, setIndex] = useState(0);
    const [picked, setPicked] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState(TIMER);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const current = questions[index];
    const revealed = picked !== null || timeLeft === 0;

    const advance = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeout(() => {
            if (index + 1 >= questions.length) {
                setDone(true);
            } else {
                setIndex(i => i + 1);
                setPicked(null);
                setTimeLeft(TIMER);
            }
        }, 1000); // brief pause to show result
    }, [index, questions.length]);

    // Countdown
    useEffect(() => {
        if (revealed) return;
        timerRef.current = setInterval(() => {
            setTimeLeft(t => {
                if (t <= 1) {
                    clearInterval(timerRef.current!);
                    advance();
                    return 0;
                }
                return t - 1;
            });
        }, 1000);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [index, revealed]);

    const pick = (option: string) => {
        if (revealed) return;
        if (timerRef.current) clearInterval(timerRef.current);
        setPicked(option);
        if (option === current.answer) setScore(s => s + 1);
        advance();
    };

    const restart = () => {
        setIndex(0);
        setPicked(null);
        setTimeLeft(TIMER);
        setScore(0);
        setDone(false);
    };

    const timerPct = (timeLeft / TIMER) * 100;
    const timerColor = timeLeft <= 2 ? "bg-red-500" : timeLeft <= 3 ? "bg-yellow-400" : "bg-blue-500";

    // ── Results screen ─────────────────────────────────────────────────────
    if (done) {
        return (
            <div className="max-w-sm mx-auto mt-10">
                <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center gap-4 text-center">
                    <Trophy size={32} className="text-yellow-400" />
                    <h3 className="text-[16px] font-semibold text-gray-900">Game Over</h3>
                    <p className="text-[13px] text-gray-500">
                        You got <span className="font-bold text-gray-900">{score}</span> out of{" "}
                        <span className="font-bold text-gray-900">{questions.length}</span> correct
                    </p>
                    <div className="flex gap-2 mt-2">
                        <button onClick={restart} className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 transition-colors">
                            <RotateCcw size={13} /> Play Again
                        </button>
                        <button onClick={onBack} className="px-4 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                            ← Games
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ── Game screen ────────────────────────────────────────────────────────
    return (
        <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h3 className="text-[15px] font-semibold text-gray-900">Guessing Game</h3>
                    <p className="text-[12px] text-gray-400 mt-0.5">
                        {index + 1} / {questions.length} &nbsp;·&nbsp; Score: {score}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={restart} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                        <RotateCcw size={13} /> Restart
                    </button>
                    <button onClick={onBack} className="px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                        ← Games
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Timer bar */}
                <div className="h-1.5 bg-gray-100">
                    <div
                        className={`h-full transition-all duration-1000 ease-linear ${timerColor}`}
                        style={{ width: `${timerPct}%` }}
                    />
                </div>

                {/* Timer label */}
                <div className="px-5 pt-3 flex justify-end">
                    <span className={`text-[12px] font-semibold tabular-nums ${timeLeft <= 2 ? "text-red-500" : "text-gray-400"}`}>
                        {timeLeft}s
                    </span>
                </div>

                {/* Image */}
                <div className="px-5 pb-4">
                    <img
                        key={index}
                        src={current.image}
                        alt="guess this"
                        className="w-full h-52 object-cover rounded-lg bg-gray-100"
                    />
                </div>

                {/* Options */}
                <div className="px-5 pb-5 grid grid-cols-2 gap-2">
                    {current.options.map(opt => {
                        const isCorrect = opt === current.answer;
                        const isPicked = opt === picked;
                        let style = "border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50";
                        if (revealed) {
                            if (isCorrect) style = "border-green-400 bg-green-50 text-green-700";
                            else if (isPicked) style = "border-red-400 bg-red-50 text-red-600";
                            else style = "border-gray-100 text-gray-300";
                        }
                        return (
                            <button
                                key={opt}
                                onClick={() => pick(opt)}
                                disabled={revealed}
                                className={`py-2.5 rounded-lg border text-[13px] font-medium transition-all ${style}`}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>

                {/* Result feedback */}
                {revealed && (
                    <div className={`mx-5 mb-5 px-4 py-2.5 rounded-lg text-[12px] font-medium text-center
                        ${picked === current.answer
                            ? "bg-green-50 text-green-700"
                            : picked === null
                            ? "bg-gray-50 text-gray-500"
                            : "bg-red-50 text-red-600"
                        }`}
                    >
                        {picked === current.answer
                            ? "Correct! 🎉"
                            : picked === null
                            ? `Time's up! It was ${current.answer}`
                            : `Wrong! It was ${current.answer}`
                        }
                    </div>
                )}
            </div>
        </div>
    );
}
