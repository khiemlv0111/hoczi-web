import { AppDataSource } from '../data-source';
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
            username: data.name,
            role: data.role || 'user',
            password: data.hashPassword
        });
        return this.repo.save(question);
    }

    async userProfile(id: number) {
        return this.repo.findOne({ 
            where: { id },
            // relations: ['']
        });
    }

    async findAll(page: number, limit: number) {
        const offset = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            relations: ["quiz_sessions"],
            order: { id: "DESC" },
            take: limit,
            skip: offset,
        });

        return { data, total };
    }


}


export const userRepository = new UserRepository();
