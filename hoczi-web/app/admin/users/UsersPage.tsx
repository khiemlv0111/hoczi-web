'use client'

import { useAppData, User } from "@/app/context/AppContext";
import { CommonModal } from "@/app/components/modal/CommonModal";
import { PAGE_SIZE } from "@/data/config/constants";
import { UserService } from "@/data/services/user.service";
import Link from "next/link";
import { useEffect, useState } from "react"

const userRoles = [
    {value: 'admin', label: 'Admin'},
    {value: 'teacher', label: 'Teacher'},
    {value: 'user', label: 'User'},
    {value: 'author', label: 'Author'},
]

export function UsersPage() {
    const { handleGetUsers } = useAppData();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    const [editUser, setEditUser] = useState<User | null>(null);
    const [editForm, setEditForm] = useState({ name: '', role: '' });
    const [saving, setSaving] = useState(false);

    function fetchUsers(p: number) {
        setLoading(true);
        handleGetUsers({ page: p, limit: PAGE_SIZE })
            .then((res) => {
                setUsers(Array.isArray(res?.users) ? res.users : []);
                setTotal(res?.total ?? 0);
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    function openEditModal(u: User) {
        setEditUser(u);
        setEditForm({ name: u.name ?? '', role: u.role ?? 'user' });
    }

    function closeEditModal() {
        setEditUser(null);
    }

    async function handleEditSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!editUser) return;
        setSaving(true);
        try {
            await UserService.updateUser(editUser.id, { name: editForm.name, role: editForm.role });
            closeEditModal();
            fetchUsers(page);
        } catch {
            alert('Failed to update user.');
        } finally {
            setSaving(false);
        }
    }

    const handlePreviousPage = () => { if (page > 1) setPage(page - 1); };
    const handleNextPage = () => { if (page < totalPages) setPage(page + 1); };

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[13px] font-medium text-gray-900">User List</span>
                    </div>

                    {loading ? (
                        <div className="text-center py-8 text-sm text-gray-400">Loading...</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-100 text-left text-[12px] text-gray-500">
                                        <th className="pb-2 pr-4 font-medium">#</th>
                                        <th className="pb-2 pr-4 font-medium">Name</th>
                                        <th className="pb-2 pr-4 font-medium">Username</th>
                                        <th className="pb-2 pr-4 font-medium">Email</th>
                                        <th className="pb-2 pr-4 font-medium">Role</th>
                                        <th className="pb-2 font-medium text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {users.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="py-6 text-center text-gray-400 text-[12px]">
                                                No users found.
                                            </td>
                                        </tr>
                                    ) : (
                                        users.map((u, idx) => (
                                            <tr key={u.id ?? idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-2 pr-4 text-gray-400">{(page - 1) * PAGE_SIZE + idx + 1}</td>
                                                <td className="py-2 pr-4 font-medium text-gray-900 max-w-[160px] truncate">{u.name ?? '—'}</td>
                                                <td className="py-2 pr-4 text-gray-500 max-w-[120px] truncate">{u.username ?? '—'}</td>
                                                <td className="py-2 pr-4 text-gray-500 max-w-[200px] truncate">{u.email ?? '—'}</td>
                                                <td className="py-2 pr-4">
                                                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${u.role === 'admin'
                                                        ? 'bg-purple-50 text-purple-700'
                                                        : 'bg-green-50 text-green-700'
                                                        }`}>
                                                        {u.role ?? 'user'}
                                                    </span>
                                                </td>
                                                <td className="py-2 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <Link
                                                            href={`/admin/users/${u.id}`}
                                                            className="text-[11px] px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                                        >
                                                            View
                                                        </Link>
                                                        <button
                                                            onClick={() => openEditModal(u)}
                                                            className="text-[11px] px-3 py-1 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                        <span className="text-[12px] text-gray-400">
                            Page {page} of {totalPages} &middot; {total} total
                        </span>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={handlePreviousPage}
                                disabled={page <= 1}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                Previous
                            </button>
                            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                                const pageNum = totalPages <= 7
                                    ? i + 1
                                    : page <= 4
                                        ? i + 1
                                        : page >= totalPages - 3
                                            ? totalPages - 6 + i
                                            : page - 3 + i;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setPage(pageNum)}
                                        className={`w-7 h-7 text-[12px] rounded-md border transition-colors ${page === pageNum
                                            ? 'bg-blue-500 border-blue-500 text-white'
                                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                            <button
                                onClick={handleNextPage}
                                disabled={page >= totalPages}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <CommonModal open={!!editUser} onClose={closeEditModal} title="Edit User">
                <form onSubmit={handleEditSubmit} className="flex flex-col gap-3 mt-4">
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Full name"
                        />
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Role</label>
                        <select
                            value={editForm.role}
                            onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {
                                userRoles.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)
                            }
                            

                        </select>
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                        <button
                            type="button"
                            onClick={closeEditModal}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60"
                        >
                            {saving ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </CommonModal>
        </>
    )
}
