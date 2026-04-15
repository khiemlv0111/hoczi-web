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

export class CreateAssignmentRequest {

    @IsNotEmpty()
    title!: string;

    @IsOptional()
    classId!: number;

    @IsOptional()
    due_at!: string;

    @IsOptional()
    subjectId?: number;

    @IsOptional()
    lessonId!: number;

    @IsOptional()
    classSubjectId!: number;

    @IsOptional()
    description!: string;
}
