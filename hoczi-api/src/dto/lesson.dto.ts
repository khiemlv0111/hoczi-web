import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateLessonRequest {

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
}
