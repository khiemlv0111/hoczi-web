import { courseRepository } from "../repositories/courseRepository";


export class CourseService {

    async getCoursesBySubjectCode(subjectCode: string) {
        return courseRepository.getCoursesBySubjectCode(subjectCode);
    }

    async createCourse(userId: number, data: any) {
        return courseRepository.createCourse(userId, data);
    }
}