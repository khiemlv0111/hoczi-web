import { Request, Response } from 'express'
import { RequestValidator } from '../dto/requestValidator';
import { CreateUploadUrlRequest, RegisterKnowledgeDocumentRequest } from '../dto/ai.dto';
import { KnowledgeDocumentService } from '../services/KnowledgeDocumentService';
const knowledgeDocumentService = new KnowledgeDocumentService();

export class KnowledgeDocumentController {

    async createUploadUrl(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(CreateUploadUrlRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await knowledgeDocumentService.createUploadUrl(input);
        return res.json(response);
    }

    async registerDocument(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(RegisterKnowledgeDocumentRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }
        const response = await knowledgeDocumentService.registerDocument(Number(req.user.id), input);
        return res.json(response);
    }

    async getDocuments(req: Request, res: Response) {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;
        const tenant = req.query.tenant_id;

        const response = await knowledgeDocumentService.getDocuments(page, limit, {
            status: req.query.status ? String(req.query.status) : undefined,
            hsk_standard: req.query.hsk_standard ? String(req.query.hsk_standard) : undefined,
            hsk_level: req.query.hsk_level ? Number(req.query.hsk_level) : undefined,
            tenant_id: tenant === 'system' ? null : tenant ? Number(tenant) : undefined,
        });
        return res.json(response);
    }

    async getDocumentDetail(req: Request, res: Response) {
        const response = await knowledgeDocumentService.getDocumentDetail(Number(req.params.id));
        return res.json(response);
    }

    async retryDocument(req: Request, res: Response) {
        const response = await knowledgeDocumentService.retryDocument(Number(req.params.id), req.body?.allow_duplicate === true);
        return res.json(response);
    }

    async deleteDocument(req: Request, res: Response) {
        const response = await knowledgeDocumentService.deleteDocument(Number(req.params.id));
        return res.json(response);
    }

    async getUsageSummary(req: Request, res: Response) {
        const response = await knowledgeDocumentService.getUsageSummary();
        return res.json(response);
    }
}
