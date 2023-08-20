import { Request, Response } from 'express';
import Background from '../repo/backgrounddb';
import moment from 'moment';

export class BackgroundDb {
	async getData(req: Request, res: Response) {
		const { ultima } = req.body;

		const background = await Background.findById('64e271ac914014bf2bdb7ee4');

		console.log(moment().hour());

		while (moment().hour() === 17 && moment().minute() === 21) {
			console.log('virou');
		}

		res.status(201).json({ background });

		// try {
		// 	const validate = await this.validateForms(req.body);
		// 	const { status, mensagem } = validate;

		// 	if (status) {
		// 		return res.status(status).json({ mensagem });
		// 	}

		// 	await user.save();

		// 	res.status(201).json({ mensagem: 'Usuario Criado com Sucesso' });
		// } catch (err) {
		// 	res.status(500).json({ mensagem: 'Erro no servidor' });
		// }
	}
}
