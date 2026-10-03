import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    Index,
} from 'typeorm';

// One row per provider call. Holds no prompt text or student data.
@Entity('ai_usage_logs')
@Index(['created_at'])
@Index(['user_id', 'created_at'])
@Index(['tenant_id', 'created_at'])
export class AiUsageLog {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'integer', nullable: true })
    user_id?: number | null;

    @Column({ type: 'integer', nullable: true })
    tenant_id?: number | null;

    // generate | ask | regenerate | ocr | chat
    @Column({ type: 'varchar', length: 50 })
    operation!: string;

    @Column({ type: 'varchar', length: 50 })
    provider!: string;

    @Column({ type: 'varchar', length: 100 })
    model!: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    prompt_version?: string | null;

    @Column({ type: 'integer', default: 0 })
    input_tokens!: number;

    @Column({ type: 'integer', default: 0 })
    output_tokens!: number;

    @Column({ type: 'integer', default: 0 })
    file_search_calls!: number;

    @Column({ type: 'integer', default: 0 })
    latency_ms!: number;

    // success | error | insufficient_evidence | invalid_output
    @Column({ type: 'varchar', length: 30 })
    outcome!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    error_code?: string | null;

    @Column({ type: 'numeric', precision: 12, scale: 6, default: 0 })
    estimated_cost_usd!: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    provider_request_id?: string | null;

    @CreateDateColumn()
    created_at!: Date;
}
