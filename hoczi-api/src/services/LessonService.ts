import { classRepository } from "../repositories/classRepository";
import { lessonRepository } from "../repositories/lessonRepository";



export class LessonService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    // async getClassesByTeacherId(teacherId: number) {
    //     return classRepository.findMany(teacherId);
    // }

    async createLesson(userId: number, data: any) {
        return lessonRepository.createOne(userId, data);
    }

    // async addMember(classId: number, userId: number) {
    //     return classMemberRepository.createOne(classId, userId);
    // }

    // async removeMember(classId: number, userId: number) {
    //     return classMemberRepository.deleteOne(classId, userId);
    // }
}