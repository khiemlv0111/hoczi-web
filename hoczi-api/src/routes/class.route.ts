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



// classRoutes.get('/get-quiz-session-detail/:id', new QuestionController().getQuizSessionDetail);




// classRoutes.post('/start-retry/:id', new QuestionController().startRetry);


export default classRoutes;
