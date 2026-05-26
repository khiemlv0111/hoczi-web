import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from './User';

export enum PageStatus {
    DRAFT = 'draft',
    PUBLISHED = 'published',
}

@Entity('pages')
export class Page {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 })
    title!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    slug!: string;

    @Column({ type: 'text' })
    content!: string;

    @Column({
        type: 'enum',
        enum: PageStatus,
        default: PageStatus.DRAFT,
    })
    status!: PageStatus;

    @Column({ type: 'varchar', length: 255, nullable: true })
    meta_title?: string;

    @Column({ type: 'text', nullable: true })
    meta_description?: string;

    @Column({ nullable: true })
    created_by?: number;

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'created_by' })
    creator?: User;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}