
import { deleteRequest, getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";
import { PaginationPayload } from "../types";

// import { getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";

// import axios from 'axios'
export type QuestionPayload = {
    gradeId?: number;
    categoryId?: number;
    topicId?: number;
    difficulty?: string;
}


export class QuestionService {
    static async getQuestionList(payload: QuestionPayload) {
        const params = new URLSearchParams();
        if (payload.categoryId) params.append('categoryId', String(payload.categoryId));
        if (payload.topicId) params.append('topicId', String(payload.topicId));
        if (payload.gradeId) params.append('gradeId', String(payload.gradeId));
        if (payload.difficulty) params.append('difficulty', payload.difficulty);


        const query = params.toString() ? `?${params.toString()}` : '';
        const response = await getRequest(`/api/questions/question-list${query}`, false);
        return response;




    }

    static async getAllQuestions(payload: PaginationPayload) {
        const params = new URLSearchParams();
        if (payload.page) params.append('page', String(payload.page));
        if (payload.limit) params.append('limit', String(payload.limit));

        const query = params.toString() ? `?${params.toString()}` : '';
        const response = await getRequest(`/api/questions/all-questions${query}`, false);
        return response
    }

    static async createQuestion(payload: any) {
        // const user = localStorage.getItem('')
        const response = await postRequest('/api/questions/create-question', payload, false);
        console.log("response: ", response);

        return response
    }


    static async createAnswer(payload: { question_id: number, content: string, is_correct: boolean }) {
        const response = await postRequest('/api/questions/create-answer', payload, false);
        return response
    }


    static async getQuestionDetail(id: number) {
        const response = await getRequest(`/api/questions/question-detail/${id}`, false);
        return response
    }


    static async getCategoryList() {
        const response = await getRequest('/api/questions/category-list', false);
        return response.data
    }


    static async getTopicList(categoryId?: number) {
        const response = await getRequest(`/api/questions/topic-list/${categoryId}`, false);
        return response.data
    }


    static async getGradeList() {
        const response = await getRequest('/api/questions/grade-list', false);
        return response.data
    }

    static async deleteQuestion(questionId: number) {
        const response = await deleteRequest(`/api/questions/delete-question/${questionId}`, false);
        return response
    }

    static async startQuiz(payload: any) {
        const response = await postRequest('/api/users/start-quiz', payload, true);
        return response
    }

    static async submitQuiz(payload?: any) {
        const response = await postRequest('/api/users/submit-quiz-session', payload, true);
        return response
    }

    static async retryQuiz(quizId: number) {
        const response = await postRequest(`/api/users/start-retry/${quizId}`, {}, true);
        return response
    }

    static async getQuizSessions() {
        const response = await getRequest('/api/users/my-quiz-sessions', true);
        return response.data
    }

    static async getAllTeacherQuestions(payload: PaginationPayload) {
        const params = new URLSearchParams();
        if (payload.page) params.append('page', String(payload.page));
        if (payload.limit) params.append('limit', String(payload.limit));

        const query = params.toString() ? `?${params.toString()}` : '';
        const response = await getRequest(`/api/users/all-teacher-questions${query}`, true);
        return response
    }
}