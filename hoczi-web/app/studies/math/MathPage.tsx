'use client'

import { useRouter } from "next/navigation";

const BOOKS = [
  {
    slug: "arithmetic-basics",
    title: "Arithmetic Basics",
    author: "Number Lab",
    level: "Beginner",
    cover: "➕",
    description: "Addition, subtraction, multiplication and division from the ground up.",
    lessons: 14,
    color: "from-emerald-500 to-teal-500",
  },
  {
    slug: "fractions-and-decimals",
    title: "Fractions & Decimals",
    author: "Number Lab",
    level: "Elementary",
    cover: "½",
    description: "Master fractions, decimals, and percentages with step-by-step exercises.",
    lessons: 16,
    color: "from-teal-500 to-cyan-500",
  },
  {
    slug: "intro-to-algebra",
    title: "Intro to Algebra",
    author: "Algebra Now",
    level: "Intermediate",
    cover: "𝑥",
    description: "Variables, equations, and inequalities — the language of mathematics.",
    lessons: 20,
    color: "from-green-500 to-emerald-400",
  },
  {
    slug: "geometry-fundamentals",
    title: "Geometry Fundamentals",
    author: "Shape & Space",
    level: "Intermediate",
    cover: "📐",
    description: "Lines, angles, triangles, circles, and area calculations.",
    lessons: 18,
    color: "from-lime-500 to-green-500",
  },
  {
    slug: "statistics-and-probability",
    title: "Statistics & Probability",
    author: "Data Minds",
    level: "Intermediate",
    cover: "📊",
    description: "Mean, median, mode, charts, and the basics of probability.",
    lessons: 15,
    color: "from-cyan-600 to-teal-400",
  },
  {
    slug: "advanced-calculus",
    title: "Advanced Calculus",
    author: "Calc Masters",
    level: "Advanced",
    cover: "∫",
    description: "Limits, derivatives, and integrals for confident problem solving.",
    lessons: 24,
    color: "from-emerald-600 to-lime-500",
  },
];

const LEVEL_BADGE: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Elementary: "bg-yellow-100 text-yellow-700",
  Intermediate: "bg-orange-100 text-orange-700",
  Advanced: "bg-red-100 text-red-700",
};

export function MathPage() {
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
          📐 Math
        </h1>
        <p className="text-white/60 text-base mb-10">
          {BOOKS.length} books available — choose one to start learning
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOOKS.map((book) => (
            <button
              key={book.slug}
              onClick={() => router.push(`/studies/math/${book.slug}`)}
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
