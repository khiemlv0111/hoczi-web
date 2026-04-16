import { AppDataSource } from '../data-source';
import { ClassMember } from '../entities/ClassMember';
// import { UserProfile } from '../entities/UserProfile';

class ClassMemberRepository {
    private get repo() {
        return AppDataSource.getRepository(ClassMember);
    }

    async createOne(classId: number, userId: number) {
        const classRoom = this.repo.create({
            class_id: classId,
            student_id: userId,
            joined_at: new Date(),

        });
        return this.repo.save(classRoom);
    }


    async deleteOne(classId: number, userId: number) {
        const result = await this.repo.delete({
            class_id: classId,
            student_id: userId,
        });

        if (result.affected === 0) {
            throw new Error('Class member not found');
        }

        return true;
    }

    async getMyClasses(studentId: number) {

        return this.repo
            .createQueryBuilder('cm')
            .leftJoinAndSelect('cm.class', 'c')
            .leftJoinAndSelect('c.members', 'members')
            .leftJoinAndSelect('members.student', 'student')
            .where('cm.student_id = :studentId', { studentId })
            .andWhere('cm.status = :status', { status: 'active' })
            .getMany();
            // return this.repo
            //     .createQueryBuilder('cm')
            //     .leftJoinAndSelect('cm.class', 'c')
            //     .where('cm.student_id = :studentId', { studentId })
            //     .andWhere('cm.status = :status', { status: 'active' })
            //     .getMany();

    }

}


export const classMemberRepository = new ClassMemberRepository();
