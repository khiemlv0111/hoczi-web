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
import { Class } from './Class';
import { Subject } from './Subject';
import { User } from './User';

@Entity('class_subjects')
@Unique(['class_id', 'subject_id'])
export class ClassSubject {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    class_id!: number;

    @Column()
    subject_id!: number;

    @Column({ nullable: true })
    teacher_id?: number;

    @Column({ type: 'varchar', length: 20, default: 'active' })
    status!: string;

    @ManyToOne(() => Class, (cls) => cls.class_subjects, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'class_id' })
    class!: Class;

    @ManyToOne(() => Subject, (subject) => subject.class_subjects, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'subject_id' })
    subject!: Subject;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'teacher_id' })
    teacher?: User;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at!: Date;
}