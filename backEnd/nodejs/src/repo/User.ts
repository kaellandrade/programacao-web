// user.model.ts (ou outro nome que preferir)

import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
	nome: string;
	email: string;
	pass: string;
	confirmPass: string;
}

const userSchema = new Schema<IUser>({
	nome: { type: String, required: true },
	email: { type: String, required: true },
	pass: { type: String, required: true }
});

const User = model<IUser>('User', userSchema);

export default User;
