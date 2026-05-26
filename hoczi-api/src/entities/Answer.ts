import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Question } from "./Question";

@Entity("answers")
export class Answer {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "bigint" })
  question_id!: number;

  @Column({ type: "text" })
  content!: string;

  @Column({ type: "boolean", default: false })
  is_correct!: boolean;

  @ManyToOne(() => Question, (question) => question.answers)
  @JoinColumn({ name: "question_id" })
  question!: Question;

  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;
}