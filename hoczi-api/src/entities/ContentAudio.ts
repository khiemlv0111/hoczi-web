// ContentAudio.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { LearningContent } from "./LearningContent";

@Entity("content_audios")
export class ContentAudio {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "int" })
  tenant_id!: number;

  @Column({ type: "int" })
  content_id!: number;

  @Column({ type: "varchar", length: 50, default: "elevenlabs" })
  provider!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  voice_id?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  model_id?: string;

  @Column({ type: "text" })
  audio_url!: string;

  @Column({ type: "varchar", length: 100, default: "audio/mpeg" })
  mime_type!: string;

  @Column({ type: "int", nullable: true })
  duration_seconds?: number;

  @Column({ type: "bigint", nullable: true })
  file_size_bytes?: string;

  @Column({ type: "varchar", length: 128 })
  text_hash!: string;

  @Column({ type: "varchar", length: 30, default: "completed" })
  status!: string;

  @Column({ type: "text", nullable: true })
  error_message?: string;

  @Column({ type: "jsonb", nullable: true })
  settings?: Record<string, any>;

  @ManyToOne(() => LearningContent, (content) => content.audios, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "content_id" })
  content!: LearningContent;

  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at!: Date;
}