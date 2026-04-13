import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";
import { Category } from "./Category";
import { Topic } from "./Topic";
import { Grade } from "./Grade";
import { Question } from "./Question";

@Entity("quizzes")
export class Quiz {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column({ type: "varchar", length: 255 })
    title!: string;

    @Column({ type: "text", nullable: true })
    description?: string;

    // 🔗 Category
    @Column({ type: "int", nullable: true })
    category_id?: number;

    @ManyToOne(() => Category, (category) => category.id, {
        onDelete: "SET NULL",
    })
    @JoinColumn({ name: "category_id" })
    category?: Category;

    // 🔗 Topic
    @Column({ type: "int", nullable: true })
    topic_id?: number;

    @Column({ type: "int", nullable: true })
    duration_minutes?: number;

    @Column({ type: "int", nullable: true })
    total_questions?: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    quiz_type?: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    status?: string;

    @Column({ type: "int", nullable: true })
    created_by?: number;

    @ManyToOne(() => Topic, (topic) => topic.id, {
        onDelete: "SET NULL",
    })
    @JoinColumn({ name: "topic_id" })
    topic?: Topic;

    // 🔗 Grade
    @Column({ type: "int", nullable: true })
    grade_id?: number;

    @OneToMany(() => Question, (question) => question)
    questions!: Question[];

    @ManyToOne(() => Grade, (grade) => grade.id, {
        onDelete: "SET NULL",
    })
    @JoinColumn({ name: "grade_id" })
    grade?: Grade;

    @CreateDateColumn({ type: "timestamptz" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamptz" })
    updated_at!: Date;
}