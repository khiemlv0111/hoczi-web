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
    class_id?: number;

    @IsOptional()
    due_at!: string;

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
