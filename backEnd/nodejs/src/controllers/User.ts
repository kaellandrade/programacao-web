import { Model, Schema, model, connect, Document } from 'mongoose';

interface IUser {
	nome: string;
	email: string;
	pass: string;
	confirmPass?: string;
}

export class User {
	user: Model<IUser>;

	constructor() {
		const userSchema = new Schema<IUser>({
			nome: { type: String, required: true },
			email: { type: String, required: true },
			pass: { type: String, required: true }
		});
		this.user = model<IUser>('User', userSchema);
	}

	get getuser() {
		return this.user;
	}
}
