import jwt from 'jsonwebtoken';
import { JwtPayload } from '../middlewares/authMiddleware';


export const createAccessToken = (payload: JwtPayload) => {
    const expiredTime = process.env.NODE_ENV == "production" ? "30d" : "30d"; // 15m for production, 7d for development
    return jwt.sign(payload, process.env.ACCESS_SECRET!, { expiresIn: expiredTime }); // 15m 
};

export const createRefreshToken = (payload: JwtPayload) => {
    return jwt.sign({ payload }, process.env.ACCESS_SECRET!, { expiresIn: "30d" }); 
};
