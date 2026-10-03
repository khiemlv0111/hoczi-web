import { Router } from 'express'
import { KnowledgeBaseController } from '../controllers/KnowledgeBaseController';

const knowledgeBaseRoutes = Router();

knowledgeBaseRoutes.get('/', new KnowledgeBaseController().getKnowledgeBases);
knowledgeBaseRoutes.get('/:id', new KnowledgeBaseController().getKnowledgeBaseDetail);
knowledgeBaseRoutes.post('/', new KnowledgeBaseController().createKnowledgeBase);
knowledgeBaseRoutes.put('/:id', new KnowledgeBaseController().updateKnowledgeBase);
knowledgeBaseRoutes.delete('/:id', new KnowledgeBaseController().deleteKnowledgeBase);

export default knowledgeBaseRoutes;
