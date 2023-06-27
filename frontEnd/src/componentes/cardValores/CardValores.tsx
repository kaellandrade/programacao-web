import { useState, useEffect } from 'react';
import './index.css';
import { Dropdown } from 'primereact/dropdown';


function Card_Valores(props: { valor_moeda_data: number, valor_extenso: string, pergunta: string, possuiIntervalo: boolean }) {

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

  useEffect(() => {
    gerarAnosInicio();
    gerarAnosFim();
  }, []);

  useEffect(() => {
    setSelectedYearEnd({});
    gerarAnosFim();
  }, [selectedYearStart]);

  return (
    <div className="content">
      <h4>{props.pergunta}</h4>
      <form action="" className="form date">
        {
          props.possuiIntervalo ?
            <div>
              <Dropdown value={selectedYearStart} onChange={(e) => setSelectedYearStart(e.value)} options={yearsStart} optionLabel="year" 
              placeholder="Ano início" className="dropdown years" required />
              <Dropdown value={selectedYearEnd} onChange={(e) => setSelectedYearEnd(e.value)} options={yearsEnd} optionLabel="year" 
              placeholder="Ano fim" className="dropdown years" required />
            </div>
            :
            <div>
              <label htmlFor="date">Selecione uma data:</label>
              <input type="date" id="date"></input>
            </div>
        }
        <input type="submit" value="Aplicar"></input>
      </form>
      <span><strong>R$ {props.valor_moeda_data.toLocaleString('pt-BR')}</strong></span>
      <p>{props.valor_extenso}</p>
    </div>
  );
}

export default Card_Valores;