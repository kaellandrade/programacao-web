import React from 'react';
import './index.css';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Card_Valores from '../../componentes/card-valores/Card_Valores';

function Main() {
	const pergunta1 =
		'Qual é o valor em circulação somente das moedas em uma data específica?';
	const valor_moeda_data = 151000000.12;
	const extenso1 = 'Cento e cinquenta e um milhões de reais e 12 centavos';

	const pergunta2 =
		'Qual é o valor em circulação somente das moedas em um intervalo de anos?';
	const valor_moeda_ano = 1203333223.05;
	const extenso2 =
		'Um bilhão, duzentos e três milhões e trezentos e trinta e três reais e cinco centavos';

	const pergunta3 =
		'Qual é o valor em circulação somente das cédulas em uma data específica?';
	const valor_cedula_data = 82151000000.12;
	const extenso3 =
		'Oitenta e dois bilhões e cento e cinquenta e um milhões de reais e 12 centavos';

	const pergunta4 =
		'Qual é o valor em circulação somente das cédulas em um intervalo de anos?';
	const valor_cedula_ano = 49203333223.05;
	const extenso4 =
		'Quarenta e nove bilhões e duzentos e três milhões e trezentos e trinta e três e duzentos e vinte e trrês reais e cinco centavos';

	return (
		<>
			<h2>Pagina de valores</h2>
			<div className="container valores">
				<div className="column valores">
					<Card_Valores
						pergunta={pergunta1}
						valor_moeda_data={valor_moeda_data}
						valor_extenso={extenso1}
					/>
					<Card_Valores
						pergunta={pergunta2}
						valor_moeda_data={valor_moeda_ano}
						valor_extenso={extenso2}
					/>
				</div>
				<div className="column valores">
					<Card_Valores
						pergunta={pergunta3}
						valor_moeda_data={valor_cedula_data}
						valor_extenso={extenso3}
					/>
					<Card_Valores
						pergunta={pergunta4}
						valor_moeda_data={valor_cedula_ano}
						valor_extenso={extenso4}
					/>
				</div>
			</div>
		</>
	);
}

export default Main;
