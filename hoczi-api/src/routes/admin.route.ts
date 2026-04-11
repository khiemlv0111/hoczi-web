import { Router } from 'express'
// import { UserController } from '../controllers/UserController';
import { AddminController } from '../controllers/AdminController';
// import { upload } from '../helpers/aws_s3';


const adminRoutes = Router();



adminRoutes.post('/create-user', new AddminController().homePage);




export default adminRoutes;
