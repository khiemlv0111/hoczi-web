import { AppDataSource } from '../data-source';
import { EmailBroadcastRecipient, EmailRecipientStatus } from '../entities/EmailBroadcastRecipient';

function rowsOf(result: any): any[] {
    // UPDATE … RETURNING yields [rows, count] with the pg driver
    return Array.isArray(result?.[0]) ? result[0] : result;
}

class EmailBroadcastRecipientRepository {
    private get repo() {
        return AppDataSource.getRepository(EmailBroadcastRecipient);
    }

    // Atomically takes up to `size` pending recipients (pending → sending). Safe with several workers.
    async claimBatch(broadcastId: number, size: number): Promise<{ id: number; email: string; attempts: number }[]> {
        const rows = rowsOf(await AppDataSource.query(
            `UPDATE email_broadcast_recipients
                SET status = $3, locked_at = now(), updated_at = now()
              WHERE id IN (SELECT id FROM email_broadcast_recipients
                            WHERE broadcast_id = $1 AND status = $4
                            ORDER BY id
                            FOR UPDATE SKIP LOCKED
                            LIMIT $2)
          RETURNING id, email, attempts`,
            [broadcastId, size, EmailRecipientStatus.SENDING, EmailRecipientStatus.PENDING],
        ));
        return rows.map((r) => ({ id: Number(r.id), email: String(r.email), attempts: Number(r.attempts) }));
    }

    // Recipients left "sending" by a crashed worker are sent again (may duplicate those few emails).
    async requeueStaleSending(broadcastId: number, minutes: number) {
        await AppDataSource.query(
            `UPDATE email_broadcast_recipients SET status = $2, locked_at = NULL, updated_at = now()
              WHERE broadcast_id = $1 AND status = $3 AND locked_at < now() - ($4 || ' minutes')::interval`,
            [broadcastId, EmailRecipientStatus.PENDING, EmailRecipientStatus.SENDING, String(minutes)],
        );
    }

    async markSent(id: number, attempts: number, providerMessageId: string | null) {
        await this.repo.update(id, {
            status: EmailRecipientStatus.SENT, attempts, provider_message_id: providerMessageId,
            sent_at: new Date(), error: null, locked_at: null,
        });
    }

    async markFailed(id: number, attempts: number, error: string) {
        await this.repo.update(id, { status: EmailRecipientStatus.FAILED, attempts, error: error.slice(0, 500), locked_at: null });
    }

    // Used when sending cannot continue at all (e.g. email not configured).
    async failAllPending(broadcastId: number, reason: string) {
        await AppDataSource.query(
            `UPDATE email_broadcast_recipients SET status = $2, error = $3, locked_at = NULL, updated_at = now()
              WHERE broadcast_id = $1 AND status IN ($4, $5)`,
            [broadcastId, EmailRecipientStatus.FAILED, reason.slice(0, 500), EmailRecipientStatus.PENDING, EmailRecipientStatus.SENDING],
        );
    }

    async findByBroadcast(broadcastId: number, page: number, limit: number, status?: string) {
        const where = status ? { broadcast_id: broadcastId, status } : { broadcast_id: broadcastId };
        const [items, total] = await this.repo.findAndCount({ where, order: { id: 'ASC' }, take: limit, skip: (page - 1) * limit });
        return { items, total };
    }
}

export const emailBroadcastRecipientRepository = new EmailBroadcastRecipientRepository();
