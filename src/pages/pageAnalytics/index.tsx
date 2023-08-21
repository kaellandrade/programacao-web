import { useState, useEffect } from 'react';
import './index.css';
import CardAnalyticsLocalizacao from '../../componentes/cardsAnalytics/CardLocalizacaoMap';
import CardLocalizacaoInfo from '../../componentes/cardsAnalytics/CardLocalizacaoInfo';
import CardDispositivosNavegadores from '../../componentes/cardsAnalytics/CardDispositivosNavegadores';
import CardSistemasOperacionais from '../../componentes/cardsAnalytics/CardSistemasOperacionais';
import { getDataAnalytics } from '../../api/data.ts';

function Main() {

  const [dadosLocalizacao, setDadosLocalizacao] = useState([]);
  const [dadosSO, setDadosSO] = useState([]);
  const [dadosBrowsers, setDadosBrowsers] = useState([]);
  const [dadosDispositivos, setDadosDispositivos] = useState([]);

  const getDados = async () => {
    const dados = await getDataAnalytics();
    setDadosLocalizacao(dados.data.regiao);
    setDadosBrowsers(dados.data.navegadores);
    setDadosSO(dados.data.so);
    setDadosDispositivos(dados.data.dispositivos);
  };

  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      <h2>Dados dos usuários fornecidos pelo Google Analytics</h2>
      <div className="container valores">
        <div className="column valores page-analytics">
          {dadosLocalizacao.length > 0 ? 
          <>
            <CardAnalyticsLocalizacao dados={dadosLocalizacao} />
            <CardLocalizacaoInfo dados={dadosLocalizacao} />
          </>
          :
          <></>
          }
        </div>
        <div className="column valores page-analytics">
          {dadosSO.length > 0 ?  
          <CardSistemasOperacionais dados={dadosSO} />    
          :
          <></>
          }
          {dadosBrowsers.length > 0 && dadosDispositivos.length > 0 ?    
          <CardDispositivosNavegadores browsers={dadosBrowsers} dispositivos={dadosDispositivos} />
          :
          <></>
          }
        </div>
        
      </div>
    </>
  );
}

export default Main;