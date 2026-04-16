import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { LessonService } from '../services/LessonService';
import { AddSubjectToClassRequest } from '../dto/class.dto';
import { AssignStudentAssignmentRequest, CommentOnAssignmentRequest, CreateAssignmentRequest, CreateLessonRequest } from '../dto/lesson.dto';


const lessonService = new LessonService();

export class LessonController {


    async getMyLessons(req: Request, res: Response) {
        // const { id } = req.user;


        const { id } = req.user;

        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;


        const response = await lessonService.getMyLessons(Number(id), page, limit);
        return res.json(response);
    }

    async createLesson(req: Request, res: Response) {

        const { id } = req.user;

        if (!id) {
            return res.status(400).json({ success: false, message: "errors" })
        }

        const { errors, input } = await RequestValidator(CreateLessonRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }


        const response = await lessonService.createLesson(Number(id), input);
        return res.json(response);
    }

    async createAssignment(req: Request, res: Response) {

        const { id } = req.user;

        const { errors, input } = await RequestValidator(CreateAssignmentRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await lessonService.createAssignment(Number(id), input);
        return res.json(response);
    }

    async assignStudentAssignment(req: Request, res: Response) {

        const { id } = req.user;

        const { errors, input } = await RequestValidator(AssignStudentAssignmentRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await lessonService.assignStudentAssignment(input);
        return res.json(response);
    }




    async getAllSubjects(req: Request, res: Response) {

        const response = await lessonService.getAllSubjects();
        return res.json(response);
    }

    async getAllAssignments(req: Request, res: Response) {
        const { id } = req.user;
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;


        const response = await lessonService.getAllAssignments(Number(id), page, limit);
        return res.json(response);
    }

    async getMyAssignments(req: Request, res: Response) {
        const { id } = req.user;
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;


        const response = await lessonService.getMyAssignments(Number(id), page, limit);
        return res.json(response);
    }



    async addSubjectToClass(req: Request, res: Response) {

        const { id } = req.user;

        if (!id) {
            return res.status(400).json({ success: false, message: "errors" })
        }

        const { errors, input } = await RequestValidator(AddSubjectToClassRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }


        const response = await lessonService.addSubjectToClass(input.class_id, input.subject_id, id);
        return res.json(response);
    }


    async commentOnAssignment(req: Request, res: Response) {

        const { id } = req.user;

        const { errors, input } = await RequestValidator(CommentOnAssignmentRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await lessonService.commentOnAssignment(Number(id), input);
        return res.json(response);
    }

    async getMyClasses(req: Request, res: Response) {
        const studentId = req.user.id;
        const data = await lessonService.getMyClasses(Number(studentId));

        return res.json({
            success: true,
            message: "get my classes success",
            data,
        });
    }



}
