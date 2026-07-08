import { AppDataSource } from '../data-source';
import { LearningContent } from '../entities/LearningContent';

class LearningContentRepository {
    private get repo() {
        return AppDataSource.getRepository(LearningContent);
    }


    async createLearningContent(userId: number, data: Partial<LearningContent>) {
       return await this.repo.save({ ...data, user_id: userId });
  
    }

    async learningContentDetail(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['audios'],
        });
    }

    async learningContentList(userId: number) {
        return this.repo.find({
            where: { user_id: userId },
            relations: ['audios'],
        });
    }


}

export const learningContentRepository = new LearningContentRepository();