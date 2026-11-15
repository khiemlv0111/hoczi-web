import crypto from 'crypto';
import { aiConfig } from '../config/ai';
import { AiJobType } from '../entities/AiJob';
import { DailyExerciseSetStatus } from '../entities/DailyExerciseSet';
import { ExerciseDelivery, ExerciseDeliveryKind, ExerciseDeliveryStatus } from '../entities/ExerciseDelivery';
import { ExerciseSubscription } from '../entities/ExerciseSubscription';
import { ApiError, BadRequestError, NotFoundError } from '../errors/api-erros';
import {
    AdminCreateSubscriptionRequest, AdminUpdateSubscriptionRequest, CreateMySubscriptionRequest, DEFAULT_QUESTIONS_PER_DAY,
    DEFAULT_SEND_TIME, DEFAULT_TIMEZONE, MAX_QUESTIONS_PER_DAY, UpdateExerciseRequest, UpdateMySubscriptionRequest,
} from '../dto/dailyExercise.dto';
import { generateDailyExercises } from '../helpers/ai/dailyExercise';
import { PermanentJobError, RetryableJobError } from '../helpers/ai/errors';
import { buildAnswersEmail, buildQuestionsEmail, EmailExercise } from '../helpers/exerciseEmail';
import { sendHtmlEmail } from '../utils/send_email';
import { aiJobRepository } from '../repositories/aiJobRepository';
import { dailyExerciseSetRepository } from '../repositories/dailyExerciseSetRepository';
import { exerciseDeliveryRepository } from '../repositories/exerciseDeliveryRepository';
import { exerciseSubscriptionRepository } from '../repositories/exerciseSubscriptionRepository';
import { gradeRepository } from '../repositories/gradeRepository';
import { subjectRepository } from '../repositories/subjectRepository';
import { userRepository } from '../repositories/userRepository';

export type Actor = { id: number; role?: string; tenant_id?: number | null };

const JOB_MAX_ATTEMPTS = 5;
const RECENT_DAYS = 7;
const RECENT_LIMIT = 40;

class ForbiddenError extends ApiError {
    constructor(message: string) {
        super(message, 403);
    }
}

class ConflictError extends ApiError {
    constructor(message: string) {
        super(message, 409);
    }
}

// Admins of a tenant only see their tenant's data; system admins (no tenant) and super_admin see everything.
function tenantScope(actor: Actor): number | undefined {
    if (actor.role === 'super_admin' || !actor.tenant_id) return undefined;
    return actor.tenant_id;
}

function inScope(actor: Actor, tenantId: number | null) {
    const scope = tenantScope(actor);
    return scope === undefined || scope === tenantId;
}

// Sets are shared across tenants, so only system-level admins may edit them.
function canEditSets(actor: Actor) {
    return actor.role === 'super_admin' || !actor.tenant_id;
}

// "YYYY-MM-DD" of the current day in the given timezone.
export function localDate(timezone: string, at = new Date()) {
    return new Intl.DateTimeFormat('en-CA', { timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(at);
}

function serializeSubscription(sub: ExerciseSubscription, withUser: boolean) {
    return {
        id: sub.id,
        user_id: sub.user_id,
        subject_id: sub.subject_id,
        grade_id: sub.grade_id,
        questions_per_day: sub.questions_per_day,
        send_time: String(sub.send_time).slice(0, 5),
        timezone: sub.timezone,
        is_active: sub.is_active,
        created_at: sub.created_at,
        updated_at: sub.updated_at,
        subject: sub.subject ? { id: sub.subject.id, name: sub.subject.name } : null,
        grade: sub.grade ? { id: sub.grade.id, name: sub.grade.name } : null,
        ...(withUser && sub.user ? { user: { id: sub.user.id, name: sub.user.name ?? null, email: sub.user.email } } : {}),
    };
}

function serializeDelivery(d: ExerciseDelivery) {
    const sub = d.subscription;
    return {
        id: d.id,
        subscription_id: d.subscription_id,
        set_id: d.set_id,
        delivery_date: d.delivery_date,
        kind: d.kind,
        status: d.status,
        exercise_count: d.exercise_count,
        questions_sent_at: d.questions_sent_at,
        answers_sent_at: d.answers_sent_at,
        error: d.error,
        created_at: d.created_at,
        user: d.user ? { id: d.user.id, name: d.user.name ?? null, email: d.user.email } : null,
        subject: sub?.subject ? { id: sub.subject.id, name: sub.subject.name } : null,
        grade: sub?.grade ? { id: sub.grade.id, name: sub.grade.name } : null,
    };
}

function paged<T>(items: T[], total: number, page: number, limit: number) {
    return { items, total, page, limit };
}

function unsubscribeUrl(token: string) {
    return `${aiConfig.dailyExercise.webAppUrl}/daily-exercises/unsubscribe?token=${token}`;
}

export class DailyExerciseService {
    // ---------------------------------------------------------------- options

    async getOptions() {
        const [subjects, grades] = await Promise.all([subjectRepository.findActive(), gradeRepository.findAll()]);
        return {
            subjects: subjects.map((s) => ({ id: s.id, name: s.name })),
            grades: [...grades].sort((a, b) => a.sort_order - b.sort_order).map((g) => ({ id: g.id, name: g.name })),
        };
    }

    // ---------------------------------------------------------- subscriptions

    private async assertSubjectAndGrade(subjectId: number, gradeId: number) {
        const [subject, grade] = await Promise.all([subjectRepository.findById(subjectId), gradeRepository.findById(gradeId)]);
        if (!subject) throw new BadRequestError('Subject not found');
        if (!grade) throw new BadRequestError('Grade not found');
    }

    private async createSubscription(userId: number, dto: CreateMySubscriptionRequest, createdBy: number) {
        const user = await userRepository.findById(userId);
        if (!user) throw new NotFoundError('User not found');
        if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
            throw new BadRequestError('This user has no valid email address');
        }
        await this.assertSubjectAndGrade(dto.subject_id, dto.grade_id);
        if (await exerciseSubscriptionRepository.findByUserSubjectGrade(userId, dto.subject_id, dto.grade_id)) {
            throw new ConflictError('A subscription for this subject and grade already exists');
        }
        const created = await exerciseSubscriptionRepository.create({
            user_id: userId,
            tenant_id: user.tenant_id ?? null,
            subject_id: dto.subject_id,
            grade_id: dto.grade_id,
            questions_per_day: dto.questions_per_day ?? DEFAULT_QUESTIONS_PER_DAY,
            send_time: dto.send_time ?? DEFAULT_SEND_TIME,
            timezone: dto.timezone ?? DEFAULT_TIMEZONE,
            is_active: true,
            unsubscribe_token: crypto.randomBytes(32).toString('hex'),
            created_by: createdBy,
        });
        return (await exerciseSubscriptionRepository.findById(created.id))!;
    }

    private async applyUpdate(sub: ExerciseSubscription, dto: AdminUpdateSubscriptionRequest) {
        const subjectId = dto.subject_id ?? sub.subject_id;
        const gradeId = dto.grade_id ?? sub.grade_id;
        if (subjectId !== sub.subject_id || gradeId !== sub.grade_id) {
            await this.assertSubjectAndGrade(subjectId, gradeId);
            const other = await exerciseSubscriptionRepository.findByUserSubjectGrade(sub.user_id, subjectId, gradeId);
            if (other && other.id !== sub.id) {
                throw new ConflictError('A subscription for this subject and grade already exists');
            }
        }
        const data: Partial<ExerciseSubscription> = {};
        if (dto.subject_id !== undefined) data.subject_id = dto.subject_id;
        if (dto.grade_id !== undefined) data.grade_id = dto.grade_id;
        if (dto.questions_per_day !== undefined) data.questions_per_day = dto.questions_per_day;
        if (dto.send_time !== undefined) data.send_time = dto.send_time;
        if (dto.timezone !== undefined) data.timezone = dto.timezone;
        if (dto.is_active !== undefined) data.is_active = dto.is_active;
        if (Object.keys(data).length) await exerciseSubscriptionRepository.update(sub.id, data);
        return (await exerciseSubscriptionRepository.findById(sub.id))!;
    }

    async listMine(userId: number) {
        const subs = await exerciseSubscriptionRepository.findByUser(userId);
        return subs.map((s) => serializeSubscription(s, false));
    }

    async createMine(userId: number, dto: CreateMySubscriptionRequest) {
        return serializeSubscription(await this.createSubscription(userId, dto, userId), false);
    }

    async updateMine(userId: number, id: number, dto: UpdateMySubscriptionRequest) {
        const sub = await exerciseSubscriptionRepository.findById(id);
        if (!sub || sub.user_id !== userId) throw new NotFoundError('Subscription not found');
        // Users may change their settings but not move the subscription to another subject/grade.
        const { questions_per_day, send_time, timezone, is_active } = dto;
        return serializeSubscription(await this.applyUpdate(sub, { questions_per_day, send_time, timezone, is_active }), false);
    }

    async adminListSubscriptions(actor: Actor, page: number, limit: number, filter: { keyword?: string; is_active?: boolean }) {
        const { items, total } = await exerciseSubscriptionRepository.findAll(page, limit, { ...filter, tenant_id: tenantScope(actor) });
        return paged(items.map((s) => serializeSubscription(s, true)), total, page, limit);
    }

    async adminCreateSubscription(actor: Actor, dto: AdminCreateSubscriptionRequest) {
        const user = await userRepository.findById(dto.user_id);
        if (!user || !inScope(actor, user.tenant_id ?? null)) throw new NotFoundError('User not found');
        return serializeSubscription(await this.createSubscription(dto.user_id, dto, actor.id), true);
    }

    private async adminGetSubscription(actor: Actor, id: number) {
        const sub = await exerciseSubscriptionRepository.findById(id);
        if (!sub || !inScope(actor, sub.tenant_id)) throw new NotFoundError('Subscription not found');
        return sub;
    }

    async adminUpdateSubscription(actor: Actor, id: number, dto: AdminUpdateSubscriptionRequest) {
        const sub = await this.adminGetSubscription(actor, id);
        return serializeSubscription(await this.applyUpdate(sub, dto), true);
    }

    // Sends today's questions now (answers follow after the usual delay). Does not count as the scheduled delivery.
    async testRun(actor: Actor, id: number) {
        const sub = await this.adminGetSubscription(actor, id);
        const delivery = await exerciseDeliveryRepository.create({
            subscription_id: sub.id,
            user_id: sub.user_id,
            tenant_id: sub.tenant_id,
            delivery_date: localDate(sub.timezone),
            kind: ExerciseDeliveryKind.TEST,
            status: ExerciseDeliveryStatus.PENDING,
        });
        await aiJobRepository.enqueue(AiJobType.SEND_DAILY_EXERCISES, { deliveryId: delivery.id }, JOB_MAX_ATTEMPTS);
        return serializeDelivery((await exerciseDeliveryRepository.findForSending(delivery.id))!);
    }

    async unsubscribe(token: string) {
        const sub = await exerciseSubscriptionRepository.findByToken(token);
        if (!sub) throw new NotFoundError('Subscription not found');
        if (sub.is_active) await exerciseSubscriptionRepository.update(sub.id, { is_active: false });
        return { subject_name: sub.subject?.name ?? '', grade_name: sub.grade?.name ?? '' };
    }

    // ------------------------------------------------------------------- sets

    async adminListSets(page: number, limit: number, filter: { date?: string; subject_id?: number; grade_id?: number }) {
        const { items, total } = await dailyExerciseSetRepository.findAll(page, limit, filter);
        return paged(items.map((s) => ({
            id: s.id, set_date: s.set_date, status: s.status, exercise_count: s.exercise_count,
            model: s.model, prompt_version: s.prompt_version, error: s.error, generated_at: s.generated_at,
            subject: s.subject ? { id: s.subject.id, name: s.subject.name } : null,
            grade: s.grade ? { id: s.grade.id, name: s.grade.name } : null,
        })), total, page, limit);
    }

    async adminGetSet(id: number) {
        const set = await dailyExerciseSetRepository.findWithExercises(id);
        if (!set) throw new NotFoundError('Exercise set not found');
        return {
            id: set.id, set_date: set.set_date, status: set.status, exercise_count: set.exercise_count,
            model: set.model, prompt_version: set.prompt_version, error: set.error, generated_at: set.generated_at,
            subject: set.subject ? { id: set.subject.id, name: set.subject.name } : null,
            grade: set.grade ? { id: set.grade.id, name: set.grade.name } : null,
            exercises: (set.exercises ?? []).map((e) => ({
                id: e.id, position: e.position, question: e.question, answer: e.answer,
                explanation: e.explanation, edited_by_admin: e.edited_by_admin,
            })),
        };
    }

    async adminUpdateExercise(actor: Actor, id: number, dto: UpdateExerciseRequest) {
        if (!canEditSets(actor)) throw new ForbiddenError('Only system administrators can edit shared exercise sets');
        const exercise = await dailyExerciseSetRepository.findExerciseById(id);
        if (!exercise) throw new NotFoundError('Exercise not found');
        if (dto.question === undefined && dto.answer === undefined && dto.explanation === undefined) {
            throw new BadRequestError('Nothing to update');
        }
        if (dto.question !== undefined) exercise.question = dto.question.trim();
        if (dto.answer !== undefined) exercise.answer = dto.answer.trim();
        if (dto.explanation !== undefined) exercise.explanation = dto.explanation.trim();
        exercise.edited_by_admin = true;
        exercise.edited_by = actor.id;
        const saved = await dailyExerciseSetRepository.saveExercise(exercise);
        return {
            id: saved.id, position: saved.position, question: saved.question, answer: saved.answer,
            explanation: saved.explanation, edited_by_admin: saved.edited_by_admin,
        };
    }

    // ------------------------------------------------------------- deliveries

    async adminListDeliveries(actor: Actor, page: number, limit: number, filter: { date?: string; status?: string; keyword?: string }) {
        const { items, total } = await exerciseDeliveryRepository.findAll(page, limit, { ...filter, tenant_id: tenantScope(actor) });
        return paged(items.map(serializeDelivery), total, page, limit);
    }

    async resend(actor: Actor, id: number, part: 'questions' | 'answers') {
        const delivery = await exerciseDeliveryRepository.findById(id);
        if (!delivery || !inScope(actor, delivery.tenant_id)) throw new NotFoundError('Delivery not found');
        if (part === 'answers' && !delivery.questions_sent_at) {
            throw new BadRequestError('The questions email was never sent for this delivery');
        }
        await exerciseDeliveryRepository.update(id, { error: null });
        await aiJobRepository.enqueue(
            part === 'questions' ? AiJobType.SEND_DAILY_EXERCISES : AiJobType.SEND_EXERCISE_ANSWERS,
            { deliveryId: id, force: true },
            JOB_MAX_ATTEMPTS,
        );
        return serializeDelivery((await exerciseDeliveryRepository.findForSending(id))!);
    }

    // ------------------------------------------------------- worker: schedule

    async scheduleDueDeliveries() {
        return exerciseDeliveryRepository.createDueDeliveriesAndEnqueue(JOB_MAX_ATTEMPTS);
    }

    // Returns a ready set for (subject, grade, date) with at least `needed` exercises, generating it once.
    private async ensureSet(subjectId: number, gradeId: number, date: string, needed: number, names: { subject: string; grade: string }) {
        const { setId, claimed } = await dailyExerciseSetRepository.claimForGeneration(subjectId, gradeId, date, needed);
        if (!claimed) {
            const set = await dailyExerciseSetRepository.findById(setId);
            if (set && set.status === DailyExerciseSetStatus.READY && set.exercise_count >= needed) return set;
            throw new RetryableJobError(`Exercise set #${setId} is still being generated`);
        }

        try {
            const current = (await dailyExerciseSetRepository.findById(setId))!;
            // Generate enough for every active subscriber of this subject/grade, not just this one.
            const others = await exerciseSubscriptionRepository.maxQuestionsPerDay(subjectId, gradeId);
            const target = Math.min(Math.max(needed, others), MAX_QUESTIONS_PER_DAY);
            const missing = target - current.exercise_count;
            if (missing <= 0) {
                await dailyExerciseSetRepository.appendExercisesAndMarkReady(setId, [], null);
            } else {
                const avoid = await dailyExerciseSetRepository.findRecentQuestions(subjectId, gradeId, date, RECENT_DAYS, RECENT_LIMIT);
                const result = await generateDailyExercises({ subject: names.subject, grade: names.grade, count: missing, date, avoid });
                await dailyExerciseSetRepository.appendExercisesAndMarkReady(setId, result.exercises, result);
            }
        } catch (error: any) {
            await dailyExerciseSetRepository.markFailed(setId, String(error?.message ?? error).slice(0, 2000));
            throw error;
        }
        return (await dailyExerciseSetRepository.findById(setId))!;
    }

    private async loadForSending(deliveryId: number) {
        const delivery = await exerciseDeliveryRepository.findForSending(deliveryId);
        if (!delivery) throw new PermanentJobError(`Delivery #${deliveryId} not found`);
        const sub = delivery.subscription;
        if (!sub?.user?.email) throw new PermanentJobError(`Delivery #${deliveryId}: user has no email`);
        return { delivery, sub };
    }

    private emailInput(delivery: ExerciseDelivery, sub: ExerciseSubscription, exercises: EmailExercise[]) {
        return {
            to: sub.user.email,
            userName: sub.user.name,
            subjectName: sub.subject?.name ?? '',
            gradeName: sub.grade?.name ?? '',
            date: delivery.delivery_date,
            exercises,
            unsubscribeUrl: unsubscribeUrl(sub.unsubscribe_token),
            answerDelayMinutes: aiConfig.dailyExercise.answerDelayMinutes,
        };
    }

    // Job send_daily_exercises: generate (once) and email the questions, then schedule the answers.
    async sendQuestions(deliveryId: number, force = false) {
        const { delivery, sub } = await this.loadForSending(deliveryId);
        if (!force && delivery.status !== ExerciseDeliveryStatus.PENDING) return; // already handled
        if (!force && delivery.kind === ExerciseDeliveryKind.SCHEDULED && !sub.is_active) {
            await exerciseDeliveryRepository.update(delivery.id, { status: ExerciseDeliveryStatus.SKIPPED });
            return;
        }

        // A resend reuses what was already sent; a new delivery uses the subscription's current count.
        const needed = delivery.exercise_count ?? sub.questions_per_day;
        const set = await this.ensureSet(sub.subject_id, sub.grade_id, delivery.delivery_date, needed, {
            subject: sub.subject?.name ?? '', grade: sub.grade?.name ?? '',
        });
        const exercises = await dailyExerciseSetRepository.findExercises(set.id, needed);

        await sendHtmlEmail(buildQuestionsEmail(this.emailInput(delivery, sub, exercises)));

        const answersPending = !delivery.answers_sent_at;
        await exerciseDeliveryRepository.update(delivery.id, {
            status: answersPending ? ExerciseDeliveryStatus.QUESTIONS_SENT : ExerciseDeliveryStatus.ANSWERS_SENT,
            set_id: set.id,
            exercise_count: exercises.length,
            questions_sent_at: new Date(),
            error: null,
        });
        if (answersPending) {
            const runAfter = new Date(Date.now() + aiConfig.dailyExercise.answerDelayMinutes * 60_000);
            await aiJobRepository.enqueue(AiJobType.SEND_EXERCISE_ANSWERS, { deliveryId: delivery.id }, JOB_MAX_ATTEMPTS, runAfter);
        }
    }

    // Job send_exercise_answers: email answers + explanations using the current (possibly admin-edited) content.
    async sendAnswers(deliveryId: number, force = false) {
        const { delivery, sub } = await this.loadForSending(deliveryId);
        if (!force && delivery.status !== ExerciseDeliveryStatus.QUESTIONS_SENT) return;
        if (!delivery.set_id || !delivery.questions_sent_at) {
            throw new PermanentJobError(`Delivery #${deliveryId}: questions were never sent`);
        }
        const exercises = await dailyExerciseSetRepository.findExercises(delivery.set_id, delivery.exercise_count ?? sub.questions_per_day);

        await sendHtmlEmail(buildAnswersEmail(this.emailInput(delivery, sub, exercises)));

        await exerciseDeliveryRepository.update(delivery.id, {
            status: ExerciseDeliveryStatus.ANSWERS_SENT,
            answers_sent_at: new Date(),
            error: null,
        });
    }

    async markDeliveryFailed(deliveryId: number, message: string) {
        await exerciseDeliveryRepository.update(deliveryId, { status: ExerciseDeliveryStatus.FAILED, error: message.slice(0, 2000) });
    }
}
