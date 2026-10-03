import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
    Index,
} from 'typeorm';
import { User } from './User';
import { KnowledgeDocumentChunk } from './KnowledgeDocumentChunk';

export enum KnowledgeDocumentStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    READY = 'ready',
    FAILED = 'failed',
    DELETING = 'deleting',
    DELETED = 'deleted',
}

@Entity('knowledge_documents')
export class KnowledgeDocument {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    title!: string;

    @Column({ type: 'varchar', length: 255 })
    original_filename!: string;

    @Column({ type: 'varchar', length: 100 })
    mime_type!: string;

    @Column({ type: 'bigint', nullable: true })
    size_bytes?: number;

    @Index()
    @Column({ type: 'varchar', length: 64, nullable: true })
    checksum?: string | null;

    // hsk2 = HSK 2.0 (levels 1-6), hsk3 = HSK 3.0 (levels 1-9)
    @Column({ type: 'varchar', length: 10 })
    hsk_standard!: string;

    @Column({ type: 'integer' })
    hsk_level!: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    edition?: string | null;

    @Column({ type: 'varchar', length: 20, default: 'simplified' })
    script!: string;

    @Column({ type: 'varchar', length: 20, default: 'zh' })
    language!: string;

    // textbook | workbook | answer_key | grammar | reading | vocabulary | other
    @Column({ type: 'varchar', length: 50 })
    content_type!: string;

    // NULL = system-wide corpus
    @Index()
    @Column({ type: 'integer', nullable: true })
    tenant_id?: number | null;

    @Column({ type: 'integer', nullable: true })
    book_id?: number | null;

    @Column({ type: 'integer', nullable: true })
    book_lesson_id?: number | null;

    @Column({ type: 'varchar', length: 500 })
    storage_key!: string;

    @Column({ type: 'integer', default: 1 })
    version!: number;

    @Column({ type: 'integer', nullable: true })
    supersedes_document_id?: number | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    openai_vector_store_id?: string | null;

    @Index()
    @Column({ type: 'varchar', length: 20, default: KnowledgeDocumentStatus.PENDING })
    status!: string;

    // owned | licensed | permission_granted | public_domain
    @Column({ type: 'varchar', length: 50 })
    rights_status!: string;

    @Column({ type: 'text', nullable: true })
    rights_notes?: string | null;

    @Column({ type: 'jsonb', nullable: true })
    extraction_report?: Record<string, any> | null;

    @Column({ type: 'text', nullable: true })
    error_message?: string | null;

    @Column({ type: 'integer', nullable: true })
    uploaded_by?: number | null;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'uploaded_by' })
    uploader?: User;

    @OneToMany(() => KnowledgeDocumentChunk, (chunk) => chunk.document)
    chunks!: KnowledgeDocumentChunk[];

    @Column({ type: 'timestamp', nullable: true })
    indexed_at?: Date | null;

    @Column({ type: 'timestamp', nullable: true })
    deleted_at?: Date | null;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
