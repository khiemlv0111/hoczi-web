import { AppDataSource } from '../data-source';
import { ILike } from 'typeorm';
import { User } from '../entities/User';
// import { UserProfile } from '../entities/UserProfile';

class UserRepository {
    private get repo() {
        return AppDataSource.getRepository(User);
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
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
            relations: ['tenant']
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

    async save(user: User) {
        return this.repo.save(user);
    }

    async createInitUser(user: any) {
        return this.repo.save(user);
    }


}


export const userRepository = new UserRepository();
