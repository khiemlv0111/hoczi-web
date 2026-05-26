import { AppDataSource } from '../data-source';
import { Course } from '../entities/Course';
import { LessonVocabulary } from '../entities/LessonVocabulary';

class LessonVocabularyRepository {
    private get repo() {
        return AppDataSource.getRepository(LessonVocabulary);
    }


    async createLessonVocabulary(lessonId: number, vocabularyId: number) {
        return await this.repo.save({ lessonId: lessonId, vocabularyId: vocabularyId });
    }

    async lessonVocabularyDetail(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async getVocabulariesByLessonId(lessonId: number) {
        const rows = await this.repo.find({
            where: { lessonId },
            relations: ['vocabulary'],
            order: { orderIndex: 'ASC' },
        });
        return rows.map(row => row.vocabulary);
    }


}

export const lessonVocabularyRepository = new LessonVocabularyRepository();