import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
import { QuestionController } from '../controllers/QuestionController';
// import { upload } from '../helpers/aws_s3';

import { UserController } from '../controllers/UserController';



const userRoutes = Router();


userRoutes.get('/user-profile', new AuthController().userProfile);

userRoutes.get('/user-list', new UserController().getUserList);

userRoutes.post('/start-quiz', new QuestionController().startQuiz);

userRoutes.post('/submit-quiz-session', new QuestionController().submitQuizSession);

userRoutes.get('/my-quiz-sessions', new QuestionController().myQuizSessions);

userRoutes.get('/my-quizzes', new QuestionController().myQuizzes);

userRoutes.get('/get-quiz-session-detail/:id', new QuestionController().getQuizSessionDetail);


userRoutes.get('/session-detail/:id', new QuestionController().getSessionDetail);

userRoutes.post('/start-retry/:id', new QuestionController().startRetry);

userRoutes.put('/update-user/:id', new UserController().updateUser);

userRoutes.get('/all-teacher-questions', new QuestionController().getAllTeacherQuestions);

userRoutes.post('/create-question', new QuestionController().createQuestion);

userRoutes.get('/get-dashboard-result', new UserController().getDashboarResult);

userRoutes.put('/remove-user-from-tenant/:id', new UserController().removeUserFromTenant);



export default userRoutes;
