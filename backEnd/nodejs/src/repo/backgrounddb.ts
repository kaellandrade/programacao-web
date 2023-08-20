import { Schema, model, Document } from 'mongoose';

export interface IBackground extends Document {
	ultima: string;
}

const userSchema = new Schema<IBackground>({
	ultima: { type: String, required: true }
});

const Background = model<IBackground>('IBackGround', userSchema);

export default Background;
