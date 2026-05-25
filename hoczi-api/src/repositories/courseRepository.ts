import { AppDataSource } from '../data-source';
import { Course } from '../entities/Course';

class CourseRepository {
    private get repo() {
        return AppDataSource.getRepository(Course);
    }


    async createCourse(userId: number, data: Partial<Course>) {
        return await this.repo.save({ ...data, createdBy: userId });

    }

    async getCoursesBySubjectCode(subjectCode: string) {
        return this.repo.find({ where: { subjectCode: subjectCode } });
    }

    async courseDetail(slug: string) {
        return this.repo.findOne({ where: { slug } });
    }


}

export const courseRepository = new CourseRepository();