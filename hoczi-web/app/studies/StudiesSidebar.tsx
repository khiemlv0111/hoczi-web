'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
    {
        heading: "Học ngoại ngữ",
        items: [
            { label: "🇬🇧 English", href: "/studies/english" },
            { label: "🇨🇳 Chinese", href: "/studies/chinese" },
        ],
    },
    {
        heading: "Môn học",
        items: [
            { label: "📐 Toán học", href: "/studies/mathematics" },
            { label: "🔬 Khoa học", href: "/studies/science" },
            { label: "⚗️ Hoá học", href: "/studies/chemistry" },
            { label: "📖 Văn học", href: "/studies/literature" },
            { label: "🏛️ Lịch sử", href: "/studies/history" },
            { label: "💻 Công nghệ", href: "/studies/technology" },
        ],
    },
    {
        heading: "Tài liệu",
        items: [
            { label: "📚 Sách giáo khoa", href: "/studies/math" },
            { label: "📝 Đề thi", href: "/studies/exam-preparation" },
            { label: "📋 Tài liệu tham khảo", href: "/studies/reference-books" },
        ],
    },
];

export function StudiesSidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:block w-56 flex-shrink-0 bg-white border-r border-gray-200 h-[calc(100vh-3.5rem)] sticky top-[60px] self-start overflow-y-auto">
            <div className="px-4 py-5">
                <Link href="/studies" className="block text-base font-bold text-gray-900 mb-5 hover:text-blue-600 transition-colors">
                    Chuyên mục
                </Link>

                <div className="space-y-5">
                    {NAV.map(section => (
                        <div key={section.heading}>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 px-2">
                                {section.heading}
                            </p>
                            <ul className="space-y-0.5">
                                {section.items.map(item => {
                                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={`block px-2 py-1.5 rounded-lg text-sm transition-colors ${
                                                    isActive
                                                        ? 'bg-blue-50 text-blue-700 font-medium'
                                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
