import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
import { QuestionController } from '../controllers/QuestionController';
// import { upload } from '../helpers/aws_s3';

import { LessonController } from '../controllers/LessonController';



const lessonRoutes = Router();


// lessonRoutes.get('/get-classes-by-teacher', new LessonController().createLesson);



lessonRoutes.post('/create-lesson', new LessonController().createLesson);


lessonRoutes.post('/create-assignment', new LessonController().createAssignment);

// lessonRoutes.post('/add-member', new ClassController().addMember);

// lessonRoutes.delete('/remove-member/:classId/:userId', new LessonController().removeMember);



lessonRoutes.get('/get-my-lessons', new LessonController().getMyLessons);




// classRoutes.post('/start-retry/:id', new QuestionController().startRetry);


export default lessonRoutes;
