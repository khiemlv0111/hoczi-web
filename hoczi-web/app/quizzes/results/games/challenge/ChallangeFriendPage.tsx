'use client'

import { useAppData, User } from "@/app/context/AppContext"
import { useEffect, useState } from "react"
import { User as UserIcon, Swords } from "lucide-react"

export function ChallangeFriendPage() {
    const { handleGetUsers, user: currentUser } = useAppData()
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleGetUsers({ page: 1, limit: 999 }).then((res) => {
            setUsers(res?.users ?? [])
        }).finally(() => setLoading(false))
    }, [])

    const others = users.filter(u => u.id !== currentUser?.id)

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <div className="mb-6">
                <h2 className="text-[15px] font-semibold text-gray-900">Challenge a Friend</h2>
                <p className="text-[12px] text-gray-400 mt-0.5">Pick someone to challenge</p>
            </div>

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 animate-pulse">
                            <div className="w-12 h-12 rounded-full bg-gray-100 mx-auto mb-3" />
                            <div className="h-3 bg-gray-100 rounded w-3/4 mx-auto mb-2" />
                            <div className="h-2.5 bg-gray-100 rounded w-1/2 mx-auto mb-4" />
                            <div className="h-7 bg-gray-100 rounded-lg" />
                        </div>
                    ))}
                </div>
            ) : others.length === 0 ? (
                <div className="text-center py-16 text-gray-400 text-[13px]">No other users found</div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {others.map(u => (
                        <div
                            key={u.id}
                            className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center text-center hover:border-blue-300 hover:shadow-sm transition-all"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                                <UserIcon size={20} className="text-blue-400" />
                            </div>
                            <p className="text-[13px] font-medium text-gray-900 truncate w-full">{u.name}</p>
                            <p className="text-[11px] text-gray-400 truncate w-full mb-1">{u.email}</p>
                            {u.role && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 mb-3">
                                    {u.role}
                                </span>
                            )}
                            <button className="mt-auto w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-blue-600 text-white text-[12px] font-medium hover:bg-blue-500 transition-colors">
                                <Swords size={12} />
                                Challenge
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
