import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from './User';

export enum KnowledgeBaseStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

@Entity('knowledge_bases')
export class KnowledgeBase {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    title!: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'text' })
    content!: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    category?: string;

    @Column({ type: 'varchar', length: 50, default: KnowledgeBaseStatus.ACTIVE })
    status!: string;

    @Column({ type: 'integer', nullable: true })
    created_by?: number;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'created_by' })
    creator?: User;

    // Search index state: not_indexed | queued | indexed | failed
    @Column({ type: 'varchar', length: 20, default: 'not_indexed' })
    index_status!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    openai_file_id?: string | null;

    @Column({ type: 'text', nullable: true })
    index_error?: string | null;

    @Column({ type: 'timestamp', nullable: true })
    indexed_at?: Date | null;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
