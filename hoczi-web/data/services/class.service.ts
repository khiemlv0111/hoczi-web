import { getRequest, postRequest, deleteRequest } from "../http";

export type ClassStudent = {
    id: number;
    name: string;
    email: string;
    username?: string;
};

export type ClassMember = {
    id: number;
    class_id: number;
    status: string;
    student: ClassStudent;
};

export type ClassSubjectItem = {
    id: number;
    class_id: number;
    subject_id: number;
    status: string;
    subject?: { id: number; name: string; code?: string; description?: string };
};

export type ClassItem = {
    id: number;
    name: string;
    code: string;
    description?: string;
    teacher_id: number;
    teacher?: ClassStudent;
    school_name?: string;
    tenant_id?: number;
    tenant?: { id: number; name: string; code: string };
    created_at?: string;
    members?: ClassMember[];
    class_subjects?: ClassSubjectItem[];
};

export class ClassService {
    static async getClassList() {
        const response = await getRequest('/api/classes/get-classes-by-teacher', true);
        return response as ClassItem[];
    }

    static async getStudentClasses() {
        const response = await getRequest('/api/classes/get-my-classes', true);
        return response;
    }

    static async createClass(payload: { name: string; code: string; description?: string; teacher_id: number; school_name?: string; tenant_id?: number }) {
        const response = await postRequest('/api/classes/create-class', payload, true);
        return response as ClassItem;
    }

    static async addMember(payload: { class_id: number; user_id: number }) {
        const response = await postRequest('/api/classes/add-member', payload, true);
        return response;
    }

    static async removeMember(classId: number, userId: number) {
        const response = await deleteRequest(`/api/classes/remove-member/${classId}/${userId}`, true);
        return response;
    }

    static async createClassSubject(payload: { class_id: number; subject_id: number }) {
        const response = await postRequest('/api/classes/create-class-subject', payload, true);
        return response;
    }

    static async getClassSubjects(classId: number) {
        const response = await getRequest(`/api/classes/get-class-subjects/${classId}`, true);
        return response;
    }

     static async getMyClassDetail(classId: number) {
        const response = await getRequest(`/api/classes/get-my-class-detail/${classId}`, true);
        return response;
    }
}
