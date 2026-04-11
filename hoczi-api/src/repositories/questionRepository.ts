import { AppDataSource } from '../data-source';
import { Question } from '../entities/Question';
import { FindOptionsWhere, ILike } from 'typeorm';

class QuestionRepository {
    private get repo() {
        return AppDataSource.getRepository(Question);
    }

    async findAll(limit?: number) {
        return this.repo.find({
            take: limit,
        });
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async findByQuestionId(quizId: number) {
        return this.repo.find({
            where: { id: quizId },
            order: { id: 'ASC' },
            relations: ['answers'],
        });
    }

    async create(data: Partial<Question>) {
        const question = this.repo.create(data);
        return this.repo.save(question);
    }

    async update(id: number, data: Partial<Question>) {
        await this.repo.update(id, data);
        return this.findById(id);
    }

    async delete(id: string) {
        return this.repo.delete(id);
    }

    async count(where?: FindOptionsWhere<Question>) {
        return this.repo.count({ where });
    }
}

export const questionRepository = new QuestionRepository();