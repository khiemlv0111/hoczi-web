import { Request, Response } from 'express';
import { RequestValidator } from '../dto/requestValidator';
import { CreateBroadcastRequest, PreviewEmailRequest } from '../dto/adminEmail.dto';
import { BadRequestError } from '../errors/api-erros';
import { Actor, AdminEmailService } from '../services/AdminEmailService';

const service = new AdminEmailService();
const RECIPIENT_STATUSES = ['pending', 'sending', 'sent', 'failed'];

// requireRole (on the admin router) has loaded role and tenant_id onto req.user.
function actor(req: Request): Actor {
    return { id: Number(req.user.id), role: req.user.role, tenant_id: req.user.tenant_id ?? null };
}

function pageParams(req: Request, defaultLimit: number) {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || defaultLimit));
    return { page, limit };
}

// Admin email broadcasts — specs/002-admin-send-email/contracts/api.md
export class AdminEmailController {
    async searchRecipients(req: Request, res: Response) {
        const keyword = typeof req.query.keyword === 'string' ? req.query.keyword.slice(0, 100) : undefined;
        return res.json({ success: true, data: await service.searchRecipients(actor(req), keyword) });
    }

    async preview(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(PreviewEmailRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.preview(input) });
    }

    async create(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(CreateBroadcastRequest, req.body);
        if (errors) return res.status(400).json({ success: false, message: errors });
        return res.json({ success: true, data: await service.create(actor(req), input) });
    }

    async list(req: Request, res: Response) {
        const { page, limit } = pageParams(req, 20);
        return res.json({ success: true, data: await service.list(actor(req), page, limit) });
    }

    async get(req: Request, res: Response) {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id < 1) throw new BadRequestError('Invalid id');
        const status = typeof req.query.status === 'string' && req.query.status ? req.query.status : undefined;
        if (status && !RECIPIENT_STATUSES.includes(status)) throw new BadRequestError('Invalid status');
        const { page, limit } = pageParams(req, 50);
        return res.json({ success: true, data: await service.get(actor(req), id, { status, page, limit }) });
    }
}
