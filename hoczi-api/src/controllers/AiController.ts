import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { AskRequest, GenerateRequest, PublishDraftRequest, ReviewDraftRequest, UpdateDraftRequest } from '../dto/ai.dto';
import { AiGenerationService, AiUser } from '../services/AiGenerationService';
const aiGenerationService = new AiGenerationService();

// requireRole has loaded role and tenant_id onto req.user.
function currentUser(req: Request): AiUser {
    return { id: Number(req.user.id), role: req.user.role, tenant_id: req.user.tenant_id ?? null };
}

export class AiController {

    async generate(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(GenerateRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await aiGenerationService.generate(currentUser(req), input);
        return res.json(response);
    }

    async ask(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(AskRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await aiGenerationService.ask(currentUser(req), input);
        return res.json(response);
    }

    async getDrafts(req: Request, res: Response) {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;
        const response = await aiGenerationService.listDrafts(currentUser(req), page, limit, {
            status: req.query.status ? String(req.query.status) : undefined,
            task_type: req.query.task_type ? String(req.query.task_type) : undefined,
        });
        return res.json(response);
    }

    async getDraftDetail(req: Request, res: Response) {
        const response = await aiGenerationService.getDraft(currentUser(req), Number(req.params.id));
        return res.json(response);
    }

    async updateDraft(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(UpdateDraftRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await aiGenerationService.updateDraft(currentUser(req), Number(req.params.id), input.output);
        return res.json(response);
    }

    async regenerateDraft(req: Request, res: Response) {
        const response = await aiGenerationService.regenerate(currentUser(req), Number(req.params.id));
        return res.json(response);
    }

    async approveDraft(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(ReviewDraftRequest, req.body ?? {});
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await aiGenerationService.approveDraft(currentUser(req), Number(req.params.id), input.notes);
        return res.json(response);
    }

    async rejectDraft(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(ReviewDraftRequest, req.body ?? {});
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await aiGenerationService.rejectDraft(currentUser(req), Number(req.params.id), input.notes);
        return res.json(response);
    }

    async publishDraft(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(PublishDraftRequest, req.body ?? {});
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await aiGenerationService.publishDraft(currentUser(req), Number(req.params.id), input);
        return res.json(response);
    }
}
