import { Router } from 'express'
import { AddminController } from '../controllers/AdminController';
import { AdminEmailController } from '../controllers/AdminEmailController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { requireRole, ROLES } from '../middlewares/requireRole';

const adminRoutes = Router();
const emails = new AdminEmailController();

// Every admin route requires a signed-in admin (the old public /send-email route was removed:
// it let anyone send arbitrary email from the system address).
adminRoutes.use(authMiddleware, requireRole(ROLES.ADMIN));

adminRoutes.post('/create-user', new AddminController().homePage);

// Admin email broadcasts — specs/002-admin-send-email/contracts/api.md
adminRoutes.get('/emails/recipients', emails.searchRecipients);
adminRoutes.post('/emails/preview', emails.preview);
adminRoutes.post('/emails', emails.create);
adminRoutes.get('/emails', emails.list);
adminRoutes.get('/emails/:id', emails.get);

export default adminRoutes;
