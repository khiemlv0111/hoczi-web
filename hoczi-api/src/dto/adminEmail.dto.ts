import {
    ArrayMaxSize, IsArray, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID, Matches, MaxLength, Min,
} from "class-validator";

export const MAX_RECIPIENTS = 1000;

// Single line, 1–200 characters (checked again after trimming in the service)
const SUBJECT_PATTERN = /^[^\r\n]*$/;

export class PreviewEmailRequest {
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    @Matches(SUBJECT_PATTERN, { message: 'subject must be a single line' })
    subject!: string;

    // TipTap document; validated in helpers/richText.ts
    @IsObject()
    content!: Record<string, unknown>;
}

export class CreateBroadcastRequest extends PreviewEmailRequest {
    @IsUUID()
    client_request_id!: string;

    @IsOptional()
    @IsArray()
    @ArrayMaxSize(MAX_RECIPIENTS)
    @IsString({ each: true })
    @MaxLength(254, { each: true })
    emails?: string[];

    @IsOptional()
    @IsArray()
    @ArrayMaxSize(MAX_RECIPIENTS)
    @IsInt({ each: true })
    @Min(1, { each: true })
    user_ids?: number[];
}
