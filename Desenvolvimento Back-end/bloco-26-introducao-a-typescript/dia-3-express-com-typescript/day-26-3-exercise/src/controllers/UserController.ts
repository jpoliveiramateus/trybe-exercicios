import { Request, Response } from 'express';
import { NotFoundError } from 'restify-errors';
import UserService from '../services/UserService';

class UserController {
	private service: UserService;

	constructor() {
		this.service = new UserService();
	}

	public getAll = async (_req: Request, res: Response) => {
		const users = await this.service.getAll();
		res.status(200).json(users);
	};

	public getById = async (req: Request, res: Response) => {
		const id = parseInt(req.params.id);
		const user = await this.service.getById(id);

		if (!user) {
			return res.status(404).json({ message: 'User not found!' });
		}

		return res.status(200).json(user);
	};

	public create = async (req: Request, res: Response) => {
		const user = req.body;
		const token = await this.service.create(user);

		res.status(201).json({ token });
	};

	public update = async (req: Request, res: Response) => {
		const id = parseInt(req.params.id);
		const user = req.body;
		const userUpdated =  await this.service.update(id, user);

		res.status(200).json(userUpdated);
	};

	public remove = async (req: Request, res: Response) => {
		const id = Number(req.params.id);

		const userFound = await this.service.getById(id);

		if (!userFound) {
			throw new NotFoundError('NotFoundError');
		}

		if (id !== req.user.id) {
			return res.status(401).json({ message: 'Usuário não permitido!' });
		}

		await this.service.remove(id);

		res.status(200).json({ message: 'User deleted successfully' });
	};
}

export default UserController;