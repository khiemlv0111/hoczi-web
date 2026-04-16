import { lessonRepository } from "../repositories/lessonRepository";
import { assignmentRepository } from "../repositories/assignmentRepository";
import { AssignStudentAssignmentRequest, CreateAssignmentRequest } from "../dto/lesson.dto";
import { subjectRepository } from "../repositories/subjectRepository";
import { classSubjectRepository } from "../repositories/classSubjectRepository";

import { assignmentStudentRepository } from "../repositories/assignmentStudentRepository";





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

    async getAllAssignments(userId: number, page: number, limit: number) {
        return assignmentRepository.findAssignments(userId, page, limit);
    }

    async addSubjectToClass(classId: number, subjectId: number, teacherId: number) {
        return classSubjectRepository.addSubjectToClass(classId, subjectId, teacherId);
    }

     async assignStudentAssignment(data: AssignStudentAssignmentRequest) {
        return assignmentStudentRepository.createOne(data);
    }

    async getMyAssignments(userId: number, page: number, limit: number) {
        return assignmentStudentRepository.findByUserId(userId, page, limit);
    }
}