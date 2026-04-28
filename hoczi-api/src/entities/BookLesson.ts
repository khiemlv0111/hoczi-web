// book-lesson.entity.ts
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
import { Book } from './Book';
import { BookCategory } from './BookCategory';

export enum BookLessonType {
    TEXT = 'text',
    VIDEO = 'video',
    QUIZ = 'quiz',
    ASSIGNMENT = 'assignment',
    FILE = 'file',
}

@Entity('book_lessons')
@Unique(['book_id', 'slug'])
export class BookLesson {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'integer' })
    book_id!: number;

    @ManyToOne(() => Book, (book) => book.lessons, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'book_id' })
    book!: Book;

    @Column({ type: 'integer', nullable: true })
    category_id?: number;

    @ManyToOne(() => BookCategory, (category) => category.lessons, {
        nullable: true,
    })
    @JoinColumn({ name: 'category_id' })
    category?: BookCategory;

    @Column({ type: 'varchar', length: 255 })
    title!: string;

    @Column({ type: 'varchar', length: 255 })
    slug!: string;

    @Column({ type: 'text', nullable: true })
    content?: string;

    @Column({
        type: 'enum',
        enum: BookLessonType,
        default: BookLessonType.TEXT,
    })
    lesson_type!: BookLessonType;

    @Column({ type: 'text', nullable: true })
    media_url?: string;

    @Column({ type: 'integer', default: 0 })
    order_index!: number;

    @Column({ type: 'boolean', default: false })
    is_free_preview!: boolean;

    @Column({ type: 'integer', nullable: true })
    estimated_minutes?: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}