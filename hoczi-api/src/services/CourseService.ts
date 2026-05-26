import { courseRepository } from "../repositories/courseRepository";
import { courseModuleRepository } from "../repositories/courseModuleRepository";
import { courseModuleLessonRepository } from "../repositories/courseModuleLessonRepository";


export class CourseService {

    async getCoursesBySubjectCode(subjectCode: string) {
        return courseRepository.getCoursesBySubjectCode(subjectCode);
    }

    async createCourse(userId: number, data: any) {
        return courseRepository.createCourse(userId, data);
    }
    async createCourseModule(userId: number, data: any) {
        return courseModuleRepository.createCourseModule(userId, data);
    }

    async getCourseDetail(courseId: number) {
        return courseRepository.courseDetail(courseId);
    }

    async addLessonToCourseModule(data: any) {
        return courseModuleLessonRepository.addLessonToCourseModule(data);
    }
}