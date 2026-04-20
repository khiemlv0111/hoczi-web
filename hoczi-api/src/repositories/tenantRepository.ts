import { AppDataSource } from '../data-source';
import { AssignUserToTenantRequest } from '../dto/lesson.dto';
import { Tenant } from '../entities/Tenant';

class TenantRepository {
    private get repo() {
        return AppDataSource.getRepository(Tenant);
    }



    async findAll() {
        return this.repo.find();

    }

    async findById(id: number) {
        return this.repo.findOne({ 
            where: { id },
            relations: ['tenantUsers', 'tenantUsers.user']
        });
    }


    async update(id: number, data: Partial<Tenant>) {
        await this.repo.update(id, data);
        return this.findById(id);
    }

    async createOne(data: Partial<Tenant>) {
        return await this.repo.save(data);

    }

    // async assignUserToTenant(data: AssignUserToTenantRequest) {
    //     return await this.repo.save(data);

    // }

    


}

export const tenantRepository = new TenantRepository();