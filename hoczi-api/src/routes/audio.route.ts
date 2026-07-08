import { Router } from 'express'
import { AudioController } from '../controllers/AudioController';



const audioRoutes = Router();


audioRoutes.get('/get-audio-list', new AudioController().getLearningContentList);
audioRoutes.get('/get-content-detail/:id', new AudioController().getLearningContentDetail);

audioRoutes.post('/create-audio', new AudioController().createLearningContent);



export default audioRoutes;
