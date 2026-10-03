import OpenAI from 'openai';
import { ApiError } from '../../errors/api-erros';
import { AiNotConfiguredError } from '../../config/ai';

// 429 codes that mean "no money left" rather than "too many requests". Seen in production:
// credit_balance_exhausted (prepaid credits used up).
const QUOTA_ERROR_CODES = ['insufficient_quota', 'credit_balance_exhausted', 'billing_hard_limit_reached'];

function isQuotaError(error: InstanceType<typeof OpenAI.RateLimitError>) {
    return QUOTA_ERROR_CODES.includes(String(error.code ?? '')) || QUOTA_ERROR_CODES.includes(String(error.type ?? ''));
}

// Map provider errors to HTTP errors without leaking provider details to clients.
export function toApiError(error: unknown): ApiError {
    if (error instanceof ApiError) return error;
    if (error instanceof AiNotConfiguredError) return new ApiError('AI service is not configured', 503);
    if (error instanceof OpenAI.APIConnectionTimeoutError) return new ApiError('AI provider timed out', 504);
    if (error instanceof OpenAI.RateLimitError) {
        // OpenAI uses 429 both for real rate limits and for an account/project with no credits left.
        if (isQuotaError(error)) {
            return new ApiError('AI quota exhausted: the OpenAI account has no credits or hit its spending limit. Contact an administrator.', 503);
        }
        return new ApiError('AI provider is rate limiting requests, try again later', 503);
    }
    if (error instanceof OpenAI.APIError) return new ApiError('AI provider request failed', 502);
    return new ApiError('AI request failed', 500);
}

// Transient = worth retrying later (worker backoff).
export function isTransient(error: unknown): boolean {
    if (error instanceof OpenAI.APIConnectionError) return true; // includes timeouts
    // No credits left is not fixed by retrying.
    if (error instanceof OpenAI.RateLimitError) return !isQuotaError(error);
    if (error instanceof OpenAI.APIError) return (error.status ?? 0) >= 500;
    const code = (error as any)?.code;
    return ['ECONNRESET', 'ETIMEDOUT', 'EAI_AGAIN', 'ECONNREFUSED'].includes(code);
}

export function errorCode(error: unknown): string {
    if (error instanceof OpenAI.APIError) return `${error.status ?? 'unknown'}:${error.code ?? error.type ?? ''}`.slice(0, 255);
    return ((error as any)?.name ?? 'Error').slice(0, 255);
}

// Thrown for failures that retrying cannot fix (bad file, duplicate, missing record).
export class PermanentJobError extends Error {
    constructor(message: string, public details?: Record<string, any>) {
        super(message);
    }
}
