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
    Star
} from "lucide-react";
import { useRouter } from "next/navigation";

const navMain = [
    { path: '/', label: "Dashboard", icon: LayoutDashboard, active: true },
    { path: '/', label: "Blog Posts", icon: FileText },
    { path: '/', label: "Quizzes", icon: Clock },
    { path: '/quizzes/results', label: "Questions", icon: Star },
    { path: '/quizzes/results', label: "Students", icon: Users },
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
    const handleNavigate = (item: any) => {
        const { path, label, icon: Icon, active } = item;
        console.log(label);
        if (label == 'Quizzes') {
            router.push(`/admin/quizzes`)
        } else {
            router.push(`${path}`)
        }


    }
    return (
        <div className="flex min-h-screen bg-gray-100 font-sans text-sm">
            {/* Sidebar */}
            <aside className="w-56 min-w-[220px] bg-white border-r border-gray-200 flex flex-col py-2">
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
                    {navMain.map(({ path, label, icon: Icon, active }) => (
                        <button
                            key={label}
                            onClick={() => handleNavigate({ path, label, icon: Icon, active })}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-[13px] transition-colors ${active
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

                    {children}


                </main>
            </div>
        </div>
    );
}
