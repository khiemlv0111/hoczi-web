import { vocabularyRepository } from "../repositories/vocabularyRepository";
import { lessonVocabularyRepository } from "../repositories/lessonVocabularyRepository";
import { lessonRepository } from "../repositories/lessonRepository";


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
        const lesson = await lessonRepository.findOne(data.lessonId);
        if (!lesson) {
            throw new Error('Lesson not found');
        }
        if (lesson.lesson_type == 'quiz' || lesson.lesson_type == 'assignment') {
            throw new Error('Lesson is not possible to add vocabulary');
        }
        return await lessonVocabularyRepository.createLessonVocabulary(data.lessonId, data.vocabularyId);
    }

}