import { Router } from 'express'
import adminRoutes from './admin.route';
import homeRoutes from './home.route';
import questionRoutes from './question.route';

import authRoutes from './auth.route';
import { authMiddleware } from '../middlewares/authMiddleware';

import userRoutes from './user.route';
import classRoutes from './class.route';
import lessonRoutes from './lesson.route';
import chessRoutes from './chess.route';
import bookRoutes from './book.route';
import courseRoutes from './course.route';
import vocabularyRoutes from './vocabulary.route';
import audioRoutes from './audio.route';




const routes = Router();
routes.use('/', homeRoutes);


routes.use('/api/auth', authRoutes);

routes.use('/api/admin', adminRoutes);
routes.use('/api/questions', questionRoutes);

routes.use(authMiddleware);
routes.use('/api/users', userRoutes);
routes.use('/api/classes', classRoutes);
routes.use('/api/lessons', lessonRoutes);
routes.use('/api/chess', chessRoutes);

routes.use('/api/books', bookRoutes);
routes.use('/api/courses', courseRoutes);
routes.use('/api/vocabularies', vocabularyRoutes);

routes.use('/api/audio', audioRoutes);




export default routes
