import CardEvolucao from '../../componentes/card-evolucao/CardEvolucao';
import {pergunta1, pergunta2, dataEvolucao2, colunasGenerica} from '../../api/data';
function Main() {
	
	return (
		<>
			<h2>Pagina de Evolução Temporal</h2>
			<div className="container valores">
				<div className="column valores">
					<CardEvolucao pergunta={pergunta1} data={dataEvolucao2} colunas={colunasGenerica}/>
				</div>
				<div className="column valores">
					<CardEvolucao pergunta={pergunta2} data={dataEvolucao2} colunas={colunasGenerica}/>
				</div>
			</div>
		</>
	);
}

export default Main;
