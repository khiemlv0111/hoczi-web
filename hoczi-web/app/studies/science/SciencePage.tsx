'use client'

import { useRouter } from "next/navigation";

const BOOKS = [
  {
    slug: "intro-to-physics",
    title: "Intro to Physics",
    author: "Physics Lab",
    level: "Beginner",
    cover: "⚡",
    description: "Forces, motion, energy, and the fundamental laws of the physical world.",
    lessons: 16,
    color: "from-purple-500 to-indigo-500",
  },
  {
    slug: "chemistry-basics",
    title: "Chemistry Basics",
    author: "Chem Lab",
    level: "Beginner",
    cover: "⚗️",
    description: "Atoms, elements, compounds, and simple chemical reactions.",
    lessons: 18,
    color: "from-pink-500 to-rose-500",
  },
  {
    slug: "human-biology",
    title: "Human Biology",
    author: "Life Science",
    level: "Elementary",
    cover: "🫀",
    description: "Body systems, cells, organs, and how life sustains itself.",
    lessons: 20,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    slug: "earth-and-space",
    title: "Earth & Space",
    author: "Cosmos Guide",
    level: "Elementary",
    cover: "🌍",
    description: "Geology, weather, the solar system, and the universe beyond.",
    lessons: 14,
    color: "from-violet-600 to-purple-400",
  },
  {
    slug: "ecology-and-environment",
    title: "Ecology & Environment",
    author: "Green Science",
    level: "Intermediate",
    cover: "🌱",
    description: "Ecosystems, food chains, climate, and environmental sustainability.",
    lessons: 15,
    color: "from-purple-600 to-fuchsia-400",
  },
  {
    slug: "advanced-chemistry",
    title: "Advanced Chemistry",
    author: "Chem Pro",
    level: "Advanced",
    cover: "🧪",
    description: "Organic chemistry, thermodynamics, and electrochemistry in depth.",
    lessons: 22,
    color: "from-rose-600 to-purple-500",
  },
];

const LEVEL_BADGE: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Elementary: "bg-yellow-100 text-yellow-700",
  Intermediate: "bg-orange-100 text-orange-700",
  Advanced: "bg-red-100 text-red-700",
};

export function SciencePage() {
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
          🔬 Science
        </h1>
        <p className="text-white/60 text-base mb-10">
          {BOOKS.length} books available — choose one to start learning
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOOKS.map((book) => (
            <button
              key={book.slug}
              onClick={() => router.push(`/studies/science/${book.slug}`)}
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
