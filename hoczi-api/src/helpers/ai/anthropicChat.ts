import { anthropic } from '../index';
import { aiConfig } from '../../config/ai';
import { ApiError } from '../../errors/api-erros';
import { recordUsage } from './usage';
import { errorCode } from './errors';

// Free-form chat (existing /api/users/claude-chat). Not grounded in the knowledge base.
export async function anthropicChat(message: string, ctx: { userId: number | null; tenantId: number | null }) {
    const model = aiConfig.anthropic.model;
    const started = Date.now();
    try {
        const response = await anthropic.messages.create(
            {
                model,
                max_tokens: 1024,
                messages: [{ role: 'user', content: message }],
            },
            { timeout: aiConfig.anthropic.timeoutMs },
        );
        await recordUsage({
            userId: ctx.userId, tenantId: ctx.tenantId, operation: 'chat', provider: 'anthropic', model,
            inputTokens: response.usage.input_tokens, outputTokens: response.usage.output_tokens,
            latencyMs: Date.now() - started, outcome: 'success', providerRequestId: response.id,
        });
        const text = response.content
            .filter((block) => block.type === 'text')
            .map((block) => (block as any).text)
            .join('\n');
        return { text, usage: response.usage };
    } catch (error) {
        await recordUsage({
            userId: ctx.userId, tenantId: ctx.tenantId, operation: 'chat', provider: 'anthropic', model,
            latencyMs: Date.now() - started, outcome: 'error', errorCode: errorCode(error),
        });
        console.error('Anthropic error:', error);
        throw new ApiError('AI request failed', 502);
    }
}
