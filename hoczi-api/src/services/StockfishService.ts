import { spawn } from "child_process";

type Level = "easy" | "medium" | "hard";

const LEVEL_CONFIG = {
    easy: { skill: 1, depth: 2 },
    medium: { skill: 8, depth: 6 },
    hard: { skill: 15, depth: 10 },
};
export class ChessService {
    async getBestMove(fen: string, level: Level = "easy"): Promise<string> {
        return new Promise((resolve, reject) => {
            const config = LEVEL_CONFIG[level];

            const engine = spawn("/usr/games/stockfish"); // đổi path nếu máy mày khác

            engine.stdout.on("data", (data) => {
                const text = data.toString();

                const match = text.match(/bestmove\s+(\S+)/);

                if (match) {
                    engine.kill();
                    resolve(match[1]);
                }
            });

            engine.stderr.on("data", (data) => {
                reject(data.toString());
            });

            engine.on("error", reject);

            engine.stdin.write("uci\n");
            engine.stdin.write(`setoption name Skill Level value ${config.skill}\n`);
            engine.stdin.write("ucinewgame\n");
            engine.stdin.write(`position fen ${fen}\n`);
            engine.stdin.write(`go depth ${config.depth}\n`);
        });
    }

}
