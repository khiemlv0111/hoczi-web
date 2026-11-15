import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';
import { EmailBroadcast } from './EmailBroadcast';

export enum EmailRecipientStatus {
    PENDING = 'pending',
    SENDING = 'sending',
    SENT = 'sent',
    FAILED = 'failed',
}

// One address inside a broadcast; each recipient gets a separate email.
@Entity('email_broadcast_recipients')
@Unique('UQ_email_broadcast_recipients_email', ['broadcast_id', 'email'])
@Index('IDX_email_broadcast_recipients_status', ['broadcast_id', 'status'])
export class EmailBroadcastRecipient {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    broadcast_id!: number;

    // Trimmed + lowercased
    @Column({ type: 'varchar', length: 254 })
    email!: string;

    // Set when the address came from a selected user
    @Column({ type: 'int', nullable: true })
    user_id!: number | null;

    @Column({ type: 'varchar', length: 20, default: EmailRecipientStatus.PENDING })
    status!: string;

    @Column({ type: 'int', default: 0 })
    attempts!: number;

    @Column({ type: 'varchar', length: 500, nullable: true })
    error!: string | null;

    @Column({ type: 'varchar', length: 255, nullable: true })
    provider_message_id!: string | null;

    @Column({ type: 'timestamptz', nullable: true })
    locked_at!: Date | null;

    @Column({ type: 'timestamptz', nullable: true })
    sent_at!: Date | null;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at!: Date;

    @ManyToOne(() => EmailBroadcast, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'broadcast_id', foreignKeyConstraintName: 'FK_email_broadcast_recipients_broadcast' })
    broadcast!: EmailBroadcast;
}
