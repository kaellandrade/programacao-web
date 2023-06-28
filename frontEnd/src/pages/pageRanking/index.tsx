import { useEffect } from 'react';
import './index.css';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Card_Ranking from '../../componentes/cardRanking/CardRanking';
import { getValorExtenso, getValorCirculacaoDataEspecifica, getValorCirculacaoIntervaloAnos } from '../../api/data.ts';


function Main() {

  const pergunta1 = 'Quais as denominações e suas respectivas quantidades em circulação em um intervalo de anos?';
  const pergunta2 = 'Quais as categorias e suas respectivas quantidades em circulação em um intervalo de anos?';

  const colunas1 = [
    {field: 'denominacao', header: 'Denominação'},
    {field: 'quantidade_total', header: 'Quantidade total'}
  ];

  const colunas2 = [
    {field: 'categoria', header: 'Categoria'},
    {field: 'quantidade_total', header: 'Quantidade total'}
  ];



  return (
    <>
      <h2>Pagina de Ranking</h2>
      <div className="container valores">
        <div className="column valores">
          <Card_Ranking pergunta={pergunta1} colunas={colunas1} isDenominacao={true} />
        </div>
        <div className="column valores">
          <Card_Ranking pergunta={pergunta2} colunas={colunas2} isDenominacao={false} />
        </div>
      </div>
    </>
  );
}

export default Main;
