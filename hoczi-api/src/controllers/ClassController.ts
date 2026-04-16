import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { ClassService } from '../services/ClassService';
import { AddMemberToClassRequest, CreateClassRequest } from '../dto/class.dto';


const classService = new ClassService();
export class ClassController {


    async getClassByTeacher(req: Request, res: Response) {
        // const { id } = req.user;


         const { id } = req.user;


        const response = await classService.getClassesByTeacherId(Number(id));
        return res.json(response);
    }

    async createClass(req: Request, res: Response) {
        // const { id } = req.user;


        const { id } = req.user;



        const { errors, input } = await RequestValidator(CreateClassRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }




        const response = await classService.createClass(Number(id), input);
        return res.json(response);
    }



    async addMember(req: Request, res: Response) {
        // const { id } = req.user;


        const { id } = req.user;


        const { errors, input } = await RequestValidator(AddMemberToClassRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }


        const response = await classService.addMember(Number(input.class_id), Number(input.user_id));
        return res.json(response);
    }


    async removeMember(req: Request, res: Response) {
        // const { id } = req.user;

         const classId = Number(req.params.classId);
         const userId = Number(req.params.userId);


        const response = await classService.removeMember(classId, userId);
        return res.json(response);
    }



}
