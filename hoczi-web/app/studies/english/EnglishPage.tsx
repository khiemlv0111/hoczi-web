'use client'

import { useRouter } from "next/navigation";

const BOOKS = [
  {
    slug: "english-for-beginners",
    title: "English for Beginners",
    author: "Core English",
    level: "Beginner",
    cover: "📝",
    description: "Essential vocabulary and phrases to start communicating in English.",
    lessons: 14,
    color: "from-blue-500 to-indigo-500",
  },
  {
    slug: "everyday-grammar",
    title: "Everyday Grammar",
    author: "Grammar Guide",
    level: "Elementary",
    cover: "📚",
    description: "Tenses, articles, prepositions and common grammar rules explained simply.",
    lessons: 20,
    color: "from-indigo-500 to-purple-500",
  },
  {
    slug: "reading-comprehension",
    title: "Reading Comprehension",
    author: "Read & Understand",
    level: "Intermediate",
    cover: "👁️",
    description: "Short texts with exercises to sharpen your reading and inference skills.",
    lessons: 18,
    color: "from-sky-500 to-blue-400",
  },
  {
    slug: "writing-skills",
    title: "Writing Skills",
    author: "Write Well",
    level: "Intermediate",
    cover: "✍️",
    description: "Paragraphs, essays, emails — learn to write clearly and confidently.",
    lessons: 16,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "spoken-english",
    title: "Spoken English",
    author: "Speak Up",
    level: "Elementary",
    cover: "🎙️",
    description: "Pronunciation, intonation, and real-life conversation practice.",
    lessons: 12,
    color: "from-cyan-500 to-teal-400",
  },
  {
    slug: "advanced-vocabulary",
    title: "Advanced Vocabulary",
    author: "Word Power",
    level: "Advanced",
    cover: "🔠",
    description: "Idioms, collocations, and academic word lists for fluent expression.",
    lessons: 22,
    color: "from-blue-600 to-cyan-500",
  },
];

const LEVEL_BADGE: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Elementary: "bg-yellow-100 text-yellow-700",
  Intermediate: "bg-orange-100 text-orange-700",
  Advanced: "bg-red-100 text-red-700",
};

export function EnglishPage() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen px-6 py-14 flex flex-col items-center"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #3D0E5E 0%, #8B1A6A 40%, #C0382A 70%, #D4561C 100%)",
      }}
    >
      <div className="w-full max-w-5xl">
        <button
          onClick={() => router.back()}
          className="text-white/60 hover:text-white text-sm mb-8 flex items-center gap-1 transition-colors"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-semibold text-white mb-2 tracking-tight">
          🇬🇧 English
        </h1>
        <p className="text-white/60 text-base mb-10">
          {BOOKS.length} books available — choose one to start learning
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOOKS.map((book) => (
            <button
              key={book.slug}
              onClick={() => router.push(`/studies/english/${book.slug}`)}
              className="text-left bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden active:scale-95 transition-all duration-150 flex flex-col"
            >
              <div
                className={`bg-gradient-to-r ${book.color} h-24 flex items-center justify-center text-5xl`}
              >
                {book.cover}
              </div>

              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-white font-semibold text-base leading-snug">
                    {book.title}
                  </h2>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${LEVEL_BADGE[book.level] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {book.level}
                  </span>
                </div>

                <p className="text-white/55 text-sm leading-relaxed">
                  {book.description}
                </p>

                <div className="mt-auto pt-3 flex items-center justify-between text-white/40 text-xs">
                  <span>{book.author}</span>
                  <span>{book.lessons} lessons</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
