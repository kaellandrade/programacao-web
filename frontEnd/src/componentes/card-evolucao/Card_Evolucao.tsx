import React, { useState, useEffect, useRef } from 'react';
import "./index.css"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Card_Valores(props: {pergunta: string, data: any, colunas: any}) {

  const [dados, setDados] = useState([]);
  const dt = useRef<HTMLTableElement>(null);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  

  var dataFormatada = props.data.map( (item: any) => {
    var quantidadeFormatada = item.quantidade_total.toLocaleString();
    return { ...item, quantidade_total: quantidadeFormatada };
  });

  
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
      <DataTable ref={dt} size="small" value={dados} scrollable scrollHeight="100%" sortMode="multiple" tableStyle={{ minWidth: '20rem' }}>
          {props.colunas.map((col: any) => (
              <Column key={col.field} field={col.field} header={col.header} sortable style={{ width: '10%' }} />
          ))}
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