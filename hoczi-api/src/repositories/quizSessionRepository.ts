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
    async getDetail(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['user_answers'],
            
        });
    }

    async findByUserId(userId: number) {
        return this.repo.find({
            where: { user_id: userId },
            relations: ['quiz', 'user_answers']
        });
    }

    async findByQuizId(quizId: number) {
        return this.repo.find({
            where: { quiz_id: quizId },
            relations: ['quiz', 'user_answers'],
            order: { end_time: 'DESC' }
        });
    }

    async startQuiz(userId: number, quizId: number) {
        const quizSession = this.repo.create({
            quiz_id: quizId,
            user_id: userId,
            status: "in_progress",
            start_time: new Date(),
        });

        return await this.repo.save(quizSession);
    }

    async saveOne(payload: any) {
        return this.repo.save(payload);
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