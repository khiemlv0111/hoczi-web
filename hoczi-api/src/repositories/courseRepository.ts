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

    async courseDetail(courseId: number) {
        return this.repo.findOne({
            where: { id: courseId },
            relations: ['modules', 'modules.courseModuleLessons', 'modules.courseModuleLessons.lesson']
        });
    }


}

export const courseRepository = new CourseRepository();