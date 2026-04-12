import { AppDataSource } from '../data-source';
import { SubmitQuizSessionRequest } from '../dto/user.dto';
import { UserAnswer } from '../entities/UserAnswer';

class UserAnswerRepository {
    private get repo() {
        return AppDataSource.getRepository(UserAnswer);
    }



    async findAll(limit?: number) {
        return this.repo.find();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    // async createOne(userId: number, data: SubmitQuizSessionRequest) {
    //     const quizSession = this.repo.create({
    //         user_id: userId,
    //         score: data.score,
    //         total_questions: data.total_questions,
    //         correct_answers: data.correct_answers,
    //     });
    //     return this.repo.save(quizSession);
    // }

    

    async createMany(payload: {
        session_id: number;
        question_id: number;
        answer_id: number;
        is_correct: boolean;
    }[]) {
        const userAnswers = this.repo.create(payload);
        return await this.repo.save(userAnswers);
    }


}

export const userAnswerRepository = new UserAnswerRepository();