import { aiConfig } from '../config/ai';
import { CreateBroadcastRequest, PreviewEmailRequest } from '../dto/adminEmail.dto';
import { EmailBroadcast, EmailBroadcastStatus } from '../entities/EmailBroadcast';
import { ApiError, BadRequestError, NotFoundError } from '../errors/api-erros';
import { isTransient, PermanentJobError } from '../helpers/ai/errors';
import { wrapEmailHtml } from '../helpers/emailLayout';
import { renderRichHtml, renderRichText, validateRichDoc } from '../helpers/richText';
import { aiJobRepository } from '../repositories/aiJobRepository';
import { emailBroadcastRecipientRepository } from '../repositories/emailBroadcastRecipientRepository';
import { emailBroadcastRepository, NewRecipient } from '../repositories/emailBroadcastRepository';
import { userRepository } from '../repositories/userRepository';
import { sendHtmlEmail } from '../utils/send_email';

export type Actor = { id: number; role?: string; tenant_id?: number | null };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const JOB_MAX_ATTEMPTS = 5;
const RECIPIENT_SEARCH_LIMIT = 20;

// SES/config errors that no retry or other address can fix: stop the whole broadcast.
const FATAL_ERROR_NAMES = [
    'CredentialsProviderError', 'UnrecognizedClientException', 'InvalidClientTokenId', 'SignatureDoesNotMatch',
    'AccessDeniedException', 'MailFromDomainNotVerifiedException', 'AccountSuspendedException', 'SendingPausedException',
    'EmailNotConfiguredError',
];

class EmailNotConfiguredError extends Error {
    name = 'EmailNotConfiguredError';
    constructor() {
        super('Email sending is not configured (FROM_EMAIL)');
    }
}

// Admins of a tenant only see their tenant; system admins (no tenant) and super_admin see everything.
function tenantScope(actor: Actor): number | undefined {
    if (actor.role === 'super_admin' || !actor.tenant_id) return undefined;
    return actor.tenant_id;
}

export function isValidEmail(email: string) {
    return email.length <= 254 && EMAIL_PATTERN.test(email);
}

function normalizeEmail(value: string) {
    return value.trim().toLowerCase();
}

function errorText(error: unknown) {
    const e = error as any;
    const name = e?.name && e.name !== 'Error' ? `${e.name}: ` : '';
    return `${name}${String(e?.message ?? e)}`.slice(0, 500);
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function summary(b: EmailBroadcast) {
    return {
        id: b.id,
        subject: b.subject,
        status: b.status,
        recipient_count: b.recipient_count,
        sent_count: b.sent_count,
        failed_count: b.failed_count,
        pending_count: Math.max(0, b.recipient_count - b.sent_count - b.failed_count),
        created_by: b.creator ? { id: b.creator.id, name: b.creator.name ?? null, email: b.creator.email } : null,
        created_at: b.created_at,
        started_at: b.started_at,
        completed_at: b.completed_at,
    };
}

export class AdminEmailService {
    // ------------------------------------------------------------ compose

    async searchRecipients(actor: Actor, keyword?: string) {
        const users = await userRepository.searchForEmail(keyword?.trim() || undefined, tenantScope(actor), RECIPIENT_SEARCH_LIMIT);
        return users.map((u) => ({
            id: u.id,
            name: u.name ?? null,
            email: u.email,
            has_valid_email: !!u.email && isValidEmail(normalizeEmail(u.email)),
        }));
    }

    private compose(dto: PreviewEmailRequest) {
        const subject = dto.subject.trim();
        if (!subject) throw new BadRequestError('Subject is required');
        const doc = validateRichDoc(dto.content);
        const bodyHtml = renderRichHtml(doc);
        return { subject, doc, bodyHtml, text: renderRichText(doc) };
    }

    async preview(dto: PreviewEmailRequest) {
        const { subject, bodyHtml, text } = this.compose(dto);
        return { subject, html: wrapEmailHtml(subject, bodyHtml), text };
    }

    // Merges typed addresses and selected users into unique, valid recipients (or throws 400 with details).
    private async resolveRecipients(actor: Actor, emails: string[] = [], userIds: number[] = []): Promise<NewRecipient[]> {
        const byEmail = new Map<string, number | null>();

        const typed = emails.map(normalizeEmail).filter(Boolean);
        const invalidEmails = [...new Set(typed.filter((e) => !isValidEmail(e)))];
        if (invalidEmails.length) {
            throw new ApiError('Some email addresses are invalid', 400, { success: false, invalid_emails: invalidEmails });
        }
        typed.forEach((e) => { if (!byEmail.has(e)) byEmail.set(e, null); });

        const ids = [...new Set(userIds)];
        if (ids.length) {
            const scope = tenantScope(actor);
            const users = new Map((await userRepository.findBasicByIds(ids)).map((u) => [u.id, u]));
            const invalidUserIds = ids.filter((id) => {
                const u = users.get(id);
                return !u || (scope !== undefined && u.tenant_id !== scope) || !u.email || !isValidEmail(normalizeEmail(u.email));
            });
            if (invalidUserIds.length) {
                throw new ApiError('Some selected users cannot receive email', 400, { success: false, invalid_user_ids: invalidUserIds });
            }
            ids.forEach((id) => byEmail.set(normalizeEmail(users.get(id)!.email), id));
        }

        if (!byEmail.size) throw new BadRequestError('Add at least one recipient');
        if (byEmail.size > aiConfig.email.maxRecipients) {
            throw new BadRequestError(`At most ${aiConfig.email.maxRecipients} recipients per send (got ${byEmail.size})`);
        }
        return [...byEmail.entries()].map(([email, user_id]) => ({ email, user_id }));
    }

    async create(actor: Actor, dto: CreateBroadcastRequest) {
        // Same compose submitted twice (double click / retry): return the first broadcast.
        const existing = await emailBroadcastRepository.findByClientRequestId(actor.id, dto.client_request_id);
        if (existing) return summary(existing);

        const { subject, doc, bodyHtml, text } = this.compose(dto);
        if (!process.env.FROM_EMAIL) throw new ApiError('Email sending is not configured', 503);
        const recipients = await this.resolveRecipients(actor, dto.emails, dto.user_ids);

        let broadcast: EmailBroadcast;
        try {
            broadcast = await emailBroadcastRepository.createWithRecipients({
                created_by: actor.id,
                tenant_id: actor.tenant_id ?? null,
                client_request_id: dto.client_request_id,
                subject,
                content_json: doc as unknown as Record<string, any>,
                content_html: bodyHtml,
                content_text: text,
            }, recipients, JOB_MAX_ATTEMPTS);
        } catch (error: any) {
            // Concurrent duplicate request lost the race on the unique key
            if (error?.code === '23505') {
                const again = await emailBroadcastRepository.findByClientRequestId(actor.id, dto.client_request_id);
                if (again) return summary(again);
            }
            throw error;
        }
        return summary((await emailBroadcastRepository.findById(broadcast.id))!);
    }

    // ------------------------------------------------------------ history

    async list(actor: Actor, page: number, limit: number) {
        const { items, total } = await emailBroadcastRepository.findAll(page, limit, tenantScope(actor));
        return { items: items.map(summary), total, page, limit };
    }

    async get(actor: Actor, id: number, recipients: { status?: string; page: number; limit: number }) {
        const b = await emailBroadcastRepository.findById(id);
        const scope = tenantScope(actor);
        if (!b || (scope !== undefined && b.tenant_id !== scope)) throw new NotFoundError('Email not found');
        const r = await emailBroadcastRecipientRepository.findByBroadcast(id, recipients.page, recipients.limit, recipients.status);
        return {
            ...summary(b),
            content_html: b.content_html,
            recipients: {
                items: r.items.map((x) => ({ id: x.id, email: x.email, user_id: x.user_id, status: x.status, error: x.error, sent_at: x.sent_at })),
                total: r.total,
                page: recipients.page,
                limit: recipients.limit,
            },
        };
    }

    // ------------------------------------------------------------- worker

    /**
     * Job send_email_broadcast: sends one email per pending recipient, rate limited, until none is left.
     * Safe to re-run after a crash: only pending recipients are sent (stale "sending" ones are retried).
     */
    async sendBroadcast(broadcastId: number, jobId: number) {
        const cfg = aiConfig.email;
        const b = await emailBroadcastRepository.findById(broadcastId);
        if (!b) throw new PermanentJobError(`Broadcast #${broadcastId} not found`);
        if (b.status === EmailBroadcastStatus.COMPLETED || b.status === EmailBroadcastStatus.COMPLETED_WITH_ERRORS) return;

        await emailBroadcastRecipientRepository.requeueStaleSending(broadcastId, cfg.staleSendingMinutes);
        await emailBroadcastRepository.markStarted(broadcastId);

        const html = wrapEmailHtml(b.subject, b.content_html);
        const minIntervalMs = 1000 / cfg.sendRatePerSecond;

        for (;;) {
            const batch = await emailBroadcastRecipientRepository.claimBatch(broadcastId, cfg.batchSize);
            if (!batch.length) break;

            for (const recipient of batch) {
                const started = Date.now();
                let attempts = recipient.attempts;
                for (;;) {
                    attempts++;
                    try {
                        if (!process.env.FROM_EMAIL) throw new EmailNotConfiguredError();
                        const messageId = await sendHtmlEmail({ to: recipient.email, subject: b.subject, html, text: b.content_text });
                        await emailBroadcastRecipientRepository.markSent(recipient.id, attempts, messageId ?? null);
                        break;
                    } catch (error) {
                        const message = errorText(error);
                        if (FATAL_ERROR_NAMES.includes((error as any)?.name)) {
                            console.error(`[email] broadcast #${broadcastId} stopped: ${message}`);
                            await emailBroadcastRecipientRepository.markFailed(recipient.id, attempts, message);
                            await emailBroadcastRecipientRepository.failAllPending(broadcastId, message);
                            await emailBroadcastRepository.markFinishedIfDone(broadcastId);
                            return;
                        }
                        if (isTransient(error) && attempts < cfg.maxAttemptsPerRecipient) {
                            await sleep(2000 * 2 ** (attempts - 1)); // 2 s, 4 s
                            await aiJobRepository.heartbeat(jobId);
                            continue;
                        }
                        await emailBroadcastRecipientRepository.markFailed(recipient.id, attempts, message);
                        break;
                    }
                }
                // Heartbeat per email (not per batch): a batch of failing addresses can take > 10 minutes.
                await aiJobRepository.heartbeat(jobId);
                const wait = minIntervalMs - (Date.now() - started);
                if (wait > 0) await sleep(wait);
            }
            await emailBroadcastRepository.refreshCounts(broadcastId);
        }
        await emailBroadcastRepository.markFinishedIfDone(broadcastId);
    }

    // Called by the worker when the job itself fails for good.
    async failBroadcast(broadcastId: number, reason: string) {
        await emailBroadcastRecipientRepository.failAllPending(broadcastId, reason);
        await emailBroadcastRepository.markFinishedIfDone(broadcastId);
    }
}
