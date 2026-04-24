import { BadRequestError } from "../errors/api-erros";
import { JwtPayload } from "../middlewares/authMiddleware";
import { userRepository } from "../repositories/userRepository";
import { generateRandomCode } from "../utils";
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from "../utils/create_token";
import { quizSessionRepository } from "../repositories/quizSessionRepository";
import { SubmitQuizSessionRequest } from "../dto/user.dto";

import { userAnswerRepository } from "../repositories/userAnswerRepository";
import { assignmentStudentRepository } from "../repositories/assignmentStudentRepository";
import { classMemberRepository } from "../repositories/classMemberRepository";




export class UserService {
    async login(loginPayload: any) {
        const { email, password } = loginPayload;
        const userLogin = await userRepository.findByEmail(email);

        if (!userLogin) {
            throw new BadRequestError('User not found!!')
        }

        const verifyPass = await bcrypt.compare(password, userLogin.password);

        if (!verifyPass) {
            throw new BadRequestError('E-mail Or Password Incorrect')
        }

        const jwtPayload: JwtPayload = {
            id: userLogin.id,
            email: userLogin.email,
        }

        const access_token = createAccessToken(jwtPayload);

        const refreshToken = createRefreshToken(jwtPayload);

        const { password: _, ...user } = userLogin

        return {
            success: true,
            message: "login success",
            user: user,
            access_token,
            refresh_token: refreshToken,

        }
    }

    async register(loginPayload: any) {
        const { name, email, password } = loginPayload;

        const normalEmail = email.toLowerCase();

        const userExists = await userRepository.findByEmail(normalEmail);

        if (userExists) {
            throw new BadRequestError('E-mail Existed!!')
        }

        let username = normalEmail.split("@")[0];

        const userByUsernameExist = await userRepository.findByUsername(username);


        if (userByUsernameExist) {
            username = `${username}${generateRandomCode(4)}`;
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await userRepository.createOne({ name, username, email: normalEmail, hashPassword });


        return {
            message: "Register success",
            success: true,
            user: newUser
        }
    }

    async userProfile(id: number) {
        const user = await userRepository.userProfile(id);
        const { password: _, ...userWithoutPassword } = user as any;
        return {
            message: "get user success",
            success: true,
            user: userWithoutPassword
        }
    }

    async userList(page: number, limit: number, keyword?: string) {
        const response = await userRepository.findAll(page, limit, keyword);
        return {
            message: "get users success",
            success: true,
            data: { users: response.data, total: response.total }
        }
    }

    async userTenantList(keyword?: string) {
        const response = await userRepository.findTenantUsers(keyword);
        return {
            message: "get users success",
            success: true,
            data: { users: response.data, total: response.total }
        }
    }

    async updateUser(userId: number, data: any) {
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // business logic ở đây
        user.name = data.name ?? user.name;
        user.role = data.role ?? user.role;

        return userRepository.save(user);
    }

    async removeUserFromTenant(userId: number) {
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        user.tenant_id = null;

        const response = await userRepository.save(user);
        console.log('RESPONSE', response);


        return response
    }

    async findUserById(userId: number) {
        return await userRepository.findById(userId);
    }

    async getDashboardData(userId: number) {
        const [allSessions, assignmentsData, myClasses] = await Promise.all([
            quizSessionRepository.findByUserId(userId),
            assignmentStudentRepository.findByUserId(userId, 1, 100),
            classMemberRepository.getMyClasses(userId),
        ]);

        const completedSessions = allSessions.filter(s => s.status === 'completed');
        const totalQuizzes = completedSessions.length;
        const avgScore = totalQuizzes > 0
            ? Math.round(completedSessions.reduce((sum, s) => sum + s.score, 0) / totalQuizzes)
            : 0;
        const bestScore = totalQuizzes > 0
            ? Math.max(...completedSessions.map(s => s.score))
            : 0;

        const recentSessions = completedSessions
            .sort((a, b) => new Date(b.end_time!).getTime() - new Date(a.end_time!).getTime())
            .slice(0, 5);

        const assignments = assignmentsData.data;
        const pendingAssignments = assignments
            .filter(a => ['assigned', 'in_progress'].includes(a.status))
            .slice(0, 5);
        const totalAssignments = assignments.length;
        const completedAssignments = assignments.filter(a => a.status === 'submitted').length;

        return {
            message: "get dashboard success",
            success: true,
            data: {
                stats: {
                    totalQuizzesCompleted: totalQuizzes,
                    avgScore,
                    bestScore,
                    totalClasses: myClasses.length,
                    totalAssignments,
                    completedAssignments,
                },
                recentQuizSessions: recentSessions,
                pendingAssignments,
                classes: myClasses,
            }
        }
    }

    async getUserDetail(userId: number) {
        const user = await userRepository.findUserDetail(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const { password: _, ...userWithoutPassword } = user as any;
        return userWithoutPassword;
    }

    async getSameTenantUsers(userId: number, keyword?: string) {
        // 1. Lấy tenant_id của user hiện tại
        const currentUser = await userRepository.findById(userId);

        if (!currentUser) {
            throw new Error('User not found');
        }

        if (!currentUser.tenant_id) {
            return [];  // User không thuộc tenant nào
        }

        // 2. Tìm tất cả users cùng tenant
        const users = await userRepository.findByTenantId(currentUser.tenant_id, keyword);

        return users;
    }


}
