'use client'
// hoczi.com - Admin Dashboard
// Stack: Next.js + Tailwind CSS + Lucide React

import {
  LayoutDashboard,
  FileText,
  Clock,
  Users,
  Monitor,
  Bell,
  Settings,
  Plus,
  TrendingUp,
  TrendingDown,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

const posts = [
  { title: "Introduction to JavaScript", date: "Apr 10, 2026", status: "published" },
  { title: "CSS Grid vs Flexbox", date: "Apr 8, 2026", status: "published" },
  { title: "React Hooks deep dive", date: "Apr 6, 2026", status: "draft" },
  { title: "TypeScript for beginners", date: "Apr 4, 2026", status: "draft" },
];

const quizzes = [
  { name: "JS Fundamentals", attempts: 320, score: 81 },
  { name: "CSS Basics", attempts: 214, score: 76 },
  { name: "React Essentials", attempts: 189, score: 69 },
  { name: "TypeScript Intro", attempts: 97, score: 63 },
];

const stats = [
  { label: "Total Posts", value: "48", delta: "+4 this week", positive: true },
  { label: "Active Quizzes", value: "12", delta: "+2 this week", positive: true },
  { label: "Students", value: "1,204", delta: "+87 this week", positive: true },
  { label: "Avg. Quiz Score", value: "73%", delta: "-2% vs last week", positive: false },
];



export default function Dashboard() {
  const router = useRouter();
  const handleNavigate = (item: any) => {
    const { label, icon: Icon, active } = item;
    console.log(label);
    if (label == 'Quizzes') {
      router.push(`/admin/quizzes`)
    }


  }
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans text-sm">

      <>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {stats.map(({ label, value, delta, positive }) => (
              <div
                key={label}
                className="bg-white border border-gray-200 rounded-xl p-4"
              >
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-2xl font-medium text-gray-900">{value}</p>
                <div className={`flex items-center gap-1 mt-1 text-xs ${positive ? "text-green-600" : "text-red-500"}`}>
                  {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {delta}
                </div>
              </div>
            ))}
          </div>

          {/* Two-col row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Blog Posts */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-medium text-gray-900">Recent blog posts</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  Admin Post List
                </span>
              </div>
              <div className="divide-y divide-gray-100">
                {posts.map(({ title, date, status }) => (
                  <div key={title} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-[13px] text-gray-900">{title}</p>
                      <p className="text-[11px] text-gray-400">{date}</p>
                    </div>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full ${status === "published"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-500"
                        }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quizzes */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-medium text-gray-900">Top quizzes</span>
              </div>
              <div className="divide-y divide-gray-100">
                {quizzes.map(({ name, attempts, score }) => (
                  <div key={name} className="flex items-center gap-3 py-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Clock size={14} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] text-gray-900">{name}</p>
                      <p className="text-[11px] text-gray-400">{attempts} attempts</p>
                    </div>
                    <span className="text-[13px] font-medium text-gray-900">{score}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </>
    </div>
  );
}
