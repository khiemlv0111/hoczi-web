import { questionRepository } from "../repositories/questionRepository";
import { categoryRepository } from "../repositories/categoryRepository";
import { gradeRepository } from "../repositories/gradeRepository";
import { topicRepository } from "../repositories/topicRepository";
import { answerRepository } from "../repositories/answerRepository";
import { CreateAnswerRequest, CreateQuestionRequest, QuestionFilterDto } from "../dto/question.dto";

export class QuestionService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    async getQuestionById(quizId: number) {
        return questionRepository.findByQuestionId(quizId);
    }

    async deleteQuestion(questionId: number) {
        return questionRepository.deleteQuestion(questionId);
    }

    async getAllQuestions(filter?: QuestionFilterDto) {
        const questions = await questionRepository.findAll(filter);
        return questions;

    }

    async getQuestionList(filter?: QuestionFilterDto) {
        const questions = await questionRepository.findAll(filter, this.QUIZ_QUESTION_LIMIT);
        return questions;

    }

     async getCategoryList(filter?: QuestionFilterDto) {
        const result = await categoryRepository.findAll();
        return result;

    }

     async getGradeList(filter?: QuestionFilterDto) {
        const result = await gradeRepository.findAll();
        return result;

    }

     async getTopicList(categoryId?: number) {
        const result = await topicRepository.findAll(categoryId);
        return result;

    }

    async getQuestionDetail(id: number) {
        const question = await questionRepository.findByQuestionId(id);
        return question;

    }


    async createQuestion(dto: CreateQuestionRequest) {
        return questionRepository.create(dto);
    }

    async createAnswer(dto: CreateAnswerRequest) {
        return answerRepository.create(dto);
    }

}