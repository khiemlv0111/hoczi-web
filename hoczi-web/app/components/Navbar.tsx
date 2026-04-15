'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAppData } from "../context/AppContext"

export const Navbar = () => {
    const { user } = useAppData()
    const pathname = usePathname()


    const noLayoutPaths = ['/quizzes/results', '/admin', '/register'];
    if (noLayoutPaths.some(path => pathname.startsWith(path))) return null;

    let textColor = pathname.startsWith('/auth') ? 'text-gray-800' : 'text-white'



    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();

    }
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 ">
                <ul className="flex container mx-auto items-center justify-between gap-6 px-6 py-4">
                    <li>
                        <Link href="/" className={`text-blue-500 ${textColor} font-medium text-sm hover:opacity-75 transition-opacity`}>
                            Home
                        </Link>
                    </li>
                    {
                        user && <li className="flex gap-4 items-center">
                            <Link href="/quizzes/results" className={`${textColor} text-white font-medium text-sm hover:opacity-75 transition-opacity`}>
                                Quiz Results
                            </Link>
                            <p className={`${textColor}`}>Hi {user.name}</p>
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