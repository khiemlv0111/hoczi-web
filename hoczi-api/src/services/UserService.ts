import { BadRequestError } from "../helpers/api-erros";
import { JwtPayload } from "../middlewares/authMiddleware";
import { userRepository } from "../repositories/userRepository";
import { generateRandomCode } from "../utils";
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from "../utils/create_token";
import { quizSessionRepository } from "../repositories/quizSessionRepository";
import { SubmitQuizSessionRequest } from "../dto/user.dto";

import { userAnswerRepository } from "../repositories/userAnswerRepository";




export class UserService {
    async login(loginPayload: any) {
        const { email, password } = loginPayload;
        const userLogin = await userRepository.findByEmail(email);

        if (!userLogin) {
            throw new BadRequestError('User not found!!')
        }

        const verifyPass = await bcrypt.compare(password, userLogin.password);

        if (!verifyPass) {
            throw new BadRequestError('E-mail Or Password Incorrect')
        }

        const jwtPayload: JwtPayload = {
            id: userLogin.id,
            email: userLogin.email,
        }

        const access_token = createAccessToken(jwtPayload);

        const refreshToken = createRefreshToken(jwtPayload);

        const { password: _, ...user } = userLogin

        return {
            success: true,
            message: "login success",
            user: user,
            access_token,
            refresh_token: refreshToken,

        }
    }

    async register(loginPayload: any) {
        const { name, email, password } = loginPayload;

        const normalEmail = email.toLowerCase();

        const userExists = await userRepository.findByEmail(normalEmail);

        if (userExists) {
            throw new BadRequestError('E-mail Existed!!')
        }

        let username = normalEmail.split("@")[0];

        const userByUsernameExist = await userRepository.findByUsername(username);


        if (userByUsernameExist) {
            username = `${username}${generateRandomCode(4)}`;
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await userRepository.createOne({ name, username, email: normalEmail, hashPassword });


        return {
            message: "Register success",
            success: true,
            user: newUser
        }
    }

    async userProfile(id: number) {
        const user = await userRepository.userProfile(id);
        return {
            message: "get user success",
            success: true,
            user: user
        }
    }

}

// score!: number;
//     total_questions!: number;
//     correct_answers!: number;
//     quizzes?: QuizSession[];