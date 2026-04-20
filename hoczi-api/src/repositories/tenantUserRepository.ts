import { AppDataSource } from '../data-source';
import { AssignUserToTenantRequest } from '../dto/lesson.dto';
import { TenantUser } from '../entities/TenantUser';

class TenantUserRepository {
    private get repo() {
        return AppDataSource.getRepository(TenantUser);
    }

    async findAll() {
        return this.repo.find();
    }

    async findByUserId(userId: number) {
        return this.repo.find({ 
            where: { user_id: userId },
            relations: ['tenant']
        });
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

    async assignUserToTenant(userId: number, data: AssignUserToTenantRequest) {
        const payload = {
            tenant_id: data.tenant_id,
            user_id: data.user_id,
            invited_by: userId,
            role: data.role,
        }
        return await this.repo.save(payload);

    }


}

export const tenantUserRepository = new TenantUserRepository();