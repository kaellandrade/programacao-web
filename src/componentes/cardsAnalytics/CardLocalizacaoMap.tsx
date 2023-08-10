import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { getCoodernadas } from '../../api/data.ts';

function CardLocalizacao() {
  
  interface DadoSimulacaoItem {
    cidade: string;
    estado: string;
    quantidade_usuarios: string;
  }

  interface Coordenada {
    latitude: number;
    longitude: number;
  }
  
  const [dados, setDados] = useState<DadoSimulacaoItem[]>([]);
  const [coordenadas, setCoodernadas] = useState<Coordenada[]>([]);
  

  const dadoSimulacao: DadoSimulacaoItem[] = [
    {
        'cidade': 'Aracaju',
        'estado': 'State of Sergipe',
        'quantidade_usuarios': '22'
    },
    {
        'cidade': 'Mossoro',
        'estado': 'State of Rio Grande do Norte',
        'quantidade_usuarios': '1'
    },
		{
        'cidade': '(not set)',
        'estado': 'State of Minas Gerais',
        'quantidade_usuarios': '1'
    }
  ];

  const mapearCidades = async () => {
    const coordenadasAux: Coordenada[] = [];

    const promises = dados.map(async item => {
      if (item.cidade === '(not set)'){
        const response = await getCoodernadas('state', item.estado.replace('State of ', ''));
        coordenadasAux.push(response);
      }
      else{
        const response = await getCoodernadas('city', item.cidade);
        coordenadasAux.push(response);
      }
    });

    await Promise.all(promises);
    
    setCoodernadas(coordenadasAux);
  };

  useEffect(() => {
    mapearCidades();
  }, [dados]); 

  useEffect(() => {
    setDados(dadoSimulacao);
  }, []); 

  return (
    <div className="content page-analytics">
      <h4>Localização - Mapa</h4>
      <MapContainer style={{ height: '24rem', width: '30rem' }} center={[-10.9095, -37.0748]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      {coordenadas.map((coord, index) => ( 
        <Circle
          key={index}
          center={[coord.latitude, coord.longitude]}
          radius={10000}
          weight={10}
        /> 
      ))}
    </MapContainer>
    </div>
      
  );
}

export default CardLocalizacao;