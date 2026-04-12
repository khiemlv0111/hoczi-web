import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: 'varchar', name: 'name', nullable: true })
	name?: string

	@Column({ type: 'varchar', name: 'role', nullable: true })
	role?: string


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
}