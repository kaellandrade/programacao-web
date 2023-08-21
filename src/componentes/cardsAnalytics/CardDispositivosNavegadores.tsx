import CardDispositivos from './CardDispositivos';
import CardNavegadores from './CardNavegadores';
import './index.css';

function CardDispositivosNavegadores(props: { browsers: [], dispositivos: [] }) {

	return (
		<div className="content page-analytics browser-dispositivos ">
			<CardDispositivos dados={props.dispositivos} />
            <CardNavegadores dados={props.browsers} />
		</div>
	);
}

export default CardDispositivosNavegadores;
