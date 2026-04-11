import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Topic } from "./Topic";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  slug!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "boolean", default: true })
  is_active!: boolean;

  @OneToMany(() => Topic, (topic) => topic.category)
  topics!: Topic[];

  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at!: Date;
}