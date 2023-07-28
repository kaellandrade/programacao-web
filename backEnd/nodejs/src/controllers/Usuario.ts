import { NextFunction, Request, Response } from 'express';

import User, { IUser } from '../repo/User';

import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

type Mensagem = {
	status: number;
	mensagemTecnica?: string;
	mensagem: string;
};

export class Usuario {
	constructor() {
		this.postNewUser = this.postNewUser.bind(this);
		this.login = this.login.bind(this);
		this.getUserByID = this.getUserByID.bind(this);
		this.checkToken = this.checkToken.bind(this);
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

	async login(req: Request, res: Response) {
		const { email, pass } = req.body;

		if (!email) {
			return res.status(422).json({ mensagem: 'O email é obrigatório!' });
		}

		if (!pass) {
			return res.status(422).json({ mensagem: 'A senha é obrigatória!' });
		}

		const user = await User.findOne({ email: email });

		if (!user) {
			return res.status(404).json({ mensagem: 'Usuário não encontrado!' });
		}

		const checkPassword = await bcrypt.compare(pass, user.pass);

		if (!checkPassword) {
			return res.status(401).json({ mensagem: 'Senha inválida' });
		}

		try {
			const secret = process.env.SECRET;

			if (!secret) {
				throw new Error('Variavel de ambiente indefinida ');
			}

			const expiration = this.expiratioToken();

			const token: string = jwt.sign(
				{
					id: user._id,
					exp: expiration.exp
				},
				secret
			);

			res.status(200).json({
				mensagem: 'Autenticação realizada com sucesso!',
				token,
				exp: expiration.expirationDate
			});
		} catch (error) {
			console.log('Erro no server', error);
			res.status(500).json({ mensagem: 'Erro no servidor!' });
		}
	}

	async getUserByID(req: Request, res: Response) {
		const id = req.params.id;

		try {
			// const user = await User.findById(id, '-pass');

			// if (!user) {
			// 	return res.status(404).json({ mensagem: 'Usuário não encontrado' });
			// }

			this.checkToken(req, res, () => {
				// res.status(200).json({ user });
			});
		} catch (err) {
			res.status(500).json({ mensagem: 'Erro no servidor' });
		}
	}

	checkToken(req: Request, res: Response, next: NextFunction) {
		const authHeader = req.headers['authorization'];

		const token = authHeader && authHeader.split(' ')[1];

		if (!token) {
			const mensagem = 'Acesso negado! Token não fornecido';
			return res.status(401).json({ mensagem });
		}

		try {
			const secret = process.env.SECRET;

			if (!secret) {
				throw new Error('Variável de ambiente "SECRET" não definida');
			}

			jwt.verify(token, secret, async (err, decoded: any) => {
				if (err) {
					return res.status(401).json({ mensagem: 'Token inválido' });
				}

				console.log(decoded);

				const expirationDate = new Date(decoded.exp * 1000);

				if (expirationDate <= new Date()) {
					return res.status(401).json({ mensagem: 'Token expirado' });
				}

				const user = await User.findById(decoded.id, '-pass');

				if (!user) {
					return res.status(404).json({ mensagem: 'Usuário não encontrado' });
				} else {
					res.status(200).json({ user });
				}

				next();
			});
		} catch (err) {
			res.status(400).json({ mensagem: 'Token é inválido' });
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
		if (find) {
			return this.utilMessage(422, 'Email ja existe');
		}
		return this.utilMessage(0, '');
	}

	private expiratioToken() {
		const expirationDate = new Date();
		expirationDate.setHours(expirationDate.getHours() + 1);
		const exp = expirationDate.getTime() / 1000;

		return { exp, expirationDate };
	}
}
