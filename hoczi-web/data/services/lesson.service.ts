import { deleteRequest, getRequest, postRequest } from "../http";
import { Assignment, Lesson } from "../types";

export class LessonService {
    static async getMyLessons() {
        const response = await getRequest('/api/lessons/get-my-lessons', true);
        return response;
    }

    static async createLesson(payload: Lesson) {
        const response = await postRequest('/api/lessons/create-lesson', payload, true);
        return response;
    }

    static async createAssignment(payload: Assignment) {
        const response = await postRequest('/api/lessons/create-assignment', payload, true);
        return response;
    }

    static async getAllSubjects() {
        const response = await getRequest('/api/lessons/get-all-subjects', true);
        return response;
    }

    static async getAllAssignments() {
        const response = await getRequest('/api/lessons/get-assignments', true);
        return response;
    }

    static async addSubjectToClass(payload: { class_id: number, subject_id: number }) {
        const response = await postRequest('/api/lessons/add-subject-to-class', payload, true);
        return response;
    }
}