'use client'
import { useState } from "react";
import { ChessPvP } from "./ChessPvP";
import { ChessPvC } from "./ChessPvC";
import { Difficulty } from "./chessAI";

type Mode = 'pvp' | 'pvc';

interface Props { onBack?: () => void; }

export function ChessGame({ onBack }: Props) {
    const [mode, setMode] = useState<Mode | null>(null);
    const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

    if (mode === 'pvp') return <ChessPvP onBack={() => setMode(null)} />;
    if (mode === 'pvc' && difficulty) return <ChessPvC difficulty={difficulty} onBack={() => setDifficulty(null)} />;

    if (mode === 'pvc') {
        return (
            <div className="max-w-sm mx-auto">
                <div className="mb-6">
                    <h2 className="text-[15px] font-semibold text-gray-900">vs Computer</h2>
                    <p className="text-[12px] text-gray-400 mt-0.5">Choose difficulty</p>
                </div>
                <div className="space-y-3">
                    <button onClick={() => setDifficulty('easy')} className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all text-left">
                        <span className="text-3xl">🟢</span>
                        <div>
                            <p className="text-[14px] font-semibold text-gray-900">Easy</p>
                            <p className="text-[12px] text-gray-400">Computer plays random moves</p>
                        </div>
                    </button>
                    <button onClick={() => setDifficulty('medium')} className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 transition-all text-left">
                        <span className="text-3xl">🟡</span>
                        <div>
                            <p className="text-[14px] font-semibold text-gray-900">Medium</p>
                            <p className="text-[12px] text-gray-400">Thinks 2 moves ahead</p>
                        </div>
                    </button>
                    <button onClick={() => setDifficulty('hard')} className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all text-left">
                        <span className="text-3xl">🔴</span>
                        <div>
                            <p className="text-[14px] font-semibold text-gray-900">Hard</p>
                            <p className="text-[12px] text-gray-400">Thinks 3 moves ahead with strategy</p>
                        </div>
                    </button>
                </div>
                <button onClick={() => setMode(null)} className="mt-4 px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                    ← Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-sm mx-auto">
            <div className="mb-6">
                <h2 className="text-[15px] font-semibold text-gray-900">Chess</h2>
                <p className="text-[12px] text-gray-400 mt-0.5">Choose a game mode</p>
            </div>
            <div className="space-y-3">
                <button onClick={() => setMode('pvp')} className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-left">
                    <span className="text-3xl">👥</span>
                    <div>
                        <p className="text-[14px] font-semibold text-gray-900">Player vs Player</p>
                        <p className="text-[12px] text-gray-400">Play with a friend on the same device</p>
                    </div>
                </button>
                <button onClick={() => setMode('pvc')} className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-left">
                    <span className="text-3xl">🤖</span>
                    <div>
                        <p className="text-[14px] font-semibold text-gray-900">Player vs Computer</p>
                        <p className="text-[12px] text-gray-400">Play against the computer</p>
                    </div>
                </button>
            </div>
            {onBack && (
                <button onClick={onBack} className="mt-4 px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                    ← Games
                </button>
            )}
        </div>
    );
}
