import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Unique,
} from 'typeorm';
import { Schedule } from './Schedule';
import { User } from './User';

@Entity('schedule_users')
@Unique(['schedule_id', 'user_id'])
export class ScheduleUser {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    schedule_id!: number;

    @Column()
    user_id!: number;

    @Column({
        type: 'varchar',
        length: 50,
    })
    role!: 'owner' | 'teacher' | 'student' | 'assistant' | 'observer';

    @Column({
        type: 'varchar',
        length: 50,
        default: 'pending',
    })
    attendance_status!: 'pending' | 'accepted' | 'declined' | 'attended' | 'absent' | 'late';

    @Column({ default: true })
    is_required!: boolean;

    @Column({ type: 'timestamp', nullable: true })
    response_at!: Date | null;

    @Column({ type: 'text', nullable: true })
    note!: string | null;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at!: Date;

    @ManyToOne(() => Schedule, (schedule) => schedule.schedule_users, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'schedule_id' })
    schedule!: Schedule;

    @ManyToOne(() => User, (user) => user.schedule_users, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user!: User;
}