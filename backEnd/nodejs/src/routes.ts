import { CategoriasController } from './controllers/CategoriasController';
import { Router } from 'express';
import { GetNoParamsController } from './controllers/GetNoParamsController';
import { GetParamsController } from './controllers/GetParamsController';
import { User } from './controllers/User';

import bcrypt from 'bcrypt';
const extenso = require('extenso');

const routes = Router();

routes.get(
	'/evolucaoQuantidadeCirculacaoPorCategoria',
	new GetNoParamsController().evolucaoQuantidadeCirculacaoPorCategoria
);

routes.get(
	'/evolucaoQuantidadeCirculacaoPorDenominacao',
	new GetNoParamsController().evolucaoQuantidadeCirculacaoPorDenominacao
);

routes.get(
	'/quantidadeCirculacaoMesAno',
	new GetNoParamsController().quantidadeCirculacaoMesAno
);

routes.get(
	'/diferencaPercentualQuantidadeDenominacao',
	new GetNoParamsController().diferencaPercentualQuantidadeDenominacao
);

routes.get(
	'/valorCirculacaoDataEspecifica/:data/:especie',
	new GetParamsController().valorCirculacaoDataEspecifica
);

routes.get(
	'/valorCirculacaoIntervaloAnos/:anoInicio/:anoFim/:especie',
	new GetParamsController().valorCirculacaoIntervaloAnos
);

routes.get(
	'/quantidadeDenominacoesIntervaloAnos/:anoInicio/:anoFim',
	new GetParamsController().quantidadeDenominacoesIntervaloAnos
);

routes.get(
	'/quantidadeCategoriasIntervaloAnos/:anoInicio/:anoFim',
	new GetParamsController().quantidadeCategoriasIntervaloAnos
);

routes.post('/auth/register', async (req, res) => {
	const { nome, email, pass, confirmPass } = req.body;

	if (!nome) return res.status(422).json({ msg: 'nome obrigatorio' });

	const salt = await bcrypt.genSalt(12);
	console.log(salt);

	const passwordHash = await bcrypt.hash(pass, salt);

	const user = new User();

	const salvarUsuario = new user.user({ nome, email, pass: passwordHash });

	try {
		console.log('user', salvarUsuario);
		await salvarUsuario.save();

		res.status(201).json({ msg: 'Usuario Criado com Sucesso' });
	} catch (err) {
		console.log(err);
	}
});

routes.get('/valores/:valor', (req, res) => {
	let valor = req.params.valor;
	valor = valor.replace('.', ',');
	const valorExtenso = extenso(valor, {
		number: { decimalSeparator: 'dot' },
		mode: 'currency'
	});
	const valorExtensoMaiuscula =
		valorExtenso[0].toUpperCase() + valorExtenso.substring(1);
	res.json({ valorExtensoMaiuscula });
});

export default routes;
