import { AppDataSource } from '../data-source';
import { Course } from '../entities/Course';
import { LessonVocabulary } from '../entities/LessonVocabulary';

class LessonVocabularyRepository {
    private get repo() {
        return AppDataSource.getRepository(LessonVocabulary);
    }


    async createLessonVocabulary(userId: number, data: Partial<LessonVocabulary>) {
        return await this.repo.save({ ...data, user_id: userId });

    }

    async lessonVocabularyDetail(id: number) {
        return this.repo.findOne({ where: { id } });
    }


}

export const lessonVocabularyRepository = new LessonVocabularyRepository();