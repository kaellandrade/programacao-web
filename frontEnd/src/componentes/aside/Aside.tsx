import './index.css';

function Aside() {
	return(
		<aside>
			<h3>Consultas</h3><hr/>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">timeline</span>
					Evolução temporal	
				</button>
			</a>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">format_list_numbered_rtl</span>
					Quantidade
				</button>
			</a>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">star_rate</span>
					Ranking
				</button>
			</a>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">paid</span>
					Valores
				</button>
			</a>
		</aside>
	); 
}

export default Aside;
