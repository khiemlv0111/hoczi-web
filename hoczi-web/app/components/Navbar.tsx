'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAppData } from "../context/AppContext"

export const Navbar = () => {
    const { user } = useAppData()
    const pathname = usePathname()

    if (pathname.startsWith('/quizzes/results')) return null

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();

    }
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10">
                <ul className="flex items-center justify-between gap-6 px-6 py-4 max-w-2xl mx-auto">
                    <li>
                        <Link href="/" className="text-blue-500 text-white font-medium text-sm hover:opacity-75 transition-opacity">
                            Home
                        </Link>
                    </li>
                    {
                        user && <li className="flex gap-4">
                            <Link href="/quizzes/results" className="text-blue-500 text-white font-medium text-sm hover:opacity-75 transition-opacity">
                                Quiz Results
                            </Link>
                            <button onClick={handleLogout} className="text-white cursor-pointer font-medium text-sm hover:opacity-75 transition-opacity">
                                Logout
                            </button>
                        </li>

                    }

                </ul>
            </nav>

        </>
    )
}