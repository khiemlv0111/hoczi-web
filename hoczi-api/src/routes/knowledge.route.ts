import { Router } from 'express'
import { KnowledgeDocumentController } from '../controllers/KnowledgeDocumentController';
import { requireRole, ROLES } from '../middlewares/requireRole';

const knowledgeRoutes = Router();

knowledgeRoutes.use(requireRole(ROLES.ADMIN));

knowledgeRoutes.post('/documents/upload-url', new KnowledgeDocumentController().createUploadUrl);
knowledgeRoutes.post('/documents', new KnowledgeDocumentController().registerDocument);
knowledgeRoutes.get('/documents', new KnowledgeDocumentController().getDocuments);
knowledgeRoutes.get('/documents/:id', new KnowledgeDocumentController().getDocumentDetail);
knowledgeRoutes.post('/documents/:id/retry', new KnowledgeDocumentController().retryDocument);
knowledgeRoutes.delete('/documents/:id', new KnowledgeDocumentController().deleteDocument);
knowledgeRoutes.get('/usage', new KnowledgeDocumentController().getUsageSummary);

export default knowledgeRoutes;
