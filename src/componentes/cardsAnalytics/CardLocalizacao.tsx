import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { getCoodernadasCidade } from '../../api/data.ts';

function CardLocalizacao() {

  const [dados, setDados] = useState([]);

  const dadoSimulacao = [
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

  const colunas = [
    {field: 'cidade', header: 'Cidade'},
    {field: 'estado', header: 'Estado'},
    {field: 'quantidade_usuarios', header: 'Quantidade de usuários'}
  ];

  useEffect(() => {
    setDados(dadoSimulacao);
    getCoodernadasCidade('aracaju');
  }, []);

  return (
    <div className="content">
      <h4>Localização</h4>
      <MapContainer style={{ height: '100%', width: '100%' }} center={[-10.9095, -37.0748]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={[-5.1904332, -37.3443872]}  //Mossoro
        radius={10000}
      />
      <Circle
        center={[-10.9095, -37.0748]}  //Aracaju
        radius={10000}
      />
    </MapContainer>
    </div>
      
  );
}

export default CardLocalizacao;