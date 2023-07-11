import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import { getQuantidadeCirculacaoMesAno, getDiferencaPercentualQuantidadeDenominacao } from '../../api/data.ts';


function Card_Quantidade(props: {pergunta: string, colunas: any, isPercentual: boolean}) {

  const [dados, setDados] = useState([]);
  const dt = useRef<HTMLTableElement>(null);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [dadosFormatados, setDadosFormatados] = useState([{}]);

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

  const formatarDados = dados.map( (item: any) => {
    const quantidadeFormatada = parseInt(item.quantidade_total).toLocaleString();
    if (item.hasOwnProperty('denominacaoAtual') && item.hasOwnProperty('diferencaPercentual')){
      const denominacaoFormartada = parseFloat(item.denominacaoAtual).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      let diferenca_percentualFormatada = 'NULL';
      if (item.diferencaPercentual != 'NULL')
        diferenca_percentualFormatada = (item.diferencaPercentual * 1).toFixed(2) + '%';
      return { ...item, denominacaoAtual: denominacaoFormartada, 
        quantidade_total: quantidadeFormatada, diferencaPercentual: diferenca_percentualFormatada};
    }
    return { ...item, quantidade_total: quantidadeFormatada };
  });

  const getDados = async (isPercentual: boolean) => {
    let dados;
    if (isPercentual)
      dados = await getDiferencaPercentualQuantidadeDenominacao();
    else
      dados = await getQuantidadeCirculacaoMesAno();

    if (dados != null)
      setDados(dados);
    else{
      setDados([]);
    }
  };

  useEffect(() => {
    setDadosFormatados(formatarDados);
  }, [dados]);

  useEffect(() => {
    getDados(props.isPercentual);
  }, []);

  return (
    <div className="content table-evolucao">
      <h4>{props.pergunta}</h4>
      <br />
      <DataTable ref={dt} size="small" value={dadosFormatados} scrollable scrollHeight="100%" sortMode="multiple" tableStyle={{ minWidth: '20rem' }} id='tableQuantidade' >
        {props.colunas.map((col: any) => (
            <Column key={col.field} field={col.field} header={col.header} align="center" sortable style={{ width: '10%' }} />
        ))}
      </DataTable>
      {dadosFormatados.length !== 0 ? 
        ''
       : 
        <ProgressSpinner strokeWidth="4" />
      }
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

export default Card_Quantidade;