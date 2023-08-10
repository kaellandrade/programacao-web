import axios from 'axios';
import { Auth, INITIAL_STATE } from '../context/auth';
import APIBrowser from '../util/APIBrowser';
import CHAVES_COOKIES from '../util/keysConst';

export const axiosIntercep = axios.create({
	baseURL: 'https://prog-web.fisioluanamenezes.com',
});

export const axiosPublic = axios.create({
	baseURL: 'https://prog-web.fisioluanamenezes.com',
});

axiosIntercep.interceptors.request.use(
	async (config) => {
		const cookieSessaoJSON = APIBrowser.getCookie(CHAVES_COOKIES.LOGIN) || '{}';
		const state: Auth = await JSON.parse(cookieSessaoJSON) || INITIAL_STATE;
		if (state && state.token) {
			config.headers['Authorization'] = `Bearer ${state.token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export function getDadosUsuario(): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		axiosIntercep.get('/user')
			.then((response) => {
				resolve(response.data.user);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o nome do usuario!');
			});
	});
}

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
				reject(error.response.data.mensagem);
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
				reject(error.response.data.mensagem);
			});
	});
}

export function getCoodernadas(regiao: string, local: string, ): Promise<object> {
	return new Promise<object>((resolve, reject) => {
		axios.get(`https://nominatim.openstreetmap.org/search?${regiao}=${local}&format=json`)
			.then((response) => {
				// console.log(response.data[0].lat, response.data[0].lon);	
				const coodernadas = {
					latitude: parseFloat(response.data[0].lat),
					longitude: parseFloat(response.data[0].lon)
				};
				resolve(coodernadas);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro');
			});
	});
}