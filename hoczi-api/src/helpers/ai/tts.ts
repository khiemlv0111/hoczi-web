import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { aiConfig, AiNotConfiguredError } from '../../config/ai';
import { ApiError } from '../../errors/api-erros';
import { aiUsageLogRepository } from '../../repositories/aiUsageLogRepository';
import { errorCode, toApiError } from './errors';
import { getOpenAI } from './openaiClient';
import { assertWithinBudget, recordUsage } from './usage';

// Versioned so changing the wording invalidates cached audio.
const INSTRUCTIONS_VERSION = 'zh-teacher@v1';
const BASE_INSTRUCTIONS =
    'You are a native Mandarin Chinese teacher reading to HSK students. ' +
    'Read the given text in standard Mandarin (Putonghua) with a neutral mainland accent, ' +
    'accurate tones and the correct reading of polyphonic characters for the context. ' +
    'Pronounce Arabic numerals the way a Chinese speaker would read them. ' +
    'Read exactly the given text, without adding, skipping or translating anything.';
const PACE = {
    normal: 'Speak clearly and naturally at a moderate teaching pace.',
    slow: 'Speak slowly and very clearly, pausing briefly between phrases, as for a dictation exercise.',
};

export type TtsUser = { id: number; tenant_id?: number | null };
export type TtsResult = { audio: Buffer; cached: boolean };

const inFlight = new Map<string, Promise<Buffer>>();

function cacheDir() {
    return aiConfig.tts.cacheDir || path.join(os.tmpdir(), 'hoczi-tts');
}

async function readCache(file: string): Promise<Buffer | null> {
    try {
        return await fs.readFile(file);
    } catch {
        return null;
    }
}

async function writeCache(file: string, audio: Buffer) {
    try {
        await fs.mkdir(path.dirname(file), { recursive: true });
        const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
        await fs.writeFile(tmp, audio);
        await fs.rename(tmp, file);
    } catch (error) {
        // A cache failure only costs a repeat synthesis later.
        console.error('[ai] failed to cache tts audio', error);
    }
}

async function assertTtsWithinLimits(user: TtsUser) {
    const limit = aiConfig.tts.requestsPerMinutePerUser;
    if (limit > 0) {
        const recent = await aiUsageLogRepository.countOperationForUserSince(user.id, 'tts', new Date(Date.now() - 60_000));
        if (recent >= limit) {
            throw new ApiError('Too many audio requests, please wait a minute', 429);
        }
    }
    await assertWithinBudget(user.tenant_id ?? null);
}

async function synthesize(user: TtsUser, text: string, instructions: string): Promise<Buffer> {
    const { model, voice } = aiConfig.tts;
    const started = Date.now();
    try {
        const response = await getOpenAI().audio.speech.create({
            model,
            voice,
            input: text,
            instructions,
            response_format: 'mp3',
        });
        const audio = Buffer.from(await response.arrayBuffer());
        await recordUsage({
            userId: user.id, tenantId: user.tenant_id ?? null, operation: 'tts', provider: 'openai', model,
            promptVersion: INSTRUCTIONS_VERSION, ttsChars: text.length, latencyMs: Date.now() - started,
            outcome: 'success', providerRequestId: response.headers.get('x-request-id'),
        });
        return audio;
    } catch (error) {
        await recordUsage({
            userId: user.id, tenantId: user.tenant_id ?? null, operation: 'tts', provider: 'openai', model,
            promptVersion: INSTRUCTIONS_VERSION, latencyMs: Date.now() - started,
            outcome: 'error', errorCode: errorCode(error),
        });
        throw toApiError(error);
    }
}

// Returns MP3 audio for the text, from the disk cache when the same text was read before.
export async function synthesizeSpeech(user: TtsUser, rawText: string, slow = false): Promise<TtsResult> {
    const text = rawText.trim();
    if (!text) throw new ApiError('Text is required', 400);
    if (text.length > aiConfig.tts.maxChars) {
        throw new ApiError(`Text is too long (max ${aiConfig.tts.maxChars} characters)`, 400);
    }
    if (!aiConfig.openai.apiKey) throw toApiError(new AiNotConfiguredError(['OPENAI_API_KEY']));

    const { model, voice } = aiConfig.tts;
    const instructions = `${BASE_INSTRUCTIONS} ${slow ? PACE.slow : PACE.normal}`;
    const key = createHash('sha256')
        .update(JSON.stringify({ model, voice, v: INSTRUCTIONS_VERSION, instructions, text }))
        .digest('hex');
    const file = path.join(cacheDir(), key.slice(0, 2), `${key}.mp3`);

    const cached = await readCache(file);
    if (cached) return { audio: cached, cached: true };

    // Concurrent requests for the same text share one provider call.
    let pending = inFlight.get(key);
    if (!pending) {
        pending = (async () => {
            await assertTtsWithinLimits(user);
            const audio = await synthesize(user, text, instructions);
            await writeCache(file, audio);
            return audio;
        })().finally(() => inFlight.delete(key));
        inFlight.set(key, pending);
    }
    return { audio: await pending, cached: false };
}
