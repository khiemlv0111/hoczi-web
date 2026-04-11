import { Request, Response } from 'express'
// import { RequestValidator } from '../helpers/requestValidator';
// import { ChangePasswordRequest } from '../dto/user.dto';
// import { userRepository } from '../repositories/userRepository';
import { BadRequestError } from '../helpers/api-erros';

import bcrypt from 'bcrypt'
import { RequestValidator } from '../helpers/requestValidator';

export class AddminController {



    async homePage(req: Request, res: Response) {

        return res.json({ success: true, message: "Home Page", })
    }

    
}
