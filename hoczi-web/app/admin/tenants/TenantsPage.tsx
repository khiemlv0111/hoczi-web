'use client'

import { useAppData, User } from "@/app/context/AppContext";
import { CommonModal } from "@/app/components/modal/CommonModal";
import { PAGE_SIZE } from "@/data/config/constants";
import { Tenant, TenantMember, TenantService } from "@/data/services/tenant.service";
import { useEffect, useState } from "react";
import Link from "next/link";

const PLAN_TYPES = ['free', 'basic', 'pro', 'enterprise'];

type CreateForm = {
    name: string;
    code: string;
    description: string;
    domain: string;
    logo_url: string;
    owner_user_id: string;
    plan_type: string;
    max_users: string;
};

const emptyCreate: CreateForm = {
    name: '', code: '', description: '', domain: '',
    logo_url: '', owner_user_id: '', plan_type: 'free', max_users: '',
};

export function TenantsPage() {
    const { handleGetUsers } = useAppData();

    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    const [showCreate, setShowCreate] = useState(false);
    const [createForm, setCreateForm] = useState<CreateForm>(emptyCreate);
    const [creating, setCreating] = useState(false);

    const [editTenant, setEditTenant] = useState<Tenant | null>(null);
    const [editForm, setEditForm] = useState<CreateForm & { status: string }>(
        { ...emptyCreate, status: 'active' }
    );
    const [saving, setSaving] = useState(false);

    const [formUsers, setFormUsers] = useState<User[]>([]);
    const [formUsersLoading, setFormUsersLoading] = useState(false);

    const [addUserTenant, setAddUserTenant] = useState<Tenant | null>(null);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [usersLoading, setUsersLoading] = useState(false);
    const [members, setMembers] = useState<TenantMember[]>([]);
    const [membersLoading, setMembersLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | ''>('');
    const [memberRole, setMemberRole] = useState('member');
    const [addingUser, setAddingUser] = useState(false);
    const [removingUserId, setRemovingUserId] = useState<number | null>(null);

    function fetchTenants(p: number) {
        setLoading(true);
        TenantService.getTenants(p, PAGE_SIZE)
            .then((res) => {
                setTenants(Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : []);
                setTotal(res?.total ?? 0);
            })
            .catch(() => { })
            .finally(() => setLoading(false));
    }

    useEffect(() => { fetchTenants(page); }, [page]);

    function loadFormUsers() {
        if (formUsers.length > 0) return;
        setFormUsersLoading(true);
        handleGetUsers({ page: 1, limit: 500 })
            .then((res) => setFormUsers(Array.isArray(res?.users) ? res.users : []))
            .catch(() => { })
            .finally(() => setFormUsersLoading(false));
    }

    function setCreate(field: keyof CreateForm, value: string) {
        setCreateForm((f) => ({ ...f, [field]: value }));
    }

    function setEdit(field: keyof typeof editForm, value: string) {
        setEditForm((f) => ({ ...f, [field]: value }));
    }

    async function handleCreate(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setCreating(true);
        try {
            await TenantService.createTenant({
                name: createForm.name,
                code: createForm.code,
                description: createForm.description || undefined,
                domain: createForm.domain || undefined,
                logo_url: createForm.logo_url || undefined,
                owner_user_id: createForm.owner_user_id ? Number(createForm.owner_user_id) : undefined,
                plan_type: createForm.plan_type || undefined,
                max_users: createForm.max_users ? Number(createForm.max_users) : undefined,
            });
            setShowCreate(false);
            setCreateForm(emptyCreate);
            fetchTenants(page);
        } catch {
            alert('Failed to create tenant.');
        } finally {
            setCreating(false);
        }
    }

    function openEditModal(t: Tenant) {
        loadFormUsers();
        setEditTenant(t);
        setEditForm({
            name: t.name,
            code: t.code,
            description: t.description ?? '',
            domain: t.domain ?? '',
            logo_url: t.logo_url ?? '',
            owner_user_id: t.owner_user_id ? String(t.owner_user_id) : '',
            plan_type: t.plan_type ?? 'free',
            max_users: t.max_users ? String(t.max_users) : '',
            status: t.status ?? 'active',
        });
    }

    async function handleEditSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!editTenant) return;
        setSaving(true);
        try {
            await TenantService.updateTenant(editTenant.id, {
                name: editForm.name,
                code: editForm.code,
                description: editForm.description || undefined,
                domain: editForm.domain || undefined,
                logo_url: editForm.logo_url || undefined,
                owner_user_id: editForm.owner_user_id ? Number(editForm.owner_user_id) : undefined,
                plan_type: editForm.plan_type || undefined,
                max_users: editForm.max_users ? Number(editForm.max_users) : undefined,
                status: editForm.status,
            });
            setEditTenant(null);
            fetchTenants(page);
        } catch {
            alert('Failed to update tenant.');
        } finally {
            setSaving(false);
        }
    }

    async function openAddUserModal(t: Tenant) {
        setAddUserTenant(t);
        setSelectedUserId('');
        setMemberRole('member');
        setUsersLoading(true);
        setMembersLoading(true);
        handleGetUsers({ page: 1, limit: 200 })
            .then((res) => setAllUsers(Array.isArray(res?.users) ? res.users : []))
            .catch(() => { })
            .finally(() => setUsersLoading(false));
        TenantService.getTenantMembers(t.id)
            .then((res) => setMembers(Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : []))
            .catch(() => setMembers([]))
            .finally(() => setMembersLoading(false));
    }

    async function handleAddUser(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!addUserTenant || selectedUserId === '') return;
        setAddingUser(true);
        try {
            await TenantService.addUserToTenant(addUserTenant.id, Number(selectedUserId), memberRole);
            setAddUserTenant(null);
        } catch {
            alert('Failed to add user to tenant.');
        } finally {
            setAddingUser(false);
        }
    }

    async function handleRemoveMember(userId: number) {
        if (!addUserTenant) return;
        setRemovingUserId(userId);
        try {
            await TenantService.removeUserFromTenant(userId);
            setMembers((prev) => prev.filter((m) => m.user_id !== userId));
        } catch {
            alert('Failed to remove member.');
        } finally {
            setRemovingUserId(null);
        }
    }

    const handlePrev = () => { if (page > 1) setPage(page - 1); };
    const handleNext = () => { if (page < totalPages) setPage(page + 1); };

    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[13px] font-medium text-gray-900">Tenant List</span>
                        <button
                            onClick={() => { loadFormUsers(); setShowCreate(true); }}
                            className="text-[12px] px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            + New Tenant
                        </button>
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
                                        <th className="pb-2 pr-4 font-medium">Code</th>
                                        <th className="pb-2 pr-4 font-medium">Domain</th>
                                        <th className="pb-2 pr-4 font-medium">Plan</th>
                                        <th className="pb-2 pr-4 font-medium">Max Users</th>
                                        <th className="pb-2 pr-4 font-medium">Status</th>
                                        <th className="pb-2 font-medium text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {tenants.length === 0 ? (
                                        <tr>
                                            <td colSpan={8} className="py-6 text-center text-gray-400 text-[12px]">
                                                No tenants found.
                                            </td>
                                        </tr>
                                    ) : (
                                        tenants.map((t, idx) => (
                                            <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-2 pr-4 text-gray-400">{(page - 1) * PAGE_SIZE + idx + 1}</td>
                                                <td className="py-2 pr-4 font-medium text-gray-900 max-w-[140px] truncate">
                                                    <Link href={`/admin/tenants/${t.id}`}>
                                                        {t.name}
                                                    </Link>
                                                </td>
                                                <td className="py-2 pr-4 text-gray-500 max-w-[100px] truncate">{t.code}</td>
                                                <td className="py-2 pr-4 text-gray-400 max-w-[140px] truncate">{t.domain ?? '—'}</td>
                                                <td className="py-2 pr-4">
                                                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                                                        {t.plan_type ?? 'free'}
                                                    </span>
                                                </td>
                                                <td className="py-2 pr-4 text-gray-500 text-[12px]">{t.max_users ?? '—'}</td>
                                                <td className="py-2 pr-4">
                                                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${t.status === 'active'
                                                        ? 'bg-green-50 text-green-700'
                                                        : 'bg-gray-100 text-gray-500'}`}>
                                                        {t.status ?? 'active'}
                                                    </span>
                                                </td>
                                                <td className="py-2 text-right">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <Link
                                                            href={`/admin/tenants/${t.id}`}
                                                            className="text-[11px] px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                                        >
                                                            View
                                                        </Link>
                                                        <button
                                                            onClick={() => openEditModal(t)}
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
                            <button onClick={handlePrev} disabled={page <= 1}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                                Previous
                            </button>
                            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                                const pageNum = totalPages <= 7 ? i + 1
                                    : page <= 4 ? i + 1
                                        : page >= totalPages - 3 ? totalPages - 6 + i
                                            : page - 3 + i;
                                return (
                                    <button key={pageNum} onClick={() => setPage(pageNum)}
                                        className={`w-7 h-7 text-[12px] rounded-md border transition-colors ${page === pageNum
                                            ? 'bg-blue-500 border-blue-500 text-white'
                                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                        {pageNum}
                                    </button>
                                );
                            })}
                            <button onClick={handleNext} disabled={page >= totalPages}
                                className="px-3 py-1 text-[12px] rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Tenant Modal */}
            <CommonModal open={showCreate} onClose={() => { setShowCreate(false); setCreateForm(emptyCreate); }} title="New Tenant">
                <form onSubmit={handleCreate} className="flex flex-col gap-3 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                            <input required type="text" value={createForm.name}
                                onChange={(e) => setCreate('name', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Acme Corp" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Code <span className="text-red-500">*</span></label>
                            <input required type="text" value={createForm.code}
                                onChange={(e) => setCreate('code', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="ACME" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Domain</label>
                            <input type="text" value={createForm.domain}
                                onChange={(e) => setCreate('domain', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="acme.example.com" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Logo URL</label>
                            <input type="text" value={createForm.logo_url}
                                onChange={(e) => setCreate('logo_url', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="https://..." />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Owner</label>
                            <select value={createForm.owner_user_id} onChange={(e) => setCreate('owner_user_id', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option value="">{formUsersLoading ? 'Loading...' : 'Select owner...'}</option>
                                {formUsers.map((u) => (
                                    <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Plan Type</label>
                            <select value={createForm.plan_type} onChange={(e) => setCreate('plan_type', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                {PLAN_TYPES.map((p) => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Max Users</label>
                            <input type="number" min={1} value={createForm.max_users}
                                onChange={(e) => setCreate('max_users', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="100" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Description</label>
                        <textarea value={createForm.description} onChange={(e) => setCreate('description', e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                            rows={2} placeholder="Optional description" />
                    </div>
                    <div className="flex justify-end gap-2 mt-1">
                        <button type="button" onClick={() => { setShowCreate(false); setCreateForm(emptyCreate); }}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="submit" disabled={creating}
                            className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                            {creating ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                </form>
            </CommonModal>

            {/* Edit Tenant Modal */}
            <CommonModal open={!!editTenant} onClose={() => setEditTenant(null)} title="Edit Tenant">
                <form onSubmit={handleEditSubmit} className="flex flex-col gap-3 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                            <input required type="text" value={editForm.name}
                                onChange={(e) => setEdit('name', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Code <span className="text-red-500">*</span></label>
                            <input required type="text" value={editForm.code}
                                onChange={(e) => setEdit('code', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Domain</label>
                            <input type="text" value={editForm.domain}
                                onChange={(e) => setEdit('domain', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Logo URL</label>
                            <input type="text" value={editForm.logo_url}
                                onChange={(e) => setEdit('logo_url', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Owner</label>
                            <select value={editForm.owner_user_id} onChange={(e) => setEdit('owner_user_id', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option value="">{formUsersLoading ? 'Loading...' : 'Select owner...'}</option>
                                {formUsers.map((u) => (
                                    <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Plan Type</label>
                            <select value={editForm.plan_type} onChange={(e) => setEdit('plan_type', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                {PLAN_TYPES.map((p) => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Max Users</label>
                            <input type="number" min={1} value={editForm.max_users}
                                onChange={(e) => setEdit('max_users', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Status</label>
                            <select value={editForm.status} onChange={(e) => setEdit('status', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-gray-700 mb-1">Description</label>
                        <textarea value={editForm.description} onChange={(e) => setEdit('description', e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                            rows={2} />
                    </div>
                    <div className="flex justify-end gap-2 mt-1">
                        <button type="button" onClick={() => setEditTenant(null)}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="submit" disabled={saving}
                            className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                            {saving ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </CommonModal>

            {/* Manage Users Modal */}
            <CommonModal open={!!addUserTenant} onClose={() => setAddUserTenant(null)} title={`Manage Users — ${addUserTenant?.name ?? ''}`}>
                <div className="mt-4 flex flex-col gap-4">
                    <form onSubmit={handleAddUser} className="flex gap-2 items-end">
                        <div className="flex-1">
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Add User</label>
                            {usersLoading ? (
                                <div className="text-[12px] text-gray-400 py-2">Loading users...</div>
                            ) : (
                                <select value={selectedUserId}
                                    onChange={(e) => setSelectedUserId(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option value="">Select a user...</option>
                                    {allUsers.map((u) => (
                                        <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
                                    ))}
                                </select>
                            )}
                        </div>
                        <div className="w-28">
                            <label className="block text-[12px] font-medium text-gray-700 mb-1">Role</label>
                            <select value={memberRole} onChange={(e) => setMemberRole(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option value="member">Member</option>
                                <option value="admin">Admin</option>
                                <option value="owner">Owner</option>
                            </select>
                        </div>
                        <button type="submit" disabled={addingUser || selectedUserId === ''}
                            className="px-3 py-2 text-[12px] rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60 whitespace-nowrap">
                            {addingUser ? 'Adding...' : 'Add'}
                        </button>
                    </form>

                    <div>
                        <p className="text-[12px] font-medium text-gray-700 mb-2">Current Members</p>
                        {membersLoading ? (
                            <div className="text-[12px] text-gray-400 py-2">Loading members...</div>
                        ) : members.length === 0 ? (
                            <div className="text-[12px] text-gray-400 py-2">No members yet.</div>
                        ) : (
                            <div className="divide-y divide-gray-100 max-h-48 overflow-y-auto">
                                {members.map((m) => (
                                    <div key={m.id} className="flex items-center justify-between py-1.5">
                                        <div>
                                            <span className="text-[12px] font-medium text-gray-800">
                                                {m.user?.name ?? `User #${m.user_id}`}
                                            </span>
                                            <span className="text-[11px] text-gray-400 ml-1.5">{m.user?.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                                                {m.role ?? 'member'}
                                            </span>
                                            <button onClick={() => handleRemoveMember(m.user_id)}
                                                disabled={removingUserId === m.user_id}
                                                className="text-[11px] px-2 py-0.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50">
                                                {removingUserId === m.user_id ? '...' : 'Remove'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </CommonModal>
        </>
    );
}
