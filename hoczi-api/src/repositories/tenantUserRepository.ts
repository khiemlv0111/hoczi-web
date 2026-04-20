import { AppDataSource } from '../data-source';
import { TenantUser } from '../entities/TenantUser';

class TenantUserRepository {
    private get repo() {
        return AppDataSource.getRepository(TenantUser);
    }

    async findAll() {
        return this.repo.find();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    async update(id: number, data: Partial<TenantUser>) {
        await this.repo.update(id, data);
        return this.findById(id);
    }

    async createOne(data: Partial<TenantUser>) {
        return await this.repo.save(data);
    }


}

export const tenantUserRepository = new TenantUserRepository();