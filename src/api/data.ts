import axios from 'axios';

export default function getValorExtenso(valor: number): Promise<string> {
	return new Promise<string>((resolve, reject) => {
	  axios.get(`http://localhost:3000/valores/${valor}`)
		.then((response) => {
		  resolve(response.data.valorExtensoMaiuscula);
		})
		.catch((error) => {
		  console.error(error);
		  reject('Erro ao obter o valor por extenso.');
		});
	});
  }
  