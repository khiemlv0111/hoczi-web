import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../errors/api-erros'

export const errorMiddleware = (
	error: Error & Partial<ApiError>,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let statusCode = error.statusCode ?? 500;
	let message = error.message;
	if (error.name == 'TokenExpiredError' || error.name == 'JsonWebTokenError') {
		statusCode = 401;
	}

	// Unexpected errors: log the details, don't leak them (SQL, stack, provider messages) to clients.
	if (statusCode >= 500 && !(error instanceof ApiError)) {
		console.error(`[error] ${req.method} ${req.originalUrl}`, error);
		message = 'Internal server error';
	}

	return res.status(statusCode).json({ message })
}
