'use client'
import { useState, useEffect, useCallback } from "react";
import { RotateCcw, Trophy, Clock, Hash } from "lucide-react";

const EMOJIS = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐸", "🐵"];
const gameImageUrl = 'https://d1y3v0ou093g3m.cloudfront.net/6dd5cda4-6084-4bfe-a427-a4d6f3440633-logo_hz.png';

const SIZE_OPTIONS = [
    { label: '3×3', cols: 3, totalCards: 9 },
    { label: '4×4', cols: 4, totalCards: 16 },
    { label: '5×5', cols: 5, totalCards: 25 },
] as const;

type SizeOption = typeof SIZE_OPTIONS[number];

type Card = {
    id: number;
    emoji: string;
    flipped: boolean;
    matched: boolean;
    free: boolean;
};

function createDeck(totalCards: number): Card[] {
    const isOdd = totalCards % 2 !== 0;
    const pairCount = Math.floor(totalCards / 2);
    const pairs = EMOJIS.slice(0, pairCount);
    const deck: Card[] = [...pairs, ...pairs]
        .sort(() => Math.random() - 0.5)
        .map((emoji, i) => ({ id: i, emoji, flipped: false, matched: false, free: false }));

    if (isOdd) {
        const center = Math.floor(totalCards / 2);
        deck.splice(center, 0, { id: -1, emoji: '⭐', flipped: true, matched: true, free: true });
    }
    deck.forEach((c, i) => { c.id = i; });
    return deck;
}

function fmt(s: number) {
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

type Props = { onBack: () => void };

export function MemoryGame({ onBack }: Props) {
    const [size, setSize] = useState<SizeOption | null>(null);
    const [pending, setPending] = useState<SizeOption>(SIZE_OPTIONS[1]);
    const [cards, setCards] = useState<Card[]>([]);
    const [selected, setSelected] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const [won, setWon] = useState(false);
    const [locked, setLocked] = useState(false);

    useEffect(() => {
        if (!running) return;
        const id = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(id);
    }, [running]);

    const startGame = useCallback((s: SizeOption) => {
        setSize(s);
        setCards(createDeck(s.totalCards));
        setSelected([]);
        setMoves(0);
        setSeconds(0);
        setRunning(false);
        setWon(false);
        setLocked(false);
    }, []);

    const handleFlip = (id: number) => {
        if (locked || won) return;
        const card = cards[id];
        if (card.flipped || card.matched || selected.includes(id)) return;

        if (!running) setRunning(true);

        const next = [...selected, id];
        setCards(prev => prev.map(c => c.id === id ? { ...c, flipped: true } : c));

        if (next.length === 1) { setSelected(next); return; }

        setSelected([]);
        setMoves(m => m + 1);
        setLocked(true);

        const [firstId] = next;
        const first = cards[firstId];

        if (first.emoji === card.emoji) {
            setCards(prev => prev.map(c =>
                c.id === firstId || c.id === id ? { ...c, matched: true, flipped: true } : c
            ));
            setLocked(false);
            setCards(prev => {
                const allMatched = prev.every(c => c.free || c.matched || c.id === firstId || c.id === id);
                if (allMatched) { setRunning(false); setWon(true); }
                return prev;
            });
        } else {
            setTimeout(() => {
                setCards(prev => prev.map(c =>
                    c.id === firstId || c.id === id ? { ...c, flipped: false } : c
                ));
                setLocked(false);
            }, 800);
        }
    };

    // ── Size selection ─────────────────────────────────────────────────────
    if (!size) {
        return (
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                    {SIZE_OPTIONS.map(opt => (
                        <button
                            key={opt.label}
                            onClick={() => setPending(opt)}
                            className={`
                                flex flex-col items-center gap-1.5 py-4 rounded-xl border-2 transition-all
                                ${pending.label === opt.label
                                    ? "border-blue-500 bg-blue-50"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                                }
                            `}
                        >
                            <span className="text-[15px] font-bold text-gray-800">{opt.label}</span>
                            <span className="text-[11px] text-gray-400">
                                {opt.totalCards % 2 !== 0 ? `${opt.totalCards - 1} + ⭐` : opt.totalCards} cards
                            </span>
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => startGame(pending)}
                    className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 transition-colors"
                >
                    Start
                </button>
            </div>
        );
    }

    // ── Game board ─────────────────────────────────────────────────────────
    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h3 className="text-[14px] font-semibold text-gray-900">
                        Memory <span className="text-gray-400 font-normal">· {size.label}</span>
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => startGame(size)}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        <RotateCcw size={13} />
                        Restart
                    </button>
                    <button
                        onClick={() => { setSize(null); setRunning(false); }}
                        className="px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Change Size
                    </button>
                    <button
                        onClick={onBack}
                        className="px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        ← Games
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center">
                        <Hash size={13} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400">Moves</p>
                        <p className="text-[15px] font-semibold text-gray-900">{moves}</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center">
                        <Clock size={13} className="text-green-600" />
                    </div>
                    <div>
                        <p className="text-[11px] text-gray-400">Time</p>
                        <p className="text-[15px] font-semibold text-gray-900">{fmt(seconds)}</p>
                    </div>
                </div>
            </div>

            {won && (
                <div className="mb-5 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 flex items-center gap-3">
                    <Trophy size={16} className="text-yellow-500" />
                    <p className="text-[13px] text-yellow-800 font-medium">
                        You won in {moves} moves and {fmt(seconds)}!
                    </p>
                </div>
            )}

            <div
                className="grid gap-2"
                style={{ gridTemplateColumns: `repeat(${size.cols}, minmax(0, 1fr))` }}
            >
                {cards.map(card => (
                    <button
                        key={card.id}
                        onClick={() => handleFlip(card.id)}
                        disabled={card.matched}
                        className={`
                            aspect-square rounded-xl text-2xl border transition-all duration-200 select-none
                            ${card.free
                                ? "bg-yellow-50 border-yellow-200 cursor-default"
                                : card.matched
                                ? "bg-green-50 border-green-200 opacity-50 cursor-default"
                                : card.flipped
                                ? "bg-white border-blue-300 shadow-sm"
                                : "bg-gray-100 border-gray-200 hover:bg-gray-200 cursor-pointer"
                            }
                        `}
                    >
                        {card.flipped || card.matched
                            ? card.emoji
                            : <img src={gameImageUrl} alt="card back" className="w-full h-full object-contain p-1 opacity-70" />
                        }
                    </button>
                ))}
            </div>
        </div>
    );
}
