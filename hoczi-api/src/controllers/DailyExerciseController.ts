import { Request, Response } from 'express';
import { RequestValidator } from '../dto/requestValidator';
import {
    AdminCreateSubscriptionRequest, AdminUpdateSubscriptionRequest, CreateMySubscriptionRequest, DELIVERY_STATUSES,
    ResendDeliveryRequest, UnsubscribeRequest, UpdateExerciseRequest, UpdateMySubscriptionRequest,
} from '../dto/dailyExercise.dto';
import { BadRequestError } from '../errors/api-erros';
import { Actor, DailyExerciseService } from '../services/DailyExerciseService';

const service = new DailyExerciseService();
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// requireRole has loaded role and tenant_id onto req.user.
function actor(req: Request): Actor {
    return { id: Number(req.user.id), role: req.user.role, tenant_id: req.user.tenant_id ?? null };
}

function idParam(req: Request) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) throw new BadRequestError('Invalid id');
    return id;
}

function pagination(req: Request) {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
    return { page, limit };
}

function optionalString(value: unknown) {
    const s = typeof value === 'string' ? value.trim() : '';
    return s || undefined;
}

function optionalDate(value: unknown) {
    const s = optionalString(value);
    if (s && !DATE_PATTERN.test(s)) throw new BadRequestError('date must be YYYY-MM-DD');
    return s;
}

function optionalId(value: unknown) {
    if (value === undefined || value === '') return undefined;
    const n = Number(value);
    if (!Number.isInteger(n) || n < 1) throw new BadRequestError('Invalid id filter');
    return n;
}

export class DailyExerciseController {
    // ---------------------------------------------------------------- public

    async unsubscribe(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(UnsubscribeRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.unsubscribe(input.token) });
    }

    // ----------------------------------------------------------- signed in

    async options(req: Request, res: Response) {
        return res.json({ success: true, data: await service.getOptions() });
    }

    async listMine(req: Request, res: Response) {
        return res.json({ success: true, data: await service.listMine(actor(req).id) });
    }

    async createMine(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(CreateMySubscriptionRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.createMine(actor(req).id, input) });
    }

    async updateMine(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(UpdateMySubscriptionRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.updateMine(actor(req).id, idParam(req), input) });
    }

    // --------------------------------------------------------------- admin

    async adminListSubscriptions(req: Request, res: Response) {
        const { page, limit } = pagination(req);
        const active = req.query.is_active;
        const data = await service.adminListSubscriptions(actor(req), page, limit, {
            keyword: optionalString(req.query.keyword),
            is_active: active === 'true' ? true : active === 'false' ? false : undefined,
        });
        return res.json({ success: true, data });
    }

    async adminCreateSubscription(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(AdminCreateSubscriptionRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.adminCreateSubscription(actor(req), input) });
    }

    async adminUpdateSubscription(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(AdminUpdateSubscriptionRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.adminUpdateSubscription(actor(req), idParam(req), input) });
    }

    async testRun(req: Request, res: Response) {
        return res.json({ success: true, data: await service.testRun(actor(req), idParam(req)) });
    }

    async adminListSets(req: Request, res: Response) {
        const { page, limit } = pagination(req);
        const data = await service.adminListSets(page, limit, {
            date: optionalDate(req.query.date),
            subject_id: optionalId(req.query.subject_id),
            grade_id: optionalId(req.query.grade_id),
        });
        return res.json({ success: true, data });
    }

    async adminGetSet(req: Request, res: Response) {
        return res.json({ success: true, data: await service.adminGetSet(idParam(req)) });
    }

    async adminUpdateExercise(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(UpdateExerciseRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.adminUpdateExercise(actor(req), idParam(req), input) });
    }

    async adminListDeliveries(req: Request, res: Response) {
        const { page, limit } = pagination(req);
        const status = optionalString(req.query.status);
        if (status && !DELIVERY_STATUSES.includes(status)) throw new BadRequestError('Invalid status');
        const data = await service.adminListDeliveries(actor(req), page, limit, {
            date: optionalDate(req.query.date),
            status,
            keyword: optionalString(req.query.keyword),
        });
        return res.json({ success: true, data });
    }

    async resend(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(ResendDeliveryRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.resend(actor(req), idParam(req), input.part) });
    }
}
