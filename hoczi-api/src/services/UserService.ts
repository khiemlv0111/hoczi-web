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

    async startQuiz(userId: number) {
        const newQuiz = await quizSessionRepository.startQuiz(userId);
        return {
            message: "start quiz success",
            success: true,
            user: newQuiz
        }

    }


    // async submitQuizSession(userId: number, payload: SubmitQuizSessionRequest) {
    //     // const { score, total_questions, correct_answers, quizzes } = payload;
    //     // create quiz_sessions

    //     const quizSession = await quizSessionRepository.createOne(userId, payload);

    //     //create user_answers
    //     const quizzes = payload.quizzes;

    //     if (!quizzes) {
    //         throw new BadRequestError('Quizz not found')
    //     }


    //     // 2) tạo danh sách user_answers
    //     const userAnswersPayload = quizzes.map((item) => ({
    //         session_id: quizSession.id,
    //         question_id: item.question_id,
    //         answer_id: item.answer_id,
    //         is_correct: item.is_correct,
    //     }));

    //     // 3) insert user_answers
    //     if (userAnswersPayload.length > 0) {
    //         await userAnswerRepository.createMany(userAnswersPayload);
    //     }



    // }
}

// score!: number;
//     total_questions!: number;
//     correct_answers!: number;
//     quizzes?: QuizSession[];