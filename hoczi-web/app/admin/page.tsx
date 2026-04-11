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

const navMain = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Blog Posts", icon: FileText },
  { label: "Quizzes", icon: Clock },
  { label: "Students", icon: Users },
];

const navSettings = [
  { label: "Account preferences", icon: Settings },
  { label: "Advertising data", icon: Monitor },
  { label: "Notifications", icon: Bell },
];

export default function Dashboard() {
    const router = useRouter();
    const handleNavigate = (item: any) => {
        const {label, icon: Icon, active} = item;
        console.log(label);
        if(label == 'Quizzes' ) {
router.push(`/admin/quizzes`)
        }
        
        
    }
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans text-sm">
      {/* Sidebar */}
      <aside className="w-56 min-w-[220px] bg-white border-r border-gray-200 flex flex-col py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 pb-4 border-b border-gray-200 mb-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-medium">
            Te
          </div>
          <span className="font-medium text-gray-900">hoczi</span>
        </div>

        {/* Main nav */}
        <div className="px-2 mb-2">
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-2 mb-1">Main</p>
          {navMain.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              onClick={() => handleNavigate({label, icon: Icon, active})}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-[13px] transition-colors ${
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Settings nav */}
        <div className="px-2 mt-3">
          <p className="text-[11px] text-gray-400 uppercase tracking-wider px-2 mb-1">Settings</p>
          {navSettings.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-[13px] text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <span className="font-medium text-gray-900 text-[15px]">Dashboard</span>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md text-[13px] hover:bg-gray-50 transition-colors">
              <Plus size={13} />
              Create Blog Post
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
              <User size={15} className="text-gray-500" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-6">
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
          <div className="grid grid-cols-2 gap-4">
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
                      className={`text-[11px] px-2 py-0.5 rounded-full ${
                        status === "published"
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
      </div>
    </div>
  );
}
