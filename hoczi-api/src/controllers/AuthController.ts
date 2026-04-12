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
import { UserLoginRequest, UserRegisterRequest } from '../dto/user.dto';
import { generateRandomCode } from '../utils';
import { createAccessToken, createRefreshToken } from '../utils/create_token';
import { CreateQuestionRequest } from '../dto/question.dto';
import { QuestionService } from '../services/QuestionService';
import { UserService } from '../services/UserService';


const userService = new UserService();

export class AuthController {


    async register(req: Request, res: Response) {

        const { errors, input } = await RequestValidator(UserRegisterRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await userService.register(input);
        return res.json(response);




        // const { name, email, password } = req.body
        // const normalEmail = email.toLowerCase();

        // const userExists = await userRepository.findOneBy({ email: normalEmail })

        // if (userExists) {
        //     throw new BadRequestError('E-mail Existed!!')
        // }

        // let username = normalEmail.split("@")[0];

        // const userByUsernameExist = await userRepository.findOneBy({ username });

        // if (userByUsernameExist) {
        //     username = `${username}${generateRandomCode(4)}`;
        // }

        // const hashPassword = await bcrypt.hash(password, 10);


        // const newUser = userRepository.create({
        //     name: name || "",
        //     username: username,
        //     email: normalEmail,
        //     password: hashPassword,

        // });


        // const newRegisterUser = await userRepository.save(newUser);

        // const { password: _, ...userLog} = newRegisterUser

        // return res.status(201).json({ message: "success", userLog })
    }

    // async login(req: Request, res: Response) {
    //     const { email, password } = req.body;

    //     const user = await userRepository.findOne({
    //         where: { email: email.toLowerCase().trim() }
    //     });

    //     if (!user) {
    //         throw new BadRequestError('E-mail Or Password not corrent')
    //     }

    //     const verifyPass = await bcrypt.compare(password, user.password);

    //     if (!verifyPass) {
    //         throw new BadRequestError('E-mail Or Password Incorrect')
    //     }

    //     const jwtPayload: JwtPayload = {
    //         id: user.id,
    //         email: user.email,
    //     }

    //     const access_token = createAccessToken(jwtPayload);

    //     const refreshToken = createRefreshToken(jwtPayload);

    //     const { password: _, ...userLogin } = user

    //     return res.json({
    //         user: userLogin,
    //         access_token,
    //         refresh_token: refreshToken,

    //     })
    // }








    uploadFile = async (req: Request, res: Response) => {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // ví dụ: return lại tên file
        res.json({ filename: file.originalname });
    }



}
