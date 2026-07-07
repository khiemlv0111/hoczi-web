// LearningContent.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ContentAudio } from "./ContentAudio";
// import { ContentAudio } from "./ContentAudio";

@Entity("learning_contents")
export class LearningContent {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "int" })
  tenant_id!: number;

  @Column({ type: "int", nullable: true })
  user_id?: number;

  @Column({ type: "int", nullable: true })
  lesson_id?: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  title?: string;

  @Column({ type: "text" })
  content!: string;

  @Column({ type: "varchar", length: 50 })
  type!: string;

  @Column({ type: "varchar", length: 20 })
  language_code!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  level?: string;

  @Column({ type: "boolean", default: false })
  created_by_ai!: boolean;

  @Column({ type: "text", nullable: true })
  prompt?: string;

  @Column({ type: "jsonb", nullable: true })
  metadata?: Record<string, any>;

  @OneToMany(() => ContentAudio, (audio) => audio.content)
  audios!: ContentAudio[];

  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at!: Date;
}