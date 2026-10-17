import Link from "next/link";
import type { LessonMeta } from "./types";

type Props = {
  title: string;
  /** vd. "/studies/chinese/hsk5" */
  basePath: string;
  lessons: LessonMeta[];
  volumes: { title: string; from: number; to: number }[];
};

// Danh sách bài của một cấp HSK, chia theo tập sách.
export function LessonListPage({ title, basePath, lessons, volumes }: Props) {
  const available = lessons.filter(l => l.lesson).length;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <Link href="/studies/chinese" className="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700">
          ← Tiếng Trung
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{title}</h1>
        <p className="mt-2 mb-10 text-gray-500">
          {lessons.length} bài học · {available} bài đã có nội dung. Mỗi bài gồm từ vựng, bài khóa, ngữ pháp và bài kiểm tra 100 điểm.
        </p>

        {volumes.map(vol => (
          <section key={vol.title} className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">{vol.title}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lessons.filter(l => l.no >= vol.from && l.no <= vol.to).map(({ no, slug, lesson }) =>
                lesson ? (
                  <Link key={no} href={`${basePath}/${slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md active:scale-[0.98]">
                    <div className="flex h-20 items-center justify-between bg-gradient-to-r from-red-500 to-orange-400 px-5 text-white">
                      <span className="text-sm font-semibold">Bài {no}</span>
                      <span className="text-2xl">第{no}课</span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 p-4">
                      <h3 className="text-xl text-gray-900">{lesson.zh}</h3>
                      <p className="text-sm text-gray-500">{lesson.vi}</p>
                      <div className="mt-auto flex items-center justify-between pt-3 text-xs text-gray-400">
                        <span>{lesson.vocab.length} từ · {lesson.practice.length} bài tập</span>
                        <span className="font-medium text-red-500 group-hover:underline">Vào học →</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div key={no} className="self-start flex items-center justify-between rounded-2xl border border-dashed border-gray-200 bg-white/60 px-5 py-4 text-gray-400">
                    <span className="font-medium">Bài {no} · 第{no}课</span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">Sắp ra mắt</span>
                  </div>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
