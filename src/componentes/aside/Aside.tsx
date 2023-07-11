import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Aside(props: { id: string, asideSetNotVisible: (isVisible: boolean) => void }) {
	return (
		<aside id={props.id}>
			<h3>Consultas</h3>
			<hr/>
			<NavLink to={'evolucao'} onClick={() => props.asideSetNotVisible(false)} >
				<span className="material-symbols-outlined">timeline</span>
				Evolução temporal
			</NavLink>
			<NavLink to={'quantidade'} onClick={() => props.asideSetNotVisible(false)} >
				<span className="material-symbols-outlined">
					format_list_numbered_rtl
				</span>
				Quantidade
			</NavLink>
			<NavLink to={'ranking'} onClick={() => props.asideSetNotVisible(false)} >
				<span className="material-symbols-outlined">star_rate</span>
				Ranking
			</NavLink>
			<NavLink to={'valores'} onClick={() => props.asideSetNotVisible(false)} >
				<span className="material-symbols-outlined">paid</span>
				Valores
			</NavLink>
		</aside>
	);
}

export default Aside;
