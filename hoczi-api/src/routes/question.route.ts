import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
// import { AddminController } from '../controllers/AdminController';
import { QuestionController } from '../controllers/QuestionController';
// import { upload } from '../helpers/aws_s3';


const questionRoutes = Router();

// quizzRoutes.post('/create-user', new QuizzController().homePage);
questionRoutes.get('/question-list', new QuestionController().getQuestionList);
questionRoutes.post('/create-question', new QuestionController().createQuestion);




export default questionRoutes;
