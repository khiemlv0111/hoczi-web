import { AppDataSource } from '../data-source';
import { User } from '../entities/User';
// import { UserProfile } from '../entities/UserProfile';


export const userRepository = AppDataSource.getRepository(User);
// export const userProfileRepository = AppDataSource.getRepository(UserProfile);
