'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAppData } from "../context/AppContext"
import vi from '@/messages/vi.json';
import en from '@/messages/en.json';
import { getMessages, t } from "@/messages/locale";
import { getLocaleFromCookie, setLocaleCookie } from "@/data/lib/cookie";
import { useEffect } from "react";
// import { cookies } from 'next/headers';
// const messages = { vi, en };

export const Navbar = () => {

    useEffect(() => {
        handleSetMessages();
    }, [])

    const { user, messages, handleSetMessages } = useAppData()
    const pathname = usePathname()

    const noLayoutPaths = ['/quizzes/results', '/admin', '/register'];
    if (noLayoutPaths.some(path => pathname.startsWith(path))) return null;

    let textColor = pathname.startsWith('/auth') ? 'text-gray-800' : 'text-white'



    const handleLogout = () => {

        localStorage.clear();
        window.location.reload();

    }

    const handleChangeLocale = (lang: string) => {

        const currentLocale = getLocaleFromCookie();
        if (lang != currentLocale) {
            setLocaleCookie(`${lang}`);
            window.location.reload();

        }

    }
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 ">
                <ul className="flex container mx-auto items-center justify-between gap-6 px-6 py-4">
                    <li>
                        <Link href="/" className={`text-blue-500 ${textColor} font-medium text-sm hover:opacity-75 transition-opacity`}>
                            {t(messages, 'common.home')}
                        </Link>
                    </li>
                    <li className="flex items-center gap-4">
                        {user && <>
                            <Link href="/quizzes/results" className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium hover:bg-white/25 transition-colors">
                                {user.name}
                            </Link>
                            <button onClick={handleLogout} className="text-white cursor-pointer font-medium text-sm hover:opacity-75 transition-opacity">
                                {t(messages, 'common.logout')}
                            </button>
                        </>}
                        <div className="flex items-center rounded-full border border-white/20 overflow-hidden">
                            <button
                                onClick={() => handleChangeLocale('en')}
                                className={`px-3 py-1 text-xs font-semibold ${textColor} hover:bg-white/20 transition-colors cursor-pointer`}
                            >
                                EN
                            </button>
                            <span className="w-px h-4 bg-white/20" />
                            <button
                                onClick={() => handleChangeLocale('vi')}
                                className={`px-3 py-1 text-xs font-semibold ${textColor} hover:bg-white/20 transition-colors cursor-pointer`}
                            >
                                VI
                            </button>
                        </div>
                    </li>

                </ul>
            </nav>

        </>
    )
}