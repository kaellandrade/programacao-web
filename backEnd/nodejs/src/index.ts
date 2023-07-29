import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

AppDataSource.initialize().then(() => {
	const app = express();

	app.use(express.json());

	app.use(cors());

	app.use(routes);

	app.get('/', (req, res) => {
		return res.json('ok');
	});

	console.log('conectado ao banco');

	console.log('rodando na porta:', process.env.PORT);

	return app.listen(process.env.PORT);
});

const mongoUser = process.env.MONGO_USE;
const mongoPass = process.env.MONGO_PASS;
mongoose
	.connect(
		`mongodb+srv://${mongoUser}:${mongoPass}@cluster0.e1rgxg1.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => {
		console.log('conectou ao mongo');
	})
	.catch((err) => console.log(err));
