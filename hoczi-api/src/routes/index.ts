import { Router } from 'express'
import adminRoutes from './admin.route';
import homeRoutes from './home.route';
import questionRoutes from './question.route';

import authRoutes from './auth.route';
import { authMiddleware } from '../middlewares/authMiddleware';

import userRoutes from './user.route';
import classRoutes from './class.route';
import lessonRoutes from './lesson.route';




const routes = Router();
routes.use('/', homeRoutes);

// routes.use('/api/auth', authRoutes);

// routes.use('/api/internal', internalRoutes);



// routes.use('/api/users', userRoutes);

routes.use('/api/auth', authRoutes);

routes.use('/api/admin', adminRoutes);
routes.use('/api/questions', questionRoutes);

routes.use(authMiddleware);
routes.use('/api/users', userRoutes);
routes.use('/api/classes', classRoutes);
routes.use('/api/lessons', lessonRoutes);



export default routes
