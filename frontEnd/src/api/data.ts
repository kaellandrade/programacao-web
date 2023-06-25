const pergunta1 =
	'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada denominação ao longo dos anos?';
const pergunta2 =
	'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada categoria ao longo dos anos?';
const dataEvolucao2 = [
	{
		ano: 1994,
		especie: 'Cédulas',
		categoria: 'Cédulas - 1a. família',
		quantidade_total: 53606226142
	},
	{
		ano: 1994,
		especie: 'Moedas',
		categoria: 'Moedas - 1a. Família (inox)',
		quantidade_total: 148753135308
	},
	{
		ano: 1995,
		especie: 'Cédulas',
		categoria: 'Cédulas - 1a. família',
		quantidade_total: 205662829391
	},
	{
		ano: 1995,
		especie: 'Moedas',
		categoria: 'Moedas - 1a. Família (inox)',
		quantidade_total: 842750925954
	},
	{
		ano: 1996,
		especie: 'Cédulas',
		categoria: 'Cédulas - 1a. família',
		quantidade_total: 244780471688
	},
	{
		ano: 1996,
		especie: 'Moedas',
		categoria: 'Moedas - 1a. Família (inox)',
		quantidade_total: 1016844391027
	},
	{
		ano: 1997,
		especie: 'Cédulas',
		categoria: 'Cédulas - 1a. família',
		quantidade_total: 292023409857
	},
	{
		ano: 1997,
		especie: 'Moedas',
		categoria: 'Moedas - 1a. Família (inox)',
		quantidade_total: 1187671163922
	},
	{
		ano: 1998,
		especie: 'Cédulas',
		categoria: 'Cédulas - 1a. família',
		quantidade_total: 318542674333
	},
	{
		ano: 1998,
		especie: 'Moedas',
		categoria: 'Moedas - 1a. Família (inox)',
		quantidade_total: 1324775734744
	},
	{
		ano: 1998,
		especie: 'Moedas',
		categoria: 'Moedas - 2a. Família',
		quantidade_total: 20213565218
	},
	{
		ano: 1999,
		especie: 'Cédulas',
		categoria: 'Cédulas - 1a. família',
		quantidade_total: 355958880408
	},
	{
		ano: 1999,
		especie: 'Moedas',
		categoria: 'Moedas - 1a. Família (inox)',
		quantidade_total: 1413274662356
	}
];
const colunasGenerica = [
	{field: 'ano', header: 'Ano'},
	{field: 'denominacao', header: 'Denominação'},
	{field: 'quantidade_total', header: 'Quantidade total'},
	{field: 'diferenca_percentual', header: 'Diferença percentual'},
  ];
export { dataEvolucao2, pergunta1, pergunta2, colunasGenerica };
