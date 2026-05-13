import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBookRequest {

    @IsNotEmpty()
    title!: string;

    @IsNotEmpty()
    slug!: string;

    @IsOptional()
    description!: string;

    @IsOptional()
    cover_image_url?: string;

    @IsOptional()
    status?: string;

    @IsOptional()
    is_public?: boolean;

    @IsOptional()
    metadata?: any;

    @IsOptional()
    book_url?: string;
}
