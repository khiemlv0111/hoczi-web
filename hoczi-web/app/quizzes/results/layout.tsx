'use client'
import { useAppData } from "@/app/context/AppContext";
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
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const navMain = [
    { path: '/quizzes/results/dashboard', label: "Dashboard", icon: LayoutDashboard },
    { path: '/quizzes/results', label: "Quizzes", icon: Clock },
    { path: '/quizzes/results/students', label: "Students", icon: Users },
];

const navSettings = [
    { label: "Account preferences", icon: Settings },
    { label: "Advertising data", icon: Monitor },
    { label: "Notifications", icon: Bell },
];

export default function ResultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { handleStartQuiz, getUserProfile, user, handleGetQuestionList } = useAppData();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if(!user){
            router.push(`/`)
        }

    },[])



    const handleNavigate = (item: any) => {
        router.push(item.path);
    }

    const handleNewQuiz = () => {
        // start do quiz
        handleStartQuiz().then((res) => {
            const payload = {
                categoryId: null,
                gradeId: null,
                topicId: null,
                difficulty: null,
            }

            // get question list, set to global state
            handleGetQuestionList(payload).then((res) => {
                router.push(`/quizzes`)

            })

        })

    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
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
                        const isActive = path === '/quizzes/results'
                            ? pathname === path
                            : pathname.startsWith(path);
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
                    <span className="font-medium text-gray-900 text-[15px]">User Dashboard</span>
                    <div className="flex items-center gap-3">
                        <button onClick={() => handleNewQuiz()} className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md text-[13px] hover:bg-gray-50 transition-colors">
                            <Plus size={13} />
                            Do a Quiz
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
        </div>
    );
}
