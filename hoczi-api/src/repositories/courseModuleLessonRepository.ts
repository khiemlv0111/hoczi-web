import { AppDataSource } from '../data-source';
import { CourseModule } from '../entities/CourseModule';
import { CourseModuleLesson } from '../entities/CourseModuleLesson';

class CourseModuleLessonRepository {
    private get repo() {
        return AppDataSource.getRepository(CourseModuleLesson);
    }


    async createCourseModuleLesson(userId: number, data: Partial<CourseModuleLesson>) {
        return await this.repo.save({ ...data, user_id: userId });

    }

    async courseModuleLessonDetail(id: number) {
        return this.repo.findOne({ where: { id } });
    }


}

export const courseModuleLessonRepository = new CourseModuleLessonRepository();