import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { User } from './User';
import { Class } from './Class';
// import { Class } from './class.entity';
// import { User } from './user.entity';

@Entity('class_members')
@Unique(['class_id', 'student_id'])
export class ClassMember {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  class_id!: number;

  @Column()
  student_id!: number;

  @ManyToOne(() => Class, (cls) => cls.members, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'class_id' })
  class!: Class;

  @ManyToOne(() => User, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'student_id' })
  student!: User;

  @CreateDateColumn()
  joined_at!: Date;

  @Column({ type: 'varchar', length: 50, default: 'active' })
  status!: string;
}