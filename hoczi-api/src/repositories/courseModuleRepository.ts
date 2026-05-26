import { AppDataSource } from '../data-source';
import { CourseModule } from '../entities/CourseModule';

class CourseModuleRepository {
    private get repo() {
        return AppDataSource.getRepository(CourseModule);
    }


    async createCourseModule(userId: number, data: Partial<CourseModule>) {
        return await this.repo.save({ ...data, user_id: userId });

    }

    async courseModuleDetail(slug: string) {
        return this.repo.findOne({ where: { slug } });
    }


    


}

export const courseModuleRepository = new CourseModuleRepository();