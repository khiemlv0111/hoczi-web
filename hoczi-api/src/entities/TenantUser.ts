import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    Unique,
} from 'typeorm';
import { User } from './User';
import { Tenant } from './Tenant';

@Entity('tenant_users')
@Unique(['tenant_id', 'user_id'])
export class TenantUser {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tenant_id!: number;

    @Column()
    user_id!: number;

    @Column({ type: 'varchar', length: 50 })
    role!: string; // owner | admin | teacher | student

    @Column({ type: 'varchar', length: 50, default: 'active' })
    status!: string; // active | pending | inactive

    @Column({ type: 'timestamp', nullable: true })
    joined_at!: Date | null;

    @Column({ type: 'int', nullable: true })
    invited_by!: number | null;

    @CreateDateColumn({ type: 'timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at!: Date;

    @ManyToOne(() => Tenant, (tenant) => tenant.tenantUsers, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'tenant_id' })
    tenant!: Tenant;

    @ManyToOne(() => User, (user) => user.tenantUsers, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'invited_by' })
    invitedByUser!: User | null;
}