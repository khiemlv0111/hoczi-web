import { IsNotEmpty, IsOptional } from "class-validator";

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

export class CreateCourseModuleRequest {

    @IsNotEmpty()
    title!: string;

    @IsOptional()
    slug!: string;

    @IsNotEmpty()
    courseId!: number;

    @IsOptional()
    description!: string;


}

export class CreateVocabularyRequest {

    @IsNotEmpty()
    word!: string;

    @IsOptional()
    pinyin!: string;

    @IsOptional()
    hanViet!: string;

    @IsOptional()
    meaningVi!: string;

    @IsOptional()
    meaningEn!: string;

    @IsOptional()
    exampleSentence!: string;

    @IsOptional()
    audioUrl!: string;

    @IsOptional()
    metadata?: Record<string, any>;

}


export class AddLessonToModuleRequest {

    @IsNotEmpty()
    lessonId!: number;

    @IsNotEmpty()
    courseModuleId!: number;


}



export class AddVocabularyToLessonRequest {

    @IsNotEmpty()
    lessonId!: number;

    @IsNotEmpty()
    vocabularyId!: number;


}