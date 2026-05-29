import { Router } from 'express'
import { CourseController } from '../controllers/CourseController';



const courseRoutes = Router();


courseRoutes.get('/get-courses-by-subject-code/:subjectCode', new CourseController().getCoursesBySubjectCode);

courseRoutes.get('/get-course-detail/:id', new CourseController().getCourseDetail);

courseRoutes.post('/create-course', new CourseController().createCourse);

courseRoutes.post('/create-course-module', new CourseController().createCourseModule);

courseRoutes.post('/add-lesson-to-course-module', new CourseController().addLessonToCourseModule);


courseRoutes.get('/get-course-lesson-detail/:id', new CourseController().getCourseLessonDetail);









export default courseRoutes;
