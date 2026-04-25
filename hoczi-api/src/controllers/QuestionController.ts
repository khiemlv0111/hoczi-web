import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { QuestionService } from '../services/QuestionService';
import { CreateAnswerRequest, CreateQuestionRequest } from '../dto/question.dto';
import { CreateQuizRequest, SubmitQuizSessionRequest } from '../dto/user.dto';

const questionService = new QuestionService();

export class QuestionController {

    async getQuestionList(req: Request, res: Response) {
        const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
        const topicId = req.query.topicId ? Number(req.query.topicId) : undefined;
        const gradeId = req.query.gradeId ? Number(req.query.gradeId) : undefined;
        const difficulty = req.query.difficulty as string | undefined;

        const questions = await questionService.getQuestionList({
            gradeId: gradeId,
            categoryId: categoryId,
            topicId: topicId,
            difficulty: difficulty,
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
        const categoryId = Number(req.params.categoryId);

        const result = await questionService.getTopicList(categoryId);
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

        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 20;

        const response = await questionService.getAllQuestions(page, limit);
        return res.json({ success: true, message: "get questions success", data: response.data, total: response.total });

    }

    async createQuestion(req: Request, res: Response) {
        const { id } = req.user;

        const { errors, input } = await RequestValidator(CreateQuestionRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const question = await questionService.createQuestion(Number(id), input);
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

    async startQuiz(req: Request, res: Response) {
        const { id } = req.user;

        const { errors, input } = await RequestValidator(CreateQuizRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }



        const response = await questionService.startQuiz(Number(id), input);
        return res.json(response);
    }

    async startRetry(req: Request, res: Response) {

        const quizId = Number(req.params.id);

        const { id } = req.user;

        const response = await questionService.startRetry(Number(id), quizId);
        return res.json(response);
    }

    async startQuizAssignment(req: Request, res: Response) {

        const quizId = Number(req.params.id);

        const { id } = req.user;

        const response = await questionService.startQuizAssignment(Number(id), quizId);
        return res.json(response);
    }

    

    async markQuizAsCompleted(req: Request, res: Response) {

        const quizId = Number(req.params.id);

        const { id } = req.user;

        const response = await questionService.markQuizAsCompleted(Number(id), quizId);
        return res.json(response);
    }


    async submitQuizSession(req: Request, res: Response) {
        const { id } = req.user;

        const { errors, input } = await RequestValidator(SubmitQuizSessionRequest, req.body);

        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }


        const response = await questionService.submitQuizSession(Number(id), input);
        return res.json(response);
    }

    async myQuizSessions(req: Request, res: Response) {
        const { id } = req.user;

         const type = req.query.type as 'free' | 'assignment'| undefined;


        const response = await questionService.myQuizSessions(Number(id), type);
        return res.json(response);
    }

    async myQuizzes(req: Request, res: Response) {
        const { id } = req.user;


        const response = await questionService.myQuizzes(Number(id));
        return res.json(response);
    }

    async getQuizSessionDetail(req: Request, res: Response) {
        const id = Number(req.params.id);


        const response = await questionService.getQuizSessionDetail(id);
        return res.json(response);
    }



    async getSessionDetail(req: Request, res: Response) {

        const id = Number(req.params.id);

        const response = await questionService.getSessionDetail(id);
        return res.json(response);

    }

    async getAllTeacherQuestions(req: Request, res: Response) {

        const { id } = req.user;
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;
        const source = req.query.source as 'teacher' | 'system' | 'all' | undefined;

        const response = await questionService.getAllTeacherQuestions(Number(id), page, limit, source);
        return res.json(response);

    }






}



