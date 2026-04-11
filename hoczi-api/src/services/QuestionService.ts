import { questionRepository } from "../repositories/questionRepository";
import { answerRepository } from "../repositories/answerRepository";
import { CreateAnswerRequest, CreateQuestionRequest, QuestionFilterDto } from "../dto/question.dto";

export class QuestionService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    async getByQuuestionId(quizId: number) {
        return questionRepository.findByQuestionId(quizId);
    }

    async getAllQuestions(filter?: QuestionFilterDto) {
        const questions = await questionRepository.findAll(filter);
        return questions;

    }

    async getQuestionList(filter?: QuestionFilterDto) {
        const questions = await questionRepository.findAll(filter, this.QUIZ_QUESTION_LIMIT);
        return questions;

    }


    async createQuestion(dto: CreateQuestionRequest) {
        return questionRepository.create(dto);
    }

    async createAnswer(dto: CreateAnswerRequest) {
        return answerRepository.create(dto);
    }

}