import React from 'react';
import './index.css';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Card_Evolucao from '../../componentes/card-evolucao/Card_Evolucao';


function Main() {
  
  const pergunta1 = 'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada denominação ao longo dos anos?';
  const pergunta2 = 'Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada categoria ao longo dos anos?';

  const data1 = [
    {
      'ano': 1994,
      'denominacao': 0.01,
      'quantidade_total': 47891372353
    },
    {
      'ano': 1994,
      'denominacao': 0.05,
      'quantidade_total': 34699395947
    },
    {
      'ano': 1994,
      'denominacao': 0.1,
      'quantidade_total': 31157703274
    },
    {
      'ano': 1994,
      'denominacao': 0.25,
      'quantidade_total': 4912530400
    },
    {
      'ano': 1994,
      'denominacao': 0.5,
      'quantidade_total': 19122563736
    },
    {
      'ano': 1994,
      'denominacao': 1,
      'quantidade_total': 27593642339
    },
    {
      'ano': 1994,
      'denominacao': 5,
      'quantidade_total': 14951615992
    },
    {
      'ano': 1994,
      'denominacao': 10,
      'quantidade_total': 19142152665
    },
    {
      'ano': 1994,
      'denominacao': 50,
      'quantidade_total': 2584760795
    },
    {
      'ano': 1994,
      'denominacao': 100,
      'quantidade_total': 303623949
    },
    {
      'ano': 1995,
      'denominacao': 0.01,
      'quantidade_total': 253444839027
    },
    {
      'ano': 1995,
      'denominacao': 0.05,
      'quantidade_total': 198918021850
    },
    {
      'ano': 1995,
      'denominacao': 0.1,
      'quantidade_total': 183996681025
    },
    {
      'ano': 1995,
      'denominacao': 0.25,
      'quantidade_total': 58803673429
    },
    {
      'ano': 1995,
      'denominacao': 0.5,
      'quantidade_total': 98022251082
    },
    {
      'ano': 1995,
      'denominacao': 1,
      'quantidade_total': 115343760860
    },
    {
      'ano': 1995,
      'denominacao': 5,
      'quantidade_total': 40060783196
    },
    {
      'ano': 1995,
      'denominacao': 10,
      'quantidade_total': 80203196513
    },
    {
      'ano': 1995,
      'denominacao': 50,
      'quantidade_total': 18079476643
    },
    {
      'ano': 1995,
      'denominacao': 100,
      'quantidade_total': 1541071720
    }
  ];

  const colunas1 = [
    {field: 'ano', header: 'Ano'},
    {field: 'denominacao', header: 'Denominação'},
    {field: 'quantidade_total', header: 'Quantidade total'}
  ];

  const data2 = [
    {
      'ano': 1994,
      'especie': 'Cédulas',
      'categoria': 'Cédulas - 1a. família',
      'quantidade_total': 53606226142
    },
    {
      'ano': 1994,
      'especie': 'Moedas',
      'categoria': 'Moedas - 1a. Família (inox)',
      'quantidade_total': 148753135308
    },
    {
      'ano': 1995,
      'especie': 'Cédulas',
      'categoria': 'Cédulas - 1a. família',
      'quantidade_total': 205662829391
    },
    {
      'ano': 1995,
      'especie': 'Moedas',
      'categoria': 'Moedas - 1a. Família (inox)',
      'quantidade_total': 842750925954
    },
    {
      'ano': 1996,
      'especie': 'Cédulas',
      'categoria': 'Cédulas - 1a. família',
      'quantidade_total': 244780471688
    },
    {
      'ano': 1996,
      'especie': 'Moedas',
      'categoria': 'Moedas - 1a. Família (inox)',
      'quantidade_total': 1016844391027
    },
    {
      'ano': 1997,
      'especie': 'Cédulas',
      'categoria': 'Cédulas - 1a. família',
      'quantidade_total': 292023409857
    },
    {
      'ano': 1997,
      'especie': 'Moedas',
      'categoria': 'Moedas - 1a. Família (inox)',
      'quantidade_total': 1187671163922
    },
    {
      'ano': 1998,
      'especie': 'Cédulas',
      'categoria': 'Cédulas - 1a. família',
      'quantidade_total': 318542674333
    },
    {
      'ano': 1998,
      'especie': 'Moedas',
      'categoria': 'Moedas - 1a. Família (inox)',
      'quantidade_total': 1324775734744
    },
    {
      'ano': 1998,
      'especie': 'Moedas',
      'categoria': 'Moedas - 2a. Família',
      'quantidade_total': 20213565218
    },
    {
      'ano': 1999,
      'especie': 'Cédulas',
      'categoria': 'Cédulas - 1a. família',
      'quantidade_total': 355958880408
    },
    {
      'ano': 1999,
      'especie': 'Moedas',
      'categoria': 'Moedas - 1a. Família (inox)',
      'quantidade_total': 1413274662356
    }
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
          <Card_Evolucao pergunta={pergunta1} data={data1} colunas={colunas1} />
        </div>
        <div className="column valores">
          <Card_Evolucao pergunta={pergunta2} data={data2} colunas={colunas2} />
        </div>
      </div>
    </>
  );
}

export default Main;