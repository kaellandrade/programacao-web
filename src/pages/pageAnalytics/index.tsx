import './index.css';
import CardAnalyticsLocalizacao from '../../componentes/cardsAnalytics/CardLocalizacao';
import CardDispositivos from '../../componentes/cardsAnalytics/CardDispositivos';
import CardSistemasOperacionais from '../../componentes/cardsAnalytics/CardSistemasOperacionais';
import CardNavegadores from '../../componentes/cardsAnalytics/CardNavegadores';

function Main() {

  return (
    <>
      <h2>Dados dos usuários fornecidos pelo Google Analytics</h2>
      <div className="container valores">
        <div className="column valores">
            <CardAnalyticsLocalizacao />
            <CardDispositivos />
        </div>
        <div className="column valores">
            <CardSistemasOperacionais />
            <CardNavegadores />
        </div>


      </div>
    </>
  );
}

export default Main;