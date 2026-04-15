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
            started_at: data.started_at,
        });
        return this.repo.save(classRoom);
    }

}


export const assignmentStudentRepository = new AssignmentStudentRepository();
