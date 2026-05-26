import { Board, CastlingRights, Color, PieceType, Pos, cloneBoard, getLegalMoves, isInCheck } from "./chessLogic";

export type Difficulty = 'easy' | 'medium' | 'hard';

interface SearchState {
    board: Board;
    enPassant: Pos | null;
    castling: CastlingRights;
}

const PIECE_VALUES: Record<PieceType, number> = {
    pawn: 100, knight: 320, bishop: 330, rook: 500, queen: 900, king: 20000,
};

// Piece-square tables from black's perspective (row 0 = black's back rank).
// Values mirror standard chess engine PSTs (Tomasz Michniewski's simplified eval).
const PST: Record<PieceType, number[][]> = {
    pawn: [
        [ 0,  0,  0,  0,  0,  0,  0,  0],
        [50, 50, 50, 50, 50, 50, 50, 50],
        [10, 10, 20, 30, 30, 20, 10, 10],
        [ 5,  5, 10, 25, 25, 10,  5,  5],
        [ 0,  0,  0, 20, 20,  0,  0,  0],
        [ 5, -5,-10,  0,  0,-10, -5,  5],
        [ 5, 10, 10,-20,-20, 10, 10,  5],
        [ 0,  0,  0,  0,  0,  0,  0,  0],
    ],
    knight: [
        [-50,-40,-30,-30,-30,-30,-40,-50],
        [-40,-20,  0,  0,  0,  0,-20,-40],
        [-30,  0, 10, 15, 15, 10,  0,-30],
        [-30,  5, 15, 20, 20, 15,  5,-30],
        [-30,  0, 15, 20, 20, 15,  0,-30],
        [-30,  5, 10, 15, 15, 10,  5,-30],
        [-40,-20,  0,  5,  5,  0,-20,-40],
        [-50,-40,-30,-30,-30,-30,-40,-50],
    ],
    bishop: [
        [-20,-10,-10,-10,-10,-10,-10,-20],
        [-10,  0,  0,  0,  0,  0,  0,-10],
        [-10,  0,  5, 10, 10,  5,  0,-10],
        [-10,  5,  5, 10, 10,  5,  5,-10],
        [-10,  0, 10, 10, 10, 10,  0,-10],
        [-10, 10, 10, 10, 10, 10, 10,-10],
        [-10,  5,  0,  0,  0,  0,  5,-10],
        [-20,-10,-10,-10,-10,-10,-10,-20],
    ],
    rook: [
        [ 0,  0,  0,  0,  0,  0,  0,  0],
        [ 5, 10, 10, 10, 10, 10, 10,  5],
        [-5,  0,  0,  0,  0,  0,  0, -5],
        [-5,  0,  0,  0,  0,  0,  0, -5],
        [-5,  0,  0,  0,  0,  0,  0, -5],
        [-5,  0,  0,  0,  0,  0,  0, -5],
        [-5,  0,  0,  0,  0,  0,  0, -5],
        [ 0,  0,  0,  5,  5,  0,  0,  0],
    ],
    queen: [
        [-20,-10,-10, -5, -5,-10,-10,-20],
        [-10,  0,  0,  0,  0,  0,  0,-10],
        [-10,  0,  5,  5,  5,  5,  0,-10],
        [ -5,  0,  5,  5,  5,  5,  0, -5],
        [  0,  0,  5,  5,  5,  5,  0, -5],
        [-10,  5,  5,  5,  5,  5,  0,-10],
        [-10,  0,  5,  0,  0,  0,  0,-10],
        [-20,-10,-10, -5, -5,-10,-10,-20],
    ],
    // King mid-game: reward staying tucked on back rank near corners (castled), penalize centre.
    king: [
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-30,-40,-40,-50,-50,-40,-40,-30],
        [-20,-30,-30,-40,-40,-30,-30,-20],
        [-10,-20,-20,-20,-20,-20,-20,-10],
        [ 20, 20,  0,  0,  0,  0, 20, 20],
        [ 20, 30, 10,  0,  0, 10, 30, 20],
    ],
};

function evaluate(board: Board): number {
    let score = 0;
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const p = board[r][c];
            if (!p) continue;
            const base = PIECE_VALUES[p.type];
            // For black: row 0 is their back rank (use table as-is)
            // For white: row 7 is their back rank (flip table vertically)
            const tableRow = p.color === 'black' ? r : 7 - r;
            const positional = PST[p.type][tableRow][c];
            score += p.color === 'black' ? (base + positional) : -(base + positional);
        }
    }
    return score;
}

function applyMoveLight(state: SearchState, from: Pos, to: Pos): SearchState {
    const board = cloneBoard(state.board);
    const [fr, fc] = from;
    const [tr, tc] = to;
    const piece = board[fr][fc]!;
    const captured = board[tr][tc];
    let newEP: Pos | null = null;
    const newCastling: CastlingRights = {
        white: { ...state.castling.white },
        black: { ...state.castling.black },
    };

    if (piece.type === 'pawn' && state.enPassant && tr === state.enPassant[0] && tc === state.enPassant[1]) {
        board[piece.color === 'white' ? tr + 1 : tr - 1][tc] = null;
    }
    if (piece.type === 'pawn' && Math.abs(tr - fr) === 2) newEP = [(fr + tr) / 2, tc];
    if (piece.type === 'king' && Math.abs(tc - fc) === 2) {
        if (tc === 6) { board[fr][5] = board[fr][7]; board[fr][7] = null; }
        else          { board[fr][3] = board[fr][0]; board[fr][0] = null; }
    }
    if (piece.type === 'king') newCastling[piece.color] = { kingside: false, queenside: false };
    if (piece.type === 'rook') {
        if (piece.color === 'white') { if (fc === 7) newCastling.white.kingside = false; if (fc === 0) newCastling.white.queenside = false; }
        else                        { if (fc === 7) newCastling.black.kingside = false; if (fc === 0) newCastling.black.queenside = false; }
    }
    // Captured rook on its starting square also removes castling right for that side.
    if (captured?.type === 'rook') {
        if (tr === 7 && tc === 7) newCastling.white.kingside = false;
        if (tr === 7 && tc === 0) newCastling.white.queenside = false;
        if (tr === 0 && tc === 7) newCastling.black.kingside = false;
        if (tr === 0 && tc === 0) newCastling.black.queenside = false;
    }

    board[tr][tc] = piece;
    board[fr][fc] = null;
    if (piece.type === 'pawn' && (tr === 0 || tr === 7)) board[tr][tc] = { type: 'queen', color: piece.color };

    return { board, enPassant: newEP, castling: newCastling };
}

function getAllMoves(state: SearchState, color: Color): [Pos, Pos][] {
    const moves: [Pos, Pos][] = [];
    for (let r = 0; r < 8; r++)
        for (let c = 0; c < 8; c++)
            if (state.board[r][c]?.color === color)
                getLegalMoves(state.board, r, c, state.enPassant, state.castling).forEach(to => moves.push([[r, c], to]));
    return moves;
}

function minimax(state: SearchState, depth: number, alpha: number, beta: number, maximizing: boolean): number {
    if (depth === 0) return evaluate(state.board);

    const color: Color = maximizing ? 'black' : 'white';
    const moves = getAllMoves(state, color);

    if (moves.length === 0) {
        return isInCheck(state.board, color)
            ? (maximizing ? -100000 : 100000)
            : 0;
    }

    if (maximizing) {
        let best = -Infinity;
        for (const [from, to] of moves) {
            const val = minimax(applyMoveLight(state, from, to), depth - 1, alpha, beta, false);
            if (val > best) best = val;
            if (best > alpha) alpha = best;
            if (beta <= alpha) break;
        }
        return best;
    } else {
        let best = Infinity;
        for (const [from, to] of moves) {
            const val = minimax(applyMoveLight(state, from, to), depth - 1, alpha, beta, true);
            if (val < best) best = val;
            if (best < beta) beta = best;
            if (beta <= alpha) break;
        }
        return best;
    }
}

export function getBestMove(
    board: Board,
    enPassant: Pos | null,
    castling: CastlingRights,
    difficulty: Difficulty,
): [Pos, Pos] | null {
    const state: SearchState = { board, enPassant, castling };
    const moves = getAllMoves(state, 'black');
    if (moves.length === 0) return null;

    if (difficulty === 'easy') {
        return moves[Math.floor(Math.random() * moves.length)];
    }

    const depth = difficulty === 'medium' ? 2 : 3;
    // Collect all moves tied for best score, then randomize to keep games varied.
    let bestVal = -Infinity;
    let bestMoves: [Pos, Pos][] = [];

    for (const [from, to] of moves) {
        const val = minimax(applyMoveLight(state, from, to), depth - 1, -Infinity, Infinity, false);
        if (val > bestVal) {
            bestVal = val;
            bestMoves = [[from, to]];
        } else if (val === bestVal) {
            bestMoves.push([from, to]);
        }
    }

    return bestMoves[Math.floor(Math.random() * bestMoves.length)];
}
