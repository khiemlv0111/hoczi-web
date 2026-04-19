import { MoreThan, Not } from 'typeorm';
import { AppDataSource } from '../data-source';
import { CreateAssignmentRequest } from '../dto/lesson.dto';
import { Assignment } from '../entities/Assignment';
// import { UserProfile } from '../entities/UserProfile';

class AssignmentRepository {
    private get repo() {
        return AppDataSource.getRepository(Assignment);
    }


    async createOne(userId: number, data: CreateAssignmentRequest) {
        const classRoom = this.repo.create({
            title: data.title,
            description: data.description,
            class_subject_id: data.class_subject_id,
            lesson_id: data.lesson_id,
            due_at: data.due_at,
            assigned_by: userId,
            assignment_type: data.assignment_type
        });
        return this.repo.save(classRoom);
    }


    async findByQuizAndTeacher(quizId: number, teacherId: number) {
        return this.repo.findOne({
            where: { quiz_id: quizId, assigned_by: teacherId },
            order: { id: 'DESC' },
        });
    }

    async findAssignments(userId: number, page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            where: { assigned_by: userId },
            relations: ["teacher", "lesson", "assignment_students", "assignment_students.student"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }

    async findAddUpdateDueDateAssignments() {
        const assignments = await this.repo.find({
            where: {
                due_at: MoreThan(new Date()),
                status: Not('closed')
            }
        });

        if (assignments.length === 0) return;

        // update status thành 'closed' cho các assignment đã quá hạn
        await this.repo
            .createQueryBuilder()
            .update(Assignment)
            .set({ status: 'closed' })
            .whereInIds(assignments.map(a => a.id))
            .execute();

        return assignments;
    }



}


export const assignmentRepository = new AssignmentRepository();
