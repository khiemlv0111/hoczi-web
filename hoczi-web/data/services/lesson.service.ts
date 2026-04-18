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

    static async markQuizComplete(quizId: number) {
        const response = await postRequest(`/api/lessons/mark-quiz-complete/${quizId}`, {}, true);
        return response;
    }

    static async createQuizSession(payload: { quiz_id: number; question_ids: number[] }) {
        const response = await postRequest('/api/lessons/create-quiz-session-for-assignment', payload, true);
        return response;
    }

    static async assignQuizToStudents(quizId: number, studentIds: number[]) {
        const response = await postRequest('/api/lessons/assign-quiz-to-students', { quiz_id: quizId, student_ids: studentIds }, true);
        return response;
    }

    static async assignSessionToStudent(sessionId: number, studentId: number, title?: string, due_at?: string) {
        const response = await postRequest('/api/lessons/assign-session-to-student', { session_id: sessionId, student_id: studentId, title, due_at }, true);
        return response;
    }


    static async getAssignmentStudentDetail(assignmentStudentDetail: number) {
        const response = await getRequest(`/api/lessons/teacher-get-assignment-student-detail/${assignmentStudentDetail}`, true);
        return response;
    }

}