import { AppDataSource } from '../data-source';
import { CommentOnAssignmentRequest } from '../dto/lesson.dto';
import { AssignmentComment } from '../entities/AssignmentComment';

class AssignmentCommentRepository {
    private get repo() {
        return AppDataSource.getRepository(AssignmentComment);
    }

    async createOne(userId: number, data: CommentOnAssignmentRequest) {
        const classRoom = this.repo.create({
            content: data.content,
            assignment_student_id: data.assignmentStudentId,
            user_id: userId,
        });
        return this.repo.save(classRoom);
    }

}


export const assignmentCommentRepository = new AssignmentCommentRepository();
