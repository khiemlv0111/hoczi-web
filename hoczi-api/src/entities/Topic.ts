import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity("topics")
export class Topic {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "int", nullable: true })
  category_id?: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 255 })
  slug!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "boolean", default: true })
  is_active!: boolean;

  @ManyToOne(() => Category, (category) => category.topics, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  category!: Category;

  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at!: Date;
}