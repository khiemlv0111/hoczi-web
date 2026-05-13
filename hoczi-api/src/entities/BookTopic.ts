import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    Unique,
} from 'typeorm'
import { Book } from './Book'
import { Topic } from './Topic'


@Entity('book_topics')
@Unique(['book_id', 'topic_id'])
export class BookTopic {
    @PrimaryGeneratedColumn('increment', {
        type: 'bigint',
    })
    id!: number

    @Column({
        type: 'bigint',
    })
    book_id!: number

    @Column({
        type: 'bigint',
    })
    topic_id!: number

    @ManyToOne(() => Book, (book) => book.book_topics, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'book_id' })
    book!: Book

    @ManyToOne(() => Topic, (topic) => topic.book_topics, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'topic_id' })
    topic!: Topic
}