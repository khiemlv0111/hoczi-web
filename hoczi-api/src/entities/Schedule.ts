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
import { Tenant } from './Tenant';
import { Class } from './Class';
import { User } from './User';
import { ScheduleUser } from './ScheduleUser';
// import { ScheduleUser } from './ScheduleUser';

@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    tenant_id!: number | null;

    @Column({ nullable: true })
    class_id!: number | null;

    @Column()
    created_by!: number;

    @Column()
    title!: string;

    @Column({ type: 'text', nullable: true })
    description!: string | null;

    @Column({ type: 'text', nullable: true })
    note!: string | null;

    @Column({
        type: 'varchar',
        length: 50,
        default: 'personal',
    })
    scope!: 'personal' | 'tenant' | 'class';

    @Column({
        type: 'varchar',
        length: 50,
        default: 'event',
    })
    schedule_type!: 'class' | 'lesson' | 'exam' | 'assignment' | 'meeting' | 'personal' | 'other';

    @Column({
        type: 'varchar',
        length: 50,
        default: 'scheduled',
    })
    status!: 'scheduled' | 'ongoing' | 'completed' | 'cancelled' | 'postponed';

    @Column({ type: 'timestamp' })
    start_time!: Date;

    @Column({ type: 'timestamp' })
    end_time!: Date;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at!: Date;

    @ManyToOne(() => Tenant, (tenant) => tenant.schedules, {
        nullable: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'tenant_id' })
    tenant!: Tenant | null;

    @ManyToOne(() => Class, (cls) => cls.schedules, {
        nullable: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'class_id' })
    class!: Class | null;

    @ManyToOne(() => User, (user) => user.created_schedules, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'created_by' })
    creator!: User;

    @OneToMany(() => ScheduleUser, (scheduleUser) => scheduleUser.schedule)
    schedule_users!: ScheduleUser[];
}