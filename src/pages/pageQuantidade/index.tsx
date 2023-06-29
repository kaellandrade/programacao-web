import React from 'react';
import './index.css';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Card_Quantidade from '../../componentes/cardQuantidade/CardQuantidade';

function Main() {

  const pergunta1 = 'Qual a quantidade de cédulas e moedas circuladas em cada mês de cada ano?';

  const colunas1 = [
    {field: 'ano', header: 'Ano'},
    {field: 'mes', header: 'Mês'},
    {field: 'quantidade_total', header: 'Quantidade total'}
  ];
  
  const pergunta2 = 'Qual a diferença percentual da quantidade de cada denominação ao longo dos anos? (sempre referente ao ano anterior)';

  const colunas2 = [
    {field: 'anoAnterior', header: 'Ano Anterior'},
    {field: 'anoAtual', header: 'Ano Atual'},
    {field: 'denominacaoAtual', header: 'Denominacao'},
    {field: 'diferencaPercentual', header: 'Diferença percentual'},
  ];

  return (
    <>
      <h2>Pagina de Quantidade</h2>
      <div className="container valores">
        <div className="column valores">
          <Card_Quantidade pergunta={pergunta1} colunas={colunas1} isPercentual={false} />
        </div>
        <div className="column valores">
          <Card_Quantidade pergunta={pergunta2} colunas={colunas2} isPercentual={true} />
        </div>
      </div>
    </>
  );
}

export default Main;
