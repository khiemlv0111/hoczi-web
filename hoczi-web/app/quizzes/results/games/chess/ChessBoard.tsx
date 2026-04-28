'use client'
import { RotateCcw } from "lucide-react";
import { GameState, Piece, PieceType, Pos, SYMBOLS, opp } from "./chessLogic";
import { Difficulty } from "./chessAI";

interface Props {
    game: GameState;
    promoTarget: { from: Pos; to: Pos } | null;
    mode: 'pvp' | 'pvc';
    difficulty?: Difficulty;
    onSquareClick: (r: number, c: number) => void;
    onPromotion: (type: PieceType) => void;
    onRestart: () => void;
    onBack: () => void;
}

const DIFFICULTY_LABEL: Record<Difficulty, string> = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };

const pieceVal: Partial<Record<PieceType, number>> = { queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1 };
const score = (p: Piece[]) => p.reduce((s, x) => s + (pieceVal[x.type] ?? 0), 0);

export function ChessBoard({ game, promoTarget, mode, difficulty, onSquareClick, onPromotion, onRestart, onBack }: Props) {
    const { board, turn, selected, validMoves, status, lastMove, capturedByWhite, capturedByBlack } = game;
    const wScore = score(capturedByWhite);
    const bScore = score(capturedByBlack);
    const aiThinking = mode === 'pvc' && turn === 'black' && status !== 'checkmate' && status !== 'stalemate';

    const statusText =
        status === 'checkmate' ? `${opp(turn) === 'white' ? 'White' : 'Black'} wins by checkmate!` :
        status === 'stalemate' ? 'Draw by stalemate' :
        status === 'check' ? `${turn === 'white' ? 'White' : 'Black'} is in check!` :
        aiThinking ? 'Computer is thinking…' :
        `${turn === 'white' ? 'White' : 'Black'} to move`;

    const statusColor =
        status === 'checkmate' ? 'text-green-700 font-semibold' :
        status === 'stalemate' ? 'text-gray-500' :
        status === 'check' ? 'text-orange-600 font-semibold' : 'text-gray-500';

    return (
        <div className="max-w-[665px] mx-auto">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-[15px] font-semibold text-gray-900">
                        Chess <span className="text-gray-400 font-normal text-[12px]">· {mode === 'pvp' ? 'Player vs Player' : `vs Computer${difficulty ? ` · ${DIFFICULTY_LABEL[difficulty]}` : ''}`}</span>
                    </h3>
                    <p className={`text-[12px] mt-0.5 ${statusColor}`}>{statusText}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={onRestart} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                        <RotateCcw size={13} /> Restart
                    </button>
                    <button onClick={onBack} className="px-3 py-1.5 border border-gray-200 rounded-md text-[13px] text-gray-600 hover:bg-gray-50 transition-colors">
                        ← Menu
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-2 mb-1.5 min-h-[20px]">
                <span className="text-[11px] text-gray-500 w-16 shrink-0">⬛ Black{bScore > wScore ? ` +${bScore - wScore}` : ''}</span>
                <div className="flex flex-wrap gap-0.5">
                    {capturedByBlack.map((p, i) => <span key={i} className="text-sm leading-none">{SYMBOLS[p.color][p.type]}</span>)}
                </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-md border-2 border-gray-800/20">
                {board.map((row, r) => (
                    <div key={r} className="flex">
                        {row.map((piece, c) => {
                            const light = (r + c) % 2 === 0;
                            const isSel = selected?.[0] === r && selected?.[1] === c;
                            const isValid = validMoves.some(([mr, mc]) => mr === r && mc === c);
                            const isLMF = lastMove?.[0][0] === r && lastMove?.[0][1] === c;
                            const isLMT = lastMove?.[1][0] === r && lastMove?.[1][1] === c;

                            let bg: string;
                            if (isSel)               bg = 'bg-yellow-400';
                            else if (isLMF || isLMT) bg = light ? 'bg-yellow-200' : 'bg-yellow-600/60';
                            else                     bg = light ? 'bg-amber-100' : 'bg-amber-700';

                            return (
                                <div
                                    key={`${r}-${c}`}
                                    onClick={() => onSquareClick(r, c)}
                                    className={`w-[12.5%] aspect-square relative flex items-center justify-center cursor-pointer select-none ${bg}`}
                                >
                                    {c === 0 && (
                                        <span className={`absolute top-0.5 left-0.5 text-[8px] font-bold leading-none pointer-events-none ${light ? 'text-amber-700' : 'text-amber-200'}`}>
                                            {8 - r}
                                        </span>
                                    )}
                                    {r === 7 && (
                                        <span className={`absolute bottom-0.5 right-0.5 text-[8px] font-bold leading-none pointer-events-none ${light ? 'text-amber-700' : 'text-amber-200'}`}>
                                            {String.fromCharCode(97 + c)}
                                        </span>
                                    )}
                                    {isValid && (
                                        piece
                                            ? <div className="absolute inset-0 border-[3px] border-gray-900/25 pointer-events-none" />
                                            : <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-[34%] h-[34%] rounded-full bg-gray-900/20" />
                                              </div>
                                    )}
                                    {piece && (
                                        <span
                                            className={`leading-none z-10 select-none transition-transform ${isSel ? 'scale-110' : ''}`}
                                            style={{
                                                fontSize: 'min(9.5vw, 60px)',
                                                filter: piece.color === 'white'
                                                    ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))'
                                                    : 'drop-shadow(0 1px 1px rgba(0,0,0,0.4))',
                                            }}
                                        >
                                            {SYMBOLS[piece.color][piece.type]}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}

                {promoTarget && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
                        <div className="bg-white rounded-2xl p-5 shadow-2xl">
                            <p className="text-[13px] font-semibold text-gray-800 mb-3 text-center">Promote Pawn</p>
                            <div className="grid grid-cols-4 gap-2">
                                {(['queen', 'rook', 'bishop', 'knight'] as PieceType[]).map(pt => {
                                    const color = game.board[promoTarget.from[0]][promoTarget.from[1]]!.color;
                                    return (
                                        <button key={pt} onClick={() => onPromotion(pt)}
                                            className="w-14 h-14 flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all">
                                            <span className="text-2xl leading-none">{SYMBOLS[color][pt]}</span>
                                            <span className="text-[9px] text-gray-500 capitalize">{pt}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2 mt-1.5 min-h-[20px]">
                <span className="text-[11px] text-gray-500 w-16 shrink-0">⬜ White{wScore > bScore ? ` +${wScore - bScore}` : ''}</span>
                <div className="flex flex-wrap gap-0.5">
                    {capturedByWhite.map((p, i) => <span key={i} className="text-sm leading-none">{SYMBOLS[p.color][p.type]}</span>)}
                </div>
            </div>
        </div>
    );
}
