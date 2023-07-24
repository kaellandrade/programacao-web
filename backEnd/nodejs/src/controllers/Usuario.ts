import { Request, Response } from 'express';

import User, { IUser } from '../repo/User';

import bcrypt from 'bcrypt';

type Mensagem = {
	status: number;
	mensagemTecnica?: string;
	mensagem: string;
};

export class Usuario {
	constructor() {
		this.postNewUser = this.postNewUser.bind(this);
	}

	async postNewUser(req: Request, res: Response) {
		const { nome, email, pass, confirmPass } = req.body;

		const validate = this.validateForms(req.body);

		validate.then((data: Mensagem) => {
			const { status, mensagem } = data;

			if (status) {
				return res.status(status).json(mensagem);
			}
		});

		const salt = await bcrypt.genSalt(12);
		const passwordHash = await bcrypt.hash(pass, salt);

		const user = new User({ nome, email, pass: passwordHash });

		try {
			await user.save();

			res.status(201).json({ msg: 'Usuario Criado com Sucesso' });
		} catch (err) {
			console.log(err);
		}
	}

	private async validateForms(usr: IUser): Promise<Mensagem> {
		const { nome, email, pass, confirmPass } = usr;

		if (!nome) return this.utilMessage(422, 'O nome é obrigatório!');
		if (!email) return this.utilMessage(422, 'O email é obrigatório!');
		if (!pass) return this.utilMessage(422, 'A senha é obrigatória!');

		if (pass != confirmPass)
			return this.utilMessage(422, 'As senhas não conferem!');

		return await this.verifyEmailDataBase(email);
	}

	private utilMessage(status: number, mensagem: string): Mensagem {
		return { status, mensagem };
	}

	private async verifyEmailDataBase(email: string) {
		const find = await User.findOne({ email: email });
		if (!find) {
			return this.utilMessage(422, 'Email ja existe');
		}
		return this.utilMessage(0, '');
	}
}
