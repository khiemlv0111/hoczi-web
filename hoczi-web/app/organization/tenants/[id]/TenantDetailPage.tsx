'use client'

import { Tenant, TenantMember, TenantService } from "@/data/services/tenant.service";
import { UserService } from "@/data/services/user.service";
import { useEffect, useState } from "react"
import Link from "next/link";

type UserOption = { id: number; name: string; email: string; username?: string };

function AddMemberModal({ tenantId, onClose, onAdded }: { tenantId: number; onClose: () => void; onAdded: () => void }) {
    const [users, setUsers] = useState<UserOption[]>([]);
    const [search, setSearch] = useState('');
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [role, setRole] = useState('student');
    const [submitting, setSubmitting] = useState(false);
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearching(true);
            UserService.getTenantUsers({ page: 1, limit: 50, keyword: search || undefined })
                .then((data) => {
                    const list = Array.isArray(data) ? data : (data?.users ?? data?.data ?? data?.items ?? []);
                    setUsers(list);
                })
                .finally(() => setSearching(false));
        }, 300);
        return () => clearTimeout(timer);
    }, [search]);

    async function handleSubmit() {
        if (!selectedUserId) { setError('Please select a user.'); return; }
        setSubmitting(true);
        setError('');
        try {
            await TenantService.addUserToTenant(tenantId, selectedUserId, role);
            onAdded();
            onClose();
        } catch {
            setError('Failed to add member. Please try again.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[14px] font-semibold text-gray-900">Add Member</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg leading-none">&times;</button>
                </div>

                <div className="mb-3">
                    <label className="text-[12px] text-gray-500 mb-1 block">Search user</label>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Name, email or username..."
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div className="border border-gray-100 rounded-lg max-h-48 overflow-y-auto mb-3">
                    {searching ? (
                        <div className="py-4 text-center text-[12px] text-gray-400">Searching...</div>
                    ) : users.length === 0 ? (
                        <div className="py-4 text-center text-[12px] text-gray-400">No users found.</div>
                    ) : (
                        users.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => setSelectedUserId(u.id)}
                                className={`w-full text-left px-3 py-2 text-[12px] flex items-center gap-2 hover:bg-gray-50 transition-colors ${selectedUserId === u.id ? 'bg-blue-50' : ''}`}
                            >
                                <span className={`w-2 h-2 rounded-full shrink-0 ${selectedUserId === u.id ? 'bg-blue-500' : 'bg-gray-200'}`} />
                                <span className="font-medium text-gray-800">{u.name}</span>
                                <span className="text-gray-400">{u.email}</span>
                            </button>
                        ))
                    )}
                </div>

                <div className="mb-4">
                    <label className="text-[12px] text-gray-500 mb-1 block">Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-100"
                    >
                        {/* <option value="owner">Owner</option> */}
                        {/* <option value="admin">Admin</option> */}
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                        <option value="user">User</option>
                    </select>
                </div>

                {error && <p className="text-[12px] text-red-500 mb-3">{error}</p>}

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 text-[12px] text-gray-600 hover:text-gray-800">Cancel</button>
                    <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="px-4 py-2 text-[12px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                        {submitting ? 'Adding...' : 'Add Member'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export function TenantDetailPage({ id }: { id: number }) {
    const [tenant, setTenant] = useState<Tenant | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [removingUserId, setRemovingUserId] = useState<number | null>(null);
    const [confirmRemoveId, setConfirmRemoveId] = useState<number | null>(null);

    console.log('TENANT', tenant);
    

    async function handleRemoveMember(userId: number) {
        console.log('USER ID', userId);
        
        setRemovingUserId(userId);
        try {
            await TenantService.removeUserFromTenant(userId);
            loadTenant();
        } finally {
            setRemovingUserId(null);
            setConfirmRemoveId(null);
        }
    }

    function loadTenant() {
        setLoading(true);
        TenantService.getTenantDetail(id)
            .then((res) => setTenant(res?.data ?? res))
            .finally(() => setLoading(false));
    }

    useEffect(() => { loadTenant(); }, [id]);

    if (loading) {
        return <div className="text-center py-12 text-sm text-gray-400">Loading...</div>;
    }

    if (!tenant) {
        return <div className="text-center py-12 text-sm text-gray-400">Tenant not found.</div>;
    }

    const users: TenantMember[] = Array.isArray(tenant.users)
        ? tenant.users
        : Array.isArray(tenant.users)
        ? tenant.users
        : [];

    return (
        <div className="grid grid-cols-1 gap-4">
            {/* Back */}
            <div>
                <Link href="/admin/tenants" className="text-[12px] text-blue-600 hover:underline">
                    &larr; Back to Tenants
                </Link>
            </div>

            {/* Tenant Info Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        {tenant.logo_url && (
                            <img src={tenant.logo_url} alt="logo" className="w-10 h-10 rounded-lg object-cover border border-gray-100" />
                        )}
                        <div>
                            <h2 className="text-[15px] font-semibold text-gray-900">{tenant.name}</h2>
                            <span className="text-[12px] text-gray-400">{tenant.code}</span>
                        </div>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${tenant.status === 'active'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'}`}>
                        {tenant.status ?? 'active'}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[12px]">
                    <div className="flex gap-2">
                        <span className="text-gray-400 w-24 shrink-0">Domain</span>
                        <span className="text-gray-700">{tenant.domain ?? '—'}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-gray-400 w-24 shrink-0">Plan</span>
                        <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[11px]">
                            {tenant.plan_type ?? 'free'}
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-gray-400 w-24 shrink-0">Max Users</span>
                        <span className="text-gray-700">{tenant.max_users ?? '—'}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-gray-400 w-24 shrink-0">Created</span>
                        <span className="text-gray-700">
                            {tenant.created_at ? new Date(tenant.created_at).toLocaleDateString() : '—'}
                        </span>
                    </div>
                    {tenant.description && (
                        <div className="flex gap-2 col-span-2">
                            <span className="text-gray-400 w-24 shrink-0">Description</span>
                            <span className="text-gray-700">{tenant.description}</span>
                        </div>
                    )}
                </div>
            </div>

            {showAddModal && (
                <AddMemberModal
                    tenantId={id}
                    onClose={() => setShowAddModal(false)}
                    onAdded={loadTenant}
                />
            )}

            {confirmRemoveId !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6">
                        <h3 className="text-[14px] font-semibold text-gray-900 mb-2">Remove Member</h3>
                        <p className="text-[12px] text-gray-500 mb-5">
                            Are you sure you want to remove this member from the tenant? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setConfirmRemoveId(null)}
                                className="px-4 py-2 text-[12px] text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleRemoveMember(confirmRemoveId)}
                                disabled={removingUserId === confirmRemoveId}
                                className="px-4 py-2 text-[12px] bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
                            >
                                {removingUserId === confirmRemoveId ? 'Removing...' : 'Remove'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Users Table */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium text-gray-900">
                        Members <span className="text-gray-400 font-normal">({users.length})</span>
                    </span>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="text-[12px] px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        + Add Member
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-left text-[12px] text-gray-500">
                                <th className="pb-2 pr-4 font-medium">#</th>
                                <th className="pb-2 pr-4 font-medium">Name</th>
                                <th className="pb-2 pr-4 font-medium">Email</th>
                                <th className="pb-2 pr-4 font-medium">Username</th>
                                <th className="pb-2 pr-4 font-medium">Role</th>
                                <th className="pb-2 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-6 text-center text-gray-400 text-[12px]">
                                        No members found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((m, idx) => {
                                    const user = m.user ?? (m as any);
                                    return (
                                        <tr key={m.id ?? idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="py-2 pr-4 text-gray-400 text-[12px]">{idx + 1}</td>
                                            <td className="py-2 pr-4 font-medium text-gray-900 text-[12px]">
                                                {user.name ?? `User #${m.user_id}`}
                                            </td>
                                            <td className="py-2 pr-4 text-gray-500 text-[12px]">{user.email ?? '—'}</td>
                                            <td className="py-2 pr-4 text-gray-400 text-[12px]">{user.username ?? '—'}</td>
                                            <td className="py-2 pr-4 text-[12px]">
                                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                                                    {m.role ?? 'member'}{tenant.owner_user_id === user.id && '- owner'}
                                                </span>
                                            </td>
                                            <td className="py-2 text-right">
                                                <button
                                                    onClick={() => setConfirmRemoveId(user.id)}
                                                    disabled={removingUserId === m.user_id}
                                                    className="text-[11px] px-2 py-0.5 rounded text-red-500 hover:bg-red-50 transition-colors disabled:opacity-40"
                                                >
                                                    {removingUserId === m.user_id ? 'Removing...' : 'Remove'}
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}