import { AppDataSource } from '../data-source';
import { Grade } from '../entities/Grade';

class GradeRepository {
    private get repo() {
        return AppDataSource.getRepository(Grade);
    }

    

    async findAll(limit?: number) {
        return this.repo.find();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async findByQuestionId(quizId: number) {
        return this.repo.find({
            where: { id: quizId },
            order: { id: 'ASC' },
            relations: ['question'],
        });
    }

}

export const gradeRepository = new GradeRepository();