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
            category_id: data.category_id,
            topic_id: data.topic_id,
            grade_id: data.grade_id,
        });
        return this.repo.save(quiz);
    }


}

export const quizRepository = new QuizRepository();