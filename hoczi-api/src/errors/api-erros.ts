export class ApiError extends Error {
	public readonly statusCode: number
	// Extra fields merged into the JSON error response (e.g. { invalid_emails: [...] })
	public readonly extra?: Record<string, unknown>

	constructor(message: string, statusCode: number, extra?: Record<string, unknown>) {
		super(message)
		this.statusCode = statusCode
		this.extra = extra
	}
}

export class BadRequestError extends ApiError {
	constructor(message: string) {
		super(message, 400)
	}
}

export class NotFoundError extends ApiError {
	constructor(message: string) {
		super(message, 404)
	}
}

export class UnauthorizedError extends ApiError {
	constructor(message: string) {
		super(message, 401)
	}
}
