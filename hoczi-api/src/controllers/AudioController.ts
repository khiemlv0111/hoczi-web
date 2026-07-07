import { Request, Response } from 'express'
import { AudioService } from '../services/AudioService';
import { RequestValidator } from '../dto/requestValidator';
import { AddVocabularyToLessonRequest, CreateCourseRequest, CreateVocabularyRequest } from '../dto/course.dto';
import { audio } from '@elevenlabs/elevenlabs-js/api/resources/dubbing';
// import { content } from '@elevenlabs/elevenlabs-js/api/resources/studio/resources/projects';

const audioService = new AudioService();


export class AudioController {

    async getLearningContentDetail(req: Request, res: Response) {

        const contentId = Number(req.params.id);

        const response = await audioService.getAudioDetail(contentId);
        return res.json(response);
    }

    async getLearningContentList(req: Request, res: Response) {

        // const userId = Number(req.params.userId);

        const userId = req.user.id;

        if (!userId) {
            return res.status(400).json({ success: false, message: "errors" })
        }


        const response = await audioService.getAudioList(userId);
        return res.json(response);
    }

    async createLearningContent(req: Request, res: Response) {
        const userId = req.user.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const title = req.body.content.substring(0, 50) + '...'; // Generate a title based on the content, you can customize this logic

        const audioData = {
            user_id: userId,
            title: title,
            content: req.body.content,
            audioUrl: req.body.audioUrl,
            tenant_id: 1,

        }; // Assuming the audio data is sent in the request body


        const response = await audioService.saveAudio(userId, audioData);
        return res.json(response);
    }




   
}
