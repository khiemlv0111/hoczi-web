import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { UpdateUserRequest } from '../dto/user.dto';

import { UserService } from '../services/UserService';
import { isAdmin } from '../utils/string_utils';

const userService = new UserService();

export class UserController {


    async getUserList(req: Request, res: Response) {
        // const { id } = req.user;

        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 20;




        const response = await userService.userList(page, limit);
        return res.json(response);
    }

    async updateUser(req: Request, res: Response) {

        const { id } = req.user;
        const editedUser = await userService.findUserById(Number(id));

        if (!editedUser || !isAdmin(editedUser.role as string)) {
            return res.status(400).json({ success: false, message: "No Permission" });
        }



        const userId = Number(req.params.id);


        const { errors, input } = await RequestValidator(UpdateUserRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const user = await userService.updateUser(userId, input);
        return res.json({ success: true, data: user });

    }

    async getDashboarResult(req: Request, res: Response) {
        const { id } = req.user;

        if (!id) {
            return res.status(400).json({ success: false, message: "No user found" })
        }

        const response = await userService.getDashboardData(Number(id));
        return res.json(response);
    }


}
