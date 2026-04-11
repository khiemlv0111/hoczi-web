import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Answer } from "./Answer";

@Entity("questions")
export class Question {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ type: "text" })
    content!: string;

    @Column({ type: "text", nullable: true })
    explanation?: string;

    @Column({ type: "varchar", length: 50 })
    type!: string; // mcq | code | true_false

    @Column({ type: "varchar", length: 50, nullable: true })
    difficulty?: string; // easy | medium | hard

    @Column({ type: "bigint", nullable: true })
    category_id?: number;

    @Column({ type: "bigint", nullable: true })
    topic_id?: number;

    @Column({ type: "bigint", nullable: true })
    grade_id?: number;

    @Column({ type: "jsonb", nullable: true })
    code?: {
        language?: string;
        code?: string;
        input?: string;
        output?: string;
    };

    @OneToMany(() => Answer, (answer) => answer.question)
    answers!: Answer[];

    @Column({ type: "bigint", nullable: true })
    created_by?: number;

    @Column({ type: "boolean", default: true })
    is_active!: boolean;

    @CreateDateColumn({ type: "timestamptz" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamptz" })
    updated_at!: Date;
}