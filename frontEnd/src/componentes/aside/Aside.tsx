import { NavLink } from 'react-router-dom';
import './index.css';

function Aside() {
	return (
		<aside>
			<h3>Consultas</h3>
			<hr />
			<NavLink to={'evolucao'}>
				<span className="material-symbols-outlined">timeline</span>
				Evolução temporal
			</NavLink>
			<a href="#">
				<span className="material-symbols-outlined">
					format_list_numbered_rtl
				</span>
				Quantidade
			</a>
			<a href="#">
				<span className="material-symbols-outlined">star_rate</span>
				Ranking
			</a>
			<NavLink to={'valores'}>
				<span className="material-symbols-outlined">paid</span>
				Valores
			</NavLink>
		</aside>
	);
}

export default Aside;
