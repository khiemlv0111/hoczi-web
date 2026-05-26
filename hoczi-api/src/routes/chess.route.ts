import { Router } from 'express'
import { ChessController } from '../controllers/ChessController';
// import { upload } from '../helpers/aws_s3';


const chessRoutes = Router();



chessRoutes.post('/bot-move', new ChessController().botMove);

export default chessRoutes;
