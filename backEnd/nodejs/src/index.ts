import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes';
const cors = require('cors');

AppDataSource.initialize().then(() => {
	const app = express();

	app.use(express.json());

	app.use(cors());

	app.use(routes);


	app.get('/', (req, res) => {
		return res.json('ok');
	});

	console.log('conectado ao banco');

	return app.listen(process.env.PORT);
});
