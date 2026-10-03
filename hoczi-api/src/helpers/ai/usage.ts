import { aiConfig } from '../../config/ai';
import { ApiError } from '../../errors/api-erros';
import { aiUsageLogRepository } from '../../repositories/aiUsageLogRepository';

export type UsageRecord = {
    userId?: number | null;
    tenantId?: number | null;
    operation: string;
    provider: string;
    model: string;
    promptVersion?: string | null;
    inputTokens?: number;
    outputTokens?: number;
    fileSearchCalls?: number;
    latencyMs: number;
    outcome: string;
    errorCode?: string | null;
    providerRequestId?: string | null;
};

export function estimateCostUsd(r: Pick<UsageRecord, 'inputTokens' | 'outputTokens' | 'fileSearchCalls'>) {
    const p = aiConfig.pricing;
    return ((r.inputTokens ?? 0) / 1_000_000) * p.inputPer1M
        + ((r.outputTokens ?? 0) / 1_000_000) * p.outputPer1M
        + ((r.fileSearchCalls ?? 0) / 1000) * p.fileSearchPer1K;
}

function startOfMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
}

// Call before every user-triggered provider request.
export async function assertWithinLimits(userId: number | null, tenantId: number | null) {
    const limits = aiConfig.limits;

    if (userId && limits.requestsPerMinutePerUser > 0) {
        const recent = await aiUsageLogRepository.countForUserSince(userId, new Date(Date.now() - 60_000));
        if (recent >= limits.requestsPerMinutePerUser) {
            throw new ApiError('Too many AI requests, please wait a minute', 429);
        }
    }

    if (limits.monthlyBudgetUsd > 0) {
        const spent = await aiUsageLogRepository.sumCostSince(startOfMonth());
        if (spent >= limits.monthlyBudgetUsd) {
            throw new ApiError('Monthly AI budget has been reached', 429);
        }
    }

    if (tenantId && limits.tenantMonthlyBudgetUsd > 0) {
        const spent = await aiUsageLogRepository.sumCostSince(startOfMonth(), tenantId);
        if (spent >= limits.tenantMonthlyBudgetUsd) {
            throw new ApiError('Monthly AI budget for your organization has been reached', 429);
        }
    }
}

export async function recordUsage(r: UsageRecord) {
    try {
        await aiUsageLogRepository.create({
            user_id: r.userId ?? null,
            tenant_id: r.tenantId ?? null,
            operation: r.operation,
            provider: r.provider,
            model: r.model,
            prompt_version: r.promptVersion ?? null,
            input_tokens: r.inputTokens ?? 0,
            output_tokens: r.outputTokens ?? 0,
            file_search_calls: r.fileSearchCalls ?? 0,
            latency_ms: Math.round(r.latencyMs),
            outcome: r.outcome,
            error_code: r.errorCode ?? null,
            estimated_cost_usd: estimateCostUsd(r).toFixed(6),
            provider_request_id: r.providerRequestId ?? null,
        });
    } catch (error) {
        // Usage logging must never break the user request.
        console.error('[ai] failed to record usage', error);
    }
}
