import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import { generateRandomCode } from "../utils";
import bcrypt from 'bcrypt'


export class UserService {
    // async login(loginPayload: any) {
    //     return userRepository.login(loginPayload);
    // }

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
}