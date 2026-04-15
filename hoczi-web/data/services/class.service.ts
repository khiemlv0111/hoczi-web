import { getRequest, postRequest, deleteRequest } from "../http";

export type ClassItem = {
    id: number;
    name: string;
    code: string;
    description?: string;
    teacher_id: number;
    school_name?: string;
    created_at?: string;
    members?: ClassMember[];
};

export type ClassMember = {
    id: number;
    user_id: number;
    class_id: number;
    name: string;
    email: string;
    username?: string;
};

export class ClassService {
    static async getClassList() {
        const response = await getRequest('/api/classes/get-classes-by-teacher', true);
        return response as ClassItem[];
    }

    static async getClassDetail(classId: number) {
        const response = await getRequest(`/api/classes/class-detail/${classId}`, true);
        return response.data as ClassItem;
    }

    static async createClass(payload: { name: string; code: string; description?: string; teacher_id: number; school_name?: string }) {
        const response = await postRequest('/api/classes/create-class', payload, true);
        return response.data as ClassItem;
    }

    static async addMember(payload: { class_id: number; user_id: number }) {
        const response = await postRequest('/api/classes/add-member', payload, true);
        return response;
    }

    static async removeMember(classId: number, userId: number) {
        const response = await deleteRequest(`/api/classes/remove-member/${classId}/${userId}`, true);
        return response;
    }
}
