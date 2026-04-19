import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Exclude } from 'class-transformer'
import { QuizSession } from './QuizSession'
import { TenantUser } from './TenantUser'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', name: 'name', nullable: true })
	name?: string

	@Column({ type: 'text', name: 'role', nullable: true })
	role?: string

	@Column({ type: "int", nullable: true })
	tenant_id?: number;


	@Column({ type: 'varchar', unique: true })
	username!: string

	@Column({ type: 'varchar', unique: true })
	email!: string

	@Exclude()
	@Column({ type: 'varchar' })
	password!: string

	@CreateDateColumn()
	created_at!: Date;

	@UpdateDateColumn()
	updated_at!: Date;

	@OneToMany(() => QuizSession, (session) => session.user)
	quiz_sessions!: QuizSession[];

	@OneToMany(() => TenantUser, (tenantUser) => tenantUser.user)
	tenantUsers!: TenantUser[];
}