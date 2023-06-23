import React, { useState, useEffect, useRef } from 'react';
import "./index.css"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Card_Valores(props: {pergunta: string}) {

  const [dados, setDados] = useState([]);
  const dt = useRef(null);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  var data = [
    {
      "ano": 1994,
      "especie": "Cédulas",
      "categoria": "Cédulas - 1a. família",
      "quantidade_total": 53606226142
    },
    {
      "ano": 1994,
      "especie": "Moedas",
      "categoria": "Moedas - 1a. Família (inox)",
      "quantidade_total": 148753135308
    },
    {
      "ano": 1995,
      "especie": "Cédulas",
      "categoria": "Cédulas - 1a. família",
      "quantidade_total": 205662829391
    },
    {
      "ano": 1995,
      "especie": "Moedas",
      "categoria": "Moedas - 1a. Família (inox)",
      "quantidade_total": 842750925954
    },
    {
      "ano": 1996,
      "especie": "Cédulas",
      "categoria": "Cédulas - 1a. família",
      "quantidade_total": 244780471688
    },
    {
      "ano": 1996,
      "especie": "Moedas",
      "categoria": "Moedas - 1a. Família (inox)",
      "quantidade_total": 1016844391027
    },
    {
      "ano": 1997,
      "especie": "Cédulas",
      "categoria": "Cédulas - 1a. família",
      "quantidade_total": 292023409857
    },
    {
      "ano": 1997,
      "especie": "Moedas",
      "categoria": "Moedas - 1a. Família (inox)",
      "quantidade_total": 1187671163922
    },
    {
      "ano": 1998,
      "especie": "Cédulas",
      "categoria": "Cédulas - 1a. família",
      "quantidade_total": 318542674333
    },
    {
      "ano": 1998,
      "especie": "Moedas",
      "categoria": "Moedas - 1a. Família (inox)",
      "quantidade_total": 1324775734744
    },
    {
      "ano": 1998,
      "especie": "Moedas",
      "categoria": "Moedas - 2a. Família",
      "quantidade_total": 20213565218
    },
    {
      "ano": 1999,
      "especie": "Cédulas",
      "categoria": "Cédulas - 1a. família",
      "quantidade_total": 355958880408
    },
    {
      "ano": 1999,
      "especie": "Moedas",
      "categoria": "Moedas - 1a. Família (inox)",
      "quantidade_total": 1413274662356
    }];

  var dataFormatada = data.map(item => {
    var quantidadeFormatada = item.quantidade_total.toLocaleString();
    return { ...item, quantidade_total: quantidadeFormatada };
  });

  
  const colunas = [
      {field: 'ano', header: 'Ano'},
      {field: 'especie', header: 'Espécie'},
      {field: 'categoria', header: 'Categoria'},
      {field: 'Quantidade total', header: 'Quantidade total'}
  ];

  
  const exportCSV = (selectionOnly: boolean) => {
    dt.current.exportCSV({ selectionOnly });
    setShowAdditionalButtons(false);
  };

  const exportJSON = () => {
    const link = document.createElement('a');
    const jsonData = JSON.stringify(dados);
    link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonData);
    link.download = 'data.json';
    link.click();
    setShowAdditionalButtons(false);
  };

  const handleButtonClick = () => {
    setShowAdditionalButtons(!showAdditionalButtons);
  };


  useEffect(() => {
    setDados(dataFormatada);
  }, []);
  
  
  return (
    <div className="content table-evolucao">
      <h4>{props.pergunta}</h4>
      <br />
      <DataTable ref={dt} value={dados} size='small' scrollable scrollHeight="100%" sortMode="multiple" tableStyle={{ minWidth: '20rem' }}>
          <Column field="ano" header="Ano" sortable style={{ width: '10%' }}></Column>
          <Column field="especie" header="Espécie" sortable style={{ width: '10%' }}></Column>
          <Column field="categoria" header="Categoria" sortable style={{ width: '10%' }}></Column>
          <Column field="quantidade_total" header="Quantidade total" sortable style={{ width: '10%' }}></Column>
      </DataTable>
      <div className='buttons-export'>
        <button className='button export main' onClick={ () => handleButtonClick()}>
          Exportar 
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        {showAdditionalButtons && (
          <div className='buttons-option'>
            <button className='button export option' onClick={ () => exportCSV(false) }>
              CSV
              <span className="material-symbols-outlined">download</span>
            </button>
            <button className='button export option' onClick={ () => exportJSON() }>
              JSON
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        )}
        </div>

    </div>
  );
}

export default Card_Valores;