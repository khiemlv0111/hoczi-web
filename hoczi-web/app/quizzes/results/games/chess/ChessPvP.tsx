'use client'
import { useState, useCallback } from "react";
import { GameState, Pos, PieceType, applyMove, createInitialState, getLegalMoves } from "./chessLogic";
import { ChessBoard } from "./ChessBoard";

interface Props { onBack: () => void; }

export function ChessPvP({ onBack }: Props) {
    const [game, setGame] = useState<GameState>(createInitialState());
    const [promoTarget, setPromoTarget] = useState<{ from: Pos; to: Pos } | null>(null);

    const restart = () => { setGame(createInitialState()); setPromoTarget(null); };

    const handleSquareClick = useCallback((r: number, c: number) => {
        if (game.status === 'checkmate' || game.status === 'stalemate') return;

        const { board, turn, selected, validMoves } = game;
        const piece = board[r][c];

        if (selected) {
            const isValid = validMoves.some(([mr, mc]) => mr === r && mc === c);
            if (isValid) {
                const mp = board[selected[0]][selected[1]]!;
                const isPromo = mp.type === 'pawn' && ((mp.color === 'white' && r === 0) || (mp.color === 'black' && r === 7));
                if (isPromo) { setPromoTarget({ from: selected, to: [r, c] }); }
                else { setGame(prev => applyMove(prev, selected, [r, c])); }
                return;
            }
            if (piece?.color === turn) {
                setGame(prev => ({ ...prev, selected: [r, c], validMoves: getLegalMoves(board, r, c, game.enPassant, game.castling) }));
                return;
            }
            setGame(prev => ({ ...prev, selected: null, validMoves: [] }));
            return;
        }

        if (piece?.color === turn) {
            setGame(prev => ({ ...prev, selected: [r, c], validMoves: getLegalMoves(board, r, c, game.enPassant, game.castling) }));
        }
    }, [game]);

    const handlePromotion = (type: PieceType) => {
        if (!promoTarget) return;
        setGame(prev => applyMove(prev, promoTarget.from, promoTarget.to, type));
        setPromoTarget(null);
    };

    return (
        <ChessBoard
            game={game}
            promoTarget={promoTarget}
            mode="pvp"
            onSquareClick={handleSquareClick}
            onPromotion={handlePromotion}
            onRestart={restart}
            onBack={onBack}
        />
    );
}
