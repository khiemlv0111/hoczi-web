import OpenAI from 'openai';
import { aiConfig } from '../../config/ai';

let client: OpenAI | null = null;

// Lazily created so the API still boots when OpenAI is not configured.
export function getOpenAI(): OpenAI {
    if (!client) {
        client = new OpenAI({
            apiKey: aiConfig.openai.apiKey,
            timeout: aiConfig.openai.timeoutMs,
            maxRetries: aiConfig.openai.maxRetries,
        });
    }
    return client;
}

export { OpenAI };
