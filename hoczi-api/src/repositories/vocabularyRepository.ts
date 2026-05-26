import { AppDataSource } from '../data-source';

import { Vocabulary } from '../entities/Vocabulary';

class VocabularyRepository {
    private get repo() {
        return AppDataSource.getRepository(Vocabulary);
    }


    async createVocabulary(data: Partial<Vocabulary>) {
        return await this.repo.save(data);
    }

    async vocabulariesByLessonId(lessonId: number) {
        return this.repo.find({ where: { id: lessonId } });
    }


}

export const vocabularyRepository = new VocabularyRepository();