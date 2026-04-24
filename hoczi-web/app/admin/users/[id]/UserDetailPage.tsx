'use client'

import { UserService } from "@/data/services/user.service"
import Link from "next/link"
import { useEffect, useState } from "react"

type Tenant = {
    id: number;
    name: string;
    code?: string;
    logo_url?: string;
    plan_type?: string;
    status?: string;
    max_users?: number;
}

type UserDetail = {
    id: number;
    name: string;
    username?: string;
    email: string;
    role: string;
    created_at?: string;
    tenant?: Tenant | null;
    ownedTenant: Tenant | null;
}

const roleColors: Record<string, string> = {
    admin: 'bg-purple-50 text-purple-700',
    teacher: 'bg-blue-50 text-blue-700',
    author: 'bg-yellow-50 text-yellow-700',
    user: 'bg-green-50 text-green-700',
};

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex gap-2 text-[12px]">
            <span className="text-gray-400 w-28 shrink-0">{label}</span>
            <span className="text-gray-700">{children}</span>
        </div>
    );
}

export function UserDetailPage({ userId }: { userId: number }) {
    const [userDetail, setUserDetail] = useState<UserDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoading(true);
        UserService.getUserDetail(userId)
            .then((res) => {
                if (!res) { setNotFound(true); return; }
                setUserDetail(res);
            })
            .catch(() => setNotFound(true))
            .finally(() => setLoading(false));
    }, [userId]);

    if (loading) {
        return <div className="text-center py-12 text-sm text-gray-400">Loading...</div>;
    }

    if (notFound || !userDetail) {
        return <div className="text-center py-12 text-sm text-gray-400">User not found.</div>;
    }

    const roleClass = roleColors[userDetail.role] ?? 'bg-gray-100 text-gray-600';

    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <Link href="/admin/users" className="text-[12px] text-blue-600 hover:underline">
                    &larr; Back to Users
                </Link>
            </div>

            {/* Profile Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-[15px]">
                            {userDetail.name?.[0]?.toUpperCase() ?? '?'}
                        </div>
                        <div>
                            <h2 className="text-[15px] font-semibold text-gray-900">{userDetail.name}</h2>
                            <span className="text-[12px] text-gray-400">{userDetail.email}</span>
                        </div>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${roleClass}`}>
                        {userDetail.role}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    <InfoRow label="User ID">#{userDetail.id}</InfoRow>
                    <InfoRow label="Username">{userDetail.username ?? '—'}</InfoRow>
                    <InfoRow label="Email">{userDetail.email}</InfoRow>
                    <InfoRow label="Role">
                        <span className={`text-[11px] px-2 py-0.5 rounded-full ${roleClass}`}>
                            {userDetail.role}
                        </span>
                    </InfoRow>
                    {userDetail.created_at && (
                        <InfoRow label="Joined">
                            {new Date(userDetail.created_at).toLocaleDateString()}
                        </InfoRow>
                    )}
                </div>
            </div>

            {/* Member of Tenant */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="text-[13px] font-medium text-gray-900 mb-4">Organization Membership</h3>
                {userDetail.tenant ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {userDetail.tenant.logo_url && (
                                <img
                                    src={userDetail.tenant.logo_url}
                                    alt="logo"
                                    className="w-8 h-8 rounded-lg object-cover border border-gray-100"
                                />
                            )}
                            <div>
                                <p className="text-[13px] font-medium text-gray-900">{userDetail.tenant.name}</p>
                                <p className="text-[11px] text-gray-400">{userDetail.tenant.code}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {userDetail.tenant.plan_type && (
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                                    {userDetail.tenant.plan_type}
                                </span>
                            )}
                            {userDetail.tenant.status && (
                                <span className={`text-[11px] px-2 py-0.5 rounded-full ${userDetail.tenant.status === 'active'
                                    ? 'bg-green-50 text-green-700'
                                    : 'bg-gray-100 text-gray-500'}`}>
                                    {userDetail.tenant.status}
                                </span>
                            )}
                            <Link
                                href={`/admin/tenants/${userDetail.tenant.id}`}
                                className="text-[11px] px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p className="text-[12px] text-gray-400">Not a member of any organization.</p>
                )}
            </div>

            {/* Owned Tenant */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="text-[13px] font-medium text-gray-900 mb-4">Owned Organization</h3>
                {userDetail.ownedTenant ? (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {userDetail.ownedTenant.logo_url && (
                                <img
                                    src={userDetail.ownedTenant.logo_url}
                                    alt="logo"
                                    className="w-8 h-8 rounded-lg object-cover border border-gray-100"
                                />
                            )}
                            <div>
                                <p className="text-[13px] font-medium text-gray-900">{userDetail.ownedTenant.name}</p>
                                <p className="text-[11px] text-gray-400">{userDetail.ownedTenant.code}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {userDetail.ownedTenant.plan_type && (
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700">
                                    {userDetail.ownedTenant.plan_type}
                                </span>
                            )}
                            {userDetail.ownedTenant.max_users != null && (
                                <span className="text-[11px] text-gray-400">
                                    Max {userDetail.ownedTenant.max_users} users
                                </span>
                            )}
                            <Link
                                href={`/admin/tenants/${userDetail.ownedTenant.id}`}
                                className="text-[11px] px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p className="text-[12px] text-gray-400">Does not own any organization.</p>
                )}
            </div>
        </div>
    );
}
