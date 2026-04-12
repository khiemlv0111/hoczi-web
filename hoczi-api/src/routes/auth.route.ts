import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';
// import { upload } from '../helpers/aws_s3';


const authRoutes = Router();



authRoutes.post('/register', new AuthController().register);
authRoutes.post('/login', new AuthController().register);

// authRoutes.post('/login', controller.login);
// authRoutes.post('/register', controller.register);


export default authRoutes;
