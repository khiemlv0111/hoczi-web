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

    async getMyClasses(studentId: number) {
        const classMembers = await classMemberRepository.getMyClasses(studentId);


        return classMembers.map((item) => ({
            id: item.class.id,
            name: item.class.name,
            description: item.class.description,
            teacher_id: item.class.teacher_id,
            grade_id: item.class.grade_id,
            status: item.class.status,
            joined_at: item.joined_at,
        }));
    }


}