import { Request, Response } from 'express'
import { KnowledgeBaseService } from '../services/KnowledgeBaseService';
import { RequestValidator } from '../dto/requestValidator';
import { CreateKnowledgeBaseRequest, UpdateKnowledgeBaseRequest } from '../dto/knowledgeBase.dto';
const knowledgeBaseService = new KnowledgeBaseService();

export class KnowledgeBaseController {

    async getKnowledgeBases(req: Request, res: Response) {
        const page = req.query.page ? Number(req.query.page) : 1;
        const limit = req.query.limit ? Number(req.query.limit) : 30;
        const search = req.query.search ? String(req.query.search) : undefined;

        const response = await knowledgeBaseService.getKnowledgeBases(page, limit, search);
        return res.json(response);
    }

    async getKnowledgeBaseDetail(req: Request, res: Response) {
        const response = await knowledgeBaseService.getKnowledgeBaseDetail(Number(req.params.id));
        if (!response) {
            return res.status(404).json({ success: false, message: 'Knowledge base not found' });
        }
        return res.json(response);
    }

    async createKnowledgeBase(req: Request, res: Response) {
        const { id } = req.user;

        const { errors, input } = await RequestValidator(CreateKnowledgeBaseRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await knowledgeBaseService.createKnowledgeBase(Number(id), input);
        return res.json(response);
    }

    async updateKnowledgeBase(req: Request, res: Response) {
        const { errors, input } = await RequestValidator(UpdateKnowledgeBaseRequest, req.body);
        if (errors) {
            return res.status(400).json({ success: false, message: errors })
        }

        const response = await knowledgeBaseService.updateKnowledgeBase(Number(req.params.id), input);
        if (!response) {
            return res.status(404).json({ success: false, message: 'Knowledge base not found' });
        }
        return res.json(response);
    }

    async deleteKnowledgeBase(req: Request, res: Response) {
        const deleted = await knowledgeBaseService.deleteKnowledgeBase(Number(req.params.id));
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Knowledge base not found' });
        }
        return res.json({ success: true });
    }
}
