import { AppDataSource } from '../data-source';
import { ILike, IsNull } from 'typeorm';
import { User } from '../entities/User';
// import { UserProfile } from '../entities/UserProfile';

class UserRepository {
    private get repo() {
        return AppDataSource.getRepository(User);
    }

    async findById(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['tenant']
        });
    }

    async findUserDetail(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['tenant', 'ownedTenant', 'schedule_users', 'quiz_sessions', 'quiz_sessions.user_answers']
        });
    }

    async findByEmail(email: string) {
        return this.repo.findOne({ where: { email } });
    }

    async findByUsername(username: string) {
        return this.repo.findOne({ where: { username } });
    }

    async createOne(data: any) {
        const question = this.repo.create({
            name: data.name,
            email: data.email,
            username: data.username,
            role: data.role || 'user',
            password: data.hashPassword
        });
        return this.repo.save(question);
    }

    async userProfile(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['tenant', 'ownedTenant']
        });
    }

    async findAll(page: number, limit: number, keyword?: string) {
        const offset = (page - 1) * limit;

        const where = keyword
            ? [
                { name: ILike(`%${keyword}%`) },
                { email: ILike(`%${keyword}%`) },
                { username: ILike(`%${keyword}%`) },
            ]
            : undefined;

        const [data, total] = await this.repo.findAndCount({
            where,
            relations: ["quiz_sessions"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }

    async findTenantUsers(keyword?: string) {

        const query = this.repo
            .createQueryBuilder("user")
            .leftJoinAndSelect("user.quiz_sessions", "quiz_sessions")
            .where("user.tenant_id IS NULL")
            .orderBy("user.id", "DESC");

        if (keyword) {
            query.andWhere(
                "(user.name ILIKE :keyword OR user.email ILIKE :keyword OR user.username ILIKE :keyword)",
                { keyword: `%${keyword}%` }
            );
        }

        const [data, total] = await query.getManyAndCount();

        return { data, total };
    }

    async save(user: User) {
        const saved = await this.repo.save(user);
        const { password, ...rest } = saved;
        return rest;
    }

    async createInitUser(user: any) {
        return this.repo.save(user);
    }

    async findByTenantId(tenantId: number, keyword?: string) {

        const where = keyword
            ? [
                { tenant_id: tenantId, name: ILike(`%${keyword}%`) },
                { tenant_id: tenantId, email: ILike(`%${keyword}%`) },
                { tenant_id: tenantId, username: ILike(`%${keyword}%`) },
            ]
            : { tenant_id: tenantId };

        const users = await this.repo.find({
            where,
            relations: ['tenant']
        });

        return users;
    }


}


export const userRepository = new UserRepository();
