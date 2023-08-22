import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import { getCoodernadas } from '../../api/data.ts';

interface DadoSimulacaoItem {
  cidade: string;
  estado: string;
  quantidade_usuarios: string;
  latitude: number;
  longitude: number;
}

function CardLocalizacao(props: { dados: DadoSimulacaoItem[] }){
  
  const [dados, setDados] = useState<DadoSimulacaoItem[]>([]);
  
  const mapearCidades = async () => {
    
    const promises = props.dados.map(async item => {
      let response;
      if (item.cidade === 'Não especificada'){
        response = await getCoodernadas('state', item.estado.replace('State of ', ''));
      }
      else{
        response = await getCoodernadas('city', item.cidade);
      }
      item.latitude = response.latitude;
      item.longitude = response.longitude;
    });

    await Promise.all(promises);
    console.log(props.dados);
    setDados(props.dados);
  };

  useEffect(() => {
    mapearCidades();
  }, []); 

  return (
    <div className="content page-analytics">
      <h4>Localização - Mapa</h4>
      <MapContainer style={{ height: '24rem', width: '100%' }} center={[-10.9095, -37.0748]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      {dados.map((regiao, index) => ( 
        <Circle key={index} center={[regiao.latitude, regiao.longitude]} radius={10000} weight={10} > 
          <Popup>
          {regiao.quantidade_usuarios != '1' ? (
            <p>{regiao.quantidade_usuarios} usuários</p>
          ) : (
            <p>{regiao.quantidade_usuarios} usuário</p>
          )}
          </Popup>
        </Circle>  
      ))}
    </MapContainer>
    </div>
      
  );
}

export default CardLocalizacao;