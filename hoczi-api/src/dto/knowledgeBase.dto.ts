import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class CreateKnowledgeBaseRequest {

    @IsNotEmpty()
    title!: string;

    @IsNotEmpty()
    content!: string;

    @IsOptional()
    description?: string;

    @IsOptional()
    category?: string;

    @IsOptional()
    @IsIn(['active', 'inactive'])
    status?: string;
}

export class UpdateKnowledgeBaseRequest {

    @IsOptional()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsNotEmpty()
    content?: string;

    @IsOptional()
    description?: string;

    @IsOptional()
    category?: string;

    @IsOptional()
    @IsIn(['active', 'inactive'])
    status?: string;
}
