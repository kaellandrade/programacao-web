import './index.css';
import { Link } from 'react-router-dom';

function Aside() {
	return (
		<aside>
			<h3>Consultas</h3>
			<hr />
			<Link to={'evolucao'}>
				<button>
					<span className="material-symbols-outlined">timeline</span>
					Evolução temporal
				</button>
			</Link>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">
						format_list_numbered_rtl
					</span>
					Quantidade
				</button>
			</a>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">star_rate</span>
					Ranking
				</button>
			</a>
			<Link to={'valores'}>
				<button>
					<span className="material-symbols-outlined">paid</span>
					Valores
				</button>
			</Link>
		</aside>
	);
}

export default Aside;
