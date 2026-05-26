import { AppDataSource } from '../data-source';

import { Vocabulary } from '../entities/Vocabulary';

class VocabularyRepository {
    private get repo() {
        return AppDataSource.getRepository(Vocabulary);
    }


    async createVocabulary(userId: number, data: Partial<Vocabulary>) {
        return await this.repo.save({ ...data, user_id: userId });

    }

    async vocabularyDetail(id: number) {
        return this.repo.findOne({ where: { id } });
    }


}

export const vocabularyRepository = new VocabularyRepository();