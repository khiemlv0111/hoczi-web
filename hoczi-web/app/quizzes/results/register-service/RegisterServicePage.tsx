'use client';

import { useAppData, User } from "@/app/context/AppContext";
import { TenantService } from "@/data/services/tenant.service";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export function RegisterServicePage() {
    const { user, handleGetUsers } = useAppData();
    const router = useRouter();

    const [createForm, setCreateForm] = useState<CreateForm>(emptyCreate);
    const [creating, setCreating] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formUsers, setFormUsers] = useState<User[]>([]);
    const [formUsersLoading, setFormUsersLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setCreateForm((f) => ({
                ...f,
                owner_user_id: user.id ? String(user.id) : '',
            }));
        }
    }, [user]);

    useEffect(() => {
        setFormUsersLoading(true);
        handleGetUsers({ page: 1, limit: 500 })
            .then((res) => setFormUsers(Array.isArray(res?.users) ? res.users : []))
            .catch(() => { })
            .finally(() => setFormUsersLoading(false));
    }, []);

    function setCreate(field: keyof CreateForm, value: string) {
        setCreateForm((f) => ({ ...f, [field]: value }));
    }

    async function handleCreate(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        setError('');
        setCreating(true);
        try {
            const res = await TenantService.createTenant({
                name: createForm.name,
                code: createForm.code,
                description: createForm.description || undefined,
                domain: createForm.domain || undefined,
                logo_url: createForm.logo_url || undefined,
                owner_user_id: createForm.owner_user_id ? Number(createForm.owner_user_id) : undefined,
                plan_type: createForm.plan_type || undefined,
                max_users: createForm.max_users ? Number(createForm.max_users) : undefined,
            });
            const newId = res?.data?.id ?? res?.id ?? res?.tenant?.id;
            setCreateForm(emptyCreate);
            if (newId) {
                router.push(`/organization/tenants/${newId}`);
                return;
            }
            setSuccess(true);
        } catch {
            setError('There was an error sending your request. Please try again later.');
        } finally {
            setCreating(false);
        }
    }

    if (success) {
        return (
            <div className="max-w-2xl mx-auto mt-12 bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={28} className="text-green-500" />
                </div>
                <h2 className="text-[16px] font-semibold text-gray-900">Request sent!</h2>
                <p className="text-[13px] text-gray-500">
                    We've received your request and will get back to you shortly.
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 text-[13px] text-blue-600 hover:underline"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium text-gray-900">Register Service</span>
                </div>

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

                    {error && (
                        <p className="text-[12px] text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                            {error}
                        </p>
                    )}

                    <div className="flex justify-end gap-2 mt-1">
                        <button type="button" onClick={() => setCreateForm(emptyCreate)}
                            className="px-4 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                            Reset
                        </button>
                        <button type="submit" disabled={creating}
                            className="px-4 py-1.5 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60">
                            {creating ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
