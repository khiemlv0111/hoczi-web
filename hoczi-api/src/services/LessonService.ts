import { classRepository } from "../repositories/classRepository";
import { lessonRepository } from "../repositories/lessonRepository";
import { assignmentRepository } from "../repositories/assignmentRepository";
import { CreateAssignmentRequest } from "../dto/lesson.dto";



export class LessonService {

    private readonly QUESTION_LIMIT = 30;

    async getMyLessons(userId: number, page: number, limit: number) {
        return lessonRepository.findLessons(userId, page, limit);
    }

    async createLesson(userId: number, data: any) {
        return lessonRepository.createOne(userId, data);
    }


    async createAssignment(userId: number, data: CreateAssignmentRequest) {
        return assignmentRepository.createOne(userId, data);
    }

    // async addMember(classId: number, userId: number) {
    //     return classMemberRepository.createOne(classId, userId);
    // }

    // async removeMember(classId: number, userId: number) {
    //     return classMemberRepository.deleteOne(classId, userId);
    // }
}