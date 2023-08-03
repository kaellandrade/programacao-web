import Card_Valores from '../../componentes/cardValores/CardValores';

function Main() {

  const pergunta1 = 'Qual é o valor em circulação somente das moedas em uma data específica?';
  const pergunta2 = 'Qual é o valor em circulação somente das moedas em um intervalo de anos?';
  const pergunta3 = 'Qual é o valor em circulação somente das cédulas em uma data específica?';
  const pergunta4 = 'Qual é o valor em circulação somente das cédulas em um intervalo de anos?';

  const calendarioId1 = 'calendario-input-1';
  const calendarioId2 = 'calendario-input-2';
  const calendarioId3 = 'calendario-input-3';
  const calendarioId4 = 'calendario-input-4';

  return (
    <>
      <h2>Pagina de valores</h2>
      <div className="container valores">
        <div className="column valores">
          <Card_Valores pergunta={pergunta1} isMoeda={true} possuiIntervalo={false} calendarioId={calendarioId1} />
          <Card_Valores pergunta={pergunta2} isMoeda={true} possuiIntervalo={true} calendarioId={calendarioId2} />
        </div>
        <div className="column valores">
          <Card_Valores pergunta={pergunta3} isMoeda={false} possuiIntervalo={false} calendarioId={calendarioId3} />
          <Card_Valores pergunta={pergunta4} isMoeda={false} possuiIntervalo={true} calendarioId={calendarioId4} />
        </div>
      </div>
    </>
  );
}

export default Main;