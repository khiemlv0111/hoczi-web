import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AddminController } from '../controllers/AdminController';
import { UserController } from '../controllers/UserController';
// import { upload } from '../helpers/aws_s3';


const adminRoutes = Router();



adminRoutes.post('/create-user', new AddminController().homePage);
adminRoutes.post('/send-email', new AddminController().sendEmail);

export default adminRoutes;
