import { NextFunction, Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'

export const ROLES = {
    ANY: 'any' as const,
    ADMIN: ['admin', 'super_admin'],
    REVIEWER: ['admin', 'super_admin', 'teacher'],
    AUTHOR: ['admin', 'super_admin', 'teacher', 'author'],
};

// The JWT only carries id/email, so role and tenant are loaded from the database.
// Must run after authMiddleware.
export const requireRole = (allowed: string[] | 'any') => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = req.user?.id ? await userRepository.findById(Number(req.user.id)) : null;
    if (!user) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    req.user = { ...req.user, role: user.role, tenant_id: user.tenant_id ?? null };

    if (allowed !== 'any' && !allowed.includes(user.role ?? '')) {
        return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    next()
}

export function isAdminUser(req: Request) {
    return ROLES.ADMIN.includes(req.user?.role ?? '');
}
