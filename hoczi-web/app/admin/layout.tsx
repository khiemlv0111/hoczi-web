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
    Star,
    LogOut
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useAppData } from "../context/AppContext";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { CommonModal } from "../components/modal/CommonModal";
import { CreateQuestionForm } from "./questions/CreateQuestionForm";

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
    { path: '/admin', label: "Dashboard", icon: LayoutDashboard, active: true },
    { path: '/admin/blogs', label: "Blog Posts", icon: FileText },
    { path: '/admin/quizzes', label: "Quizzes", icon: Clock },
    { path: '/admin/questions', label: "Questions", icon: Star },
    { path: '/admin/users', label: "Users", icon: Users },
];

const navSettings = [
    { label: "Account preferences", icon: Settings },
    { label: "Advertising data", icon: Monitor },
    { label: "Notifications", icon: Bell },
];

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname();
    const { user, getUserProfile } = useAppData();

    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getUserProfile().then((res) => {
            if(!res){
                router.push(`/`)
            }
            
        })
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();

    };

    useEffect(() => {
        // console.log('USERS', user)
        if (user) {

            if (user.role != 'admin') {
                router.push(`/`)
            }

        }

    }, [user])
    const handleNavigate = (item: any) => {
        const { path, label, icon: Icon, active } = item;
        console.log(label);

        router.push(`${path}`)

        // if (label == 'Quizzes') {
        //     router.push(`/admin/quizzes`)
        // } else {
        //     router.push(`${path}`)
        // }


    }
    return (
        <div className="flex h-screen bg-gray-100 font-sans text-sm">
            {/* Sidebar */}
            <aside className="w-56 min-w-[220px] bg-white border-r border-gray-200 flex flex-col py-2">
                {/* Logo */}
                <div className="flex items-center gap-2 px-4 pb-4 border-b border-gray-200 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-medium">
                        <Link href={`/`}>
                            Te
                        </Link>

                    </div>
                    <span className="font-medium text-gray-900">hoczi</span>
                </div>

                {/* Main nav */}
                <div className="px-2 mb-2">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider px-2 mb-1">Main</p>
                    {navMain.map(({ path, label, icon: Icon }) => {
                        const isActive = label === 'Quizzes'
                            ? pathname === '/admin/quizzes'
                            : pathname === path;
                        return (
                        <button
                            key={label}
                            onClick={() => handleNavigate({ path, label, icon: Icon })}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-[13px] transition-colors ${isActive
                                ? "bg-blue-50 text-blue-700"
                                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                        >
                            <Icon size={15} />
                            {label}
                        </button>
                        );
                    })}
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
                    <span className="font-medium text-gray-900 text-[15px]">Admin Dashboard</span>
                    <div className="flex items-center gap-3">
                        <button onClick={() => { setOpen(true) }} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md text-[13px] hover:bg-gray-50 transition-colors">
                            <Plus size={13} />
                            Create a question
                        </button>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                                <User size={15} className="text-gray-500" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-red-600 hover:bg-gray-50 transition-colors"
                                    >
                                        <LogOut size={14} />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 overflow-y-auto">

                    {children}

                </main>
            </div>

            <CommonModal open={open} onClose={() => { setOpen(v => !v) }}>
                <div>
                    {/* <h1>Common modal</h1> */}
                    <CreateQuestionForm onSuccess={(id) => { setOpen(false); router.push(`/admin/questions/${id}`); }} />
                </div>
            </CommonModal>
        </div>
    );
}
