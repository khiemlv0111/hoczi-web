import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
import { QuestionController } from '../controllers/QuestionController';
// import { upload } from '../helpers/aws_s3';


const userRoutes = Router();



userRoutes.get('/user-profile', new AuthController().userProfile);

userRoutes.post('/start-quiz', new QuestionController().startQuiz);

userRoutes.post('/submit-quiz-session', new QuestionController().submitQuizSession);


export default userRoutes;
