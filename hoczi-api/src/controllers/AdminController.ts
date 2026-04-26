import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { AssignStudentAssignmentRequest } from '../dto/lesson.dto';
import { SendEmailRequest } from '../dto/user.dto';
import { UserService } from '../services/UserService';
const userService = new UserService();

export class AddminController {



    async homePage(req: Request, res: Response) {

        return res.json({ success: true, message: "Home Page", })
    }

    async sendEmail(req: Request, res: Response) {


        const { errors, input } = await RequestValidator(SendEmailRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await userService.sendEmail(input.name, input.email, input.content);

        return res.json(response);
    }


}
