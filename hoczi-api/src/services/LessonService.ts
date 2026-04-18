import { lessonRepository } from "../repositories/lessonRepository";
import { assignmentRepository } from "../repositories/assignmentRepository";
import { AssignStudentAssignmentRequest, CommentOnAssignmentRequest, CreateAssignmentRequest } from "../dto/lesson.dto";
import { subjectRepository } from "../repositories/subjectRepository";
import { classSubjectRepository } from "../repositories/classSubjectRepository";

import { assignmentStudentRepository } from "../repositories/assignmentStudentRepository";
import { assignmentCommentRepository } from "../repositories/assignmentCommentRepository";

import { quizRepository } from "../repositories/quizRepository";
import { quizSessionRepository } from "../repositories/quizSessionRepository";
import { BadRequestError } from "../errors/api-erros";
import { userAnswerRepository } from "../repositories/userAnswerRepository";



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

    async commentOnAssignment(userId: number, data: CommentOnAssignmentRequest) {
        return assignmentCommentRepository.createOne(userId, data);
    }

    async createNewQuiz(userId: number, data: any) {
        const dto = {
            ...data,
            created_by: userId,
        }
        return quizRepository.createOne(dto);
    }

    async getMyQuizzes(userId: number) {
        return quizRepository.findByUserId(userId);
    }

    async getQuizDetail(quizId: number) {
        return quizRepository.findOnDetail(quizId);
    }

    async markQuizComplete(quizId: number) {
        return quizRepository.updateStatus(quizId);
    }

    async assignSessionToStudent(sessionId: number, studentId: number, teacherId?: number, title?: string, due_at?: string) {
        await quizSessionRepository.saveOne({ id: sessionId, user_id: studentId });
        if (title && teacherId) {
            const assignment = await assignmentRepository.createOne(teacherId, { title, due_at: due_at ?? '', description: '', assignment_type: 'quiz' } as any);
            await assignmentStudentRepository.createOne({ assignment_id: assignment.id, student_id: studentId });
        }
        return { success: true, message: 'Session assigned to student' };
    }





    async assignQuizToStudents(quizId: number, studentIds: number[]) {
        // const asignmentData: CreateAssignmentRequest = {
        //     title: 'assing quiz to student',
        //     // class_id: null,
        //     // lesson_id: null,
        //     // class_subject_id: null,
        //     due_at: '',
        //     assignment_type:'quiz-assignment',
        //     description: 'assign quiz to student',

        // }




        // const newAssignment = await assignmentRepository.createOne(studentIds[0], asignmentData);
        const sessions = await Promise.all(
            studentIds.map(studentId => quizSessionRepository.startQuiz(studentId, quizId))
        );
        return {
            success: true,
            message: 'Quiz assigned to students',
            sessions,
        };
    }







    async createNewQuizSessionAssignment(userId: number, quizId: number, questionIds: number[]) {
        const quiz = await quizRepository.findById(quizId);
        const quizSession = await quizSessionRepository.startQuiz(userId, quizId);

        if (!quizSession) {
            throw new BadRequestError("Quiz session not found");
        }

        if (!quiz) {
            throw new BadRequestError("Quiz not found");
        }

        if (quizSession.user_id !== userId) {
            throw new BadRequestError("You cannot submit this quiz session");
        }

        if (quizSession.status === "completed") {
            throw new BadRequestError("Quiz session already submitted");
        }

        // update session
        quizSession.score = 0;
        quizSession.correct_answers = 0;
        quizSession.total_questions = questionIds.length;
        quizSession.status = "draft";
        quizSession.start_time = new Date();

        // 3. Update session và save
        await quizSessionRepository.update(quizSession.id, {
            score: 0,
            correct_answers: 0,
            total_questions: questionIds.length,
            status: "draft",
            start_time: new Date(),
        });

        // create user_answers
        const userAnswersPayload = questionIds.map((questionId) => ({
            session_id: quizSession.id,
            question_id: questionId,
            answer_id: null,
            is_correct: false,

        }));

        if (!userAnswersPayload || userAnswersPayload.length === 0) {
            throw new BadRequestError("Quizzes Answers not found");
        }

        if (userAnswersPayload.length > 0) {
            await userAnswerRepository.createMany(userAnswersPayload);
        }


        return {
            success: true,
            message: 'Questions added to quiz',
            quiz_id: quizId,
            quizSession: quizSession,
        };
    }

     async getAssignmentStudentDetail(assignmentStudentId: number) {
        const response = await assignmentStudentRepository.findAssignmentStudentDetail(assignmentStudentId);
        return {
            success: true,
            message: 'Get Assignment Student success',
            data: response,
        };

    }


}