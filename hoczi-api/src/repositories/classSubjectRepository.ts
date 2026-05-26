import { AppDataSource } from '../data-source';
import { ClassSubject } from '../entities/ClassSubject';
class ClassSubjectRepository {
    private get repo() {
        return AppDataSource.getRepository(ClassSubject);
    }

    async findMany() {
        return this.repo.find({ relations: ['class', 'teacher', 'subject'] });
    }


    async findByTeacherId(teacherId: number) {
        return this.repo.find({
            where: {teacher_id: teacherId}
        });
    }

    async addSubjectToClass(classId: number, subjectId: number, teacherId: number) {
        const existing = await this.repo.findOne({
            where: {
                class_id: classId,
                subject_id: subjectId,
            },
        });

        if (existing) {
            throw new Error('Subject already added to class');
        }

        const classSubject = this.repo.create({
            class_id: classId,
            subject_id: subjectId,
            teacher_id: teacherId,
            status: 'active',
        });

        return this.repo.save(classSubject);
    }

}


export const classSubjectRepository = new ClassSubjectRepository();
