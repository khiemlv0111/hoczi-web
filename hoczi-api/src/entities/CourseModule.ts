import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
  Unique,
} from 'typeorm';
import { Course } from './Course';
// import { Course } from './course.entity';

export enum CourseModuleStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Entity('course_modules')
@Unique('course_modules_slug_unique_per_course', ['courseId', 'slug'])
export class CourseModule {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id!: number;

  @Index()
  @Column({ name: 'course_id', type: 'bigint' })
  courseId!: number;

  @ManyToOne(() => Course, (course) => course.modules, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'course_id' })
  course!: Course;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'varchar', length: 255 })
  slug!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ name: 'order_index', type: 'int', default: 0 })
  orderIndex!: number;

  @Index()
  @Column({
    type: 'enum',
    enum: CourseModuleStatus,
    default: CourseModuleStatus.DRAFT,
  })
  status!: CourseModuleStatus;

  @Column({ name: 'created_by', type: 'bigint', nullable: true })
  createdBy?: number;

  @Column({ name: 'updated_by', type: 'bigint', nullable: true })
  updatedBy?: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt?: Date;
}