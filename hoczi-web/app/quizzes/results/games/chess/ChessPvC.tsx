'use client'
import { useState, useCallback, useEffect } from "react";
import { GameState, Pos, PieceType, applyMove, createInitialState, getLegalMoves } from "./chessLogic";
import { Difficulty, getBestMove } from "./chessAI";
import { ChessBoard } from "./ChessBoard";

interface Props {
    difficulty: Difficulty;
    onBack: () => void;
}

export function ChessPvC({ difficulty, onBack }: Props) {
    const [game, setGame] = useState<GameState>(createInitialState());
    const [promoTarget, setPromoTarget] = useState<{ from: Pos; to: Pos } | null>(null);

    useEffect(() => {
        if (game.turn !== 'black') return;
        if (game.status === 'checkmate' || game.status === 'stalemate') return;
        const timer = setTimeout(() => {
            const move = getBestMove(game.board, game.enPassant, game.castling, difficulty);
            if (move) setGame(prev => applyMove(prev, move[0], move[1]));
        }, 500);
        return () => clearTimeout(timer);
    }, [game, difficulty]);

    const restart = () => { setGame(createInitialState()); setPromoTarget(null); };

    const handleSquareClick = useCallback((r: number, c: number) => {
        if (game.status === 'checkmate' || game.status === 'stalemate') return;
        if (game.turn === 'black') return;

        const { board, turn, selected, validMoves } = game;
        const piece = board[r][c];

        if (selected) {
            const isValid = validMoves.some(([mr, mc]) => mr === r && mc === c);
            if (isValid) {
                const mp = board[selected[0]][selected[1]]!;
                const isPromo = mp.type === 'pawn' && mp.color === 'white' && r === 0;
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
            mode="pvc"
            difficulty={difficulty}
            onSquareClick={handleSquareClick}
            onPromotion={handlePromotion}
            onRestart={restart}
            onBack={onBack}
        />
    );
}
