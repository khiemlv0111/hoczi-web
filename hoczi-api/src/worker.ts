import 'dotenv/config'
import os from 'os';
import { AppDataSource } from './data-source';
import { aiConfig } from './config/ai';
import { AiJob, AiJobType } from './entities/AiJob';
import { aiJobRepository } from './repositories/aiJobRepository';
import { AiIngestionService } from './services/AiIngestionService';
import { isTransient, PermanentJobError } from './helpers/ai/errors';

// Background worker for AI jobs (ingestion, deletion, indexing). Run as its own process:
//   dev:  yarn worker:dev     prod: pm2 app "hoczi-ai-worker"
const ingestion = new AiIngestionService();
const workerId = `${os.hostname()}:${process.pid}`;
let stopping = false;

async function runJob(job: AiJob) {
    const p = job.payload ?? {};
    switch (job.type) {
        case AiJobType.INGEST_DOCUMENT:
            return ingestion.ingestDocument(Number(p.documentId), { allowDuplicate: !!p.allowDuplicate });
        case AiJobType.DELETE_DOCUMENT:
            return ingestion.deleteDocument(Number(p.documentId));
        case AiJobType.INDEX_KNOWLEDGE_BASE:
            return ingestion.indexKnowledgeBase(Number(p.knowledgeBaseId));
        case AiJobType.UNINDEX_KNOWLEDGE_BASE:
            return ingestion.unindexKnowledgeBase(String(p.fileId));
        default:
            throw new PermanentJobError(`Unknown job type "${job.type}"`);
    }
}

// Record the final failure on the owning record so admins see it in the UI.
async function onFinalFailure(job: AiJob, message: string) {
    const p = job.payload ?? {};
    if (job.type === AiJobType.INGEST_DOCUMENT || job.type === AiJobType.DELETE_DOCUMENT) {
        await ingestion.markDocumentFailed(Number(p.documentId), message);
    } else if (job.type === AiJobType.INDEX_KNOWLEDGE_BASE) {
        await ingestion.markKnowledgeBaseFailed(Number(p.knowledgeBaseId), message);
    }
}

async function processOne(): Promise<boolean> {
    const job = await aiJobRepository.claimNext(workerId);
    if (!job) return false;

    const started = Date.now();
    console.log(`[worker] job #${job.id} ${job.type} attempt ${job.attempts}/${job.max_attempts}`);
    try {
        await runJob(job);
        await aiJobRepository.markSucceeded(job.id);
        console.log(`[worker] job #${job.id} done in ${Date.now() - started} ms`);
    } catch (error: any) {
        const message = String(error?.message ?? error).slice(0, 2000);
        const retry = !(error instanceof PermanentJobError) && isTransient(error) && job.attempts < job.max_attempts;
        if (retry) {
            const delay = Math.min(60 * 2 ** (job.attempts - 1), 3600); // 1, 2, 4 … min, capped at 1 h
            console.warn(`[worker] job #${job.id} failed (transient), retry in ${delay}s: ${message}`);
            await aiJobRepository.retryLater(job.id, message, delay);
        } else {
            console.error(`[worker] job #${job.id} failed: ${message}`);
            await aiJobRepository.markFailed(job.id, message);
            await onFinalFailure(job, message).catch((e) => console.error('[worker] could not record failure', e));
        }
    }
    return true;
}

async function main() {
    await AppDataSource.initialize();
    console.log(`[worker] started as ${workerId}`);

    let lastStaleCheck = 0;
    while (!stopping) {
        try {
            if (Date.now() - lastStaleCheck > 60_000) {
                await aiJobRepository.requeueStale(aiConfig.worker.staleJobMinutes);
                lastStaleCheck = Date.now();
            }
            const worked = await processOne();
            if (!worked) await new Promise((r) => setTimeout(r, aiConfig.worker.pollMs));
        } catch (error) {
            console.error('[worker] loop error', error);
            await new Promise((r) => setTimeout(r, aiConfig.worker.pollMs * 5));
        }
    }
    await AppDataSource.destroy();
    console.log('[worker] stopped');
}

for (const signal of ['SIGINT', 'SIGTERM'] as const) {
    process.on(signal, () => {
        console.log(`[worker] ${signal} received, finishing current job`);
        stopping = true;
    });
}

main().catch((error) => {
    console.error('[worker] fatal', error);
    process.exit(1);
});
