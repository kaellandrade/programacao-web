import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import ReactGA from 'react-ga4';
import { AuthProvider } from './context/auth';
import RotasAplicacao from './router/router';
ReactGA.initialize('G-HRSML86GPK');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<RotasAplicacao />
		</AuthProvider>
	</React.StrictMode>
);

const SendAnalytics = () => {
	ReactGA.send({
		hitType: 'pageview',
		page: window.location.pathname
	});
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
