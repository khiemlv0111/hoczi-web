'use client'

import Link from "next/link";
import { useState } from "react";
import type { Lesson } from "./types";
import { StudyView } from "./StudyView";
import { PracticeView } from "./PracticeView";

export function LessonPage({ lesson, backHref, levelLabel }: { lesson: Lesson; backHref: string; levelLabel: string }) {
  const [tab, setTab] = useState<"study" | "practice">("study");
  // Đồng hồ bắt đầu đếm khi mở tab luyện tập lần đầu
  const [startedAt, setStartedAt] = useState<number | null>(null);

  const openPractice = () => {
    setTab("practice");
    setStartedAt(s => s ?? Date.now());
    window.scrollTo({ top: 0 });
  };

  const tabClass = (active: boolean) =>
    `flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${active ? "bg-white text-red-600 shadow-sm" : "text-gray-500 hover:text-gray-800"}`;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <Link href={backHref} className="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700">
          ← {levelLabel}
        </Link>

        <header className="mb-6">
          <p className="text-sm font-medium text-red-500">{levelLabel} · Bài {lesson.no} · {lesson.topic}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            第{lesson.no}课 {lesson.zh}
          </h1>
          <p className="mt-1 text-gray-500">{lesson.pinyin} · {lesson.vi} <span className="text-gray-400">({lesson.en})</span></p>
        </header>

        <div className="mb-6 flex gap-1 rounded-2xl bg-gray-100 p-1">
          <button type="button" className={tabClass(tab === "study")} onClick={() => setTab("study")}>📚 Học bài</button>
          <button type="button" className={tabClass(tab === "practice")} onClick={openPractice}>
            ✍️ Luyện tập & kiểm tra
          </button>
        </div>

        {/* Giữ cả hai tab trong DOM để không mất bài làm khi chuyển tab */}
        <div className={tab === "study" ? "" : "hidden"}>
          <StudyView lesson={lesson} onStartPractice={openPractice} />
        </div>
        <div className={tab === "practice" ? "" : "hidden"}>
          <PracticeView lesson={lesson} startedAt={startedAt} onRestart={() => setStartedAt(Date.now())} />
        </div>
      </div>
    </main>
  );
}
