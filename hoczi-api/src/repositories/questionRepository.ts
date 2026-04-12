import { AppDataSource } from '../data-source';
import { CreateQuestionRequest, QuestionFilterDto } from '../dto/question.dto';
import { Question } from '../entities/Question';
import { FindOptionsWhere, ILike } from 'typeorm';

class QuestionRepository {
    private get repo() {
        return AppDataSource.getRepository(Question);
    }

    async findAll(filter?: QuestionFilterDto, limit?: number) {
        let limit_count = limit ? limit : 99999;
        return this.repo.find({
            where: {
                ...(filter?.categoryId && { category_id: filter.categoryId }),
                ...(filter?.topicId && { topic_id: filter.topicId }),
                ...(filter?.gradeId && { grade_id: filter.gradeId }),
            },
            relations: ['answers'],
            take: limit_count,
        });
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async findByQuestionId(questionId: number) {
        return this.repo.findOne({
            where: { id: questionId },
            relations: ['answers'],
        });
    }

    async deleteQuestion(questionId: number) {

        const question = await this.repo.findOne({
            where: { id: questionId },
            relations: ['answers'],
        });

        if (!question) return null;

        return this.repo.remove(question);


        // return this.repo.delete({ id: questionId });
    }

    async create(data: CreateQuestionRequest) {
        const question = this.repo.create({
            content: data.content,
            type: data.type,
            grade_id: data.gradeId,
            difficulty: data.difficulty,
            category_id: data.categoryId,
            topic_id: data.topicId,
            explanation: data.explanation,
        });
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