import { deleteRequest, getRequest, postRequest } from "../http";
import { Assignment, Lesson } from "../types";
import { QuizAssignment } from "./payload_type";

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

    static async assignStudentAssignment(payload: { assignment_id: number, student_id: number }) {
        const response = await postRequest('/api/lessons/assign-student-assignment', payload, true);
        return response;
    }

    static async getMyAssignments(page?: number, limit?: number) {

        const params = new URLSearchParams();
        if (page) params.append('page', String(page));
        if (limit) params.append('limit', String(limit));

        const query = params.toString() ? `?${params.toString()}` : '';

        const response = await getRequest(`/api/lessons/my-assignments/${query}`, true);



        return response
    }


    static async commentOnAssignment(payload: { assignmentStudentId: number, content: string }) {
        const response = await postRequest('/api/lessons/comment-on-assignment', payload, true);
        return response;
    }

    static async getMyQuizzes() {
        const response = await getRequest('/api/lessons/get-my-quizzes', true);
        return response;
    }

    static async createQuizAssignment(payload: QuizAssignment) {
        const response = await postRequest('/api/lessons/create-quiz-assignment', payload, true);
        return response;
    }

    static async getQuizDetail(id: number) {
        const response = await getRequest(`/api/lessons/get-quiz-detail/${id}`, true);
        return response;
    }

    static async addQuestionsToQuiz(quizId: number, questionIds: number[]) {
        const response = await postRequest('/api/lessons/add-questions-to-quiz', { quiz_id: quizId, question_ids: questionIds }, true);
        return response;
    }

    static async getSessionDetail(sessionId: number) {
        const response = await getRequest(`/api/lessons/get-session-detail/${sessionId}`, true);
        return response;
    }

    static async markSessionComplete(sessionId: number) {
        const response = await postRequest(`/api/lessons/mark-session-complete/${sessionId}`, {}, true);
        return response;
    }

}