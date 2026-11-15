import { Router } from 'express';
import { DailyExerciseController } from '../controllers/DailyExerciseController';
import { requireRole, ROLES } from '../middlewares/requireRole';

// Daily exercise emails — see specs/001-daily-exercise-email/contracts/api.md
const controller = new DailyExerciseController();

// Mounted before authMiddleware: the unsubscribe link in emails works without signing in.
export const dailyExercisePublicRoutes = Router();
dailyExercisePublicRoutes.post('/unsubscribe', controller.unsubscribe);

const dailyExerciseRoutes = Router();

dailyExerciseRoutes.get('/options', requireRole(ROLES.ANY), controller.options);
dailyExerciseRoutes.get('/my-subscriptions', requireRole(ROLES.ANY), controller.listMine);
dailyExerciseRoutes.post('/my-subscriptions', requireRole(ROLES.ANY), controller.createMine);
dailyExerciseRoutes.put('/my-subscriptions/:id', requireRole(ROLES.ANY), controller.updateMine);

dailyExerciseRoutes.get('/admin/subscriptions', requireRole(ROLES.ADMIN), controller.adminListSubscriptions);
dailyExerciseRoutes.post('/admin/subscriptions', requireRole(ROLES.ADMIN), controller.adminCreateSubscription);
dailyExerciseRoutes.put('/admin/subscriptions/:id', requireRole(ROLES.ADMIN), controller.adminUpdateSubscription);
dailyExerciseRoutes.post('/admin/subscriptions/:id/test-run', requireRole(ROLES.ADMIN), controller.testRun);
dailyExerciseRoutes.get('/admin/sets', requireRole(ROLES.ADMIN), controller.adminListSets);
dailyExerciseRoutes.get('/admin/sets/:id', requireRole(ROLES.ADMIN), controller.adminGetSet);
dailyExerciseRoutes.put('/admin/exercises/:id', requireRole(ROLES.ADMIN), controller.adminUpdateExercise);
dailyExerciseRoutes.get('/admin/deliveries', requireRole(ROLES.ADMIN), controller.adminListDeliveries);
dailyExerciseRoutes.post('/admin/deliveries/:id/resend', requireRole(ROLES.ADMIN), controller.resend);

export default dailyExerciseRoutes;
