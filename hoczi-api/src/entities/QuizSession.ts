import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { UserAnswer } from "./UserAnswer";
import { User } from "./User";
// import { UserAnswer } from "./user-answer.entity";

@Entity("quiz_sessions")
export class QuizSession {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int" })
    user_id!: number;

    @Column({
        type: "varchar",
        length: 50,
        default: "in_progress",
    })
    status!: string;

    @Column({ type: "int", default: 0 })
    score!: number;

    @Column({ type: "int", nullable: true })
    total_questions!: number | null;

    @Column({ type: "int", nullable: true })
    correct_answers!: number | null;

    @Column({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP",
    })
    start_time!: Date;

    @Column({
        type: "timestamptz",
        nullable: true,
    })
    end_time!: Date | null;

    @Column({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP",
    })
    created_at!: Date;

    @Column({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP",
    })
    updated_at!: Date;

    @OneToMany(() => UserAnswer, (userAnswer) => userAnswer.session)
    user_answers!: UserAnswer[];


    @ManyToOne(() => User, (user) => user.quiz_sessions)
    @JoinColumn({ name: "user_id" })
    user!: User;
}