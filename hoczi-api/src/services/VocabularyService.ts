import { vocabularyRepository } from "../repositories/vocabularyRepository";
import { lessonVocabularyRepository } from "../repositories/lessonVocabularyRepository";


export class VocabularyService {

    async createVocabulary(lessonId: number, data: any) {
        const vocabulary = await vocabularyRepository.createVocabulary(data);
        await lessonVocabularyRepository.createLessonVocabulary(lessonId, vocabulary.id);
        return vocabulary;
    }

    async getVocabulariesByLessonId(lessonId: number) {
        return lessonVocabularyRepository.getVocabulariesByLessonId(lessonId);
    }

    async getVocabularies() {
        return vocabularyRepository.findVocabularies();
    }

    async addVocabularyToLesson(data: { lessonId: number, vocabularyId: number }) {
       
       return await lessonVocabularyRepository.createLessonVocabulary(data.lessonId, data.vocabularyId);

    }

}