import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { UserRegisterRequest } from '../dto/user.dto';
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
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const response = await userService.login({ email, password });


        return res.json(response);;
    }

    async userProfile(req: Request, res: Response) {
        const { id } = req.user;



        const response = await userService.userProfile(Number(id));
        return res.json(response);
    }


        async getUserList(req: Request, res: Response) {
        const { id } = req.user;



        const response = await userService.userProfile(Number(id));
        return res.json(response);
    }














    uploadFile = async (req: Request, res: Response) => {
        const file = (req as any).file;

        if (!file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // ví dụ: return lại tên file
        res.json({ filename: file.originalname });
    }



}
