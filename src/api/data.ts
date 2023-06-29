import axios from 'axios';
const URL_LOCAL = 'http://localhost:3000';
const URL_PRODUCAO = '';

if(import.meta.env.MODE === 'development'){
	axios.defaults.baseURL=URL_LOCAL;
}else{
	axios.defaults.baseURL=URL_PRODUCAO;
}

export function getValorExtenso(valor: number): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (valor != undefined) {
			axios.get(`/valores/${valor}`)
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
	// console.log(data, especie);
	return new Promise<string>((resolve, reject) => {
		if (data != undefined && especie != undefined) {
			axios.get(`/valorCirculacaoDataEspecifica/${data}/${especie}`)
			.then((response) => {
				// console.log(response.data[0].valor_total);	
			  resolve(response.data[0].valor_total);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o valor por extenso.');
			});
		}
		else if ( data === 'undefined-undefined-' )
			console.log('data undefined');
	});
}
  
export function getValorCirculacaoIntervaloAnos(anoInicio: { year: number }, anoFim: { year: number }, especie: string): Promise<string> {
	console.log(anoInicio.year, anoFim.year, especie);
	return new Promise<string>((resolve, reject) => {
		if ( anoInicio.year != 0 && anoFim.year != 0) {
			axios.get(`/valorCirculacaoIntervaloAnos/${anoInicio.year}/${anoFim.year}/${especie}`)
			.then((response) => {
			//   console.log(response.data[0].valor_total);	
				resolve(response.data[0].valor_total);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o valor por extenso.');
			});
		}
	});
}

export function getQuantidadeDenominacoesIntervaloAnos( anoInicio: { year: number }, anoFim: { year: number } ): Promise<string> {
	// console.log(anoInicio.year, anoFim.year);
	return new Promise<string>((resolve, reject) => {
		if ( anoInicio.year != 0 && anoFim.year != 0) {
			axios.get(`/quantidadeDenominacoesIntervaloAnos/${anoInicio.year}/${anoFim.year}`)
			.then((response) => {
			  console.log(typeof response.data);	
				resolve(response.data);
			})
			.catch((error) => {
				console.error(error);
				reject('Erro ao obter o valor por extenso.');
			});
		}
	});
}

export function getQuantidadeCategoriasIntervaloAnos( anoInicio: { year: number }, anoFim: { year: number } ): Promise<string> {
	// console.log(anoInicio.year, anoFim.year);
	return new Promise<string>((resolve, reject) => {
		if ( anoInicio.year != 0 && anoFim.year != 0) {
			axios.get(`/quantidadeCategoriasIntervaloAnos/${anoInicio.year}/${anoFim.year}`)
			.then((response) => {
			  console.log(typeof response.data);	
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
	// console.log(anoInicio.year, anoFim.year);
	return new Promise<string>((resolve, reject) => {
		axios.get('/quantidadeCirculacaoMesAno')
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
	// console.log(anoInicio.year, anoFim.year);
	return new Promise<string>((resolve, reject) => {
		axios.get('/diferencaPercentualQuantidadeDenominacao')
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
	// console.log(anoInicio.year, anoFim.year);
	return new Promise<string>((resolve, reject) => {
		axios.get('/evolucaoQuantidadeCirculacaoPorCategoria')
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
	// console.log(anoInicio.year, anoFim.year);
	return new Promise<string>((resolve, reject) => {
		axios.get('/evolucaoQuantidadeCirculacaoPorDenominacao')
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