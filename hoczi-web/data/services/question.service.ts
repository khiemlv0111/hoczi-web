
import { getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";

// import { getAccessToken, getRequest, getRequestPublic, postRequest } from "../http";

// import axios from 'axios'
export class QuestionService {
    static async getQuestionList() {
        const response = await getRequest('/api/questions/question-list', false);
        return response
    }

    static async getAllQuestions() {
        const response = await getRequest('/api/questions/all-questions', false);
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
}