import { questionRepository } from "../repositories/questionRepository";
import { categoryRepository } from "../repositories/categoryRepository";
import { gradeRepository } from "../repositories/gradeRepository";
import { topicRepository } from "../repositories/topicRepository";
import { answerRepository } from "../repositories/answerRepository";
import { CreateAnswerRequest, CreateQuestionRequest, QuestionFilterDto } from "../dto/question.dto";

import { quizSessionRepository } from "../repositories/quizSessionRepository";
import { CreateQuizRequest, SubmitQuizSessionRequest } from "../dto/user.dto";
import { BadRequestError } from "../helpers/api-erros";
import { userAnswerRepository } from "../repositories/userAnswerRepository";
import { quizRepository } from "../repositories/quizRepository";



export class QuestionService {

    private readonly QUIZ_QUESTION_LIMIT = 15;

    async getQuestionById(quizId: number) {
        return questionRepository.findByQuestionId(quizId);
    }

    async deleteQuestion(questionId: number) {
        return questionRepository.deleteQuestion(questionId);
    }

    async getAllQuestions(filter?: QuestionFilterDto) {
        const questions = await questionRepository.findAll(filter);
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


    async createQuestion(dto: CreateQuestionRequest) {
        return questionRepository.create(dto);
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

        return {
            message: "retry quiz success",
            success: true,
            quiz: quiz,
            quizSession: newQuizSession,
            userAnswers: previousAnswers
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

        quiz.status = "completed";

        await quizRepository.saveOne(quiz);
        await quizSessionRepository.saveOne(quizSession);

        // create user_answers
        const userAnswersPayload = quizzes.map((item) => ({
            session_id: quizSession.id,
            question_id: item.question_id,
            answer_id: item.answer_id,
            is_correct: item.is_correct,
        }));

        console.log('userAnswersPayload', userAnswersPayload);
        console.log('quizSession', quizSession);


        if (userAnswersPayload.length > 0) {
            await userAnswerRepository.createMany(userAnswersPayload);
        }

        return quizSession;


    }

    async myQuizSessions(userId: number) {
        const quizSessions = await quizSessionRepository.findByUserId(userId);
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


    async getQuizSessionDetail(id: number) {
        const quizSession = await quizSessionRepository.getDetail(id);
        // const answers = quizSession?.user_answers;

        return {
            message: "get quiz success",
            success: true,
            data: quizSession
        }

    }

}