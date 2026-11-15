import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';
import { Subject } from './Subject';
import { Grade } from './Grade';
import { DailyExercise } from './DailyExercise';

export enum DailyExerciseSetStatus {
    GENERATING = 'generating',
    READY = 'ready',
    FAILED = 'failed',
}

// One AI-generated set per (subject, grade, day), shared by every subscription.
@Entity('daily_exercise_sets')
@Unique('UQ_daily_exercise_sets_subject_grade_date', ['subject_id', 'grade_id', 'set_date'])
export class DailyExerciseSet {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    subject_id!: number;

    @Column({ type: 'int' })
    grade_id!: number;

    // "YYYY-MM-DD"
    @Column({ type: 'date' })
    set_date!: string;

    @Column({ type: 'varchar', length: 20, default: DailyExerciseSetStatus.GENERATING })
    status!: string;

    @Column({ type: 'int', default: 0 })
    exercise_count!: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    provider!: string | null;

    @Column({ type: 'varchar', length: 100, nullable: true })
    model!: string | null;

    @Column({ type: 'varchar', length: 50, nullable: true })
    prompt_version!: string | null;

    @Column({ type: 'text', nullable: true })
    error!: string | null;

    @Column({ type: 'timestamptz', nullable: true })
    generated_at!: Date | null;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at!: Date;

    @ManyToOne(() => Subject, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'subject_id', foreignKeyConstraintName: 'FK_daily_exercise_sets_subject' })
    subject!: Subject;

    @ManyToOne(() => Grade, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'grade_id', foreignKeyConstraintName: 'FK_daily_exercise_sets_grade' })
    grade!: Grade;

    @OneToMany(() => DailyExercise, (exercise) => exercise.set)
    exercises!: DailyExercise[];
}
