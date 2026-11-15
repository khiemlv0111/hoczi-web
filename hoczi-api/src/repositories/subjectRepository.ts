import { AppDataSource } from '../data-source';
import { Subject } from '../entities/Subject';
class SubjectRepository {
    private get repo() {
        return AppDataSource.getRepository(Subject);
    }

    async findMany() {
        return this.repo.find({ relations: ['class_subjects'] } );
    }

    async findActive() {
        return this.repo.find({ where: { status: 'active' }, order: { name: 'ASC' } });
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

}


export const subjectRepository = new SubjectRepository();
