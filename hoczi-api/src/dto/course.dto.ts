import {IsNotEmpty, IsOptional } from "class-validator";

export class CreateCourseRequest {

    @IsNotEmpty()
    title!: string;

    @IsNotEmpty()
    slug!: string;

    @IsOptional()
    coverUrl!: string;

    @IsOptional()
    thumbnailUrl!: string;

    @IsNotEmpty()
    subjectCode!: string;

    @IsNotEmpty()
    description!: string;

}