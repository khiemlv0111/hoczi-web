import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Exclude } from 'class-transformer'
import { QuizSession } from './QuizSession'
import { Tenant } from './Tenant'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', name: 'name', nullable: true })
	name?: string

	@Column({ type: 'text', name: 'role', nullable: true })
	role?: string

	@Column({ type: "int", nullable: true })
	tenant_id?: number|null;


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

	@ManyToOne(() => Tenant, (tenant) => tenant.users, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'tenant_id' })
	tenant!: Tenant;

	@OneToMany(() => QuizSession, (session) => session.user)
	quiz_sessions!: QuizSession[];
}