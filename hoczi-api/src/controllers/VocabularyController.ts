import { Request, Response } from 'express'
import { VocabularyService } from '../services/VocabularyService';
import { RequestValidator } from '../dto/requestValidator';
import { CreateCourseRequest, CreateVocabularyRequest } from '../dto/course.dto';

const vocabularyService = new VocabularyService();


export class VocabularyController {

    async getVocabulariesByLessonId(req: Request, res: Response) {

        const lessonId = Number(req.params.lessonId);

        const response = await vocabularyService.getVocabulariesByLessonId(lessonId);
        return res.json(response);
    }

    async createVocabulary(req: Request, res: Response) {
        const userId = req.user.id;
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const lessonId = Number(req.params.lessonId);


        const { errors, input } = await RequestValidator(CreateVocabularyRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await vocabularyService.createVocabulary(lessonId, input);
        return res.json(response);
    }

    async getVocabularies(req: Request, res: Response) {


        const response = await vocabularyService.getVocabularies();
        return res.json(response);
    }

   
}



    // word!: string;
    // pinyin?: string;
    // hanViet?: string;
    // meaningVi?: string;
    // meaningEn?: string;
    // exampleSentence?: string;
    // audioUrl?: string;