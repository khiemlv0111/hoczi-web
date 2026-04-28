// book-category.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Book } from './Book';
import { BookLesson } from './BookLesson';


@Entity('book_categories')
export class BookCategory {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    slug!: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @OneToMany(() => Book, (book) => book.category)
    books!: Book[];

    @OneToMany(() => BookLesson, (lesson) => lesson.category)
    lessons!: BookLesson[];

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}