'use client'

import Link from "next/link";


export function StudyPage() {



  const SUBJECTS = [
    {
      id: 1,
      slug: "english",
      key: "english",
      label: "English Books",
      description: "Vocabulary, grammar, reading & writing",
      emoji: "🇬🇧",
      gradient: "from-blue-500 to-indigo-600",
      hoverGradient: "hover:from-blue-400 hover:to-indigo-500",
      href: "/studies/english",
    },
    {
      id: 2,
      slug: "chinese",
      key: "chinese",
      label: "Chinese Books",
      description: "Characters, pinyin, tones & conversation",
      emoji: "🇨🇳",
      gradient: "from-red-500 to-orange-500",
      hoverGradient: "hover:from-red-400 hover:to-orange-400",
      href: "/studies/chinese",
    },
    {
      id: 3,
      slug: "math",
      key: "math",
      label: "Textbooks",
      description: "Arithmetic, algebra, geometry & more",
      emoji: "📐",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-500",
      href: "/studies/math",
    },
    {
      id: 4,
      slug: "science",
      key: "science",
      label: "Workbooks",
      description: "Physics, chemistry, biology & earth science",
      emoji: "🔬",
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "hover:from-purple-400 hover:to-pink-500",
      href: "/studies/science",
    },
    {
      id: 5,
      slug: "reference-books",
      key: "reference-books",
      label: "Reference Books",
      description: "Comprehensive reference materials for all subjects",
      emoji: "📚",
      gradient: "from-amber-500 to-yellow-500",
      hoverGradient: "hover:from-amber-400 hover:to-yellow-400",
      href: "/studies/reference-books",
    },
    {
      id: 6,
      slug: "exam-preparation",
      key: "exam-preparation",
      label: "Exam Preparation",
      description: "Practice tests and study guides for various exams",
      emoji: "📝",
      gradient: "from-cyan-500 to-blue-500",
      hoverGradient: "hover:from-cyan-400 hover:to-blue-400",
      href: "/studies/exam-preparation",
    },
    {
      id: 7,
      slug: "science",
      key: "science",
      label: "Science",
      description: "Physics, chemistry, biology & earth science",
      emoji: "🔬",
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "hover:from-purple-400 hover:to-pink-500",
      href: "/studies/science",
    },
    {
      id: 8,
      slug: "mathematics",
      key: "mathematics",
      label: "Mathematics",
      description: "Arithmetic, algebra, geometry & more",
      emoji: "📐",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-500",
      href: "/studies/mathematics",
    },
    {
      id: 9,
      slug: "literature",
      key: "literature",
      label: "Literature",
      description: "Poetry, prose, drama & literary analysis",
      emoji: "📖",
      gradient: "from-rose-500 to-pink-500",
      hoverGradient: "hover:from-rose-400 hover:to-pink-400",
      href: "/studies/literature",
    },
    {
      id: 10,
      slug: "history",
      key: "history",
      label: "History",
      description: "World history, ancient civilizations & more",
      emoji: "🏛️",
      gradient: "from-amber-500 to-yellow-500",
      hoverGradient: "hover:from-amber-400 hover:to-yellow-400",
      href: "/studies/history",
    },
    {
      id: 11,
      slug: "geography",
      key: "geography",
      label: "Geography",
      description: "Physical, human & economic geography",
      emoji: "🌍",
      gradient: "from-green-500 to-teal-500",
      hoverGradient: "hover:from-green-400 hover:to-teal-400",
      href: "/studies/geography",
    },
    {
      id: 12,
      slug: "technology",
      key: "technology",
      label: "Technology",
      description: "Computer science, engineering & innovation",
      emoji: "💻",
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "hover:from-blue-400 hover:to-cyan-400",
      href: "/studies/technology",
    },
    {
      id: 13,
      slug: "programming",
      key: "programming",
      label: "Programming",
      description: "Learn to code with popular programming languages",
      emoji: "💻",
      gradient: "from-indigo-500 to-purple-500",
      hoverGradient: "hover:from-indigo-400 hover:to-purple-400",
      href: "/studies/programming",
    },
    {
      id: 14,
      slug: "business",
      key: "business",
      label: "Business",
      description: "Entrepreneurship, management & economics",
      emoji: "💼",
      gradient: "from-rose-500 to-pink-500",
      hoverGradient: "hover:from-rose-400 hover:to-pink-400",
      href: "/studies/business",
    },
    {
      id: 15,
      slug: "personal-development",
      key: "personal-development",
      label: "Personal Development",
      description: "Self-improvement, mindset & life skills",
      emoji: "🌱",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-400",
      href: "/studies/personal-development",
    },
    {
      id: 16,
      slug: "children-books",
      key: "children-books",
      label: "Children's Books",
      description: "Fiction and non-fiction books for young readers",
      emoji: "📚",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-400",
      href: "/studies/children-books",
    },
    {
      id: 17,
      slug: "comics",
      key: "comics",
      label: "Comics",
      description: "Graphic novels and comic books",
      emoji: "📚",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-400",
      href: "/studies/comics",
    },
    {
      id: 18,
      slug: "fiction",
      key: "fiction",
      label: "Fiction",
      description: "Novels, short stories and literary fiction",
      emoji: "📚",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-400",
      href: "/studies/fiction",
    },
    {
      id: 19,
      slug: "non-fiction",
      key: "non-fiction",
      label: "Non-Fiction",
      description: "Biographies, self-help and educational content",
      emoji: "📚",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-400",
      href: "/studies/non-fiction",
    },
    {
      id: 20,
      slug: "teacher-resources",
      key: "teacher-resources",
      label: "Teacher Resources",
      description: "Educational materials and teaching aids",
      emoji: "📚",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-400",
      href: "/studies/teacher-resources",
    },
    {
      id: 21,
      slug: "school-documents",
      key: "school-documents",
      label: "School Documents",
      description: "Educational resources and academic materials",
      emoji: "📚",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "hover:from-emerald-400 hover:to-teal-400",
      href: "/studies/school-documents",
    }
  ];


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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl">
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
