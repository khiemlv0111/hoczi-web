import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { CreatePageRequest, UpdateUserRequest } from '../dto/user.dto';

import { UserService } from '../services/UserService';
import { isAdmin } from '../utils/string_utils';

const userService = new UserService();

export class UserController {


    async getUserList(req: Request, res: Response) {
        // const { id } = req.user;

        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 20;
        const keyword = req.query.keyword ? String(req.query.keyword).trim() : undefined;

        const response = await userService.userList(page, limit, keyword);
        return res.json(response);
    }

    async getUserTenantList(req: Request, res: Response) {
        // const { id } = req.user;

        const keyword = req.query.keyword ? String(req.query.keyword).trim() : undefined;

        const response = await userService.userTenantList(keyword);
        return res.json(response);
    }

    async updateUser(req: Request, res: Response) {

        const { id } = req.user;
        const editedUser = await userService.findUserById(Number(id));

        if (!editedUser || !isAdmin(editedUser.role as string)) {
            return res.status(400).json({ success: false, message: "No Permission" });
        }



        const userId = Number(req.params.id);

        if(Number(id) === userId){
            return res.status(400).json({ success: false, message: "Cannt update yourself" });
        }


        const { errors, input } = await RequestValidator(UpdateUserRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const user = await userService.updateUser(userId, input);
        return res.json({ success: true, data: user });

    }

    async removeUserFromTenant(req: Request, res: Response) {
        const userId = Number(req.params.id);
        console.log('USER ID===', userId);
        
        const user = await userService.removeUserFromTenant(userId);
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

    async getUserDetail(req: Request, res: Response) {
        const userId = Number(req.params.id);

        const user = await userService.getUserDetail(userId);
        return res.json({ success: true, data: user });
    }


    async getUserListSameTenant(req: Request, res: Response) {
        const { id } = req.user;

        const keyword = req.query.keyword ? String(req.query.keyword).trim() : undefined;

        const response = await userService.getSameTenantUsers(Number(id), keyword);
        return res.json(response);
    }


    async createPage(req: Request, res: Response) {
        // Implementation for creating a new page
        const { id } = req.user;
        const { errors, input } = await RequestValidator(CreatePageRequest, req.body);

        const page = await userService.createPage(Number(id), input);
        return res.json({ success: true, data: page });
    }

    async getPageDetail(req: Request, res: Response) {
        const slug = req.params.slug as string;
        const page = await userService.getPageDetail(slug);
        return res.json({ success: true, data: page });
    }

    


}
