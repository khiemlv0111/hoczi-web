import { AppDataSource } from '../data-source';
import { CreateAnswerRequest, CreateQuestionRequest } from '../dto/question.dto';
import { Answer } from '../entities/Answer';
import { Question } from '../entities/Question';
import { FindOptionsWhere, ILike } from 'typeorm';

class AnswerRepository {
    private get repo() {
        return AppDataSource.getRepository(Answer);
    }

    async findAll(limit?: number) {
        return this.repo.find({
            relations: ['question'],
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
            relations: ['question'],
        });
    }

    async create(data: CreateAnswerRequest) {
        const answer = this.repo.create({
            content: data.content,
            question_id: data.questionId,
            is_correct: data.isCorrect,
        });
        return this.repo.save(answer);
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

export const answerRepository = new AnswerRepository();