import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';

import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);

app.use('/', (_req: Request, res: Response) => res.sendStatus(200));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	const { name, message } = err as Error;
	console.log(`name: ${name}`);

	switch (name) {
	case 'ValidationError':
		res.status(400).json({ message });
		break;
	case 'NotFoundError':
		res.status(404).json({ message });
		break;
	case 'ConflictError':
		res.status(409).json({ message });
		break;
	default:
		console.error(err);
		res.sendStatus(500);
	}

	next();
});

export default app;