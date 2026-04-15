import { AppDataSource } from '../data-source';
import { ClassMember } from '../entities/ClassMember';
// import { UserProfile } from '../entities/UserProfile';

class ClassMemberRepository {
    private get repo() {
        return AppDataSource.getRepository(ClassMember);
    }

    // async findById(id: number) {
    //     return this.repo.findOne({ where: { id } });
    // }

    // async findMany(teacherId: number) {
    //     return this.repo.find({
    //         where: { class_id: teacherId },
    //         relations: ['teacher']
    //     });
    // }



    async createOne(classId: number, userId: number) {
        const classRoom = this.repo.create({
            class_id: classId,
            student_id: userId,
            joined_at: new Date(),
   
        });
        return this.repo.save(classRoom);
    }




}


export const classMemberRepository = new ClassMemberRepository();
