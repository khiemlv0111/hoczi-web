import { Router } from 'express'
import { AiController } from '../controllers/AiController';
import { requireRole, ROLES } from '../middlewares/requireRole';

const aiRoutes = Router();

// Any signed-in user can ask a curriculum question; requireRole('any') loads their tenant.
aiRoutes.post('/ask', requireRole(ROLES.ANY), new AiController().ask);
aiRoutes.post('/chat', requireRole(ROLES.ANY), new AiController().chat);
// Learner tutor for /quizzes/results/ai-learn/[topic]
aiRoutes.post('/learn/chat', requireRole(ROLES.ANY), new AiController().learnChat);

aiRoutes.post('/generate', requireRole(ROLES.AUTHOR), new AiController().generate);
aiRoutes.get('/drafts', requireRole(ROLES.AUTHOR), new AiController().getDrafts);
aiRoutes.get('/drafts/:id', requireRole(ROLES.AUTHOR), new AiController().getDraftDetail);
aiRoutes.post('/drafts/:id/regenerate', requireRole(ROLES.AUTHOR), new AiController().regenerateDraft);

aiRoutes.put('/drafts/:id', requireRole(ROLES.REVIEWER), new AiController().updateDraft);
aiRoutes.post('/drafts/:id/approve', requireRole(ROLES.REVIEWER), new AiController().approveDraft);
aiRoutes.post('/drafts/:id/reject', requireRole(ROLES.REVIEWER), new AiController().rejectDraft);
aiRoutes.post('/drafts/:id/publish', requireRole(ROLES.REVIEWER), new AiController().publishDraft);

export default aiRoutes;
