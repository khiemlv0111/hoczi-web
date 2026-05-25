import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
  Unique,
} from 'typeorm';
import { CourseModule } from './CourseModule';

export enum CourseStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export enum CourseVisibility {
  PRIVATE = 'private',
  PUBLIC = 'public',
  SCHOOL_ONLY = 'school_only',
}

@Entity('courses')
@Unique('courses_slug_unique_per_tenant', ['tenantId', 'slug'])
export class Course {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id!: number;

  @Index()
  @Column({ name: 'tenant_id', type: 'bigint', nullable: true })
  tenantId?: number;

  @Column({ type: 'varchar', length: 255 })
  title!: string;

  @Column({ type: 'varchar', length: 255 })
  slug!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Index()
  @Column({ name: 'language_code', type: 'varchar', length: 20, nullable: true })
  languageCode?: string;

  @Index()
  @Column({ name: 'subject_code', type: 'varchar', length: 100, nullable: true })
  subjectCode?: string;

  @Column({ name: 'level_code', type: 'varchar', length: 100, nullable: true })
  levelCode?: string;

  @Column({ name: 'thumbnail_url', type: 'text', nullable: true })
  thumbnailUrl?: string;

  @Column({ name: 'cover_url', type: 'text', nullable: true })
  coverUrl?: string;

  @Index()
  @Column({
    type: 'enum',
    enum: CourseStatus,
    default: CourseStatus.DRAFT,
  })
  status!: CourseStatus;

  @Column({
    type: 'enum',
    enum: CourseVisibility,
    default: CourseVisibility.PRIVATE,
  })
  visibility!: CourseVisibility;

  @Column({ name: 'order_index', type: 'int', default: 0 })
  orderIndex!: number;

  @Column({ name: 'created_by', type: 'bigint', nullable: true })
  createdBy?: number;

  @Column({ name: 'updated_by', type: 'bigint', nullable: true })
  updatedBy?: number;

  @Column({ name: 'published_at', type: 'timestamptz', nullable: true })
  publishedAt?: Date;

  @OneToMany(() => CourseModule, (module) => module.course)
  modules!: CourseModule[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz', nullable: true })
  deletedAt?: Date;
}