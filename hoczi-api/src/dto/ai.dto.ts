import {
    ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsIn, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, Max, MaxLength, Min,
    ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ITEM_TYPES, TASK_TYPES } from "../helpers/ai/schemas";

export const HSK_STANDARDS = ['hsk2', 'hsk3'];
export const HSK_MAX_LEVEL: Record<string, number> = { hsk2: 6, hsk3: 9 };
export const SCRIPTS = ['simplified', 'traditional'];
export const CONTENT_TYPES = ['textbook', 'workbook', 'answer_key', 'grammar', 'reading', 'vocabulary', 'other'];
export const RIGHTS_STATUSES = ['owned', 'licensed', 'permission_granted', 'public_domain'];
export const DIFFICULTIES = ['easy', 'medium', 'hard'];

export class CreateUploadUrlRequest {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    filename!: string;
}

export class RegisterKnowledgeDocumentRequest {
    @IsNotEmpty()
    @IsString()
    @MaxLength(500)
    storage_key!: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    title!: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    original_filename!: string;

    @IsIn(HSK_STANDARDS)
    hsk_standard!: string;

    @IsInt()
    @Min(1)
    @Max(9)
    hsk_level!: number;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    edition?: string;

    @IsOptional()
    @IsIn(SCRIPTS)
    script?: string;

    @IsOptional()
    @IsString()
    @MaxLength(20)
    language?: string;

    @IsIn(CONTENT_TYPES)
    content_type!: string;

    @IsOptional()
    @IsInt()
    tenant_id?: number | null;

    @IsOptional()
    @IsInt()
    book_id?: number;

    @IsOptional()
    @IsInt()
    book_lesson_id?: number;

    @IsIn(RIGHTS_STATUSES)
    rights_status!: string;

    @IsOptional()
    @IsString()
    @MaxLength(2000)
    rights_notes?: string;

    @IsOptional()
    @IsInt()
    supersedes_document_id?: number;

    // Index even if the same file (checksum) is already indexed
    @IsOptional()
    @IsBoolean()
    allow_duplicate?: boolean;
}

export class GenerateRequest {
    @IsIn([...TASK_TYPES])
    task_type!: string;

    @IsIn(HSK_STANDARDS)
    hsk_standard!: string;

    @IsInt()
    @Min(1)
    @Max(9)
    hsk_level!: number;

    @IsIn(SCRIPTS)
    script!: string;

    @IsOptional()
    @IsBoolean()
    include_pinyin?: boolean;

    // Language used for explanations, e.g. "vi", "en"
    @IsOptional()
    @IsString()
    @MaxLength(20)
    explanation_language?: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    learner_proficiency?: string;

    @IsIn(DIFFICULTIES)
    difficulty!: string;

    @IsInt()
    @Min(0)
    @Max(50)
    item_count!: number;

    @IsOptional()
    @IsArray()
    @IsIn([...ITEM_TYPES], { each: true })
    item_types?: string[];

    @IsOptional()
    @IsInt()
    book_id?: number;

    @IsOptional()
    @IsArray()
    @ArrayMaxSize(20)
    @IsInt({ each: true })
    document_ids?: number[];

    @IsOptional()
    @IsArray()
    @IsIn(CONTENT_TYPES, { each: true })
    content_types?: string[];

    // Topic, lesson or grammar point to focus on
    @IsOptional()
    @IsString()
    @MaxLength(500)
    topic?: string;

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    notes?: string;
}

export class AskRequest {
    @IsNotEmpty()
    @IsString()
    @MaxLength(2000)
    question!: string;

    @IsOptional()
    @IsIn(HSK_STANDARDS)
    hsk_standard?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(9)
    hsk_level?: number;

    @IsOptional()
    @IsIn(SCRIPTS)
    script?: string;
}

export class ChatMessage {
    @IsIn(['user', 'assistant'])
    role!: 'user' | 'assistant';

    @IsNotEmpty()
    @IsString()
    @MaxLength(4000)
    content!: string;
}

export class ChatRequest {
    // Conversation so far, oldest first; the last message must be the user's question.
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(40)
    @ValidateNested({ each: true })
    @Type(() => ChatMessage)
    messages!: ChatMessage[];
}

export class UpdateDraftRequest {
    @IsObject()
    output!: Record<string, any>;
}

export class ReviewDraftRequest {
    @IsOptional()
    @IsString()
    @MaxLength(2000)
    notes?: string;
}

export class PublishDraftRequest {
    @IsOptional()
    @IsInt()
    category_id?: number;

    @IsOptional()
    @IsInt()
    topic_id?: number;

    @IsOptional()
    @IsInt()
    grade_id?: number;
}
