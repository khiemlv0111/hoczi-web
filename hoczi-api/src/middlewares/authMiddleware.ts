import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../errors/api-erros'
import jwt from 'jsonwebtoken'

export type JwtPayload = {
	id: number,
	email: string,
}

export const authMiddleware = async (
	req: Request,
	res: Response,

	next: NextFunction
) => {
	const { authorization } = req.headers

	if (!authorization) {
		throw new UnauthorizedError('No Token Found!')
	}

	const token = authorization.split(' ')[1]

	const userData = jwt.verify(token, process.env.ACCESS_SECRET ?? '') as JwtPayload

	const saveUser = {
		id: userData.id,
		email: userData.email,
	}

	req.user = saveUser;

	next()
}
