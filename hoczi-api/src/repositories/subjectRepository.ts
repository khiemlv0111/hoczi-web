import { AppDataSource } from '../data-source';
import { Subject } from '../entities/Subject';
class SubjectRepository {
    private get repo() {
        return AppDataSource.getRepository(Subject);
    }

    async findMany() {
        return this.repo.find({ relations: ['class_subjects'] } );
    }

}


export const subjectRepository = new SubjectRepository();
