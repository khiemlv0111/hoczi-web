import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
import { QuestionController } from '../controllers/QuestionController';
// import { upload } from '../helpers/aws_s3';

import { ClassController } from '../controllers/ClassController';



const classRoutes = Router();


classRoutes.get('/get-classes-by-teacher', new ClassController().getClassByTeacher);



classRoutes.post('/create-class', new ClassController().createClass);

classRoutes.post('/add-member', new ClassController().addMember);

classRoutes.delete('/remove-member/:classId/:userId', new ClassController().removeMember);


classRoutes.get('/get-my-classes', new ClassController().getMyClasses);


classRoutes.get('/get-my-class-detail/:classId', new ClassController().getMyClassDetail);




// classRoutes.get('/get-quiz-session-detail/:id', new QuestionController().getQuizSessionDetail);




// classRoutes.post('/start-retry/:id', new QuestionController().startRetry);


export default classRoutes;
