import './index.css';
import CardAnalyticsLocalizacao from '../../componentes/cardsAnalytics/CardLocalizacaoMap';
import CardLocalizacaoInfo from '../../componentes/cardsAnalytics/CardLocalizacaoInfo';
import CardDispositivosNavegadores from '../../componentes/cardsAnalytics/CardDispositivosNavegadores';
import CardSistemasOperacionais from '../../componentes/cardsAnalytics/CardSistemasOperacionais';
import CardNavegadores from '../../componentes/cardsAnalytics/CardNavegadores';

function Main() {

  return (
    <>
      <h2>Dados dos usuários fornecidos pelo Google Analytics</h2>
      <div className="container valores">
        <div className="column valores page-analytics">
            <CardAnalyticsLocalizacao />
            <CardLocalizacaoInfo />
        </div>
        <div className="column valores page-analytics">
            <CardSistemasOperacionais />
            <CardDispositivosNavegadores />
        </div>
        
      </div>
    </>
  );
}

export default Main;