import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { AssignmentStudent } from './AssignmentStudent';
import { User } from './User';
// import { AssignmentStudent } from './assignment-student.entity';
// import { User } from './user.entity';

@Entity('assignment_comments')
export class AssignmentComment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    assignment_student_id!: number;

    @ManyToOne(
        () => AssignmentStudent,
        (assignmentStudent) => assignmentStudent.comments,
        { onDelete: 'CASCADE' }
    )
    @JoinColumn({ name: 'assignment_student_id' })
    assignment_student!: AssignmentStudent;

    @Column()
    user_id!: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @Column({ type: 'text' })
    content!: string;

    @Column({ nullable: true })
    parent_id?: number;

    @ManyToOne(() => AssignmentComment, (comment) => comment.children, {
        onDelete: 'CASCADE',
        nullable: true,
    })
    @JoinColumn({ name: 'parent_id' })
    parent?: AssignmentComment;

    @OneToMany(() => AssignmentComment, (comment) => comment.parent)
    children!: AssignmentComment[];

    @Column({ type: 'varchar', length: 20, default: 'active' })
    status!: string;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at!: Date;
}