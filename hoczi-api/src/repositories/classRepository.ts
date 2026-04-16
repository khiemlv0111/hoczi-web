import { AppDataSource } from '../data-source';
import { Class } from '../entities/Class';
// import { UserProfile } from '../entities/UserProfile';

class ClassRepository {
    private get repo() {
        return AppDataSource.getRepository(Class);
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async findMany(teacherId: number) {
        return this.repo.find({
            where: { teacher_id: teacherId },
            relations: ['teacher', 'members', 'members.student', 'class_subjects', 'class_subjects.subject']
        });
    }

    async createOne(teacherId: number, data: any) {
        const classRoom = this.repo.create({
            name: data.name,
            code: data.code,
            description: data.description,
            teacher_id: teacherId,
            school_name: data.school_name,
            grade_id: 4,
        });
        return this.repo.save(classRoom);
    }



    async findAll(page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            relations: ["quiz_sessions"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }


}


export const classRepository = new ClassRepository();
