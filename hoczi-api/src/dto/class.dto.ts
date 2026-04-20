import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";


export class CreateClassRequest {

    @IsNotEmpty()
    name!: string;

    @IsNotEmpty()
    tenant_id!: number;

    @IsOptional()
    code!: string;

    @IsOptional()
    description!: number;

    @IsOptional()
    school_name?: number;

    @IsOptional()
    teacher_id?: number;

    @IsOptional()
    gradeId!: number;

}


export class CreateSubjectRequest {

    @IsNotEmpty()
    content!: string;

    @IsNotEmpty()
    questionId!: number;

    @IsNotEmpty()
    isCorrect!: boolean;

}

export class AddMemberToClassRequest {

    @IsNotEmpty()
    class_id!: number;

    @IsNotEmpty()
    user_id!: number;


}

export class RemoveMemberRequest {

    @IsNotEmpty()
    class_id!: number;

    @IsNotEmpty()
    user_id!: number;


}


export class AddSubjectToClassRequest {

    @IsNotEmpty()
    class_id!: number;

    @IsNotEmpty()
    subject_id!: number;


}


