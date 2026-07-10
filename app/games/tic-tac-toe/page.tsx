"use client";

import { useState } from "react";

type Cell = "X" | "O" | null;

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: Cell[]): { winner: "X" | "O"; line: number[] } | null {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as "X" | "O", line };
    }
  }
  return null;
}

export default function TicTacToePage() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ x: 0, o: 0, draws: 0 });

  const result = getWinner(board);
  const isDraw = !result && board.every((cell) => cell !== null);
  const gameOver = Boolean(result) || isDraw;

  function handleClick(index: number) {
    if (board[index] || gameOver) return;

    const nextBoard = [...board];
    nextBoard[index] = xIsNext ? "X" : "O";
    setBoard(nextBoard);

    const nextResult = getWinner(nextBoard);
    const nextDraw = !nextResult && nextBoard.every((cell) => cell !== null);

    if (nextResult) {
      setScores((s) => ({
        ...s,
        x: nextResult.winner === "X" ? s.x + 1 : s.x,
        o: nextResult.winner === "O" ? s.o + 1 : s.o,
      }));
    } else if (nextDraw) {
      setScores((s) => ({ ...s, draws: s.draws + 1 }));
    }

    setXIsNext(!xIsNext);
  }

  function newGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  function resetScoreboard() {
    setScores({ x: 0, o: 0, draws: 0 });
  }

  let status: string;
  if (result) {
    status = `${result.winner} wins!`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `${xIsNext ? "X" : "O"}'s turn`;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Tic-Tac-Toe
        </h1>
        <p
          className={`mt-3 text-lg font-medium ${
            result ? "text-accent" : "text-ink/70"
          }`}
        >
          {status}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 w-full max-w-xs md:max-w-sm">
        {board.map((cell, i) => {
          const isWinningCell = result?.line.includes(i);
          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={Boolean(cell) || gameOver}
              className={`aspect-square rounded-2xl border text-4xl md:text-5xl font-bold flex items-center justify-center transition
                ${
                  isWinningCell
                    ? "bg-accent/15 border-accent text-accent"
                    : "bg-ink/[0.03] border-ink/10 text-ink"
                }
                ${!cell && !gameOver ? "hover:bg-ink/10 active:scale-95" : ""}
              `}
            >
              {cell}
            </button>
          );
        })}
      </div>

      <button
        onClick={newGame}
        className="px-6 py-3 bg-ink text-paper rounded-full font-medium hover:opacity-90 transition"
      >
        New game
      </button>

      <div className="w-full max-w-xs md:max-w-sm">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-ink/10 py-3">
            <p className="text-xs uppercase tracking-wide text-ink/50">X wins</p>
            <p className="mt-1 text-2xl font-semibold">{scores.x}</p>
          </div>
          <div className="rounded-xl border border-ink/10 py-3">
            <p className="text-xs uppercase tracking-wide text-ink/50">Draws</p>
            <p className="mt-1 text-2xl font-semibold">{scores.draws}</p>
          </div>
          <div className="rounded-xl border border-ink/10 py-3">
            <p className="text-xs uppercase tracking-wide text-ink/50">O wins</p>
            <p className="mt-1 text-2xl font-semibold">{scores.o}</p>
          </div>
        </div>
        <button
          onClick={resetScoreboard}
          className="mt-4 w-full text-sm text-ink/50 hover:text-ink transition"
        >
          Reset scoreboard
        </button>
      </div>

      <a
        href="/"
        className="text-sm text-ink/50 hover:text-accent transition"
      >
        ← Back to portfolio
      </a>
    </main>
  );
}
