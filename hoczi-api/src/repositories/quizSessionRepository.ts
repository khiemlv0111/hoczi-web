import { AppDataSource } from '../data-source';
import { SubmitQuizSessionRequest } from '../dto/user.dto';
import { Grade } from '../entities/Grade';
import { QuizSession } from '../entities/QuizSession';

class QuizSessionRepository {
    private get repo() {
        return AppDataSource.getRepository(QuizSession);
    }



    async findAll(limit?: number) {
        return this.repo.find();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async startQuiz(userId: number) {
        const quizSession = this.repo.create({
            user_id: userId,
            status: "in_progress",
            start_time: new Date(),
        });

        return await this.repo.save(quizSession);
    }

    async createOne(userId: number, payload: {
        score: number;
        total_questions: number;
        correct_answers: number;
        status: string;
        start_time: Date;
        end_time: Date;
    }) {
        const quizSession = this.repo.create({
            user_id: userId,
            score: payload.score,
            total_questions: payload.total_questions,
            correct_answers: payload.correct_answers,
            status: payload.status,
            start_time: payload.start_time,
            end_time: payload.end_time,
        });

        return await this.repo.save(quizSession);
    }




    async createOnes(userId: number, data: SubmitQuizSessionRequest) {
        const quizSession = this.repo.create({
            user_id: userId,
            score: data.score,
            total_questions: data.total_questions,
            correct_answers: data.correct_answers,
        });
        return this.repo.save(quizSession);
    }


}

export const quizSessionRepository = new QuizSessionRepository();