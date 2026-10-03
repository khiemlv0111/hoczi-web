import { Router } from 'express'
import { KnowledgeBaseController } from '../controllers/KnowledgeBaseController';
import { requireRole, ROLES } from '../middlewares/requireRole';

const knowledgeBaseRoutes = Router();

knowledgeBaseRoutes.use(requireRole(ROLES.ADMIN));

knowledgeBaseRoutes.get('/', new KnowledgeBaseController().getKnowledgeBases);
knowledgeBaseRoutes.get('/:id', new KnowledgeBaseController().getKnowledgeBaseDetail);
knowledgeBaseRoutes.post('/', new KnowledgeBaseController().createKnowledgeBase);
knowledgeBaseRoutes.put('/:id', new KnowledgeBaseController().updateKnowledgeBase);
knowledgeBaseRoutes.post('/:id/reindex', new KnowledgeBaseController().reindexKnowledgeBase);
knowledgeBaseRoutes.delete('/:id', new KnowledgeBaseController().deleteKnowledgeBase);

export default knowledgeBaseRoutes;
