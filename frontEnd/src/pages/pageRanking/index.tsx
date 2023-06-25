import './index.css';
import CardRanking from '../../componentes/card-ranking/Card_Ranking';

function Main() {
	const pergunta1 =
		'Quais as denominações e suas respectivas quantidades em circulação em um intervalo de anos?';
	const pergunta2 =
		'Quais as categorias e suas respectivas quantidades em circulação em um intervalo de anos?';

	const data1 = [
		{
			denominacao: 0.1,
			quantidade_total: 28916972133401
		},
		{
			denominacao: 0.05,
			quantidade_total: 27142646978561
		},
		{
			denominacao: 0.01,
			quantidade_total: 20118032036763
		},
		{
			denominacao: 1,
			quantidade_total: 14201155708764
		},
		{
			denominacao: 0.25,
			quantidade_total: 12128794765428
		},
		{
			denominacao: 0.5,
			quantidade_total: 11589477459521
		},
		{
			denominacao: 50,
			quantidade_total: 8492749990855
		},
		{
			denominacao: 2,
			quantidade_total: 4602622133933
		},
		{
			denominacao: 10,
			quantidade_total: 4244698655940
		},
		{
			denominacao: 100,
			quantidade_total: 3417572377728
		},
		{
			denominacao: 20,
			quantidade_total: 2858375103060
		},
		{
			denominacao: 5,
			quantidade_total: 2660336819944
		},
		{
			denominacao: 200,
			quantidade_total: 60027249670
		}
	];

	const colunas1 = [
		{ field: 'denominacao', header: 'Denominação' },
		{ field: 'quantidade_total', header: 'Quantidade total' }
	];

	const data2 = [
		{
			categoria: 'Moedas - 2a. Família',
			quantidade_total: 71463658767569
		},
		{
			categoria: 'Moedas - 1a. Família (inox)',
			quantidade_total: 39386484315886
		},
		{
			categoria: 'Cédulas - 1a. família',
			quantidade_total: 14478129826266
		},
		{
			categoria: 'Cédulas - 2a. família',
			quantidade_total: 14017475997514
		},
		{
			categoria: 'Cédulas - em polímero',
			quantidade_total: 241525193894
		},
		{
			categoria: 'Moedas - 2a. Família - (A)',
			quantidade_total: 119520606200
		},
		{
			categoria: 'Moedas - 2a. Família - BC 50 anos',
			quantidade_total: 92802362101
		},
		{
			categoria: 'Moedas - 2a. Família - Natação',
			quantidade_total: 41260188545
		},
		{
			categoria: 'Moedas - 2a. Família - Atletismo',
			quantidade_total: 41246635409
		},
		{
			categoria: 'Moedas - 2a. Família - Paratriatlo',
			quantidade_total: 41197762245
		},
		{
			categoria: 'Moedas - 2a. Família - Golfe',
			quantidade_total: 41195927054
		},
		{
			categoria: 'Moedas - 2a. Família - Vela',
			quantidade_total: 38330469410
		},
		{
			categoria: 'Moedas - 2a. Família - Rugbi',
			quantidade_total: 38290199824
		},
		{
			categoria: 'Moedas - 2a. Família - Paracanoagem',
			quantidade_total: 38114698552
		},
		{
			categoria: 'Moedas - 2a. Família - Basquete',
			quantidade_total: 38067414124
		},
		{
			categoria: 'Moedas - 2a. Família - Futebol',
			quantidade_total: 37463026587
		},
		{
			categoria: 'Moedas - 2a. Família - Atletismo Paralímpico',
			quantidade_total: 37348767484
		},
		{
			categoria: 'Moedas - 2a. Família - Judô',
			quantidade_total: 37293382610
		},
		{
			categoria: 'Moedas - 2a. Família - Voleibol',
			quantidade_total: 37258145697
		},
		{
			categoria: 'Moedas - 2a. Família - Natação Paralímpica',
			quantidade_total: 34810718958
		},
		{
			categoria: 'Moedas - 2a. Família - Boxe',
			quantidade_total: 34777306290
		},
		{
			categoria: 'Moedas - 2a. Família - Mascote Paralímpica',
			quantidade_total: 34750482330
		},
		{
			categoria: 'Moedas - 2a. Família - Mascote Olímpica',
			quantidade_total: 34734531670
		},
		{
			categoria: 'Moedas - 2a. Família - REAL 25 anos',
			quantidade_total: 22416896915
		},
		{
			categoria: 'Moedas - 2a. Família - Bandeira Olímpica',
			quantidade_total: 5307790434
		}
	];

	const colunas2 = [
		{ field: 'categoria', header: 'Categoria' },
		{ field: 'quantidade_total', header: 'Quantidade total' }
	];

	return (
		<>
			<h2>Pagina de Ranking</h2>
			<div className="container valores">
				<div className="column valores">
					<CardRanking pergunta={pergunta1} data={data1} colunas={colunas1} />
				</div>
				<div className="column valores">
					<CardRanking pergunta={pergunta2} data={data2} colunas={colunas2} />
				</div>
			</div>
		</>
	);
}

export default Main;
