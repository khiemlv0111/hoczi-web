import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Unique,
} from 'typeorm';
import { KnowledgeDocument } from './KnowledgeDocument';

// One indexed text file per chunk of a source document (a page range, or a slice of a text file).
@Entity('knowledge_document_chunks')
@Unique(['document_id', 'chunk_index'])
export class KnowledgeDocumentChunk {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'integer' })
    document_id!: number;

    @ManyToOne(() => KnowledgeDocument, (doc) => doc.chunks, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'document_id' })
    document!: KnowledgeDocument;

    @Column({ type: 'integer' })
    chunk_index!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    lesson_label?: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    section_label?: string | null;

    @Column({ type: 'integer', nullable: true })
    page_start?: number | null;

    @Column({ type: 'integer', nullable: true })
    page_end?: number | null;

    @Column({ type: 'integer', default: 0 })
    char_count!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    openai_file_id?: string | null;

    @Column({ type: 'varchar', length: 64 })
    checksum!: string;

    // pending | indexed | failed
    @Column({ type: 'varchar', length: 20, default: 'pending' })
    status!: string;

    @Column({ type: 'text', nullable: true })
    error_message?: string | null;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}
