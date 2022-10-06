import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces';
import connection from './connection';

export default class UserModel {
	public connection: Pool;

	constructor() {
		this.connection = connection;
	}

	public async getAll(): Promise<User[]> {
		const result = await this.connection.execute('SELECT * FROM Users');
		const [rows] = result;
		return rows as User[];
	}

	public async getById(id: number): Promise<User> {
		const result = await this.connection.execute('SELECT * FROM Users WHERE id=?', [id]);
		const [rows] = result;
		const [user] = rows as User[];
		return user;
	}

	public async getByEmail(email: string): Promise<User> {
		const result = await this.connection.execute('SELECT * FROM Users WHERE email=?', [email]);
		const [rows] = result;
		const [user] = rows as User[];
		return user;
	}

	public async create(user: User): Promise<number> {
		const { name, email, password } = user;
		const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
			'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
			[name, email, password],
		);
		return insertId;
	}

	public async update(id: number, user: User): Promise<User> {
		const { name, email, password } = user;
		await this.connection.execute(
			'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
			[name, email, password, id]
		);

		return { id, ...user };
	}

	public async remove(id: number): Promise<void> {
		await this.connection.execute(
			'DELETE FROM Users WHERE id=?',
			[id],
		);
	}
}