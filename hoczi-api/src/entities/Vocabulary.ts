import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    Index,
} from 'typeorm';
import { LessonVocabulary } from './LessonVocabulary';

@Entity('vocabularies')
export class Vocabulary {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id!: number;

    @Index()
    @Column({ name: 'tenant_id', type: 'bigint', nullable: true })
    tenantId?: number;

    @Column({ type: 'varchar', length: 255 })
    word!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    pinyin?: string;

    @Column({ name: 'han_viet', type: 'varchar', length: 255, nullable: true })
    hanViet?: string;

    @Column({ name: 'meaning_vi', type: 'varchar', length: 255, nullable: true })
    meaningVi?: string;

    @Column({ name: 'meaning_en', type: 'varchar', length: 255, nullable: true })
    meaningEn?: string;

    @Column({ name: 'example_sentence', type: 'varchar', length: 255, nullable: true })
    exampleSentence?: string;

    @Column({ name: 'audio_url', type: 'varchar', length: 255, nullable: true })
    audioUrl?: string;

    @Column({ type: 'jsonb', nullable: true })
    metadata?: Record<string, any>;

    @OneToMany(() => LessonVocabulary, (lv) => lv.vocabulary)
    lessonVocabularies!: LessonVocabulary[];

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt!: Date;
}