import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', name: 'full_name', nullable: true })
	fullName?: string

	@Column({ type: 'varchar', unique: true })
	username!: string

	@Column({ type: 'varchar', unique: true })
	email!: string

	@Column({ type: 'varchar', name: 'avatar_url', nullable: true })
	avatarUrl!: string

	@Exclude()
	@Column({ type: 'varchar' })
	password!: string

	@Column({ type: 'boolean', name: 'is_active', default: true, nullable: true })
	isActive!: boolean

	@Column({ type: 'varchar', nullable: true })
	status!: string

	@CreateDateColumn()
	created_at!: Date;

	@UpdateDateColumn()
	updated_at!: Date;
}