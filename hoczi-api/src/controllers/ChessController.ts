import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { AssignStudentAssignmentRequest } from '../dto/lesson.dto';
import { SendEmailRequest } from '../dto/user.dto';
import { UserService } from '../services/UserService';
import { Chess } from "chess.js";

const chessService = new UserService();

export class ChessController {



    async botMove(req: Request, res: Response) {
        try {
            const { fen, from, to, promotion = "q", level = "easy" } = req.body;
            
        } catch (error) {
            
        }

        // return res.json({ success: true, message: "Home Page", })
    }

   


}
