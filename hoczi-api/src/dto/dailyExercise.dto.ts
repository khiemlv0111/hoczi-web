import {
    IsBoolean, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Matches, Max, MaxLength, Min, Validate,
    ValidatorConstraint, ValidatorConstraintInterface,
} from "class-validator";

// "HH:MM" in 15-minute steps
export const SEND_TIME_PATTERN = /^([01]\d|2[0-3]):(00|15|30|45)$/;
export const DEFAULT_SEND_TIME = '07:00';
export const DEFAULT_TIMEZONE = 'Asia/Ho_Chi_Minh';
export const DEFAULT_QUESTIONS_PER_DAY = 3;
export const MAX_QUESTIONS_PER_DAY = 10;
export const DELIVERY_STATUSES = ['pending', 'questions_sent', 'answers_sent', 'failed', 'skipped'];
export const RESEND_PARTS = ['questions', 'answers'];

const MAX_EXERCISE_TEXT = 6000;

export function isValidTimezone(tz: string) {
    try {
        new Intl.DateTimeFormat('en-US', { timeZone: tz });
        return true;
    } catch {
        return false;
    }
}

@ValidatorConstraint({ name: 'isTimezone', async: false })
class IsTimezoneConstraint implements ValidatorConstraintInterface {
    validate(value: unknown) {
        return typeof value === 'string' && value.length <= 64 && isValidTimezone(value);
    }
    defaultMessage() {
        return 'timezone must be a valid IANA timezone, e.g. Asia/Ho_Chi_Minh';
    }
}

class SubscriptionSettings {
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(MAX_QUESTIONS_PER_DAY)
    questions_per_day?: number;

    @IsOptional()
    @IsString()
    @Matches(SEND_TIME_PATTERN, { message: 'send_time must be HH:MM in 15-minute steps' })
    send_time?: string;

    @IsOptional()
    @Validate(IsTimezoneConstraint)
    timezone?: string;
}

export class CreateMySubscriptionRequest extends SubscriptionSettings {
    @IsInt()
    @Min(1)
    subject_id!: number;

    @IsInt()
    @Min(1)
    grade_id!: number;
}

export class UpdateMySubscriptionRequest extends SubscriptionSettings {
    @IsOptional()
    @IsBoolean()
    is_active?: boolean;
}

export class AdminCreateSubscriptionRequest extends CreateMySubscriptionRequest {
    @IsInt()
    @Min(1)
    user_id!: number;
}

export class AdminUpdateSubscriptionRequest extends UpdateMySubscriptionRequest {
    @IsOptional()
    @IsInt()
    @Min(1)
    subject_id?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    grade_id?: number;
}

export class UpdateExerciseRequest {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(MAX_EXERCISE_TEXT)
    question?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(MAX_EXERCISE_TEXT)
    answer?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(MAX_EXERCISE_TEXT)
    explanation?: string;
}

export class ResendDeliveryRequest {
    @IsIn(RESEND_PARTS)
    part!: 'questions' | 'answers';
}

export class UnsubscribeRequest {
    @IsString()
    @Matches(/^[0-9a-f]{64}$/, { message: 'Invalid token' })
    token!: string;
}
