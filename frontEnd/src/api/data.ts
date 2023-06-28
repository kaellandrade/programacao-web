import axios from 'axios';
const urlBackEnd = 'http://localhost:3000';

export function getValorExtenso(valor: number): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		if (valor != undefined) {
			axios.get(`${urlBackEnd}/valores/${valor}`)
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
			axios.get(`${urlBackEnd}/valorCirculacaoDataEspecifica/${data}/${especie}`)
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
		if ( anoInicio != undefined && anoFim != undefined && especie != undefined) {
			axios.get(`${urlBackEnd}/valorCirculacaoIntervaloAnos/${anoInicio.year}/${anoFim.year}/${especie}`)
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
