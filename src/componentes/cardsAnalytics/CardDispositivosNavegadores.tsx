import CardDispositivos from './CardDispositivos';
import CardNavegadores from './CardNavegadores';
import './index.css';

function CardDispositivosNavegadores() {

	return (
		<div className="content page-analytics browser-dispositivos ">
			<CardDispositivos />
            <CardNavegadores />
		</div>
	);
}

export default CardDispositivosNavegadores;
