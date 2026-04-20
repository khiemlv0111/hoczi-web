'use client'

import { Tenant, TenantMember, TenantService } from "@/data/services/tenant.service";
import { useEffect, useState } from "react"
import Link from "next/link";

export function TenantDetailPage({ id }: { id: number }) {
    const [tenant, setTenant] = useState<Tenant | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        TenantService.getTenantDetail(id)
            .then((res) => setTenant(res?.data ?? res))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <div className="text-center py-12 text-sm text-gray-400">Loading...</div>;
    }

    if (!tenant) {
        return <div className="text-center py-12 text-sm text-gray-400">Tenant not found.</div>;
    }

    const users: TenantMember[] = Array.isArray(tenant.members)
        ? tenant.members
        : Array.isArray(tenant.tenantUsers)
        ? tenant.tenantUsers
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

            {/* Users Table */}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-medium text-gray-900">
                        Members <span className="text-gray-400 font-normal">({users.length})</span>
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-left text-[12px] text-gray-500">
                                <th className="pb-2 pr-4 font-medium">#</th>
                                <th className="pb-2 pr-4 font-medium">Name</th>
                                <th className="pb-2 pr-4 font-medium">Email</th>
                                <th className="pb-2 pr-4 font-medium">Username</th>
                                <th className="pb-2 font-medium">Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-6 text-center text-gray-400 text-[12px]">
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
                                            <td className="py-2 text-[12px]">
                                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                                                    {m.role ?? 'member'}
                                                </span>
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