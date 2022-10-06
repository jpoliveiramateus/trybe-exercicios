import UserModel from '../models/UserModel';

import User from '../interfaces';
import IToken from '../interfaces/IToken';

import { NotFoundError } from 'restify-errors';

import jwt from 'jsonwebtoken';

import 'dotenv/config';

const { JWT_SECRET = 'default' } = process.env;

class UserService {
	public model: UserModel;

	constructor() {
		this.model = new UserModel();
	}

	public async getAll(): Promise<User[]> {
		const users = await this.model.getAll();
		return users;
	}

	public async getById(id: number): Promise<User> {
		const user = await this.model.getById(id);
		return user;
	}

	public async create(user: User): Promise<string> {
		const userFoundByEmail = await this.model.getByEmail(user.email);

		if (userFoundByEmail) {
			throw new NotFoundError('NotFoundError');
		}

		const userId = await this.model.create(user);

		const token = jwt.sign({ id: userId }, JWT_SECRET, {});
		return token;
	}

	public async update(id: number, user: User): Promise<User> {
		const userFound = await this.model.getById(id);

		if (!userFound) {
			throw new NotFoundError('NotFoundError');
		}

		const userUpdated = await this.model.update(id, user);
		return userUpdated;
	}

	public async remove(id: number, token: string): Promise<void> {
		const userFound = await this.model.getById(id);

		if (!userFound) {
			throw new NotFoundError('NotFoundError');
		}

		try {
			const payload = jwt.verify(token, JWT_SECRET) as IToken;

			if (payload.id !== id) {
				throw new NotFoundError('NotFoundError');
			}

			await this.model.remove(id);
		} catch (err) {
			throw new NotFoundError('Token inválido ou expirado');
		}
	}
}

export default UserService;