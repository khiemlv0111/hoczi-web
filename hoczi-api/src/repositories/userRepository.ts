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
            password: data.hashPassword
        });
        return this.repo.save(question);
    }


}


export const userRepository = new UserRepository();
