import { Router } from 'express'
import { CourseController } from '../controllers/CourseController';



const courseRoutes = Router();


courseRoutes.get('/get-courses-by-subject-code/:subjectCode', new CourseController().getCoursesBySubjectCode);

courseRoutes.get('/get-course-detail/:id', new CourseController().getCourseDetail);

courseRoutes.post('/create-course', new CourseController().createCourse);

courseRoutes.post('/add-member', new CourseController().homePage);

courseRoutes.delete('/remove-member/:classId/:userId', new CourseController().homePage);


courseRoutes.get('/get-my-courses', new CourseController().homePage);







export default courseRoutes;
