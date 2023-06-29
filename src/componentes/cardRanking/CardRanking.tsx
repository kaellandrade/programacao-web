import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { getQuantidadeDenominacoesIntervaloAnos, getQuantidadeCategoriasIntervaloAnos } from '../../api/data.ts';

        

function Card_Ranking(props: {pergunta: string, colunas: any, isDenominacao: boolean}) {

  const [dados, setDados] = useState([]);
  const dt = useRef<HTMLTableElement>(null);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [selectedYearStart, setSelectedYearStart] = useState<{ year: number }>({ year: 0 });
  const [selectedYearEnd, setSelectedYearEnd] = useState<{ year: number }>({ year: 1994 });
  const [yearsStart, setYearsStart] = useState<Array<{ year: number }>>([]);
  const [yearsEnd, setYearsEnd] = useState<Array<{ year: number }>>([]);

  const gerarAnosInicio = () => {
    const yearStart = [];
    for (let i = 1994; i <= 2023; i++) {
      yearStart.push({ year: i });
    }
    setYearsStart(yearStart);
  };

  const gerarAnosFim = () => {
    const yearStart = selectedYearStart.year === 0 ? 1994 : selectedYearStart.year;
    const yearsEnd = [];
    for (let i = yearStart; i <= 2023; i++) {
      yearsEnd.push({ year: i });
    }
    setYearsEnd(yearsEnd);
  };
 
  
  // const dataFormatada = dados.map( (item: any) => {
  //   const quantidadeFormatada = item.quantidade_total.toLocaleString();
  //   if (item.hasOwnProperty('denominacao')){
  //     const denominacaoFormartada = item.denominacao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  //     return { ...item, denominacao: denominacaoFormartada, quantidade_total: quantidadeFormatada };
  //   }
  //   return { ...item, quantidade_total: quantidadeFormatada };
  // });


  
  const exportCSV = (selectionOnly: boolean) => {
    if (dt.current !== null) {
      dt.current.exportCSV({ selectionOnly });
    }
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


  const getDados = async (isDenominacao: boolean) => {
    let dados;
    if (isDenominacao)
      dados = await getQuantidadeDenominacoesIntervaloAnos(selectedYearStart, selectedYearEnd);
    else
      dados = await getQuantidadeCategoriasIntervaloAnos(selectedYearStart, selectedYearEnd);

    console.log(dados);


    if (dados != null)
      setDados(dados);
    else{
      setDados([]);
    }
  };

  const handleSubmit = async (event: any) => {  
    event.preventDefault();
    getDados(props.isDenominacao);
  };

  useEffect(() => {
    // setDados(dataFormatada);
    gerarAnosInicio();
    gerarAnosFim();
  }, []);

  useEffect(() => {
    // setDados(dataFormatada);
    gerarAnosInicio();
    gerarAnosFim();
  }, [dados]);

  useEffect(() => {
    setSelectedYearEnd({});
    gerarAnosFim();
  }, [selectedYearStart]);

  return (
    <div className="content ranking">
      <h4>{props.pergunta}</h4>
      <form className="form date" onSubmit={handleSubmit}>
        <div>
          <Dropdown value={selectedYearStart} onChange={(e) => setSelectedYearStart(e.value)} options={yearsStart} optionLabel="year" 
            placeholder="Ano início" className="dropdown years" required />
          <Dropdown value={selectedYearEnd} onChange={(e) => setSelectedYearEnd(e.value)} options={yearsEnd} optionLabel="year" 
            placeholder="Ano fim" className="dropdown years" required />
        </div>
        <input type="submit" value="Aplicar"></input>
      </form>
      <DataTable ref={dt} size="small" value={dados} scrollable scrollHeight="100%" sortMode="multiple" tableStyle={{ minWidth: '20rem' }}>
          {props.colunas.map((col: any) => (
              <Column key={col.field} field={col.field} header={col.header} align="center" sortable style={{ width: '10%' }} />
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

export default Card_Ranking;