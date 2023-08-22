import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

import schedule from 'node-schedule';
import { BackgroundDb } from './controllers/Background';

AppDataSource.initialize().then(() => {
	const app = express();

	app.use(express.json());

	app.use(cors());

	app.use(routes);

	app.get('/', (req, res) => {
		return res.json('ok');
	});

	console.log('conectado ao banco', process.env.DB_HOST);

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

const job = schedule.scheduleJob('0 0 * * *', () => {
	const cron = new BackgroundDb();
	cron.getCron();
	console.log('Banco de dados atualizado às 00:00 da manhã');
});
