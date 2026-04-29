import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateUserRequest {

    @IsString()
    fullName?: string;

    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    // @Min(2)
    email!: string;
}

export class CreateQuestionRequest {

    @IsNotEmpty()
    content!: string;

    @IsOptional()
    type!: string;

    @IsOptional()
    categoryId!: number;

    @IsOptional()
    gradeId?: number;

    @IsOptional()
    topicId!: number;

    @IsOptional()
    difficulty!: string;

    @IsOptional()
    code!: string;


    @IsString()
    @IsOptional()
    explanation?: string;

    @IsOptional()
    tenantId?: number | null;

    @IsOptional()
    is_system?: boolean | null;
}


export class CreateAnswerRequest {

    @IsNotEmpty()
    content!: string;

    @IsNotEmpty()
    questionId!: number;

    @IsNotEmpty()
    isCorrect!: boolean;

}


export interface QuestionFilterDto {
  gradeId?: number;
  categoryId?: number;
  topicId?: number;
  difficulty?: string;
}

export interface TeacherFilterQuestionDto {
    categoryId?: number;
    topicId?: number;
    gradeId?: number;
    teacherId?: number;
    tenantId?: number;
    difficulty?: 'easy' | 'medium' | 'hard';
    keyword?: string;
    quizId?: number;
    source?: 'teacher' | 'system' | 'all';
    page?: number;
    perPage?: number;
}