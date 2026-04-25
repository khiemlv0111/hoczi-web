import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Answer } from "./Answer";
import { Grade } from "./Grade";
import { Category } from "./Category";
import { Topic } from "./Topic";

@Entity("questions")
export class Question {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ type: "bigint", nullable: true })
    tenant_id?: number;

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

    @Column({ type: "boolean", default: false })
    is_system!: boolean;

    @CreateDateColumn({ type: "timestamptz" })
    created_at!: Date;

    @ManyToOne(() => Grade, (grade) => grade.questions, {
        onDelete: "SET NULL",
    })
    @JoinColumn({ name: "grade_id" })
    grade?: Grade;

    @ManyToOne(() => Category, (category) => category.questions, {
        onDelete: "SET NULL",
    })
    @JoinColumn({ name: "category_id" })
    category?: Category;

    @UpdateDateColumn({ type: "timestamptz" })
    updated_at!: Date;
}