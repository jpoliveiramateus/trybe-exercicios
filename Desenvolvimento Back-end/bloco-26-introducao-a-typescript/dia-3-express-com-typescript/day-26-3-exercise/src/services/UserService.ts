import UserModel from '../models/UserModel';
import User from '../interfaces';
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

	public async remove(id: number): Promise<void> {
		await this.model.remove(id);
	}
}

export default UserService;