import { classRepository } from "../repositories/classRepository";
import { classMemberRepository } from "../repositories/classMemberRepository";
// import { classSubjectRepository } from "../repositories/classSubjectRepository";



export class ClassService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    async getClassesByTeacherId(teacherId: number) {
        return classRepository.findMany(teacherId);
    }

    async createClass(teacherId: number, data: any) {
        return classRepository.createOne(teacherId, data);
    }

    async addMember(classId: number, userId: number) {
        return classMemberRepository.createOne(classId, userId);
    }

    async removeMember(classId: number, userId: number) {
        return classMemberRepository.deleteOne(classId, userId);
    }

   
}