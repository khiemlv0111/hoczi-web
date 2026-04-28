export type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export type Color = 'white' | 'black';
export type Pos = [number, number];

export interface Piece { type: PieceType; color: Color; }
export type Square = Piece | null;
export type Board = Square[][];

export interface CastlingRights {
    white: { kingside: boolean; queenside: boolean };
    black: { kingside: boolean; queenside: boolean };
}

export interface GameState {
    board: Board;
    turn: Color;
    selected: Pos | null;
    validMoves: Pos[];
    enPassant: Pos | null;
    castling: CastlingRights;
    status: 'playing' | 'check' | 'checkmate' | 'stalemate';
    capturedByWhite: Piece[];
    capturedByBlack: Piece[];
    lastMove: [Pos, Pos] | null;
    moveCount: number;
}

export const SYMBOLS: Record<Color, Record<PieceType, string>> = {
    white: { king: '♔', queen: '♕', rook: '♖', bishop: '♗', knight: '♘', pawn: '♙' },
    black: { king: '♚', queen: '♛', rook: '♜', bishop: '♝', knight: '♞', pawn: '♟' },
};

export function createBoard(): Board {
    const b: Board = Array.from({ length: 8 }, () => Array(8).fill(null));
    const back: PieceType[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    back.forEach((type, col) => {
        b[0][col] = { type, color: 'black' };
        b[7][col] = { type, color: 'white' };
    });
    for (let col = 0; col < 8; col++) {
        b[1][col] = { type: 'pawn', color: 'black' };
        b[6][col] = { type: 'pawn', color: 'white' };
    }
    return b;
}

export function cloneBoard(board: Board): Board {
    return board.map(row => row.map(sq => sq ? { ...sq } : null));
}

export function inBounds(r: number, c: number): boolean {
    return r >= 0 && r < 8 && c >= 0 && c < 8;
}

export function opp(color: Color): Color {
    return color === 'white' ? 'black' : 'white';
}

export function getAttacks(board: Board, r: number, c: number): Pos[] {
    const piece = board[r][c];
    if (!piece) return [];
    const { type, color } = piece;
    const a: Pos[] = [];

    if (type === 'pawn') {
        const d = color === 'white' ? -1 : 1;
        if (inBounds(r + d, c - 1)) a.push([r + d, c - 1]);
        if (inBounds(r + d, c + 1)) a.push([r + d, c + 1]);
        return a;
    }
    if (type === 'knight') {
        for (const [dr, dc] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]])
            if (inBounds(r+dr, c+dc)) a.push([r+dr, c+dc]);
        return a;
    }
    const slide = (dr: number, dc: number) => {
        let nr = r+dr, nc = c+dc;
        while (inBounds(nr, nc)) { a.push([nr, nc]); if (board[nr][nc]) break; nr+=dr; nc+=dc; }
    };
    if (type === 'bishop' || type === 'queen') { slide(-1,-1); slide(-1,1); slide(1,-1); slide(1,1); }
    if (type === 'rook'   || type === 'queen') { slide(-1,0);  slide(1,0);  slide(0,-1); slide(0,1); }
    if (type === 'king') {
        for (const [dr, dc] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]])
            if (inBounds(r+dr, c+dc)) a.push([r+dr, c+dc]);
    }
    return a;
}

export function isAttackedBy(board: Board, r: number, c: number, byColor: Color): boolean {
    for (let pr = 0; pr < 8; pr++)
        for (let pc = 0; pc < 8; pc++)
            if (board[pr][pc]?.color === byColor)
                if (getAttacks(board, pr, pc).some(([ar, ac]) => ar === r && ac === c)) return true;
    return false;
}

export function isInCheck(board: Board, color: Color): boolean {
    for (let r = 0; r < 8; r++)
        for (let c = 0; c < 8; c++)
            if (board[r][c]?.type === 'king' && board[r][c]?.color === color)
                return isAttackedBy(board, r, c, opp(color));
    return false;
}

export function getCandidates(board: Board, r: number, c: number, enPassant: Pos | null): Pos[] {
    const piece = board[r][c];
    if (!piece) return [];
    const { type, color } = piece;
    const moves: Pos[] = [];

    const slide = (dr: number, dc: number) => {
        let nr = r+dr, nc = c+dc;
        while (inBounds(nr, nc)) {
            if (board[nr][nc]?.color === color) break;
            moves.push([nr, nc]);
            if (board[nr][nc]) break;
            nr+=dr; nc+=dc;
        }
    };

    if (type === 'pawn') {
        const d = color === 'white' ? -1 : 1;
        const start = color === 'white' ? 6 : 1;
        if (inBounds(r+d, c) && !board[r+d][c]) {
            moves.push([r+d, c]);
            if (r === start && !board[r+2*d][c]) moves.push([r+2*d, c]);
        }
        for (const dc of [-1, 1]) {
            const nr = r+d, nc = c+dc;
            if (!inBounds(nr, nc)) continue;
            if (board[nr][nc]?.color === opp(color)) moves.push([nr, nc]);
            if (enPassant && nr === enPassant[0] && nc === enPassant[1]) moves.push([nr, nc]);
        }
    } else if (type === 'knight') {
        for (const [dr, dc] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) {
            const nr = r+dr, nc = c+dc;
            if (inBounds(nr, nc) && board[nr][nc]?.color !== color) moves.push([nr, nc]);
        }
    } else if (type === 'bishop') { slide(-1,-1); slide(-1,1); slide(1,-1); slide(1,1);
    } else if (type === 'rook')   { slide(-1,0);  slide(1,0);  slide(0,-1); slide(0,1);
    } else if (type === 'queen')  { slide(-1,-1); slide(-1,1); slide(1,-1); slide(1,1); slide(-1,0); slide(1,0); slide(0,-1); slide(0,1);
    } else if (type === 'king') {
        for (const [dr, dc] of [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]) {
            const nr = r+dr, nc = c+dc;
            if (inBounds(nr, nc) && board[nr][nc]?.color !== color) moves.push([nr, nc]);
        }
    }
    return moves;
}

export function getLegalMoves(board: Board, r: number, c: number, enPassant: Pos | null, castling: CastlingRights): Pos[] {
    const piece = board[r][c];
    if (!piece) return [];
    const { color } = piece;

    const legal = getCandidates(board, r, c, enPassant).filter(([mr, mc]) => {
        const nb = cloneBoard(board);
        if (piece.type === 'pawn' && enPassant && mr === enPassant[0] && mc === enPassant[1]) {
            nb[color === 'white' ? mr + 1 : mr - 1][mc] = null;
        }
        nb[mr][mc] = piece;
        nb[r][c] = null;
        return !isInCheck(nb, color);
    });

    if (piece.type === 'king' && !isInCheck(board, color)) {
        const row = color === 'white' ? 7 : 0;
        if (r === row && c === 4) {
            if (
                castling[color].kingside &&
                !board[row][5] && !board[row][6] &&
                board[row][7]?.type === 'rook' && board[row][7]?.color === color &&
                !isAttackedBy(board, row, 5, opp(color)) &&
                !isAttackedBy(board, row, 6, opp(color))
            ) legal.push([row, 6]);

            if (
                castling[color].queenside &&
                !board[row][3] && !board[row][2] && !board[row][1] &&
                board[row][0]?.type === 'rook' && board[row][0]?.color === color &&
                !isAttackedBy(board, row, 3, opp(color)) &&
                !isAttackedBy(board, row, 2, opp(color))
            ) legal.push([row, 2]);
        }
    }

    return legal;
}

export function hasAnyLegal(board: Board, color: Color, enPassant: Pos | null, castling: CastlingRights): boolean {
    for (let r = 0; r < 8; r++)
        for (let c = 0; c < 8; c++)
            if (board[r][c]?.color === color && getLegalMoves(board, r, c, enPassant, castling).length > 0) return true;
    return false;
}

export function applyMove(state: GameState, from: Pos, to: Pos, promoType: PieceType = 'queen'): GameState {
    const board = cloneBoard(state.board);
    const [fr, fc] = from;
    const [tr, tc] = to;
    const piece = board[fr][fc]!;
    const captured = board[tr][tc];
    const capW = [...state.capturedByWhite];
    const capB = [...state.capturedByBlack];
    let newEP: Pos | null = null;
    const newCastling: CastlingRights = {
        white: { ...state.castling.white },
        black: { ...state.castling.black },
    };

    if (piece.type === 'pawn' && state.enPassant && tr === state.enPassant[0] && tc === state.enPassant[1]) {
        const capR = piece.color === 'white' ? tr + 1 : tr - 1;
        const epPawn = board[capR][tc]!;
        board[capR][tc] = null;
        (piece.color === 'white' ? capW : capB).push(epPawn);
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
    if (captured?.type === 'rook') {
        if (tr === 7 && tc === 7) newCastling.white.kingside = false;
        if (tr === 7 && tc === 0) newCastling.white.queenside = false;
        if (tr === 0 && tc === 7) newCastling.black.kingside = false;
        if (tr === 0 && tc === 0) newCastling.black.queenside = false;
    }

    if (captured) (piece.color === 'white' ? capW : capB).push(captured);

    board[tr][tc] = piece;
    board[fr][fc] = null;

    if (piece.type === 'pawn' && (tr === 0 || tr === 7)) board[tr][tc] = { type: promoType, color: piece.color };

    const nextTurn = opp(piece.color);
    const inCheck = isInCheck(board, nextTurn);
    const hasMoves = hasAnyLegal(board, nextTurn, newEP, newCastling);

    let status: GameState['status'] = 'playing';
    if (inCheck && !hasMoves) status = 'checkmate';
    else if (!inCheck && !hasMoves) status = 'stalemate';
    else if (inCheck) status = 'check';

    return {
        ...state,
        board,
        turn: nextTurn,
        selected: null,
        validMoves: [],
        enPassant: newEP,
        castling: newCastling,
        status,
        capturedByWhite: capW,
        capturedByBlack: capB,
        lastMove: [from, to],
        moveCount: state.moveCount + 1,
    };
}

export function createInitialState(): GameState {
    return {
        board: createBoard(),
        turn: 'white',
        selected: null,
        validMoves: [],
        enPassant: null,
        castling: { white: { kingside: true, queenside: true }, black: { kingside: true, queenside: true } },
        status: 'playing',
        capturedByWhite: [],
        capturedByBlack: [],
        lastMove: null,
        moveCount: 0,
    };
}
