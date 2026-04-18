import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min, ValidateNested } from "class-validator";

export class UserRegisterRequest {

    name?: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string;
}


// type QuizSession = {
//     chosen: string,
//     correct_answer: string,
//     is_correct: boolean,
//     question_id: number,
//     answer_id: number,
//     question: string,
// }

export class QuizSessionDto {
    @IsOptional()
    @IsString()
    chosen?: string | null;

    @IsBoolean()
    is_correct!: boolean;

    @IsNumber()
    question_id!: number;

    @IsNumber()
    answer_id!: number;

}

export class CreateQuizRequest {

    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    category_id?: number;

    @IsNumber()
    @IsOptional()
    duration_minutes?: number;

    @IsNumber()
    @IsOptional()
    total_questions?: number;

    @IsOptional()
    quiz_type?: string;

    @IsString()
    @IsOptional()
    status?: string;

    @IsNumber()
    @IsOptional()
    topic_id?: number;

    @IsNumber()
    @IsOptional()
    created_by?: number;

    @IsNumber()
    @IsOptional()
    grade_id?: number;

}


export class SubmitQuizSessionRequest {

    @IsNumber()
    quiz_id!: number;

    @IsNumber()
    score!: number;

    @IsNumber()
    quiz_session_id!: number;

    @IsNumber()
    total_questions!: number;

    @IsNumber()
    correct_answers!: number;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuizSessionDto)   // ← cái này quan trọng nhất, không có là lỗi
    quizzes?: QuizSessionDto[];

}



export class TeacherCreateQuizSessionRequest {

    @IsNumber()
    quiz_id!: number;

    question_ids!: number[];

}




export class UserLoginRequest {


    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
}


export class SubmitRegisterMerchantRequest {


    @IsString()
    @IsNotEmpty()
    merchantType!: string;

    lockedAmount?: number;

    @IsNotEmpty()
    tradeVolume!: number;

    @IsNotEmpty()
    billUrl!: string;

    @IsNotEmpty()
    telegram!: string;

    @IsNotEmpty()
    address!: string;
    companyName?: string;

    businessLicense?: string;

    description?: string;


}

export class RequestMerchantDepositRequest {


    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsNotEmpty()
    tradeVolume!: number;

    @IsString()
    @IsNotEmpty()
    paymentLink!: string;

    @IsString()
    @IsNotEmpty()
    bankName!: string;

    @IsString()
    @IsNotEmpty()
    bankHolderName!: string;


}

export class ChangePasswordRequest {


    @IsString()
    @IsNotEmpty()
    oldPassword!: string;

    @IsString()
    @IsNotEmpty()
    newPassword!: string;

}

export class CheckValidPhoneRequest {


    @IsString()
    @IsNotEmpty()
    phone!: string;

}


export class UpdateUserProfileRequest {


    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsString()
    @IsNotEmpty()
    avatarUrl!: string;

    @IsString()
    @IsNotEmpty()
    coverUrl!: string;

    @IsString()
    @IsNotEmpty()
    about!: string;


}


export class UpdateUserRequest {

    @IsOptional()
    name?: string;

    @IsOptional()
    role!: string;

}
