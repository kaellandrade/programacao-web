import Card_Evolucao from '../../componentes/card-evolucao/Card_Evolucao';

function Main() {
	const pergunta1 =
		'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada denominação ao longo dos anos?';
	const pergunta2 =
		'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada categoria ao longo dos anos?';

	return (
		<>
			<h2>Pagina de Evolução Temporal</h2>
			<div className="container valores">
				<div className="column valores">
					<Card_Evolucao pergunta={pergunta1} />
				</div>
				<div className="column valores">
					<Card_Evolucao pergunta={pergunta2} />
				</div>
			</div>
		</>
	);
}

export default Main;
