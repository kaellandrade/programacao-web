import React from 'react';
import './index.css';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Card_Quantidade from '../../componentes/cardQuantidade/CardQuantidade';

function Main() {

  const pergunta1 = 'Qual a quantidade de cédulas e moedas circuladas em cada mês de cada ano?';

  const data1 = [
    {
      'ano': 1994,
      'mes': 10,
      'quantidade_total': 59373124156
    },
    {
      'ano': 1994,
      'mes': 11,
      'quantidade_total': 63679634183
    },
    {
      'ano': 1994,
      'mes': 12,
      'quantidade_total': 79306603111
    },
    {
      'ano': 1995,
      'mes': 1,
      'quantidade_total': 80327424630
    },
    {
      'ano': 1995,
      'mes': 2,
      'quantidade_total': 72321191366
    },
    {
      'ano': 1995,
      'mes': 3,
      'quantidade_total': 93419288367
    },
    {
      'ano': 1995,
      'mes': 4,
      'quantidade_total': 69686457700
    },
    {
      'ano': 1995,
      'mes': 5,
      'quantidade_total': 90845748714
    },
    {
      'ano': 1995,
      'mes': 6,
      'quantidade_total': 88594210797
    },
    {
      'ano': 1995,
      'mes': 7,
      'quantidade_total': 89727656701
    },
    {
      'ano': 1995,
      'mes': 8,
      'quantidade_total': 99024631567
    },
    {
      'ano': 1995,
      'mes': 9,
      'quantidade_total': 87138462495
    },
    {
      'ano': 1995,
      'mes': 10,
      'quantidade_total': 92666611996
    },
    {
      'ano': 1995,
      'mes': 11,
      'quantidade_total': 89860049514
    }
  ];

  const colunas1 = [
    {field: 'ano', header: 'Ano'},
    {field: 'mes', header: 'Mês'},
    {field: 'quantidade_total', header: 'Quantidade total'}
  ];
  
  const pergunta2 = 'Qual a diferença percentual da quantidade de cada denominação ao longo dos anos? (sempre referente ao ano anterior)';

  const data2 = [
    {
      'ano': 1994,
      'denominacao': 0.01,
      'quantidade_total': 47891372353,
      'diferenca_percentual': 'NULL'
    },
    {
      'ano': 1995,
      'denominacao': 0.01,
      'quantidade_total': 253444839027,
      'diferenca_percentual': 429.21
    },
    {
      'ano': 1996,
      'denominacao': 0.01,
      'quantidade_total': 311556138325,
      'diferenca_percentual': 22.93
    },
    {
      'ano': 1997,
      'denominacao': 0.01,
      'quantidade_total': 387887962184,
      'diferenca_percentual': 24.5
    },
    {
      'ano': 1998,
      'denominacao': 0.01,
      'quantidade_total': 468775983781,
      'diferenca_percentual': 20.85
    },
    {
      'ano': 1999,
      'denominacao': 0.01,
      'quantidade_total': 543867182137,
      'diferenca_percentual': 16.02
    },
    {
      'ano': 2000,
      'denominacao': 0.01,
      'quantidade_total': 580752383378,
      'diferenca_percentual': 6.78
    },
    {
      'ano': 2001,
      'denominacao': 0.01,
      'quantidade_total': 609657621338,
      'diferenca_percentual': 4.98
    },
    {
      'ano': 2002,
      'denominacao': 0.01,
      'quantidade_total': 673654311318,
      'diferenca_percentual': 10.5
    },
    {
      'ano': 2017,
      'denominacao': 0.01,
      'quantidade_total': 794584795650,
      'diferenca_percentual': -0.79
    },
    {
      'ano': 2018,
      'denominacao': 0.01,
      'quantidade_total': 797796006600,
      'diferenca_percentual': 0.4
    },
    {
      'ano': 2019,
      'denominacao': 0.01,
      'quantidade_total': 807369114354,
      'diferenca_percentual': 1.2
    },
    {
      'ano': 2020,
      'denominacao': 0.01,
      'quantidade_total': 800986070334,
      'diferenca_percentual': -0.79
    },
    {
      'ano': 2021,
      'denominacao': 0.01,
      'quantidade_total': 800982721118,
      'diferenca_percentual': 0
    },
    {
      'ano': 2022,
      'denominacao': 0.01,
      'quantidade_total': 800963284121,
      'diferenca_percentual': 0
    },
    {
      'ano': 2023,
      'denominacao': 0.01,
      'quantidade_total': 344630049752,
      'diferenca_percentual': -56.97
    },
    {
      'ano': 1994,
      'denominacao': 0.05,
      'quantidade_total': 34699395947,
      'diferenca_percentual': 'NULL'
    },
    {
      'ano': 1995,
      'denominacao': 0.05,
      'quantidade_total': 198918021850,
      'diferenca_percentual': 473.26
    },
    {
      'ano': 1996,
      'denominacao': 0.05,
      'quantidade_total': 238038465148,
      'diferenca_percentual': 19.67
    },
    {
      'ano': 1997,
      'denominacao': 0.05,
      'quantidade_total': 273491025501,
      'diferenca_percentual': 14.89
    },
    {
      'ano': 1998,
      'denominacao': 0.05,
      'quantidade_total': 301367571859,
      'diferenca_percentual': 10.19
    }
  ];

  const colunas2 = [
    {field: 'ano', header: 'Ano'},
    {field: 'denominacao', header: 'Denominação'},
    {field: 'quantidade_total', header: 'Quantidade total'},
    {field: 'diferenca_percentual', header: 'Diferença percentual'},
  ];

  return (
    <>
      <h2>Pagina de valores</h2>
      <div className="container valores">
        <div className="column valores">
          <Card_Quantidade pergunta={pergunta1} data={data1} colunas={colunas1} />
        </div>
        <div className="column valores">
          <Card_Quantidade pergunta={pergunta2} data={data2} colunas={colunas2} />
        </div>
      </div>
    </>
  );
}

export default Main;