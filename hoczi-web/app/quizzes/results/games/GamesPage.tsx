'use client'
import { useState } from "react";
import { MemoryGame } from "./MemoryGame";
import { DiceGame } from "./DiceGame";
import { useRouter } from "next/navigation";

const gameImageUrl = 'https://d1y3v0ou093g3m.cloudfront.net/6dd5cda4-6084-4bfe-a427-a4d6f3440633-logo_hz.png';

const GAMES = [
    { id: 'memory', label: 'Memory', description: 'Match all card pairs', emoji: '🃏' },
    { id: 'dice',   label: 'Dice',   description: 'Roll to match the target number', emoji: '🎲' },
    { id: 'challenge',   label: 'Challenge Friend',   description: 'Choose a friend to challange', emoji: '👤' },
    // add more games here
] as const;

type GameId = typeof GAMES[number]['id'];

export function GamesPage() {
    const router = useRouter();
    const [active, setActive] = useState<GameId | null>(null);

    if (active === 'memory') {
        return <MemoryGame onBack={() => setActive(null)} />;
    }
    if (active === 'dice') {
        return <DiceGame onBack={() => setActive(null)} />;
    }
    if (active === 'challenge') {
        router.push(`/quizzes/results/games/challenge`)
    }

    return (
        <div className="max-w-sm mx-auto mt-10">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                    <img src={gameImageUrl} alt="hoczi" className="w-8 h-8 object-contain" />
                    <div>
                        <h2 className="text-[15px] font-semibold text-gray-900">Games</h2>
                        <p className="text-[12px] text-gray-400">Pick a game to play</p>
                    </div>
                </div>

                <div className="space-y-2">
                    {GAMES.map(game => (
                        <button
                            key={game.id}
                            onClick={() => setActive(game.id)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-left"
                        >
                            <span className="text-2xl">{game.emoji}</span>
                            <div>
                                <p className="text-[13px] font-medium text-gray-900">{game.label}</p>
                                <p className="text-[11px] text-gray-400">{game.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
