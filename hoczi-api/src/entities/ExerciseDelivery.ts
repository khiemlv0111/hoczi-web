import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ExerciseSubscription } from './ExerciseSubscription';
import { DailyExerciseSet } from './DailyExerciseSet';
import { User } from './User';

export enum ExerciseDeliveryKind {
    SCHEDULED = 'scheduled',
    TEST = 'test',
}

export enum ExerciseDeliveryStatus {
    PENDING = 'pending',
    QUESTIONS_SENT = 'questions_sent',
    ANSWERS_SENT = 'answers_sent',
    FAILED = 'failed',
    SKIPPED = 'skipped',
}

// Sending one day's set to one subscription (questions email, then answers email).
// At most one scheduled delivery per subscription and local day (partial unique index).
@Entity('exercise_deliveries')
@Index('UQ_exercise_deliveries_scheduled_day', ['subscription_id', 'delivery_date'], {
    unique: true,
    where: `"kind" = 'scheduled'`,
})
@Index('IDX_exercise_deliveries_date', ['delivery_date'])
@Index('IDX_exercise_deliveries_status', ['status'])
export class ExerciseDelivery {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    subscription_id!: number;

    @Column({ type: 'int', nullable: true })
    set_id!: number | null;

    @Column({ type: 'int' })
    user_id!: number;

    @Column({ type: 'int', nullable: true })
    tenant_id!: number | null;

    // Local day in the subscription's timezone, "YYYY-MM-DD"
    @Column({ type: 'date' })
    delivery_date!: string;

    @Column({ type: 'varchar', length: 20, default: ExerciseDeliveryKind.SCHEDULED })
    kind!: string;

    @Column({ type: 'varchar', length: 20, default: ExerciseDeliveryStatus.PENDING })
    status!: string;

    @Column({ type: 'int', nullable: true })
    exercise_count!: number | null;

    @Column({ type: 'timestamptz', nullable: true })
    questions_sent_at!: Date | null;

    @Column({ type: 'timestamptz', nullable: true })
    answers_sent_at!: Date | null;

    @Column({ type: 'text', nullable: true })
    error!: string | null;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at!: Date;

    @ManyToOne(() => ExerciseSubscription, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'subscription_id', foreignKeyConstraintName: 'FK_exercise_deliveries_subscription' })
    subscription!: ExerciseSubscription;

    @ManyToOne(() => DailyExerciseSet, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'set_id', foreignKeyConstraintName: 'FK_exercise_deliveries_set' })
    set!: DailyExerciseSet | null;

    @ManyToOne(() => User, { onDelete: 'CASCADE', createForeignKeyConstraints: false })
    @JoinColumn({ name: 'user_id' })
    user!: User;
}
