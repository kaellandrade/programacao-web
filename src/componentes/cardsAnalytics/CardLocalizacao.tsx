import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Marker, Circle } from 'react-leaflet';

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
  }, []);

  return (
    <div className="content">
      <h4>Localização</h4>
      <MapContainer style={{ height: '100vh', width: '100wh' }} center={[-10.9095, -37.0748]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[-10.9095, -37.0748]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <Circle
        center={[-10.9095, -37.0748]}
        
        radius={10000}
      />
    </MapContainer>
    </div>
      
  );
}

export default CardLocalizacao;