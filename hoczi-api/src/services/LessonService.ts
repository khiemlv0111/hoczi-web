import { lessonRepository } from "../repositories/lessonRepository";
import { assignmentRepository } from "../repositories/assignmentRepository";
import { CreateAssignmentRequest } from "../dto/lesson.dto";
import { subjectRepository } from "../repositories/subjectRepository";
import { classSubjectRepository } from "../repositories/classSubjectRepository";




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

    async getAllSubjects() {
        return subjectRepository.findMany();
    }

    async addSubjectToClass(classId: number, subjectId: number, teacherId: number) {
        return classSubjectRepository.addSubjectToClass(classId, subjectId, teacherId);
    }
}