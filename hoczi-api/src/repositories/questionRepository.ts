import { AppDataSource } from '../data-source';
import { CreateQuestionRequest, QuestionFilterDto, TeacherFilterQuestionDto } from '../dto/question.dto';
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

    async filterQuestions(filter?: TeacherFilterQuestionDto) {

        const qb = this.repo
            .createQueryBuilder('question')
            .leftJoinAndSelect('question.answers', 'answers')
            .leftJoinAndSelect('question.grade', 'grade')
            .leftJoinAndSelect('question.category', 'category')
            .leftJoinAndSelect('question.topic', 'topic');


        if (filter?.source === 'teacher') {
            qb.andWhere('question.created_by = :teacherId', {
                teacherId: filter.teacherId,
            });
        } else if (filter?.source === 'system') {
            qb.andWhere('question.is_system = true');
        } else {
            qb.andWhere(
                '(question.created_by = :teacherId OR question.is_system = true)',
                { teacherId: filter?.teacherId }
            );
        }

        if (filter?.categoryId) {
            qb.andWhere('question.category_id = :categoryId', {
                categoryId: filter.categoryId,
            });
        }

        if (filter?.topicId) {
            qb.andWhere('question.topic_id = :topicId', {
                topicId: filter.topicId,
            });
        }

        if (filter?.gradeId) {
            qb.andWhere('question.grade_id = :gradeId', {
                gradeId: filter.gradeId,
            });
        }

        if (filter?.difficulty) {
            qb.andWhere('question.difficulty = :difficulty', {
                difficulty: filter.difficulty,
            });
        }

        if (filter?.keyword) {
            qb.andWhere('question.content ILIKE :keyword', {
                keyword: `%${filter.keyword}%`,
            });
        }

        if (filter?.quizId) {
            qb.andWhere(
                `question.id NOT IN (
                SELECT qq.question_id
                FROM quiz_questions qq
                WHERE qq.quiz_id = :quizId
            )`,
                { quizId: filter.quizId }
            );
        }

        const page = filter?.page || 1;
        const perPage = filter?.perPage || 20;

        qb.orderBy('question.created_at', 'DESC')
            .skip((page - 1) * perPage)
            .take(perPage);

        const [items, total] = await qb.getManyAndCount();

        return {
            items,
            total,
            page,
            perPage,
            totalPages: Math.ceil(total / perPage),
        };
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