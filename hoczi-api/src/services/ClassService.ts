import { classRepository } from "../repositories/classRepository";



export class ClassService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    async getClassesByTeacherId(teacherId: number) {
        return classRepository.findMany(teacherId);
    }

    async createClass(teacherId: number, data: any) {
        return classRepository.createOne(teacherId, data);
    }
}