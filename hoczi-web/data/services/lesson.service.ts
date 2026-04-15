import { deleteRequest, getRequest, postRequest } from "../http";
import { Lesson } from "../types";

export class LessonService {
    static async getMyLessons() {
        const response = await getRequest('/api/lessons/get-my-lessons', true);
        return response;
    }

    static async createLesson(payload: Lesson) {
        const response = await postRequest('/api/lessons/create-lesson', payload, true);
        return response;
    }

    // static async addMember(payload: { class_id: number; user_id: number }) {
    //     const response = await postRequest('/api/classes/add-member', payload, true);
    //     return response;
    // }

    // static async removeMember(classId: number, userId: number) {
    //     const response = await deleteRequest(`/api/classes/remove-member/${classId}/${userId}`, true);
    //     return response;
    // }
}