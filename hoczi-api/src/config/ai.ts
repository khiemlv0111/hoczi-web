// Server-only AI configuration. Never import this from anything shipped to the browser.

function num(name: string, fallback: number): number {
    const raw = process.env[name];
    if (raw === undefined || raw === '') return fallback;
    const value = Number(raw);
    if (!Number.isFinite(value)) {
        throw new Error(`Invalid number in env ${name}: "${raw}"`);
    }
    return value;
}

function bool(name: string, fallback: boolean): boolean {
    const raw = process.env[name];
    if (raw === undefined || raw === '') return fallback;
    return ['1', 'true', 'yes'].includes(raw.toLowerCase());
}

export const aiConfig = {
    openai: {
        get apiKey() { return process.env.OPENAI_API_KEY ?? ''; },
        get model() { return process.env.OPENAI_MODEL ?? ''; },
        get ocrModel() { return process.env.OPENAI_OCR_MODEL || process.env.OPENAI_MODEL || ''; },
        get vectorStoreId() { return process.env.OPENAI_VECTOR_STORE_ID ?? ''; },
        get timeoutMs() { return num('OPENAI_REQUEST_TIMEOUT_MS', 120_000); },
        get maxRetries() { return num('OPENAI_MAX_RETRIES', 2); },
        get fileSearchMaxResults() { return num('OPENAI_FILE_SEARCH_MAX_RESULTS', 8); },
        get chunkMaxTokens() { return num('OPENAI_CHUNK_MAX_TOKENS', 800); },
        get chunkOverlapTokens() { return num('OPENAI_CHUNK_OVERLAP_TOKENS', 200); },
    },
    anthropic: {
        get model() { return process.env.ANTHROPIC_MODEL || 'claude-opus-4-7'; },
        get timeoutMs() { return num('ANTHROPIC_REQUEST_TIMEOUT_MS', 60_000); },
    },
    limits: {
        get maxOutputTokens() { return num('AI_MAX_OUTPUT_TOKENS', 8000); },
        get monthlyBudgetUsd() { return num('AI_MONTHLY_BUDGET_USD', 0); },        // 0 = no limit
        get tenantMonthlyBudgetUsd() { return num('AI_TENANT_MONTHLY_BUDGET_USD', 0); },
        get requestsPerMinutePerUser() { return num('AI_RATE_LIMIT_PER_MINUTE', 10); },
        get maxItemCount() { return num('AI_MAX_ITEM_COUNT', 20); },
    },
    // Used only to estimate cost in ai_usage_logs. Fill in from the current OpenAI pricing page.
    pricing: {
        get inputPer1M() { return num('AI_PRICE_INPUT_PER_1M_USD', 0); },
        get outputPer1M() { return num('AI_PRICE_OUTPUT_PER_1M_USD', 0); },
        get fileSearchPer1K() { return num('AI_PRICE_FILE_SEARCH_PER_1K_USD', 0); },
    },
    ingestion: {
        get bucket() { return process.env.AWS_S3_BUCKET_NAME ?? ''; },
        get maxUploadMb() { return num('AI_MAX_UPLOAD_MB', 100); },
        get pagesPerChunk() { return num('AI_PAGES_PER_CHUNK', 4); },
        get textCharsPerChunk() { return num('AI_TEXT_CHARS_PER_CHUNK', 6000); },
        get minCharsPerPage() { return num('AI_MIN_CHARS_PER_PAGE', 20); },
        get maxReplacementCharRatio() { return num('AI_MAX_REPLACEMENT_CHAR_RATIO', 0.01); },
        get ocrEnabled() { return bool('AI_OCR_ENABLED', false); },
        get ocrMaxPages() { return num('AI_OCR_MAX_PAGES', 300); },
    },
    worker: {
        get pollMs() { return num('AI_WORKER_POLL_MS', 2000); },
        get staleJobMinutes() { return num('AI_WORKER_STALE_JOB_MINUTES', 30); },
    },
};

export class AiNotConfiguredError extends Error {
    constructor(missing: string[]) {
        super(`AI integration is not configured. Missing env: ${missing.join(', ')}`);
    }
}

export function assertOpenAiConfigured(opts: { vectorStore?: boolean } = {}) {
    const missing: string[] = [];
    if (!aiConfig.openai.apiKey) missing.push('OPENAI_API_KEY');
    if (!aiConfig.openai.model) missing.push('OPENAI_MODEL');
    if (opts.vectorStore && !aiConfig.openai.vectorStoreId) missing.push('OPENAI_VECTOR_STORE_ID');
    if (missing.length) throw new AiNotConfiguredError(missing);
}
