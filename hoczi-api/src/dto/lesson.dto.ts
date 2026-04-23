import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";
import { TenantPlanType } from "../entities/Tenant";

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
    class_id?: number;

    @IsOptional()
    due_date!: string;

    @IsOptional()
    assignment_type?: string;

    @IsOptional()
    lesson_id?: number;

    @IsOptional()
    class_subject_id?: number;

    @IsOptional()
    description!: string;
}


export class AssignStudentAssignmentRequest {

    @IsNotEmpty()
    student_id!: number;

    @IsNotEmpty()
    assignment_id!: number;

}


export class CommentOnAssignmentRequest {

    @IsNotEmpty()
    content!: string;

    @IsNotEmpty()
    assignmentStudentId!: number;


}



// export class CreateQuizRequest {

//     @IsNotEmpty()
//     title!: string;

//     @IsOptional()
//     content!: string;

//     @IsOptional()
//     quizType!: string;

//     @IsOptional()
//     categoryId!: number;

//     @IsOptional()
//     gradeId?: number;

//     @IsOptional()
//     topicId?: number;

//     @IsOptional()
//     difficulty?: string;

//     @IsOptional()
//     duration_minutes?: number;

//     @IsOptional()
//     total_questions?: number;

// }


export class CreateTenantRequest {

    @IsNotEmpty()
    name!: string;

    @IsOptional()
    description?: string;

    @IsOptional()
    logo_url?: string;

    @IsOptional()
    owner_user_id?: number;

    @IsOptional()
    code!: string;

    @IsOptional()
    domain?: string;

    @IsOptional()
    max_users?: number;

    @IsOptional()
    plan_type?: TenantPlanType;

    
}


export class AssignUserToTenantRequest {

    @IsNotEmpty()
    user_id!: number;

    @IsNotEmpty()
    tenant_id!: number;

    @IsNotEmpty()
    role!: string;

}