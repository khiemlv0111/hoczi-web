import { Request, Response } from 'express'
import { CourseService } from '../services/CourseService';
import { RequestValidator } from '../dto/requestValidator';
import { CreateCourseRequest } from '../dto/course.dto';

const courseService = new CourseService();


export class CourseController {

    async getCoursesBySubjectCode(req: Request, res: Response) {
        const userId = req.user.id;

        const subjectCode = req.params.subjectCode as string;

        const response = await courseService.getCoursesBySubjectCode(subjectCode);
        return res.json(response);
    }

    async createCourse(req: Request, res: Response) {
        const userId = req.user.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }


        const { errors, input } = await RequestValidator(CreateCourseRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await courseService.createCourse(userId, input);
        return res.json(response);
    }



    async homePage(req: Request, res: Response) {

        return courseService.createCourse(1, {
            title: 'Khóa học lập trình cơ bản',
            description: 'Khóa học này giúp bạn nắm vững kiến thức lập trình cơ bản, từ cách viết mã đến tư duy giải quyết vấn đề.',
            thumbnail_url: 'https://example.com/course-thumbnail.jpg',
            slug: 'khoa-hoc-lap-trinh-co-ban'
        });
    }

}