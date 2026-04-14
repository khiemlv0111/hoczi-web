import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { QuizSession } from "./QuizSession";

@Entity("user_answers")
export class UserAnswer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "int", nullable: true })
  user_id!: number | null;

  @Column({ type: "int", nullable: true })
  question_id!: number | null;

  @Column({ type: "int", nullable: true })
  answer_id!: number | null;

  @Column({ type: "boolean", nullable: true })
  is_correct!: boolean | null;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at!: Date;

  @Column({ type: "int", nullable: true })
  session_id!: number | null;

  @ManyToOne(() => QuizSession, (quizSession) => quizSession.user_answers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn({ name: "session_id" })
  session!: QuizSession;
}