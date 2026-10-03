import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';

export enum AiJobType {
    INGEST_DOCUMENT = 'ingest_document',
    DELETE_DOCUMENT = 'delete_document',
    INDEX_KNOWLEDGE_BASE = 'index_knowledge_base',
    UNINDEX_KNOWLEDGE_BASE = 'unindex_knowledge_base',
}

export enum AiJobStatus {
    QUEUED = 'queued',
    RUNNING = 'running',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed',
}

// Durable job queue in Postgres, consumed by src/worker.ts.
@Entity('ai_jobs')
@Index(['status', 'run_after'])
export class AiJob {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 50 })
    type!: string;

    @Column({ type: 'jsonb', default: {} })
    payload!: Record<string, any>;

    @Column({ type: 'varchar', length: 20, default: AiJobStatus.QUEUED })
    status!: string;

    @Column({ type: 'integer', default: 0 })
    attempts!: number;

    @Column({ type: 'integer', default: 5 })
    max_attempts!: number;

    @Column({ type: 'timestamp', default: () => 'now()' })
    run_after!: Date;

    @Column({ type: 'timestamp', nullable: true })
    locked_at?: Date | null;

    @Column({ type: 'varchar', length: 100, nullable: true })
    locked_by?: string | null;

    @Column({ type: 'text', nullable: true })
    last_error?: string | null;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
