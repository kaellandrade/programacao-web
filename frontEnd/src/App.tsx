import reactLogo from './assets/react.svg';

import { InputSwitch } from 'primereact/inputswitch';

import './App.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	const [checked, setChecked] = useState(true);

	return (
		<>
			<div className="App">
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src="/vite.svg" className="logo" alt="Vite logo" />
					</a>
					<a href="https://reactjs.org" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + PrimeReact</h1>
				<div>
					<h2>PrimeReact Typescript Issue Template</h2>
					<p>
						Please create a test case and attach the link to the to your github
						issue report.
					</p>
				</div>
				<div className="card">
					<Button
						icon="pi pi-plus"
						className="mr-2"
						label="Increment"
						onClick={() => setCount((count) => count + 1)}
					></Button>
					<InputSwitch
						checked={checked}
						onChange={(e) => setChecked(e.value)}
					/>
					<p>
						Edit <code>src/App.tsx</code> and save to test PrimeReact
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</div>
			<div>
				<InputText value={String(count)} />
			</div>
		</>
	);
}

export default App;
