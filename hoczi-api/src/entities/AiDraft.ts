import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Index,
} from 'typeorm';
import { User } from './User';

export enum AiDraftStatus {
    DRAFT = 'draft',
    APPROVED = 'approved',
    REJECTED = 'rejected',
    PUBLISHED = 'published',
}

// AI-generated content awaiting teacher review. Nothing reaches learners until published.
@Entity('ai_drafts')
export class AiDraft {
    @PrimaryGeneratedColumn()
    id!: number;

    // reading_passage | grammar_explanation | exercise_set
    @Column({ type: 'varchar', length: 50 })
    task_type!: string;

    @Column({ type: 'jsonb' })
    request_params!: Record<string, any>;

    @Column({ type: 'jsonb', nullable: true })
    output?: Record<string, any> | null;

    // Citations that matched a retrieved chunk
    @Column({ type: 'jsonb', default: [] })
    citations!: Record<string, any>[];

    // Retrieved chunks (ids, pages, scores) used for validation; no full text
    @Column({ type: 'jsonb', default: [] })
    retrieval!: Record<string, any>[];

    @Column({ type: 'jsonb', default: [] })
    validation_issues!: string[];

    @Column({ type: 'boolean', default: false })
    insufficient_evidence!: boolean;

    @Column({ type: 'varchar', length: 50 })
    provider!: string;

    @Column({ type: 'varchar', length: 100 })
    model!: string;

    @Column({ type: 'varchar', length: 50 })
    prompt_version!: string;

    @Index()
    @Column({ type: 'varchar', length: 20, default: AiDraftStatus.DRAFT })
    status!: string;

    @Index()
    @Column({ type: 'integer', nullable: true })
    tenant_id?: number | null;

    @Column({ type: 'integer', nullable: true })
    created_by?: number | null;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'created_by' })
    creator?: User;

    @Column({ type: 'integer', nullable: true })
    reviewed_by?: number | null;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'reviewed_by' })
    reviewer?: User;

    @Column({ type: 'text', nullable: true })
    review_notes?: string | null;

    @Column({ type: 'timestamp', nullable: true })
    reviewed_at?: Date | null;

    @Column({ type: 'boolean', default: false })
    edited!: boolean;

    @Column({ type: 'integer', nullable: true })
    parent_draft_id?: number | null;

    // { questionIds: number[], skipped: [...] } after publish
    @Column({ type: 'jsonb', nullable: true })
    published_refs?: Record<string, any> | null;

    @Column({ type: 'timestamp', nullable: true })
    published_at?: Date | null;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
