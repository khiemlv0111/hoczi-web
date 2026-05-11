import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Lesson } from './Lesson';
// import { Lesson } from './lesson.entity';


export enum LearningActivityType {
    MULTIPLE_CHOICE = 'multiple_choice',
    REORDER_SENTENCE = 'reorder_sentence',
    FILL_BLANK = 'fill_blank',
    MATCHING = 'matching',
    LISTENING = 'listening',
    SPEAKING = 'speaking',
}


@Entity('learning_activities')
export class LearningActivity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id!: number;

  @Column({ type: 'bigint' })
  lesson_id!: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.learning_activities, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'lesson_id' })
  lesson!: Lesson;

  @Column({ type: 'varchar', length: 50 })
  activity_type!: LearningActivityType;

  @Column({ type: 'text' })
  instruction!: string;

  @Column({ type: 'jsonb' })
  config!: Record<string, any>;

  @Column({ type: 'int', default: 0 })
  order_index!: number;

  @Column({ type: 'int', default: 1 })
  points!: number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;
}