import OpenAI from 'openai';
import { ApiError } from '../../errors/api-erros';
import { AiNotConfiguredError } from '../../config/ai';

// Map provider errors to HTTP errors without leaking provider details to clients.
export function toApiError(error: unknown): ApiError {
    if (error instanceof ApiError) return error;
    if (error instanceof AiNotConfiguredError) return new ApiError('AI service is not configured', 503);
    if (error instanceof OpenAI.APIConnectionTimeoutError) return new ApiError('AI provider timed out', 504);
    if (error instanceof OpenAI.RateLimitError) return new ApiError('AI provider is rate limiting requests, try again later', 503);
    if (error instanceof OpenAI.APIError) return new ApiError('AI provider request failed', 502);
    return new ApiError('AI request failed', 500);
}

// Transient = worth retrying later (worker backoff).
export function isTransient(error: unknown): boolean {
    if (error instanceof OpenAI.APIConnectionError) return true; // includes timeouts
    if (error instanceof OpenAI.RateLimitError) return true;
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
