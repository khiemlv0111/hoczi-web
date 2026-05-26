import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from './User';
import { ClassMember } from './ClassMember';
import { ClassSubject } from './ClassSubject';
import { Tenant } from './Tenant';
import { Schedule } from './Schedule';

@Entity('classes')
export class Class {
    @PrimaryGeneratedColumn()
    id!: number;


    @Column({ type: "int", nullable: true })
    tenant_id?: number;

    @ManyToOne(() => Tenant)
    @JoinColumn({ name: 'tenant_id' })
    tenant?: Tenant;

    @Column({ type: 'varchar', length: 255 })
    name!: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    code!: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column()
    teacher_id!: number;


    @ManyToOne(() => User)
    @JoinColumn({ name: 'teacher_id' })
    teacher!: User;

    @OneToMany(() => ClassSubject, (classSubject) => classSubject.class)
    class_subjects!: ClassSubject[];

    @Column({ nullable: true })
    grade_id?: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    school_name?: string;

    @Column({ type: 'varchar', length: 50, default: 'active' })
    status!: string;

    @OneToMany(() => ClassMember, (member) => member.class)
    members!: ClassMember[];

    @Column({ type: "bigint", nullable: true })
    created_by?: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @OneToMany(() => Schedule, (schedule) => schedule.class)
    schedules!: Schedule[];
}