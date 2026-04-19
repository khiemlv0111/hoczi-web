import { AppDataSource } from '../data-source';
import { CreateAnswerRequest, CreateQuestionRequest } from '../dto/question.dto';
import { Answer } from '../entities/Answer';
import { Question } from '../entities/Question';
import { FindOptionsWhere, ILike } from 'typeorm';
import { Tenant } from '../entities/Tenant';

class TenantRepository {
    private get repo() {
        return AppDataSource.getRepository(Tenant);
    }



    async findAll() {


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

    async update(id: number, data: Partial<Tenant>) {
        await this.repo.update(id, data);
        return this.findById(id);
    }

    async createOne(data: Partial<Tenant>) {
        return await this.repo.save(data);

    }


}

export const tenantRepository = new TenantRepository();