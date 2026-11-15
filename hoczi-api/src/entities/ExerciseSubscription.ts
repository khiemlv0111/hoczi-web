import {
    Check,
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Subject } from './Subject';
import { Grade } from './Grade';

// A user who receives daily exercises for one (subject, grade). See specs/001-daily-exercise-email.
@Entity('exercise_subscriptions')
@Unique('UQ_exercise_subscriptions_user_subject_grade', ['user_id', 'subject_id', 'grade_id'])
@Unique('UQ_exercise_subscriptions_token', ['unsubscribe_token'])
@Check('CHK_exercise_subscriptions_questions_per_day', '"questions_per_day" BETWEEN 1 AND 10')
@Index('IDX_exercise_subscriptions_active', ['is_active'])
export class ExerciseSubscription {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    user_id!: number;

    @Column({ type: 'int', nullable: true })
    tenant_id!: number | null;

    @Column({ type: 'int' })
    subject_id!: number;

    @Column({ type: 'int' })
    grade_id!: number;

    @Column({ type: 'int', default: 3 })
    questions_per_day!: number;

    // "HH:MM:SS" as returned by Postgres `time`
    @Column({ type: 'time', default: '07:00:00' })
    send_time!: string;

    @Column({ type: 'varchar', length: 64, default: 'Asia/Ho_Chi_Minh' })
    timezone!: string;

    @Column({ type: 'boolean', default: true })
    is_active!: boolean;

    @Column({ type: 'varchar', length: 64 })
    unsubscribe_token!: string;

    @Column({ type: 'int', nullable: true })
    created_by!: number | null;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at!: Date;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id', foreignKeyConstraintName: 'FK_exercise_subscriptions_user' })
    user!: User;

    @ManyToOne(() => Subject, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'subject_id', foreignKeyConstraintName: 'FK_exercise_subscriptions_subject' })
    subject!: Subject;

    @ManyToOne(() => Grade, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'grade_id', foreignKeyConstraintName: 'FK_exercise_subscriptions_grade' })
    grade!: Grade;
}
