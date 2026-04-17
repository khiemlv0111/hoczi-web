import { AppDataSource } from '../data-source';
import { CreateQuizRequest, SubmitQuizSessionRequest } from '../dto/user.dto';
import { Grade } from '../entities/Grade';
import { Quiz } from '../entities/Quiz';

class QuizRepository {
    private get repo() {
        return AppDataSource.getRepository(Quiz);
    }



    async findAll(limit?: number) {
        return this.repo.find();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async findByUserId(userId: number) {
        return this.repo.find({
            where: { created_by: userId, quiz_type: 'assignment' },
            relations: ['quiz_sessions']
        });
    }

    async getDetail(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['user_answers']
        });
    }


    async saveOne(payload: any) {
        return this.repo.save(payload);
    }



    async createOne(data: CreateQuizRequest) {
        const quiz = this.repo.create({
            title: data.title,
            description: data.description,
            duration_minutes: data.duration_minutes,
            total_questions: data.total_questions,
            quiz_type: data.quiz_type,
            status: data.status,
            category_id: data.category_id,
            topic_id: data.topic_id,
            grade_id: data.grade_id,
            created_by: data.created_by
        });
        return this.repo.save(quiz);
    }


    async findSessionDetail(sessionId: number) {
        return this.repo.find({
            where: { created_by: sessionId },
            relations: ['quiz_sessions']
        });
    }


}

export const quizRepository = new QuizRepository();