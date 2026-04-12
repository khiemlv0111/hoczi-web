import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { RequestValidator } from '../helpers/requestValidator';
import { QuestionService } from '../services/QuestionService';
import { CreateAnswerRequest, CreateQuestionRequest } from '../dto/question.dto';
import { AppDataSource } from '../data-source';

const questionService = new QuestionService();
// const questionService = new QuestionService();

export class QuestionController {

    async getQuestionList(req: Request, res: Response) {
        const { gradeId, categoryId, topicId } = req.query;

        const questions = await questionService.getQuestionList({
            gradeId: gradeId ? Number(gradeId) : undefined,
            categoryId: categoryId ? Number(categoryId) : undefined,
            topicId: topicId ? Number(topicId) : undefined,
        });
        return res.json({ success: true, data: questions });

    }

    async getGradeList(req: Request, res: Response) {
        const grades = await questionService.getGradeList();
        return res.json({ success: true, data: grades });

    }

    async getCategoryList(req: Request, res: Response) {

        const result = await questionService.getCategoryList();
        return res.json({ success: true, data: result });

    }

    async getTopicList(req: Request, res: Response) {

        const result = await questionService.getTopicList();
        return res.json({ success: true, data: result });

    }

    async getQuestionDetail(req: Request, res: Response) {

        const id = Number(req.params.id);

        const question = await questionService.getQuestionById(id);
        return res.json({ success: true, data: question });

    }

    async deleteQuestion(req: Request, res: Response) {

        const id = Number(req.params.id);

        const question = await questionService.deleteQuestion(id);
        return res.json({ success: true, data: question });

    }


    async getAllQuestion(req: Request, res: Response) {
        const { gradeId, categoryId, topicId } = req.query;

        const questions = await questionService.getAllQuestions({
            gradeId: gradeId ? Number(gradeId) : undefined,
            categoryId: categoryId ? Number(categoryId) : undefined,
            topicId: topicId ? Number(topicId) : undefined,
        });
        return res.json({ success: true, data: questions });

    }

    async createQuestion(req: Request, res: Response) {

        const { errors, input } = await RequestValidator(CreateQuestionRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const question = await questionService.createQuestion(input);
        return res.json({ success: true, data: question });

    }

    async createAnswer(req: Request, res: Response) {

        const { errors, input } = await RequestValidator(CreateAnswerRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const question = await questionService.createAnswer(input);
        return res.json({ success: true, data: question });

    }

}
