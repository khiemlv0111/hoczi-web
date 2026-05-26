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
import { ClassSubject } from './ClassSubject';
import { Lesson } from './Lesson';
import { Quiz } from './Quiz';
import { User } from './User';
import { AssignmentStudent } from './AssignmentStudent';

@Entity('assignments')
export class Assignment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column()
  class_subject_id!: number;

  @ManyToOne(() => ClassSubject, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'class_subject_id' })
  class_subject!: ClassSubject;

  @Column({ nullable: true })
  lesson_id?: number;

  @ManyToOne(() => Lesson, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'lesson_id' })
  lesson?: Lesson;

  @Column({ nullable: true })
  quiz_id?: number;

  @ManyToOne(() => Quiz, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'quiz_id' })
  quiz?: Quiz;

  @Column()
  assigned_by!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'assigned_by' })
  teacher!: User;

  @Column({ type: 'timestamptz', nullable: true })
  start_at?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  due_at?: Date;

  @Column({ type: 'int', default: 1 })
  max_attempts!: number;

  @Column({ type: 'int', default: 0 })
  total_points!: number;

  @Column({ type: 'varchar', length: 50, default: 'quiz' })
  assignment_type!: string;
  // quiz / lesson / mixed

  @Column({ type: 'varchar', length: 50, default: 'active' })
  status!: string;
  // draft / active / archived

  @OneToMany(() => AssignmentStudent, (assignmentStudent) => assignmentStudent.assignment)
  assignment_students!: AssignmentStudent[];

  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;
}