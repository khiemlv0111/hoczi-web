import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { User } from './User';

export enum TenantPlanType {
  FREE = 'free',
  PRO = 'pro',
  ENTERPRISE = 'enterprise',
}

export enum TenantStatus {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  DELETED = 'deleted',
}

@Entity('tenants')
export class Tenant {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 100, unique: true })
  code!: string;

  @Column({ type: 'text', nullable: true })
  description?: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  domain?: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  custom_domain?: string | null;

  @Column({ type: 'text', nullable: true })
  logo_url?: string | null;

  @Column({ type: 'text', nullable: true })
  favicon_url?: string | null;

  @Column({ type: 'varchar', length: 20, nullable: true })
  primary_color?: string | null;

  @Column({ type: 'varchar', length: 20, nullable: true })
  secondary_color?: string | null;

  @Column({ type: 'bigint', nullable: true })
  owner_user_id?: number | null;

  @OneToMany(() => User, (user) => user.tenant)
  users!: User[];


  @Column({ type: 'bigint', nullable: true })
  organization_id?: string | null;

  @Column({
    type: 'enum',
    enum: TenantPlanType,
    default: TenantPlanType.FREE,
  })
  plan_type!: TenantPlanType;

  @Column({ type: 'int', default: 100 })
  max_users!: number;

  @Column({ type: 'int', default: 1024 })
  max_storage_mb!: number;

  @Column({ type: 'boolean', default: false })
  is_paid!: boolean;

  @Column({
    type: 'enum',
    enum: TenantStatus,
    default: TenantStatus.ACTIVE,
  })
  status!: TenantStatus;

  @Column({ type: 'boolean', default: true })
  is_active!: boolean;

  @Column({ type: 'jsonb', nullable: true })
  settings?: Record<string, any> | null;

  @Column({ type: 'boolean', default: false })
  require_2fa!: boolean;

  @Column({ type: 'text', array: true, nullable: true })
  allowed_ips?: string[] | null;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deleted_at?: Date | null;
}