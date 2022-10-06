import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const { JWT_SECRET = 'default' } = process.env;

export = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(401).json({ message: 'Token not found' });
	}

	try {
		const payload = jwt.verify(token, JWT_SECRET);

		req.user = payload;

		return next();
	} catch (err) {
		return res.status(401).json({ message: 'Expired or invalid token' });
	}
};