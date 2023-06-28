import { useState, useEffect } from 'react';
import './index.css';
import { Dropdown } from 'primereact/dropdown';
import { getValorExtenso, getValorCirculacaoDataEspecifica, getValorCirculacaoIntervaloAnos } from '../../api/data.ts';
import Calendar from './Calendar.tsx';

function Card_Valores(props: { pergunta: string, isMoeda: boolean, possuiIntervalo: boolean, calendarioId: string }) {

  const [selectedYearStart, setSelectedYearStart] = useState<{ year: number }>({ year: -1 });
  const [selectedYearEnd, setSelectedYearEnd] = useState<{ year: number }>({ year: -1 });
  const [yearsStart, setYearsStart] = useState<Array<{ year: number }>>([]);
  const [yearsEnd, setYearsEnd] = useState<Array<{ year: number }>>([]);
  const [valor, setValor] = useState(0);
  const [valorExtenso, setValorExtenso] = useState('');
  const [dataSelected, setDataSelected] = useState(null);

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

  const converterData = (data: string) => {
    const dataSplit = data.split('/');
    const dataConvertida = `${dataSplit[2]}-${dataSplit[1]}-${dataSplit[0]}`;
    return dataConvertida;
  };

  const getValor = async (isMoeda: boolean, possuiIntervalo: boolean) => {
    let valor;
    console.log(dataSelected);
    if (isMoeda && !possuiIntervalo)
      valor = await getValorCirculacaoDataEspecifica(converterData(dataSelected), 'Moedas');
    else if (!isMoeda && !possuiIntervalo)
      valor = await getValorCirculacaoDataEspecifica(converterData(dataSelected), 'Cédulas');
    else if (isMoeda && possuiIntervalo)
      valor = await getValorCirculacaoIntervaloAnos(selectedYearStart, selectedYearEnd, 'Moedas');
    else if (!isMoeda && possuiIntervalo)
      valor = await getValorCirculacaoIntervaloAnos(selectedYearStart, selectedYearEnd, 'Cédulas');

    console.log(valor);

    if (valor != null)
      setValor(parseFloat(valor));
    else{
      setValor(0);
    }
  };

  const handleSubmit = async (event: any) => {  
    event.preventDefault();

    if (props.calendarioId == 'calendario-input-1' || props.calendarioId == 'calendario-input-3'){
      const  inputElementCalendar = document.querySelector('#' + props.calendarioId + ' .p-inputtext') as HTMLInputElement;
      const data = inputElementCalendar ? inputElementCalendar.value : '';
      if (data != null)
        setDataSelected(data);
    }
    else{
      getValor(props.isMoeda, props.possuiIntervalo);
    }
  };

  const setarValorExtenso = async (valor: number) => {
    const valorExtenso = await getValorExtenso(valor);
    setValorExtenso(valorExtenso);
  };

  useEffect(() => {
    gerarAnosInicio();
    gerarAnosFim();
  }, []);

  useEffect(() => {
    getValor(props.isMoeda, props.possuiIntervalo);
  }, [dataSelected]);

  useEffect(() => {
    setarValorExtenso(valor);
  }, [valor]);

  useEffect(() => {
    setSelectedYearEnd({});
    gerarAnosFim();
  }, [selectedYearStart]);

  return (
    <div className="content">
      <h4>{props.pergunta}</h4>
      <form className="form date" onSubmit={handleSubmit} >
        {
          props.possuiIntervalo ?
            <div>
              <Dropdown value={selectedYearStart} onChange={(e) => setSelectedYearStart(e.value)} options={yearsStart} optionLabel="year" 
              placeholder="Ano início" className="dropdown years" required />
              <Dropdown value={selectedYearEnd} onChange={(e) => setSelectedYearEnd(e.value)} options={yearsEnd} optionLabel="year" 
              placeholder="Ano fim" className="dropdown years" required />
            </div>
            :
            <Calendar calendarioId={props.calendarioId} />
        }
        <input type="submit" value="Aplicar"></input>
      </form>
      <span><strong>R$ {valor.toLocaleString('pt-BR')}</strong></span>
      <p>{valorExtenso}</p>
    </div>
  );
}

export default Card_Valores;