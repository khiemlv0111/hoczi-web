import { AppDataSource } from '../data-source';
import { Assignment } from '../entities/Assignment';
// import { UserProfile } from '../entities/UserProfile';

class AssignmentRepository {
    private get repo() {
        return AppDataSource.getRepository(Assignment);
    }


    async createOne(userId: number, data: any) {
        const classRoom = this.repo.create({
            title: data.title,
            description: data.description,
            class_subject_id: data.classSubjectId,
            lesson_id: data.lessonId,
            due_at: data.due_at,
            assigned_by: userId,

        });
        return this.repo.save(classRoom);
    }



    async findAssignments(userId: number, page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            where: {assigned_by: userId},
            relations: ["grade", "subject", "topic"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }
    


}


export const assignmentRepository = new AssignmentRepository();
