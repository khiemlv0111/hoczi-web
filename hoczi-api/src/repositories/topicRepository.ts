import { AppDataSource } from '../data-source';
import { CreateAnswerRequest, CreateQuestionRequest } from '../dto/question.dto';
import { Answer } from '../entities/Answer';
import { Question } from '../entities/Question';
import { FindOptionsWhere, ILike } from 'typeorm';
import { Topic } from '../entities/Topic';

class TopicRepository {
    private get repo() {
        return AppDataSource.getRepository(Topic);
    }



    async findAll(categoryId?: number) {
        if (categoryId) {
            return this.repo.find({ where: { category_id: categoryId } });
        } else {
            return this.repo.find();

        }

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

export const topicRepository = new TopicRepository();