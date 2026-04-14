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
import { UserService } from '../services/UserService';


const userService = new UserService();

export class UserController {




    async getUserList(req: Request, res: Response) {
        // const { id } = req.user;

        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 20;




        const response = await userService.userList(page, limit);
        return res.json(response);
    }


}
