import './index.css';
import Card_Valores from '../../componentes/cardValores/CardValores';


function Main() {

  const pergunta1 = 'Qual é o valor em circulação somente das moedas em uma data específica?';
  const valor_moeda_data = 151000000.12;

  const pergunta2 = 'Qual é o valor em circulação somente das moedas em um intervalo de anos?';
  const valor_moeda_ano = 1203333223.05;

  const pergunta3 = 'Qual é o valor em circulação somente das cédulas em uma data específica?';
  const valor_cedula_data = 82151000000.12;
  
  const pergunta4 = 'Qual é o valor em circulação somente das cédulas em um intervalo de anos?';
  const valor_cedula_ano = 49203333223.05;

  return (
    <>
      <h2>Pagina de valores</h2>
      <div className="container valores">
        <div className="column valores">
          <Card_Valores pergunta={pergunta1} valor_moeda_data={valor_moeda_data} possuiIntervalo={false} />
          <Card_Valores pergunta={pergunta2} valor_moeda_data={valor_moeda_ano} possuiIntervalo={true} />
        </div>
        <div className="column valores">
          <Card_Valores pergunta={pergunta3} valor_moeda_data={valor_cedula_data} possuiIntervalo={false} />
          <Card_Valores pergunta={pergunta4} valor_moeda_data={valor_cedula_ano} possuiIntervalo={true} />
        </div>
      </div>
    </>
  );
}

export default Main;