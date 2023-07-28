import { CategoriasController } from './controllers/CategoriasController';
import { Router } from 'express';
import { GetNoParamsController } from './controllers/GetNoParamsController';
import { GetParamsController } from './controllers/GetParamsController';
import { Usuario } from './controllers/Usuario';

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

const user = new Usuario();
routes.post('/auth/register', new Usuario().postNewUser);

routes.post('/auth/login', user.login);

routes.get('/user/', new Usuario().getUserByID);

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
