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

		const salt = await bcrypt.genSalt(12);
		const passwordHash = await bcrypt.hash(pass, salt);

		const user = new User({ nome, email, pass: passwordHash });

		try {
			const validate = await this.validateForms(req.body);
			const { status, mensagem } = validate;

			if (status) {
				return res.status(status).json({ mensagem });
			}

			await user.save();

			res.status(201).json({ mensagem: 'Usuario Criado com Sucesso' });
		} catch (err) {
			res.status(500).json({ mensagem: 'Erro no servidor' });
		}
	}

	async getUserIID(req: Request, res: Response) {
		const id = req.params.id;

		const user = await User.findById(id, '-pass');

		if (!user) {
			return res.status(404).json({ msg: 'Usuário não encontrado!' });
		}

		res.status(200).json({ user });
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
		if (find) {
			return this.utilMessage(422, 'Email ja existe');
		}
		return this.utilMessage(0, '');
	}
}
