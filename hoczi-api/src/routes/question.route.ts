import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
// import { AddminController } from '../controllers/AdminController';
import { QuestionController } from '../controllers/QuestionController';
// import { upload } from '../helpers/aws_s3';


const questionRoutes = Router();

// quizzRoutes.post('/create-user', new QuizzController().homePage);
questionRoutes.get('/question-list', new QuestionController().getQuestionList);
questionRoutes.get('/all-questions', new QuestionController().getAllQuestion);

questionRoutes.get('/question-detail/:id', new QuestionController().getQuestionDetail);


questionRoutes.post('/create-question', new QuestionController().createQuestion);
questionRoutes.post('/create-answer', new QuestionController().createAnswer);

questionRoutes.get('/category-list', new QuestionController().getCategoryList);
questionRoutes.get('/topic-list/:categoryId', new QuestionController().getTopicList);
questionRoutes.get('/grade-list', new QuestionController().getGradeList);

questionRoutes.delete('/delete-question/:id', new QuestionController().deleteQuestion);








export default questionRoutes;
