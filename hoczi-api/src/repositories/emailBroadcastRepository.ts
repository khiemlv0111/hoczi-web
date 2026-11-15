import { AppDataSource } from '../data-source';
import { AiJob, AiJobStatus, AiJobType } from '../entities/AiJob';
import { EmailBroadcast, EmailBroadcastStatus } from '../entities/EmailBroadcast';
import { EmailBroadcastRecipient, EmailRecipientStatus } from '../entities/EmailBroadcastRecipient';

export type NewRecipient = { email: string; user_id: number | null };

const INSERT_CHUNK = 500;

class EmailBroadcastRepository {
    private get repo() {
        return AppDataSource.getRepository(EmailBroadcast);
    }

    private withCreator() {
        return this.repo.createQueryBuilder('b')
            .leftJoin('b.creator', 'creator')
            .addSelect(['creator.id', 'creator.name', 'creator.email']);
    }

    // Broadcast, its recipients and the worker job are created atomically.
    async createWithRecipients(data: Partial<EmailBroadcast>, recipients: NewRecipient[], jobMaxAttempts: number) {
        return AppDataSource.transaction(async (manager) => {
            const broadcast = await manager.save(manager.create(EmailBroadcast, {
                ...data,
                recipient_count: recipients.length,
                status: EmailBroadcastStatus.QUEUED,
            }));
            for (let i = 0; i < recipients.length; i += INSERT_CHUNK) {
                await manager.insert(EmailBroadcastRecipient, recipients.slice(i, i + INSERT_CHUNK).map((r) => ({
                    broadcast_id: broadcast.id, email: r.email, user_id: r.user_id, status: EmailRecipientStatus.PENDING,
                })));
            }
            await manager.save(manager.create(AiJob, {
                type: AiJobType.SEND_EMAIL_BROADCAST,
                payload: { broadcastId: broadcast.id },
                status: AiJobStatus.QUEUED,
                max_attempts: jobMaxAttempts,
            }));
            return broadcast;
        });
    }

    async findByClientRequestId(createdBy: number, clientRequestId: string) {
        return this.withCreator()
            .where('b.created_by = :createdBy AND b.client_request_id = :clientRequestId', { createdBy, clientRequestId })
            .getOne();
    }

    async findById(id: number) {
        return this.withCreator().where('b.id = :id', { id }).getOne();
    }

    // undefined tenantId = all tenants
    async findAll(page: number, limit: number, tenantId?: number) {
        const qb = this.withCreator()
            .orderBy('b.created_at', 'DESC')
            .addOrderBy('b.id', 'DESC')
            .take(limit)
            .skip((page - 1) * limit);
        if (tenantId !== undefined) qb.where('b.tenant_id = :tenantId', { tenantId });
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }

    async markStarted(id: number) {
        await AppDataSource.query(
            `UPDATE email_broadcasts SET status = $2, started_at = COALESCE(started_at, now()), updated_at = now()
              WHERE id = $1 AND status IN ($2, $3)`,
            [id, EmailBroadcastStatus.SENDING, EmailBroadcastStatus.QUEUED],
        );
    }

    // Recomputes the counters from the recipient rows (source of truth).
    async refreshCounts(id: number) {
        await AppDataSource.query(
            `UPDATE email_broadcasts b
                SET sent_count = c.sent, failed_count = c.failed, updated_at = now()
               FROM (SELECT COUNT(*) FILTER (WHERE status = $2) AS sent,
                            COUNT(*) FILTER (WHERE status = $3) AS failed
                       FROM email_broadcast_recipients WHERE broadcast_id = $1) c
              WHERE b.id = $1`,
            [id, EmailRecipientStatus.SENT, EmailRecipientStatus.FAILED],
        );
    }

    // Marks the broadcast finished once no recipient is pending/sending.
    async markFinishedIfDone(id: number) {
        await this.refreshCounts(id);
        await AppDataSource.query(
            `UPDATE email_broadcasts
                SET status = CASE WHEN failed_count > 0 THEN $2 ELSE $3 END,
                    completed_at = now(), updated_at = now()
              WHERE id = $1
                AND NOT EXISTS (SELECT 1 FROM email_broadcast_recipients
                                 WHERE broadcast_id = $1 AND status IN ($4, $5))`,
            [id, EmailBroadcastStatus.COMPLETED_WITH_ERRORS, EmailBroadcastStatus.COMPLETED,
                EmailRecipientStatus.PENDING, EmailRecipientStatus.SENDING],
        );
    }
}

export const emailBroadcastRepository = new EmailBroadcastRepository();
