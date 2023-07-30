import axios from 'axios';
import { Auth, INITIAL_STATE } from '../context/auth';

export const axiosIntercep = axios.create({
	baseURL: 'https://prog-web.fisioluanamenezes.com',
});

export const axiosPublic = axios.create({
	baseURL: 'https://prog-web.fisioluanamenezes.com',
});

axiosIntercep.interceptors.request.use(
	async (config) => {
		const state = (await JSON.parse(sessionStorage.getItem('state')) || INITIAL_STATE);
		if (state && state.token) {
			config.headers['Authorization'] = `Bearer ${state.token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export function getValorExtenso(valor: number): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (valor != undefined) {
			axiosIntercep.get(`/valores/${valor}`)
				.then((response) => {
					resolve(response.data.valorExtensoMaiuscula);
				})
				.catch((error) => {
					console.error(error);
					reject('Erro ao obter o valor por extenso.');
				});
		}
	});
}

export function getValorCirculacaoDataEspecifica(data: string, especie: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (data != undefined && especie != undefined) {
			axiosIntercep.get(`/valorCirculacaoDataEspecifica/${data}/${especie}`)
				.then((response) => {
					resolve(response.data[0].valor_total);
				})
				.catch((error) => {
					console.error(error);
					reject('Erro ao obter o valor por extenso.');
				});
		}
		else if (data === 'undefined-undefined-')
			console.log('data undefined');
	});
}

export function getValorCirculacaoIntervaloAnos(anoInicio: { year: number }, anoFim: { year: number }, especie: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (anoInicio.year != 0 && anoFim.year != 0) {
			axiosIntercep.get(`/valorCirculacaoIntervaloAnos/${anoInicio.year}/${anoFim.year}/${especie}`)
				.then((response) => {
					resolve(response.data[0].valor_total);
				})
				.catch((error) => {
					console.error(error);
					reject('Erro ao obter o valor por extenso.');
				});
		}
	});
}

export function getQuantidadeDenominacoesIntervaloAnos(anoInicio: { year: number }, anoFim: { year: number }): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (anoInicio.year != 0 && anoFim.year != 0) {
			axiosIntercep.get(`/quantidadeDenominacoesIntervaloAnos/${anoInicio.year}/${anoFim.year}`)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					console.error(error);
					reject('Erro ao obter o valor por extenso.');
				});
		}
	});
}

export function getQuantidadeCategoriasIntervaloAnos(anoInicio: { year: number }, anoFim: { year: number }): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (anoInicio.year != 0 && anoFim.year != 0) {
			axiosIntercep.get(`/quantidadeCategoriasIntervaloAnos/${anoInicio.year}/${anoFim.year}`)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					console.error(error);
					reject('Erro ao obter o valor por extenso.');
				});
		}
	});
}

export function getQuantidadeCirculacaoMesAno(): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		axiosIntercep.get('/quantidadeCirculacaoMesAno')
			.then((response) => {
				// console.log(typeof response.data);	
				resolve(response.data);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o valor por extenso.');
			});
	});
}

export function getDiferencaPercentualQuantidadeDenominacao(): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		axiosIntercep.get('/diferencaPercentualQuantidadeDenominacao')
			.then((response) => {
				// console.log(typeof response.data);	
				resolve(response.data);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o valor por extenso.');
			});
	});
}

export function getEvolucaoQuantidadeCirculacaoPorCategoria(): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		axiosIntercep.get('/evolucaoQuantidadeCirculacaoPorCategoria')
			.then((response) => {
				// console.log(typeof response.data);	
				resolve(response.data);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o valor por extenso.');
			});
	});
}

export function getEvolucaoQuantidadeCirculacaoPorDenominacao(): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		axiosIntercep.get('/evolucaoQuantidadeCirculacaoPorDenominacao')
			.then((response) => {
				// console.log(typeof response.data);	
				resolve(response.data);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o valor por extenso.');
			});
	});
}

export function registrarUsuario(dados): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		axiosPublic.post('/auth/register', dados)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao registrar o usuário.');
			});
	});
}

export function realizarLogin(dados: Auth): Promise<Auth> {
	return new Promise<Auth>((resolve, reject) => {
		axiosPublic.post('/auth/login', dados)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao reslizar o login.');
			});
	});
}