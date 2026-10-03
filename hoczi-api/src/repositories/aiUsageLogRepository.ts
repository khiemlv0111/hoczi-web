import { AppDataSource } from '../data-source';
import { AiUsageLog } from '../entities/AiUsageLog';

class AiUsageLogRepository {
    private get repo() {
        return AppDataSource.getRepository(AiUsageLog);
    }

    async create(data: Partial<AiUsageLog>) {
        return this.repo.save(this.repo.create(data));
    }

    async countForUserSince(userId: number, since: Date) {
        return this.repo.createQueryBuilder('log')
            .where('log.user_id = :userId AND log.created_at >= :since', { userId, since })
            .getCount();
    }

    async sumCostSince(since: Date, tenantId?: number | null) {
        const qb = this.repo.createQueryBuilder('log')
            .select('COALESCE(SUM(log.estimated_cost_usd), 0)', 'total')
            .where('log.created_at >= :since', { since });
        if (tenantId !== undefined && tenantId !== null) {
            qb.andWhere('log.tenant_id = :tenantId', { tenantId });
        }
        const row = await qb.getRawOne<{ total: string }>();
        return Number(row?.total ?? 0);
    }

    async summarySince(since: Date) {
        return this.repo.createQueryBuilder('log')
            .select('log.operation', 'operation')
            .addSelect('log.outcome', 'outcome')
            .addSelect('COUNT(*)', 'requests')
            .addSelect('SUM(log.input_tokens)', 'input_tokens')
            .addSelect('SUM(log.output_tokens)', 'output_tokens')
            .addSelect('SUM(log.file_search_calls)', 'file_search_calls')
            .addSelect('ROUND(AVG(log.latency_ms))', 'avg_latency_ms')
            .addSelect('SUM(log.estimated_cost_usd)', 'estimated_cost_usd')
            .where('log.created_at >= :since', { since })
            .groupBy('log.operation')
            .addGroupBy('log.outcome')
            .getRawMany();
    }
}

export const aiUsageLogRepository = new AiUsageLogRepository();
