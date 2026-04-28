'use client'

import { useRouter } from "next/navigation";

const BOOKS = [
  {
    slug: "hsk1-vocabulary",
    title: "HSK 1 Vocabulary",
    author: "Standard Course",
    level: "Beginner",
    cover: "🈶",
    description: "Master 150 essential words for everyday conversation.",
    lessons: 12,
    color: "from-red-500 to-orange-400",
  },
  {
    slug: "hsk2-vocabulary",
    title: "HSK 2 Vocabulary",
    author: "Standard Course",
    level: "Elementary",
    cover: "🈚",
    description: "Expand to 300 words and basic sentence patterns.",
    lessons: 20,
    color: "from-orange-500 to-yellow-400",
  },
  {
    slug: "chinese-characters-101",
    title: "Chinese Characters 101",
    author: "Learn Chinese",
    level: "Beginner",
    cover: "字",
    description: "Stroke order, radicals, and the logic behind Chinese writing.",
    lessons: 16,
    color: "from-pink-500 to-rose-400",
  },
  {
    slug: "daily-conversations",
    title: "Daily Conversations",
    author: "Speak Chinese",
    level: "Intermediate",
    cover: "💬",
    description: "Practical phrases for shopping, travel, and social situations.",
    lessons: 24,
    color: "from-purple-500 to-indigo-500",
  },
  {
    slug: "pinyin-mastery",
    title: "Pinyin Mastery",
    author: "Phonetics Lab",
    level: "Beginner",
    cover: "🔤",
    description: "Tones, initials, finals — build a perfect pronunciation foundation.",
    lessons: 10,
    color: "from-teal-500 to-emerald-400",
  },
  {
    slug: "chinese-grammar",
    title: "Chinese Grammar",
    author: "Grammar Guide",
    level: "Intermediate",
    cover: "📖",
    description: "Sentence structures, particles, and grammar patterns explained clearly.",
    lessons: 18,
    color: "from-blue-500 to-cyan-400",
  },
];

const LEVEL_BADGE: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Elementary: "bg-yellow-100 text-yellow-700",
  Intermediate: "bg-orange-100 text-orange-700",
  Advanced: "bg-red-100 text-red-700",
};

export function ChinesePage() {
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
        🇨🇳 Chinese
      </h1>
      <p className="text-white/60 text-base mb-10">
        {BOOKS.length} books available — choose one to start learning
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BOOKS.map((book) => (
          <button
            key={book.slug}
            onClick={() => router.push(`/studies/chinese/${book.slug}`)}
            className="text-left bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden active:scale-95 transition-all duration-150 flex flex-col"
          >
            {/* Cover strip */}
            <div
              className={`bg-gradient-to-r ${book.color} h-24 flex items-center justify-center text-5xl`}
            >
              {book.cover}
            </div>

            {/* Body */}
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
