import { Router } from 'express'
import { CourseController } from '../controllers/CourseController';



const courseRoutes = Router();


courseRoutes.get('/get-courses-by-subject-code/:subjectCode', new CourseController().getCoursesBySubjectCode);



courseRoutes.post('/create-course', new CourseController().createCourse);

courseRoutes.post('/add-member', new CourseController().homePage);

courseRoutes.delete('/remove-member/:classId/:userId', new CourseController().homePage);


courseRoutes.get('/get-my-courses', new CourseController().homePage);


courseRoutes.get('/get-my-course-detail/:classId', new CourseController().homePage);




// classRoutes.get('/get-quiz-session-detail/:id', new QuestionController().getQuizSessionDetail);




// classRoutes.post('/start-retry/:id', new QuestionController().startRetry);


export default courseRoutes;
