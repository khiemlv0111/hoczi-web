import { AppDataSource } from '../data-source';
import { ExerciseSubscription } from '../entities/ExerciseSubscription';

export type SubscriptionFilter = {
    keyword?: string;
    is_active?: boolean;
    // undefined = all tenants
    tenant_id?: number;
};

class ExerciseSubscriptionRepository {
    private get repo() {
        return AppDataSource.getRepository(ExerciseSubscription);
    }

    private baseQuery() {
        return this.repo.createQueryBuilder('sub')
            .leftJoin('sub.user', 'user')
            .addSelect(['user.id', 'user.name', 'user.email', 'user.tenant_id'])
            .leftJoinAndSelect('sub.subject', 'subject')
            .leftJoinAndSelect('sub.grade', 'grade');
    }

    async findAll(page: number, limit: number, filter: SubscriptionFilter = {}) {
        const qb = this.baseQuery().orderBy('sub.id', 'DESC').take(limit).skip((page - 1) * limit);
        if (filter.tenant_id !== undefined) qb.andWhere('sub.tenant_id = :tid', { tid: filter.tenant_id });
        if (filter.is_active !== undefined) qb.andWhere('sub.is_active = :active', { active: filter.is_active });
        if (filter.keyword) {
            qb.andWhere('(user.name ILIKE :kw OR user.email ILIKE :kw)', { kw: `%${filter.keyword}%` });
        }
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }

    async findByUser(userId: number) {
        return this.baseQuery().where('sub.user_id = :userId', { userId }).orderBy('sub.id', 'ASC').getMany();
    }

    async findById(id: number) {
        return this.baseQuery().where('sub.id = :id', { id }).getOne();
    }

    async findByToken(token: string) {
        return this.baseQuery().where('sub.unsubscribe_token = :token', { token }).getOne();
    }

    async findByUserSubjectGrade(userId: number, subjectId: number, gradeId: number) {
        return this.repo.findOne({ where: { user_id: userId, subject_id: subjectId, grade_id: gradeId } });
    }

    // Largest number of exercises any active subscriber of (subject, grade) needs per day.
    async maxQuestionsPerDay(subjectId: number, gradeId: number): Promise<number> {
        const row = await this.repo.createQueryBuilder('sub')
            .select('MAX(sub.questions_per_day)', 'max')
            .where('sub.subject_id = :subjectId AND sub.grade_id = :gradeId AND sub.is_active = true', { subjectId, gradeId })
            .getRawOne();
        return Number(row?.max ?? 0);
    }

    async create(data: Partial<ExerciseSubscription>) {
        return this.repo.save(this.repo.create(data));
    }

    async update(id: number, data: Partial<ExerciseSubscription>) {
        await this.repo.update(id, data);
    }
}

export const exerciseSubscriptionRepository = new ExerciseSubscriptionRepository();
