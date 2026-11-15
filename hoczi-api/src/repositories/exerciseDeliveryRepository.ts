import { AppDataSource } from '../data-source';
import { ExerciseDelivery, ExerciseDeliveryKind, ExerciseDeliveryStatus } from '../entities/ExerciseDelivery';
import { AiJobStatus, AiJobType } from '../entities/AiJob';

export type DeliveryFilter = {
    date?: string;
    status?: string;
    keyword?: string;
    // undefined = all tenants
    tenant_id?: number;
};

function rowsOf(result: any): any[] {
    return Array.isArray(result?.[0]) ? result[0] : result;
}

class ExerciseDeliveryRepository {
    private get repo() {
        return AppDataSource.getRepository(ExerciseDelivery);
    }

    /**
     * Creates today's scheduled delivery for every active subscription whose send time has passed
     * (in its own timezone) and queues a questions job for each, in a single statement.
     * The partial unique index makes this idempotent across restarts and concurrent workers.
     * Subscriptions created after today's send time start tomorrow; missed past days are not sent.
     */
    async createDueDeliveriesAndEnqueue(maxAttempts: number): Promise<number[]> {
        const rows = rowsOf(await AppDataSource.query(
            `WITH due AS (
                INSERT INTO exercise_deliveries (subscription_id, user_id, tenant_id, delivery_date, kind, status)
                SELECT s.id, s.user_id, s.tenant_id, (now() AT TIME ZONE s.timezone)::date, $1, $2
                  FROM exercise_subscriptions s
                 WHERE s.is_active = true
                   AND (now() AT TIME ZONE s.timezone)::time >= s.send_time
                   AND (s.created_at AT TIME ZONE s.timezone) < ((now() AT TIME ZONE s.timezone)::date + s.send_time)
                ON CONFLICT (subscription_id, delivery_date) WHERE kind = 'scheduled' DO NOTHING
                RETURNING id
             )
             INSERT INTO ai_jobs (type, payload, status, max_attempts)
             SELECT $3, jsonb_build_object('deliveryId', due.id), $4, $5 FROM due
             RETURNING (payload->>'deliveryId')::int AS delivery_id`,
            [ExerciseDeliveryKind.SCHEDULED, ExerciseDeliveryStatus.PENDING, AiJobType.SEND_DAILY_EXERCISES,
                AiJobStatus.QUEUED, maxAttempts],
        ));
        return rows.map((r) => Number(r.delivery_id));
    }

    async findAll(page: number, limit: number, filter: DeliveryFilter = {}) {
        const qb = this.repo.createQueryBuilder('d')
            .leftJoin('d.user', 'user')
            .addSelect(['user.id', 'user.name', 'user.email'])
            .leftJoinAndSelect('d.subscription', 'sub')
            .leftJoinAndSelect('sub.subject', 'subject')
            .leftJoinAndSelect('sub.grade', 'grade')
            .orderBy('d.id', 'DESC')
            .take(limit)
            .skip((page - 1) * limit);
        if (filter.tenant_id !== undefined) qb.andWhere('d.tenant_id = :tid', { tid: filter.tenant_id });
        if (filter.date) qb.andWhere('d.delivery_date = :date', { date: filter.date });
        if (filter.status) qb.andWhere('d.status = :status', { status: filter.status });
        if (filter.keyword) qb.andWhere('(user.name ILIKE :kw OR user.email ILIKE :kw)', { kw: `%${filter.keyword}%` });
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }

    // Delivery with everything needed to build the emails.
    async findForSending(id: number) {
        return this.repo.createQueryBuilder('d')
            .leftJoinAndSelect('d.subscription', 'sub')
            .leftJoin('sub.user', 'user')
            .addSelect(['user.id', 'user.name', 'user.email'])
            .leftJoinAndSelect('sub.subject', 'subject')
            .leftJoinAndSelect('sub.grade', 'grade')
            .where('d.id = :id', { id })
            .getOne();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async create(data: Partial<ExerciseDelivery>) {
        return this.repo.save(this.repo.create(data));
    }

    async update(id: number, data: Partial<ExerciseDelivery>) {
        await this.repo.update(id, data);
    }
}

export const exerciseDeliveryRepository = new ExerciseDeliveryRepository();
