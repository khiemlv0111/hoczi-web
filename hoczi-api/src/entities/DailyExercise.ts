import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';
import { DailyExerciseSet } from './DailyExerciseSet';

// One exercise (question + answer + step-by-step explanation) inside a daily set.
@Entity('daily_exercises')
@Unique('UQ_daily_exercises_set_position', ['set_id', 'position'])
export class DailyExercise {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    set_id!: number;

    // 1-based order inside the set; subscriptions take the first N.
    @Column({ type: 'int' })
    position!: number;

    @Column({ type: 'text' })
    question!: string;

    @Column({ type: 'text' })
    answer!: string;

    @Column({ type: 'text' })
    explanation!: string;

    @Column({ type: 'boolean', default: false })
    edited_by_admin!: boolean;

    @Column({ type: 'int', nullable: true })
    edited_by!: number | null;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at!: Date;

    @ManyToOne(() => DailyExerciseSet, (set) => set.exercises, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'set_id', foreignKeyConstraintName: 'FK_daily_exercises_set' })
    set!: DailyExerciseSet;
}
