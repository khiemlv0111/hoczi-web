import { questionRepository } from "../repositories/questionRepository";
import { categoryRepository } from "../repositories/categoryRepository";
import { gradeRepository } from "../repositories/gradeRepository";
import { topicRepository } from "../repositories/topicRepository";
import { answerRepository } from "../repositories/answerRepository";
import { CreateAnswerRequest, CreateQuestionRequest, QuestionFilterDto } from "../dto/question.dto";

import { quizSessionRepository } from "../repositories/quizSessionRepository";
import { CreateQuizRequest, SubmitQuizSessionRequest } from "../dto/user.dto";
import { BadRequestError } from "../errors/api-erros";
import { userAnswerRepository } from "../repositories/userAnswerRepository";
import { quizRepository } from "../repositories/quizRepository";
import dayjs from "dayjs";
import { userRepository } from "../repositories/userRepository";



export class QuestionService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    async getQuestionById(quizId: number) {
        return questionRepository.findByQuestionId(quizId);
    }

    async deleteQuestion(questionId: number) {
        return questionRepository.deleteQuestion(questionId);
    }

    async getAllQuestions(page: number, limit: number) {
        const questions = await questionRepository.findQuestions(page, limit);
        return questions;

    }

    async getQuestionList(filter?: QuestionFilterDto) {
        const questions = await questionRepository.findAll(filter, this.QUIZ_QUESTION_LIMIT);
        return questions;

    }

    async getCategoryList(filter?: QuestionFilterDto) {
        const result = await categoryRepository.findAll();
        return result;

    }

    async getGradeList(filter?: QuestionFilterDto) {
        const result = await gradeRepository.findAll();
        return result;

    }

    async getTopicList(categoryId?: number) {
        const result = await topicRepository.findAll(categoryId);
        return result;

    }

    async getQuestionDetail(id: number) {
        const question = await questionRepository.findByQuestionId(id);
        return question;

    }


    async createQuestion(userId: number, dto: CreateQuestionRequest) {
        const user = await userRepository.findById(userId);
        if (!user) {
            throw new BadRequestError("User not found");
        }

        let tenantId = null;
        if(user.role !== 'admin') {
            tenantId = user.tenant_id;
        }
        const creaeteQuestionDto = {
            ...dto,
            tenantId: tenantId,
        }

        return questionRepository.create(userId, creaeteQuestionDto);
    }

    async createAnswer(dto: CreateAnswerRequest) {
        return answerRepository.create(dto);
    }

    async startQuiz(userId: number, dto: CreateQuizRequest) {
        const newQuiz = await quizRepository.createOne({
            title: dto.title,
            description: dto.description,
            duration_minutes: dto.duration_minutes,
            total_questions: dto.total_questions,
            quiz_type: dto.quiz_type,
            created_by: userId,
            status: dto.status,
            category_id: dto.category_id,
            topic_id: dto.topic_id,
            grade_id: dto.grade_id
        });
        const newQuizSession = await quizSessionRepository.startQuiz(userId, newQuiz.id);
        return {
            message: "start quiz success",
            success: true,
            quiz: newQuiz,
            quizSession: newQuizSession
        }

    }


    async startRetry(userId: number, quizId: number) {
        const quiz = await quizRepository.findById(quizId);
        if (!quiz) {
            throw new BadRequestError("Quiz not found");
        }

        const allSessions = await quizSessionRepository.findByQuizId(quizId);
        const userSessions = allSessions.filter(s => s.user_id === userId);

        if (userSessions.length >= 3) {
            return {
                message: "you are not allowed",
                success: false,
                quiz: null,
                quizSession: null,
            }
        }

        const lastCompletedSession = userSessions.find(s => s.status === "completed");


        const previousAnswers = lastCompletedSession?.user_answers ?? [];

        const newQuizSession = await quizSessionRepository.startQuiz(userId, quizId);

        let questionList: any[] = [];

        let message = '';

        if (previousAnswers.length > 0) {
            // const questionIds = previousAnswers.map((q) => q.question_id);

            message = 'Questions lấy trong quiz'

            const questionIds = previousAnswers
                .map((q) => q.question_id)
                .filter((id): id is number => id !== null);
            // const questionIds = previousAnswers.map((q) => q.question_id);

            // questionList = await questionRepository.findByIds(questionIds);
            questionList = await questionRepository.findByIds(questionIds);

        } else {

            message = 'Tạo questions mới'

            const filter = {
                gradeId: quiz.grade_id,
                categoryId: quiz.category_id,
                topicId: quiz.topic_id,
            };

            questionList = await questionRepository.findAll(filter, this.QUIZ_QUESTION_LIMIT);

        }

        return {
            message: message,
            success: true,
            quiz: quiz,
            quizSession: newQuizSession,
            userAnswers: previousAnswers,
            questions: questionList
        }

    }


    async startQuizAssignment(userId: number, quizId: number) {
        const quiz = await quizRepository.findById(quizId);
        if (!quiz) {
            throw new BadRequestError("Quiz not found");
        }

        if (quiz.status === "completed") {
            return {
                success: false,
                message: "Quiz already completed",
                quiz: null,
                quizSession: null,
            }
        }

        const allSessions = await quizSessionRepository.findByQuizId(quizId);

        const userSession = allSessions.find(s => s.user_id === userId);

        if (!userSession) {
            throw new BadRequestError("Session not found");
        }


        if (userSession.status === "completed") {
            return {
                success: false,
                message: "Quiz session already submitted",
                quiz: null,
                quizSession: null,
            }
        }

        // check if time is over
        if (userSession?.due_at && dayjs().isAfter(userSession.due_at)) {
            // hết hạn
            return {
                success: false,
                message: "Quiz time has expired",
                quiz: null,
                quizSession: null,
            }
        }

        // const userSession = userSessions[0];


        const previousAnswers = userSession?.user_answers ?? [];

        const newQuizSession = await quizSessionRepository.findById(userSession.id);

        let questionList: any[] = [];

        let message = '';

        if (previousAnswers.length > 0) {
            // const questionIds = previousAnswers.map((q) => q.question_id);

            message = 'Questions Có sẵn trong quiz'

            const questionIds = previousAnswers
                .map((q) => q.question_id)
                .filter((id): id is number => id !== null);
            // const questionIds = previousAnswers.map((q) => q.question_id);

            // questionList = await questionRepository.findByIds(questionIds);
            questionList = await questionRepository.findByIds(questionIds);

        } else {

            message = 'Tạo questions mới'

            const filter = {
                gradeId: quiz.grade_id,
                categoryId: quiz.category_id,
                topicId: quiz.topic_id,
            };

            questionList = await questionRepository.findAll(filter, this.QUIZ_QUESTION_LIMIT);

        }

        return {
            message: message,
            success: true,
            quiz: quiz,
            quizSession: newQuizSession,
            userAnswers: previousAnswers,
            questions: questionList
        }

    }


    async submitQuizSession(userId: number, payload: SubmitQuizSessionRequest) {

        const quizSession = await quizSessionRepository.findById(payload.quiz_session_id);
        const quiz = await quizRepository.findById(payload.quiz_id);

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

        const quizzes = payload.quizzes;

        if (!quizzes || quizzes.length === 0) {
            throw new BadRequestError("Quizzes not found");
        }

        // update session
        quizSession.score = payload.score;
        quizSession.correct_answers = payload.correct_answers;
        quizSession.total_questions = payload.total_questions;
        quizSession.status = "completed";
        quizSession.end_time = new Date();

        // quiz.status = "completed";

        // await quizRepository.saveOne(quiz);
        await quizSessionRepository.saveOne(quizSession);

        // create user_answers
        const userAnswersPayload = quizzes.map((item) => ({
            session_id: quizSession.id,
            question_id: item.question_id,
            answer_id: item.answer_id,
            is_correct: item.is_correct,
        }));

        if (userAnswersPayload.length > 0) {
            await userAnswerRepository.createMany(userAnswersPayload);
        }

        return quizSession;


    }

    async markQuizAsCompleted(userId: number, quizId: number) {
        const quiz = await quizRepository.findById(quizId);

        if (!quiz) {
            throw new BadRequestError("Quiz not found");
        }


        await quizRepository.updateStatus(quizId);

        return {
            message: "Quiz marked as completed",
            success: true,
            quiz: quiz,
        }
    }

    async myQuizSessions(userId: number, type?: 'free' | 'assignment') {
        const quizSessions = await quizSessionRepository.findByUserId(userId, type);
        return {
            message: "get quiz success",
            success: true,
            data: quizSessions
        }

    }

    async myQuizzes(userId: number) {
        const quizSessions = await quizRepository.findByUserId(userId);
        return {
            message: "get quiz success",
            success: true,
            data: quizSessions
        }

    }

    async getSessionDetail(sessionId: number) {

        const session = await quizSessionRepository.findSessionDetail(sessionId);
        const userAnswers = session?.user_answers ?? [];

        const questionIds = userAnswers
            .map((a) => a.question_id)
            .filter((id): id is number => id !== null);

        const questions = await questionRepository.findByIds(questionIds);

        // Map answer vào từng question
        const questionsWithAnswers = questions.map((q) => {
            const userAnswer = userAnswers.find((a) => a.question_id === q.id);
            return {
                ...q,
                user_answer: {
                    answer_id: userAnswer?.answer_id ?? null,
                    is_correct: userAnswer?.is_correct ?? null,
                },
            };
        });

        return {
            message: "get session success",
            success: true,
            data: {
                session,
                questions: questionsWithAnswers,
            },
        };

    }





    async getQuizSessionDetail(id: number) {
        const quizSession = await quizSessionRepository.getDetail(id);
        // const answers = quizSession?.user_answers;

        return {
            message: "get quiz success",
            success: true,
            data: quizSession
        }

    }


    async getAllTeacherQuestions(userId: number, categoryId?: number, gradeId?: number, topicId?: number, page: number = 1, limit: number = 30, source?: 'teacher' | 'system' | 'all', tenantId?: number) {

        const response = await questionRepository.filterQuestions({
            teacherId: userId,
            categoryId,
            gradeId,
            topicId,
            source: source ?? 'teacher',
            page,
            perPage: limit,
            tenantId: source === 'all' ? tenantId : undefined,
        });
        return {
            message: "get questions success",
            success: true,
            data: response.items,
            total: response.total,
        }

    }

}