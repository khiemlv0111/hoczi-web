import { AppDataSource } from '../data-source';
import { CreateQuestionRequest, QuestionFilterDto } from '../dto/question.dto';
import { Question } from '../entities/Question';
import { FindOptionsWhere, ILike, In } from 'typeorm';

class QuestionRepository {
    private get repo() {
        return AppDataSource.getRepository(Question);
    }

    async findQuestions(page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            relations: ["answers"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }



    async findAll(filter?: QuestionFilterDto, limit?: number) {
        let limit_count = limit ? limit : 99999;
        // Lấy random IDs trước
        const subQuery = await this.repo
            .createQueryBuilder('question')
            .select('question.id')
            .where(filter?.categoryId ? 'question.category_id = :categoryId' : '1=1', { categoryId: filter?.categoryId })
            .andWhere(filter?.topicId ? 'question.topic_id = :topicId' : '1=1', { topicId: filter?.topicId })
            .andWhere(filter?.gradeId ? 'question.grade_id = :gradeId' : '1=1', { gradeId: filter?.gradeId })
            .andWhere(filter?.difficulty ? 'question.difficulty = :difficulty' : '1=1', { difficulty: filter?.difficulty })
            .orderBy('RANDOM()')
            .take(limit_count)
            .getMany();

        const ids = subQuery.map(q => q.id);

        if (ids.length === 0) return [];

        // Sau đó lấy đầy đủ data + answers theo IDs đó
        return this.repo
            .createQueryBuilder('question')
            .leftJoinAndSelect('question.answers', 'answers')
            .where('question.id IN (:...ids)', { ids })
            .getMany();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async findByIds(ids: number[]) {
        // find questions by ids 
        return this.repo.find({
            where: { id: In(ids) },
            relations: ['answers']
        });
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

    async create(userId: number, data: CreateQuestionRequest) {
        const question = this.repo.create({
            content: data.content,
            code: {
                code: data.code
            },
            type: data.type,
            grade_id: data.gradeId,
            difficulty: data.difficulty,
            category_id: data.categoryId,
            topic_id: data.topicId,
            explanation: data.explanation,
            created_by: userId,
        });
        return this.repo.save(question);
    }


    async findTeacherQuestions(userId: number, page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            relations: ["answers"],
            where: { created_by: userId },
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
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