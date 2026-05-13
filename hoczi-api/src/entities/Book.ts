// book.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { User } from './User';
import { BookLesson } from './BookLesson';
import { BookTopic } from './BookTopic';

export enum BookStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
    ARCHIVED = 'archived',
}

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    title!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    slug!: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'text', nullable: true })
    cover_image_url?: string;

    @Column({
        type: 'enum',
        enum: BookStatus,
        default: BookStatus.DRAFT,
    })
    status!: BookStatus;

    @Column({ type: 'boolean', default: true })
    is_public!: boolean;

    @Column({ type: 'integer', nullable: true })
    created_by?: number;

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'created_by' })
    creator?: User;

    @OneToMany(() => BookLesson, (lesson) => lesson.book)
    lessons!: BookLesson[];
    @Column({ type: 'jsonb', nullable: true })
    metadata?: Record<string, any>;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @OneToMany(() => BookTopic, (bt) => bt.book)
    book_topics!: BookTopic[]
}