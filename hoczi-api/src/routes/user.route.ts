import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
import { QuestionController } from '../controllers/QuestionController';
// import { upload } from '../helpers/aws_s3';


const userRoutes = Router();



userRoutes.get('/user-profile', new AuthController().userProfile);

userRoutes.post('/start-quiz', new QuestionController().startQuiz);

userRoutes.post('/submit-quiz-session', new QuestionController().submitQuizSession);

userRoutes.get('/my-quiz-sessions', new QuestionController().myQuizSessions);

userRoutes.get('/my-quizzes', new QuestionController().myQuizzes);

userRoutes.get('/get-quiz-session-detail/:id', new QuestionController().getQuizSessionDetail);




userRoutes.post('/start-retry/:id', new QuestionController().startRetry);




export default userRoutes;
