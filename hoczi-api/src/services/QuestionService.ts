import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { questionRepository } from "../repositories/questionRepository";
import { CreateQuestionRequest } from "../dto/question.dto";

export class QuestionService {
    // private questionRepository = this.dataSource.getRepository(User);

    // constructor(private dataSource: DataSource) { }
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

}