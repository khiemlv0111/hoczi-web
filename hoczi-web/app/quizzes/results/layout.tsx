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
    BookPlus,
    User,
    Star,
    LogOut,
    X,
    ChevronDown,
    Loader2,
    ChessKing,
    Brain,
    Menu,
    Mail,
    CalendarCheck,
    Send,
    BookOpen,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { QuestionService } from "@/data/services/question.service";
import { t } from "@/messages/locale";





export default function ResultLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { handleStartQuiz, messages, user, handleGetQuestionList } = useAppData();

    // Quiz modal state
    const [modalOpen, setModalOpen] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);
    const [topics, setTopics] = useState<any[]>([]);
    const [grades, setGrades] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
    const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
    const [quizLoading, setQuizLoading] = useState(false);

    //   const { handleStartQuiz, getUserProfile, user, handleGetQuestionList, messages } = useAppData();


    const navMain = [
        { path: '/quizzes/results/dashboard', label: "Dashboard", icon: LayoutDashboard, text: "Dashboard" },
        { path: '/quizzes/results', label: "Quizzes", icon: Clock, text: "Quizzes" },
        { path: '/quizzes/results/students', label: "Students", icon: Users, text: t(messages, 'common.students') },
        { path: '/quizzes/results/teachers', label: "Teachers", icon: BookPlus, text: t(messages, 'common.teachers') },
        { path: '/quizzes/results/games', label: "Games", icon: ChessKing, text: "Games" },
        { path: '/quizzes/results/schedules', label: "Schedules", icon: CalendarCheck, text: "Schedules" },
        { path: '/quizzes/results/ai-learn', label: "AI Learn", icon: Brain, text: "AI Learn" },
        { path: '/quizzes/results/inbox', label: "Inbox", icon: Mail, text: "Inbox" },
    ];

    const navSettings = [
        { path: '/quizzes/results/teachers', label: "Account preferences", icon: Settings, text: t(messages, 'common.account_preferences') },
        { path: '/organization/tenants', label: "Company Management", icon: Monitor, text: t(messages, 'common.company_management') },
        // { path: '/studies', label: "Studies", icon: BookOpen, text: t(messages, 'common.studies') },
        { path: '/quizzes/results/user-guide', label: "User Guide", icon: FileText, text: t(messages, 'common.user_guide') },
        { path: '/quizzes/results/register-service', label: "Register Service", icon: Send, text: t(messages, 'common.register_service') },
    ];

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
        if (!user) {
            router.push(`/`)
        }

    }, [])



    const handleNavigate = (item: any) => {
        setSidebarOpen(false);
        if (item.label === 'Company Management') {
            if ((user as any)?.ownedTenant) {
                const tenantId = (user as any)?.ownedTenant?.id; // 
                router.push(`/organization/tenants/${tenantId}`);
                return;

            } else {
                return
            }


        }
        router.push(item.path);
    }

    const openQuizModal = () => {
        setSelectedCategory(null);
        setSelectedTopic(null);
        setSelectedGrade(null);
        setSelectedDifficulty('');
        setTopics([]);
        setModalOpen(true);
        QuestionService.getCategoryList().then(setCategories).catch(() => { });
        QuestionService.getGradeList().then(setGrades).catch(() => { });
    };

    const handleCategoryChange = (categoryId: number | null) => {
        setSelectedCategory(categoryId);
        setSelectedTopic(null);
        setTopics([]);
        if (categoryId) {
            QuestionService.getTopicList(categoryId).then(setTopics).catch(() => { });
        }
    };

    const handleStartQuizSubmit = async () => {
        setQuizLoading(true);
        try {
            await handleStartQuiz({
                categoryId: selectedCategory,
                topicId: selectedTopic,
                gradeId: selectedGrade,
            });
            await handleGetQuestionList({
                categoryId: selectedCategory,
                topicId: selectedTopic,
                gradeId: selectedGrade,
                difficulty: selectedDifficulty || null,
            });
            setModalOpen(false);
            router.push('/quizzes');
        } finally {
            setQuizLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans text-sm">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-30 w-56 bg-white border-r border-gray-200 flex flex-col py-2 transition-transform duration-200
                md:static md:translate-x-0 md:z-auto
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 px-4 pb-4 border-b border-gray-200 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-medium">
                        Te
                    </div>
                    <span className="font-medium text-gray-900">{user?.name}</span>
                </Link>

                {/* Main nav */}
                <div className="px-2 mb-2">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider px-2 mb-1">Main</p>
                    {navMain.filter(({ label }) => {
                        if (label === 'Students') return user?.role === 'user' || user?.role === 'student';
                        if (label === 'Teachers') return user?.role === 'teacher';
                        return true;
                    }).map(({ path, label, icon: Icon, text }) => {
                        const isActive = path === '/quizzes/results'
                            ? pathname === path
                            : pathname.startsWith(path);
                        return (
                            <>
                                {
                                    <button
                                        key={label}
                                        onClick={() => handleNavigate({ path, label, icon: Icon })}
                                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-[13px] transition-colors ${isActive
                                            ? "bg-blue-50 text-blue-700"
                                            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                            }`}
                                    >
                                        <Icon size={15} />
                                        {text}
                                    </button>
                                }

                            </>
                        );
                    })}
                </div>

                {/* Settings nav */}
                <div className="px-2 mt-3">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider px-2 mb-1">Settings</p>
                    {navSettings.map(({ path, label,text, icon: Icon }) => (
                        <button
                            key={label}
                            onClick={() => handleNavigate({ path, label, icon: Icon })}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-[13px] text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        >
                            <Icon size={15} />
                            {text}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden p-1.5 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            <Menu size={16} className="text-gray-500" />
                        </button>
                        <span className="font-medium text-gray-900 text-[15px]">User Dashboard</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={openQuizModal} className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-md text-[13px] hover:bg-gray-50 transition-colors">
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
                                    {user?.role === 'admin' && (
                                        <Link
                                            href="/admin"
                                            className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            <LayoutDashboard size={14} />
                                            Admin Panel
                                        </Link>
                                    )}

                                    {user?.role === 'teacher' && (
                                        <Link
                                            href="/quizzes/results/teachers"
                                            className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            {`👩‍🎓`}
                                            <span className="ml-1">Teacher cornor</span>
                                        </Link>

                                    )}

                                    <Link
                                        href="/quizzes/results/profile"
                                        className="w-full flex items-center gap-2 px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        <User size={16} />
                                        <span className="ml-1">Profile</span>
                                    </Link>
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

            {/* Quiz setup modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-[15px] font-semibold text-gray-900">Start a Quiz</h2>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="p-1 rounded hover:bg-gray-100 transition-colors"
                            >
                                <X size={16} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Category */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-600 mb-1">Category</label>
                                <div className="relative">
                                    <select
                                        value={selectedCategory ?? ''}
                                        onChange={e => handleCategoryChange(e.target.value ? Number(e.target.value) : null)}
                                        className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-800 bg-white pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Any category</option>
                                        {categories.map((c: any) => (
                                            <option key={c.id} value={c.id}>{c.name}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Topic — only shown once a category is chosen */}
                            {selectedCategory && (
                                <div>
                                    <label className="block text-[12px] font-medium text-gray-600 mb-1">Topic</label>
                                    <div className="relative">
                                        <select
                                            value={selectedTopic ?? ''}
                                            onChange={e => setSelectedTopic(e.target.value ? Number(e.target.value) : null)}
                                            className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-800 bg-white pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Any topic</option>
                                            {topics.map((t: any) => (
                                                <option key={t.id} value={t.id}>{t.name}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            )}

                            {/* Grade */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-600 mb-1">Grade</label>
                                <div className="relative">
                                    <select
                                        value={selectedGrade ?? ''}
                                        onChange={e => setSelectedGrade(e.target.value ? Number(e.target.value) : null)}
                                        className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-[13px] text-gray-800 bg-white pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Any grade</option>
                                        {grades.map((g: any) => (
                                            <option key={g.id} value={g.id}>{g.name}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Difficulty */}
                            <div>
                                <label className="block text-[12px] font-medium text-gray-600 mb-1">Difficulty</label>
                                <div className="flex gap-2">
                                    {['', 'easy', 'medium', 'hard'].map(level => (
                                        <button
                                            key={level}
                                            onClick={() => setSelectedDifficulty(level)}
                                            className={`flex-1 py-2 rounded-lg text-[12px] font-medium border transition-colors ${selectedDifficulty === level
                                                ? level === 'easy' ? 'bg-green-50 border-green-400 text-green-700'
                                                    : level === 'medium' ? 'bg-yellow-50 border-yellow-400 text-yellow-700'
                                                        : level === 'hard' ? 'bg-red-50 border-red-400 text-red-700'
                                                            : 'bg-blue-50 border-blue-400 text-blue-700'
                                                : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                                                }`}
                                        >
                                            {level === '' ? 'Any' : level.charAt(0).toUpperCase() + level.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="flex-1 py-2.5 rounded-lg border border-gray-200 text-[13px] text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleStartQuizSubmit}
                                disabled={quizLoading}
                                className="flex-1 py-2.5 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                {quizLoading && <Loader2 size={13} className="animate-spin" />}
                                {quizLoading ? 'Starting…' : 'Start Quiz'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
