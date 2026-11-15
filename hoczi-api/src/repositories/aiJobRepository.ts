import { AppDataSource } from '../data-source';
import { AiJob, AiJobStatus } from '../entities/AiJob';

class AiJobRepository {
    private get repo() {
        return AppDataSource.getRepository(AiJob);
    }

    // runAfter schedules the job for later (e.g. the answers email one hour after the questions).
    async enqueue(type: string, payload: Record<string, any>, maxAttempts = 5, runAfter?: Date) {
        return this.repo.save(this.repo.create({
            type, payload, max_attempts: maxAttempts, ...(runAfter ? { run_after: runAfter } : {}),
        }));
    }

    // Atomically claim the oldest runnable job. SKIP LOCKED lets several workers run safely.
    async claimNext(workerId: string): Promise<AiJob | null> {
        const rows: AiJob[] = await AppDataSource.query(
            `UPDATE ai_jobs
                SET status = $1, locked_at = now(), locked_by = $2, attempts = attempts + 1, updated_at = now()
              WHERE id = (
                    SELECT id FROM ai_jobs
                     WHERE status = $3 AND run_after <= now()
                     ORDER BY id
                     FOR UPDATE SKIP LOCKED
                     LIMIT 1)
          RETURNING *`,
            [AiJobStatus.RUNNING, workerId, AiJobStatus.QUEUED],
        ).then((result: any) => (Array.isArray(result[0]) ? result[0] : result));
        return rows[0] ?? null;
    }

    // Jobs left "running" by a crashed worker go back to the queue. With `type`, only that job type
    // (long jobs that send heartbeats can use a shorter threshold than the global one).
    async requeueStale(staleMinutes: number, type?: string) {
        await AppDataSource.query(
            `UPDATE ai_jobs SET status = $1, locked_at = NULL, locked_by = NULL, updated_at = now()
              WHERE status = $2 AND locked_at < now() - ($3 || ' minutes')::interval
                AND ($4::varchar IS NULL OR type = $4)`,
            [AiJobStatus.QUEUED, AiJobStatus.RUNNING, String(staleMinutes), type ?? null],
        );
    }

    // Long-running jobs call this regularly so they are not mistaken for crashed ones.
    async heartbeat(id: number) {
        await AppDataSource.query(`UPDATE ai_jobs SET locked_at = now() WHERE id = $1 AND status = $2`, [id, AiJobStatus.RUNNING]);
    }

    async markSucceeded(id: number) {
        await this.repo.update(id, { status: AiJobStatus.SUCCEEDED, locked_at: null, locked_by: null, last_error: null });
    }

    async markFailed(id: number, error: string) {
        await this.repo.update(id, { status: AiJobStatus.FAILED, locked_at: null, locked_by: null, last_error: error });
    }

    async retryLater(id: number, error: string, delaySeconds: number) {
        await this.repo.update(id, {
            status: AiJobStatus.QUEUED,
            locked_at: null,
            locked_by: null,
            last_error: error,
            run_after: new Date(Date.now() + delaySeconds * 1000),
        });
    }
}

export const aiJobRepository = new AiJobRepository();
