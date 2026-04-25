import { AppDataSource } from '../data-source';
import { SubmitQuizSessionRequest } from '../dto/user.dto';
import { QuizSession } from '../entities/QuizSession';

class QuizSessionRepository {
    private get repo() {
        return AppDataSource.getRepository(QuizSession);
    }



    async findAll(limit?: number) {
        return this.repo.find();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id }, relations: ['quiz'] });
    }
    async getDetail(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['user_answers'],

        });
    }

    async findByUserId(userId: number, type?: 'free' | 'assignment') {
        return this.repo.find({
            where: { 
                user_id: userId,
                quiz: { quiz_type: type }
            },
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
        const response = await this.repo.save(payload);
        const quizSession = await this.findById(response.id);
        return quizSession;
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


    async findSessionDetail(sessionId: number) {
        return this.repo.findOne({
            where: { id: sessionId },
            relations: ['quiz', 'user', 'user_answers'] //////////////////////
        });
    }

    async update(id: number, data: Partial<QuizSession>) {
        // await this.repo.update(id, data);
        // return this.findById(id);

        await this.repo.update(id, data);
        const updated = await this.findById(id);
        if (!updated) throw new Error(`QuizSession ${id} not found after update`);
        return updated;
    }
    async findQuizIdAndUserId(quizId: number, userId: number) {
        return this.repo.find({
            where: { quiz_id: quizId, user_id: userId }
        });
    }

}

export const quizSessionRepository = new QuizSessionRepository();