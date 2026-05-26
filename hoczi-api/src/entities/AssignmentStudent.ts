import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    Unique,
    OneToMany,
} from 'typeorm';
import { Assignment } from './Assignment';
import { User } from './User';
import { AssignmentComment } from './AssignmentComment';

@Entity('assignment_students')
@Unique(['assignment_id', 'student_id'])
export class AssignmentStudent {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    assignment_id!: number;

    @Column()
    student_id!: number;

    @ManyToOne(() => Assignment, (assignment) => assignment.assignment_students, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'assignment_id' })
    assignment!: Assignment;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'student_id' })
    student!: User;

    @Column({ type: 'varchar', length: 50, default: 'assigned' })
    status!: string;
    // assigned / in_progress / submitted / overdue

    @OneToMany(
        () => AssignmentComment,
        (comment) => comment.assignment_student
    )
    comments!: AssignmentComment[];

    @CreateDateColumn({ type: 'timestamptz' })
    assigned_at!: Date;
    @Column({ type: 'text', nullable: true })
    feedback?: string;

    @Column({ type: 'timestamptz', nullable: true })
    started_at?: Date;

    @Column({ type: 'timestamptz', nullable: true })
    submitted_at?: Date;

    @Column({ type: 'int', default: 0 })
    score!: number;

    @Column({ type: 'int', default: 0 })
    attempt_count!: number;
}