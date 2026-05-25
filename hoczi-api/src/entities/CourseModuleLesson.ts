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
import { CourseModule } from './CourseModule';
import { Lesson } from './Lesson';

@Entity('course_module_lessons')
@Unique('course_module_lessons_unique', ['courseModuleId', 'lessonId'])
export class CourseModuleLesson {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id!: string;

  @Index()
  @Column({ name: 'course_module_id', type: 'bigint' })
  courseModuleId!: string;

  @Index()
  @Column({ name: 'lesson_id', type: 'bigint' })
  lessonId!: string;

  @ManyToOne(() => CourseModule, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'course_module_id' })
  courseModule!: CourseModule;

  @ManyToOne(() => Lesson, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lesson_id' })
  lesson!: Lesson;

  @Column({ name: 'order_index', type: 'int', default: 0 })
  orderIndex!: number;

  @Column({ name: 'is_preview', type: 'boolean', default: false })
  isPreview!: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;
}