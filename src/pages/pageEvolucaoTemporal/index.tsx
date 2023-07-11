import CardEvolucao from '../../componentes/cardEvolucao/CardEvolucao';


function Main() {
  
  const pergunta1 = 'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada denominação ao longo dos anos?';
  const pergunta2 = 'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada categoria ao longo dos anos?';

  const colunas1 = [
    {field: 'ano', header: 'Ano'},
    {field: 'denominacao', header: 'Denominação'},
    {field: 'quantidade_total', header: 'Quantidade total'}
  ];

  const colunas2 = [
    {field: 'ano', header: 'Ano'},
    {field: 'especie', header: 'Espécie'},
    {field: 'categoria', header: 'Categoria'},
    {field: 'quantidade_total', header: 'Quantidade total'}
  ];

  return (
    <>
      <h2>Pagina de Evolução Temporal</h2>
      <div className="container valores">
        <div className="column valores">
          <CardEvolucao pergunta={pergunta1} colunas={colunas1} isDenominacao={true} />
        </div>
        <div className="column valores">
          <CardEvolucao pergunta={pergunta2} colunas={colunas2} isDenominacao={false} />
        </div>
      </div>
    </>
  );
}

export default Main;