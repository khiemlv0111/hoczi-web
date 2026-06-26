'use client'

import { useEffect, useRef, useState } from "react";
import HanziWriter, { type StrokeData } from "hanzi-writer";
import { Settings2, Play, Pencil, RotateCcw } from "lucide-react";

type Mode = "view" | "quiz";

type Progress = {
  strokesDone: number;
  mistakes: number;
  completed: boolean;
};

const IDLE_PROGRESS: Progress = { strokesDone: 0, mistakes: 0, completed: false };

interface Props {
  character: string;
  strokeCount: number;
}

export function WriteHanzi({ character, strokeCount }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [mode, setMode] = useState<Mode>("view");
  const [progress, setProgress] = useState<Progress>(IDLE_PROGRESS);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const writer = HanziWriter.create(containerRef.current, character, {
      width: 260,
      height: 260,
      padding: 20,
      showCharacter: false,
      showOutline: true,
      strokeColor: "#0c1a3a",
      outlineColor: "#dadde6",
      highlightColor: "#3b82f6",
      drawingColor: "#1d4ed8",
      drawingWidth: 8,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 300,
    });

    writerRef.current = writer;

    return () => {
      writerRef.current = null;
    };
  }, [character]);

  const handleView = () => {
    setMode("view");
    setProgress(IDLE_PROGRESS);
    writerRef.current?.animateCharacter();
  };

  const handlePractice = () => {
    setMode("quiz");
    setProgress(IDLE_PROGRESS);
    writerRef.current?.quiz({
      onCorrectStroke: (data: StrokeData) => {
        setProgress((p) => ({ ...p, strokesDone: strokeCount - data.strokesRemaining, mistakes: data.totalMistakes }));
      },
      onMistake: (data: StrokeData) => {
        setProgress((p) => ({ ...p, mistakes: data.totalMistakes }));
      },
      onComplete: () => {
        setProgress((p) => ({ ...p, completed: true }));
      },
    });
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-800">Thứ tự viết nét chữ</h2>
        <button
          type="button"
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600"
        >
          <Settings2 size={13} />
          Tuỳ chỉnh nâng cao
        </button>
      </div>

      <div className="mt-4 flex aspect-square items-center justify-center rounded-xl bg-gray-100">
        <div ref={containerRef} />
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={handleView}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Play size={15} />
          Xem viết
        </button>
        <button
          type="button"
          onClick={handlePractice}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#0c1a3a] py-2.5 text-sm font-medium text-white hover:bg-[#152a5c]"
        >
          <Pencil size={15} />
          Luyện tập
        </button>
      </div>

      {mode === "quiz" && (
        <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-xs">
          {progress.completed ? (
            <span className="font-medium text-green-600">
              Hoàn thành! 🎉 {progress.mistakes} lần sai
            </span>
          ) : (
            <span className="text-gray-500">
              Vẽ theo nét mờ · {progress.strokesDone}/{strokeCount} nét đúng · {progress.mistakes} lần sai
            </span>
          )}
          <button
            type="button"
            onClick={handlePractice}
            className="flex items-center gap-1 font-medium text-gray-500 hover:text-gray-800"
          >
            <RotateCcw size={12} />
            Viết lại
          </button>
        </div>
      )}
    </div>
  );
}
