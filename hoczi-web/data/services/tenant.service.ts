import { deleteRequest, getRequest, postRequest, putRequest } from "../http";

export type Tenant = {
    id: number;
    name: string;
    code: string;
    description?: string;
    domain?: string;
    logo_url?: string;
    owner_user_id?: number;
    plan_type?: string;
    max_users?: number;
    status?: string;
    created_at?: string;
    members?: TenantMember[];
};

export type CreateTenantPayload = {
    name: string;
    code: string;
    description?: string;
    domain?: string;
    logo_url?: string;
    owner_user_id?: number;
    plan_type?: string;
    max_users?: number;
};

export type TenantMember = {
    id: number;
    tenant_id: number;
    user_id: number;
    role?: string;
    user?: { id: number; name: string; email: string; username?: string };
};

export class TenantService {
    static async getTenants(page = 1, limit = 20) {
        const response = await getRequest(`/api/lessons/get-tenant-list?page=${page}&limit=${limit}`, true);
        return response;
    }

    static async createTenant(payload: CreateTenantPayload) {
        const response = await postRequest('/api/lessons/create-tenant', payload, true);
        return response;
    }

    static async updateTenant(id: number, payload: Partial<CreateTenantPayload & { status: string }>) {
        const response = await putRequest(`/api/tenants/${id}`, payload, true);
        return response;
    }

    static async deleteTenant(id: number) {
        const response = await deleteRequest(`/api/tenants/${id}`, true);
        return response;
    }

    static async getTenantMembers(tenantId: number) {
        const response = await getRequest(`/api/tenants/${tenantId}/members`, true);
        return response;
    }

    static async addUserToTenant(tenantId: number, userId: number, role = 'member') {
        const response = await postRequest(`/api/tenants/${tenantId}/members`, { user_id: userId, role }, true);
        return response;
    }

    static async removeUserFromTenant(tenantId: number, userId: number) {
        const response = await deleteRequest(`/api/tenants/${tenantId}/members/${userId}`, true);
        return response;
    }
}
