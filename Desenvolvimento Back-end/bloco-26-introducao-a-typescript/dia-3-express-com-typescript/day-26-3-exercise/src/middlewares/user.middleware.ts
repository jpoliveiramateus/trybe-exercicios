import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const validateCreateUser = async (req: Request, res: Response, next: NextFunction) => {
	const { error } = schemas.createUserSchema.validate(req.body);

	if (error) {
		return res.status(400).json({ message: error.message });
	}

	next();
};

export = {
	validateCreateUser,
};