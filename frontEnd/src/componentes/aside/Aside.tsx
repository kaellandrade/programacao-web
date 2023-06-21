import React from 'react';
import './index.css';
import { TieredMenu } from 'primereact/tieredmenu';

function Aside() {
	const items = [
		{
			label: 'Cédulas e Moedas',
			icon: <span className="material-symbols-outlined">paid</span>,
		},
    {
			label: 'Somente cédulas',
			icon: <span className="material-symbols-outlined">payments</span>,
		},
    {
			label: 'Somente moedas',
			icon: <span className="material-symbols-outlined">savings</span>,
		},
    {
			label: 'Evolução temporal',
			icon: <span className="material-symbols-outlined">timeline</span>,
		},
	];

	return <TieredMenu model={items} />;
}

export default Aside;
