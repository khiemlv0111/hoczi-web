import { AppDataSource } from '../data-source';
import { LearningActivity } from '../entities/LearningActivity';

class LearningActivityRepository {
    private get repo() {
        return AppDataSource.getRepository(LearningActivity);
    }

    async findAll(categoryId?: number) {
        if (categoryId) {
            return this.repo.find({ where: { id: categoryId } });
        } else {
            return this.repo.find();

        }

    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }


    async createOne(data: any) {
        const activity = this.repo.create({
            lesson_id: data.lesson_id,
            activity_type: data.activity_type,
            instruction: data.instruction,
            config: data.config,
        });
        return this.repo.save(activity);
    }

    async findByLessonId(lessonId: number) {
        return this.repo.find({ where: {lesson_id: lessonId  } });
    }

    
}

export const learningActivityRepository = new LearningActivityRepository();