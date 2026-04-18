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

lessonRoutes.get('/get-assignments', new LessonController().getAllAssignments);


lessonRoutes.post('/assign-student-assignment', new LessonController().assignStudentAssignment);


// lessonRoutes.post('/add-member', new ClassController().addMember);

// lessonRoutes.delete('/remove-member/:classId/:userId', new LessonController().removeMember);



lessonRoutes.get('/get-my-lessons', new LessonController().getMyLessons);


lessonRoutes.get('/get-all-subjects', new LessonController().getAllSubjects);

lessonRoutes.post('/add-subject-to-class', new LessonController().addSubjectToClass);


lessonRoutes.get('/my-assignments', new LessonController().getMyAssignments);

lessonRoutes.post('/comment-on-assignment', new LessonController().commentOnAssignment);

lessonRoutes.post('/complete-assignment', new LessonController().commentOnAssignment);

// lessonRoutes.get('/get-my-classes', new LessonController().getMyClasses);


// classRoutes.post('/start-retry/:id', new QuestionController().startRetry);
lessonRoutes.post('/create-quiz-assignment', new LessonController().createNewQuiz);

lessonRoutes.get('/get-my-quizzes', new LessonController().getMyQuizzes);


lessonRoutes.get('/get-quiz-detail/:id', new LessonController().getQuizDetail);


lessonRoutes.post('/mark-quiz-complete/:id', new LessonController().markQuizComplete);


// Teacher create quiz_sessions
lessonRoutes.post('/create-quiz-session-for-assignment', new LessonController().createNewQuizSessionForAssignment);

lessonRoutes.post('/assign-quiz-to-students', new LessonController().assignQuizToStudents);
lessonRoutes.post('/assign-session-to-student', new LessonController().assignSessionToStudent);


lessonRoutes.get('/teacher-get-assignment-student-detail/:assignmentStudentId', new LessonController().teacherGetAssignmentStudentDetail);






export default lessonRoutes;
