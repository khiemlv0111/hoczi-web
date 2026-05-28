import { Router } from 'express'
import { VocabularyController } from '../controllers/VocabularyController';



const vocabularyRoutes = Router();


vocabularyRoutes.get('/get-vocabularies-by-lesson/:lessonId', new VocabularyController().getVocabulariesByLessonId);
vocabularyRoutes.get('/get-vocabularies', new VocabularyController().getVocabularies);

vocabularyRoutes.post('/create-vocabulary/:lessonId', new VocabularyController().createVocabulary);


export default vocabularyRoutes;
