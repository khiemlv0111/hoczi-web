import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

import { v4 as uuidv4 } from 'uuid';
import { userRepository } from '../repositories/userRepository';

import { generateDigitCode, generateIdWithTimestamp, isExpired, isStrongPassword } from '../helpers';

import { BadRequestError } from '../helpers/api-erros';
import { ILike } from 'typeorm';
import { JwtPayload } from '../middlewares/authMiddleware';
// import { createAccessToken, createRefreshToken } from '../utils/create_token';
import { RequestValidator } from '../helpers/requestValidator';
import { SubmitQuizSessionRequest, UserLoginRequest, UserRegisterRequest } from '../dto/user.dto';
import { generateRandomCode } from '../utils';
import { createAccessToken, createRefreshToken } from '../utils/create_token';
import { CreateQuestionRequest } from '../dto/question.dto';
import { QuestionService } from '../services/QuestionService';
import { LessonService } from '../services/LessonService';
import { AddMemberToClassRequest, AddSubjectToClassRequest, CreateClassRequest, RemoveMemberRequest } from '../dto/class.dto';
import { CreateAssignmentRequest, CreateLessonRequest } from '../dto/lesson.dto';


const lessonService = new LessonService();

export class LessonController {


    async getMyLessons(req: Request, res: Response) {
        // const { id } = req.user;


        const { id } = req.user;

        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;




        const response = await lessonService.getMyLessons(Number(id), page, limit);
        return res.json(response);
    }

    async createLesson(req: Request, res: Response) {

        const { id } = req.user;

        if (!id) {
            return res.status(400).json({ success: false, message: "errors" })
        }

        const { errors, input } = await RequestValidator(CreateLessonRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }


        const response = await lessonService.createLesson(Number(id), input);
        return res.json(response);
    }

    async createAssignment(req: Request, res: Response) {

        const { id } = req.user;

        const { errors, input } = await RequestValidator(CreateAssignmentRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await lessonService.createAssignment(Number(id), input);
        return res.json(response);
    }



    async getAllSubjects(req: Request, res: Response) {

        const response = await lessonService.getAllSubjects();
        return res.json(response);
    }



    async addSubjectToClass(req: Request, res: Response) {

        const { id } = req.user;

        if (!id) {
            return res.status(400).json({ success: false, message: "errors" })
        }

        const { errors, input } = await RequestValidator(AddSubjectToClassRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }


        const response = await lessonService.addSubjectToClass(input.class_id, input.subject_id, id);
        return res.json(response);
    }



}
