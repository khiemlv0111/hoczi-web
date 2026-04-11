import { Router } from 'express'
import adminRoutes from './admin.route';

// import adminRoutes from './admin.route';



const routes = Router();
// routes.use('/', homeRoutes);

// routes.use('/api/auth', authRoutes);

// routes.use('/api/internal', internalRoutes);

// routes.use(authMiddleware);

// routes.use('/api/users', userRoutes);

routes.use('/api/admin', adminRoutes);








export default routes
