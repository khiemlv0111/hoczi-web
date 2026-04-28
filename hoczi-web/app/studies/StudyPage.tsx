'use client'

import Link from "next/link";

const SUBJECTS = [
  {
    key: "english",
    label: "English",
    description: "Vocabulary, grammar, reading & writing",
    emoji: "🇬🇧",
    gradient: "from-blue-500 to-indigo-600",
    hoverGradient: "hover:from-blue-400 hover:to-indigo-500",
    href: "/studies/english",
  },
  {
    key: "chinese",
    label: "Chinese",
    description: "Characters, pinyin, tones & conversation",
    emoji: "🇨🇳",
    gradient: "from-red-500 to-orange-500",
    hoverGradient: "hover:from-red-400 hover:to-orange-400",
    href: "/studies/chinese",
  },
  {
    key: "math",
    label: "Math",
    description: "Arithmetic, algebra, geometry & more",
    emoji: "📐",
    gradient: "from-emerald-500 to-teal-600",
    hoverGradient: "hover:from-emerald-400 hover:to-teal-500",
    href: "/studies/math",
  },
  {
    key: "science",
    label: "Science",
    description: "Physics, chemistry, biology & earth science",
    emoji: "🔬",
    gradient: "from-purple-500 to-pink-600",
    hoverGradient: "hover:from-purple-400 hover:to-pink-500",
    href: "/studies/science",
  },
];

export function StudyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, #3D0E5E 0%, #8B1A6A 40%, #C0382A 70%, #D4561C 100%)",
      }}
    >
      <h1 className="text-4xl font-semibold text-white mb-3 tracking-tight">
        What do you want to study?
      </h1>
      <p className="text-white/60 text-base mb-12">
        Pick a subject to get started
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
        {SUBJECTS.map((subject) => (
          <Link
            key={subject.key}
            href={subject.href}
            className={`bg-gradient-to-br ${subject.gradient} ${subject.hoverGradient} rounded-2xl p-6 flex flex-col gap-3 shadow-lg active:scale-95 transition-all duration-150 cursor-pointer`}
          >
            <span className="text-4xl">{subject.emoji}</span>
            <div>
              <h2 className="text-white font-semibold text-xl">{subject.label}</h2>
              <p className="text-white/70 text-sm mt-1">{subject.description}</p>
            </div>
            <div className="mt-auto pt-2">
              <span className="inline-block text-white/90 text-sm font-medium border border-white/30 rounded-lg px-3 py-1">
                Start studying →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
