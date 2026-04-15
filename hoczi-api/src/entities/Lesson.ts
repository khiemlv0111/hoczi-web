import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Subject } from './Subject';
import { Topic } from './Topic';
import { Grade } from './Grade';
import { User } from './User';

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true })
  content?: string;

  @Column({ nullable: true })
  subject_id?: number;

  @ManyToOne(() => Subject, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'subject_id' })
  subject?: Subject;

  @Column({ nullable: true })
  topic_id?: number;

  @ManyToOne(() => Topic, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'topic_id' })
  topic?: Topic;

  @Column({ nullable: true })
  grade_id?: number;

  @ManyToOne(() => Grade, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'grade_id' })
  grade?: Grade;

  @Column()
  created_by!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by' })
  creator!: User;

  @Column({ type: 'varchar', length: 50, default: 'text' })
  lesson_type!: string;

  @Column({ type: 'varchar', length: 50, default: 'private' })
  visibility!: string;

  @Column({ type: 'varchar', length: 50, default: 'draft' })
  status!: string;

  @Column({ type: 'text', nullable: true })
  thumbnail_url?: string;

  @Column({ type: 'text', nullable: true })
  media_url?: string;

  @Column({ nullable: true })
  estimated_minutes?: number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;
}