import { CategoriasController } from './controllers/CategoriasController';
import { Router } from 'express';
import { GetNoParamsController } from './controllers/GetNoParamsController';
import { GetParamsController } from './controllers/GetParamsController';
import { Usuario } from './controllers/Usuario';
import { GetAnalytics } from './controllers/Analytics';

const extenso = require('extenso');

const routes = Router();
const user = new Usuario();

routes.get(
	'/evolucaoQuantidadeCirculacaoPorCategoria',
	user.checkToken,
	new GetNoParamsController().evolucaoQuantidadeCirculacaoPorCategoria
);

routes.get(
	'/evolucaoQuantidadeCirculacaoPorDenominacao',
	user.checkToken,
	new GetNoParamsController().evolucaoQuantidadeCirculacaoPorDenominacao
);

routes.get(
	'/quantidadeCirculacaoMesAno',
	user.checkToken,
	new GetNoParamsController().quantidadeCirculacaoMesAno
);

routes.get(
	'/diferencaPercentualQuantidadeDenominacao',
	user.checkToken,
	new GetNoParamsController().diferencaPercentualQuantidadeDenominacao
);

routes.get(
	'/valorCirculacaoDataEspecifica/:data/:especie',
	user.checkToken,
	new GetParamsController().valorCirculacaoDataEspecifica
);

routes.get(
	'/valorCirculacaoIntervaloAnos/:anoInicio/:anoFim/:especie',
	user.checkToken,
	new GetParamsController().valorCirculacaoIntervaloAnos
);

routes.get(
	'/quantidadeDenominacoesIntervaloAnos/:anoInicio/:anoFim',
	user.checkToken,
	new GetParamsController().quantidadeDenominacoesIntervaloAnos
);

routes.get(
	'/quantidadeCategoriasIntervaloAnos/:anoInicio/:anoFim',
	user.checkToken,
	new GetParamsController().quantidadeCategoriasIntervaloAnos
);

routes.post('/auth/register', new Usuario().postNewUser);

routes.post('/auth/login', user.login);

routes.get('/user/', new Usuario().getUserByID);

routes.get('/valores/:valor', user.checkToken, (req, res) => {
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

routes.get('/analytics', new GetAnalytics().reportAnalytics);
export default routes;
