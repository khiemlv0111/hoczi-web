import { questionRepository } from "../repositories/questionRepository";
import { answerRepository } from "../repositories/answerRepository";
import { CreateAnswerRequest, CreateQuestionRequest } from "../dto/question.dto";

export class QuestionService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    async getByQuuestionId(quizId: number) {
        return questionRepository.findByQuestionId(quizId);
    }

    async getAllQuestions() {
        const questions = await questionRepository.findAll(this.QUIZ_QUESTION_LIMIT);
        return questions;

    }


    async createQuestion(dto: CreateQuestionRequest) {
        return questionRepository.create(dto);
    }

    async createAnswer(dto: CreateAnswerRequest) {
        return answerRepository.create(dto);
    }

}