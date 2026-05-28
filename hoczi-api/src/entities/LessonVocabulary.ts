import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  Index,
  Unique,
} from 'typeorm';
import { Lesson } from './Lesson';
import { Vocabulary } from './Vocabulary';

@Entity('lesson_vocabularies')
@Unique('lesson_vocabularies_lesson_vocab_unique', ['lessonId', 'vocabularyId'])
export class LessonVocabulary {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id!: number;

  @Index()
  @Column({ name: 'lesson_id', type: 'bigint' })
  lessonId!: number;

  @Index()
  @Column({ name: 'vocabulary_id', type: 'bigint' })
  vocabularyId!: number;

  @ManyToOne(() => Lesson, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lesson_id' })
  lesson!: Lesson;

  @ManyToOne(() => Vocabulary, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'vocabulary_id' })
  vocabulary!: Vocabulary;

  @Column({ name: 'order_index', type: 'int', default: 0 })
  orderIndex!: number;

}