import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
// import { upload } from '../helpers/aws_s3';


const userRoutes = Router();



userRoutes.get('/user-profile', new AuthController().userProfile);
// userRoutes.post('/login', new AuthController().login);

// authRoutes.post('/login', controller.login);
// authRoutes.post('/register', controller.register);


export default userRoutes;
