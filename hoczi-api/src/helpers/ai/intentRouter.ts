import { recordUsage } from './usage';

// Rule-based replies for messages that do not need a model (spec: intent-router.md at the repo root).
// A rule matches only when the WHOLE message is one of the phrases, so "Xin chào, có bao nhiêu user?"
// still goes to the model. Matching ignores case, Vietnamese accents, punctuation, emoji and extra spaces.

type QuickIntent = {
    name: string;
    phrases: string[];
    reply: string;
};

export const QUICK_INTENTS: QuickIntent[] = [
    {
        name: 'greeting',
        phrases: [
            'Xin chào',
            'Hello',
            'Good morning',
            'Bạn ơi',
            'Allo',
            'Alo',
            'Chào bạn',
            'Chào buổi sáng',
            'Chào buổi tối',
            'Chào buổi chiều',
            'Chào buổi trưa',
        ],
        reply: 'Chào bạn, tôi có thể giúp gì cho bạn',
    },
];

// Polite particle a user may add at the end: "Xin chào ạ" → "xin chao"
const TRAILING_PARTICLES = ['a'];

export function normalizeMessage(text: string) {
    let normalized = text
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')   // accents: "chào" → "chao"
        .replace(/[đĐ]/g, 'd')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')  // punctuation, emoji
        .replace(/\s+/g, ' ')
        .trim();
    for (const particle of TRAILING_PARTICLES) {
        if (normalized.endsWith(` ${particle}`)) normalized = normalized.slice(0, -(particle.length + 1));
    }
    return normalized;
}

const PHRASE_INDEX = new Map<string, QuickIntent>();
for (const intent of QUICK_INTENTS) {
    for (const phrase of intent.phrases) PHRASE_INDEX.set(normalizeMessage(phrase), intent);
}

export function matchQuickIntent(text: string): QuickIntent | null {
    const normalized = normalizeMessage(text);
    if (!normalized || normalized.length > 40) return null;
    return PHRASE_INDEX.get(normalized) ?? null;
}

// Answer without calling the model. Logged with provider "rule" (cost 0) so savings can be measured;
// these rows do not count toward the per-user rate limit.
export async function quickReply(text: string, ctx: { operation: string; userId: number | null; tenantId: number | null }) {
    const intent = matchQuickIntent(text);
    if (!intent) return null;
    await recordUsage({
        userId: ctx.userId, tenantId: ctx.tenantId, operation: ctx.operation,
        provider: 'rule', model: 'intent-router', promptVersion: `intent:${intent.name}`,
        latencyMs: 0, outcome: 'success',
    });
    return { intent: intent.name, answer: intent.reply };
}
