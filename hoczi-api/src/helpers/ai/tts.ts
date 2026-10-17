import { createHash } from 'node:crypto';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { ElevenLabsClient, ElevenLabsError, ElevenLabsTimeoutError } from '@elevenlabs/elevenlabs-js';
import { aiConfig } from '../../config/ai';
import { ApiError } from '../../errors/api-erros';
import { aiUsageLogRepository } from '../../repositories/aiUsageLogRepository';
import { ttsAudioRepository } from '../../repositories/ttsAudioRepository';
import { s3Client } from '../../utils/s3';
import { assertWithinBudget, recordUsage } from './usage';

// Lesson audio: each (voice, model, settings, text) is synthesized by ElevenLabs once, stored in S3
// and recorded in tts_audios; afterwards only the saved CloudFront link is returned.
// The S3 credentials can only write (no read/HEAD), so the table is the record of what exists.

const S3_PREFIX = 'tts/elevenlabs';

export type TtsUser = { id: number; tenant_id?: number | null };
export type TtsResult = { url: string; cached: boolean };

let client: ElevenLabsClient | null = null;
function elevenLabs() {
    // The SDK reads ELEVENLABS_API_KEY from the environment.
    client ??= new ElevenLabsClient({ timeoutInSeconds: 60, maxRetries: 2 });
    return client;
}

// text hash → audio link, to skip the database on repeat clicks
const known = new Map<string, string>();
const inFlight = new Map<string, Promise<string>>();

async function findSaved(hash: string) {
    const cached = known.get(hash);
    if (cached) return cached;
    const row = await ttsAudioRepository.findByHash(hash);
    if (row) known.set(hash, row.audio_url);
    return row?.audio_url ?? null;
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

function toTtsError(error: unknown): ApiError {
    if (error instanceof ApiError) return error;
    if (error instanceof ElevenLabsTimeoutError) return new ApiError('Audio provider timed out', 504);
    if (error instanceof ElevenLabsError) {
        // 401 bad key, 402/quota exceeded, 429 rate/concurrency limit: nothing the learner can fix.
        if ([401, 402, 429].includes(error.statusCode ?? 0)) return new ApiError('Audio provider is unavailable', 503);
        return new ApiError('Audio provider request failed', 502);
    }
    return new ApiError('Audio request failed', 500);
}

async function synthesizeAndStore(user: TtsUser, text: string, slow: boolean, hash: string): Promise<string> {
    const { voiceId, model, slowSpeed, bucket, publicBaseUrl } = aiConfig.tts;
    const key = `${S3_PREFIX}/${voiceId}/${hash}.mp3`;
    const url = `${publicBaseUrl}/${key}`;
    const started = Date.now();
    let chars = text.length;
    try {
        const { data, rawResponse } = await elevenLabs().textToSpeech.convert(voiceId, {
            text,
            modelId: model,
            languageCode: 'zh',
            outputFormat: 'mp3_44100_128',
            ...(slow ? { voiceSettings: { speed: slowSpeed } } : {}),
        }).withRawResponse();
        const audio = Buffer.from(await new Response(data).arrayBuffer());
        chars = Number(rawResponse.headers.get('character-cost')) || chars;

        await s3Client.send(new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: audio,
            ContentType: 'audio/mpeg',
            // The key is derived from the content, so the object never changes.
            CacheControl: 'public, max-age=31536000, immutable',
        }));
        await ttsAudioRepository.saveIfAbsent({
            text_hash: hash, provider: 'elevenlabs', voice_id: voiceId, model_id: model,
            speed: String(slow ? slowSpeed : 1), text, storage_key: key, audio_url: url,
            file_size_bytes: audio.length, created_by: user.id || null,
        });
        known.set(hash, url);

        await recordUsage({
            userId: user.id, tenantId: user.tenant_id ?? null, operation: 'tts', provider: 'elevenlabs', model,
            ttsChars: chars, latencyMs: Date.now() - started, outcome: 'success',
            providerRequestId: rawResponse.headers.get('request-id'),
        });
        return url;
    } catch (error) {
        await recordUsage({
            userId: user.id, tenantId: user.tenant_id ?? null, operation: 'tts', provider: 'elevenlabs', model,
            latencyMs: Date.now() - started, outcome: 'error',
            errorCode: error instanceof ElevenLabsError ? `${error.statusCode ?? 'unknown'}` : ((error as any)?.name ?? 'Error'),
        });
        throw toTtsError(error);
    }
}

// Returns a public link to the MP3 for this text, generating it only the first time.
export async function getSpeechUrl(user: TtsUser, rawText: string, slow = false): Promise<TtsResult> {
    const text = rawText.trim();
    if (!text) throw new ApiError('Text is required', 400);
    if (text.length > aiConfig.tts.maxChars) {
        throw new ApiError(`Text is too long (max ${aiConfig.tts.maxChars} characters)`, 400);
    }
    const { voiceId, model, slowSpeed, bucket } = aiConfig.tts;
    if (!bucket || !process.env.ELEVENLABS_API_KEY) {
        throw new ApiError('Audio service is not configured', 503);
    }

    const hash = createHash('sha256')
        .update(JSON.stringify({ voiceId, model, languageCode: 'zh', speed: slow ? slowSpeed : 1, text }))
        .digest('hex');

    const saved = await findSaved(hash);
    if (saved) return { url: saved, cached: true };

    // Concurrent first clicks on the same text share one ElevenLabs call.
    let pending = inFlight.get(hash);
    if (!pending) {
        pending = (async () => {
            await assertTtsWithinLimits(user);
            return synthesizeAndStore(user, text, slow, hash);
        })().finally(() => inFlight.delete(hash));
        inFlight.set(hash, pending);
    }
    return { url: await pending, cached: false };
}
