import { Router } from 'express'
import { CourseController } from '../controllers/CourseController';



const vocabularyRoutes = Router();


vocabularyRoutes.get('/get-vocabularies-by-teacher', new CourseController().homePage);



vocabularyRoutes.post('/create-vocabulary', new CourseController().homePage);

vocabularyRoutes.post('/add-member', new CourseController().homePage);

vocabularyRoutes.delete('/remove-member/:classId/:userId', new CourseController().homePage);


vocabularyRoutes.get('/get-my-vocabularies', new CourseController().homePage);


vocabularyRoutes.get('/get-my-vocabulary-detail/:classId', new CourseController().homePage);




// classRoutes.get('/get-quiz-session-detail/:id', new QuestionController().getQuizSessionDetail);




// classRoutes.post('/start-retry/:id', new QuestionController().startRetry);


export default vocabularyRoutes;
