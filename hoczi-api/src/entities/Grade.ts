import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Question } from "./Question";

@Entity("grades")
export class Grade {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "varchar", length: 50 })
  name!: string;

  @Column({ type: "varchar", length: 50, unique: true })
  code!: string;

  @Column({ type: "int" })
  sort_order!: number;

  @OneToMany(() => Question, (question) => question.grade)
  questions!: Question[];
}