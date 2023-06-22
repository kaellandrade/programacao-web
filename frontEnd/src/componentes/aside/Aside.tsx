import React from 'react';
import './index.css';
import { TieredMenu } from 'primereact/tieredmenu';

function Aside() {
	return(
		<aside>
			<h3>Consultas</h3><hr/>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">paid</span>
					Cédulas e moedas	
				</button>
			</a>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">payments</span>
					Somente cédulas
				</button>
			</a>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">savings</span>
					Somente moedas
				</button>
			</a>
			<a href="#">
				<button>
					<span className="material-symbols-outlined">timeline</span>
					Evolução temporal
				</button>
			</a>
		</aside>
	); 
}

export default Aside;
