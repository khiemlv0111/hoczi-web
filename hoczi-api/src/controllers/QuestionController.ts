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

        const questions = await questionService.getAllQuestions();
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
