import { AppDataSource } from '../data-source';
import { AssignStudentAssignmentRequest } from '../dto/lesson.dto';
import { AssignmentStudent } from '../entities/AssignmentStudent';

class AssignmentStudentRepository {
    private get repo() {
        return AppDataSource.getRepository(AssignmentStudent);
    }

    async createOne(data: AssignStudentAssignmentRequest) {
        const classRoom = this.repo.create({
            student_id: data.student_id,
            assignment_id: data.assignment_id,
        });
        return this.repo.save(classRoom);
    }


    async findByUserId(userId: number, page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            where: { student_id: userId },
            relations: ["assignment", "comments"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }

    async findAssignmentStudentDetail(assignmentStudentId: number) {
        const response = await this.repo.findOne({
            where: {id: assignmentStudentId},
            relations: ['assignment', 'student', 'comments']
        });
        return response;

    }

}


export const assignmentStudentRepository = new AssignmentStudentRepository();
