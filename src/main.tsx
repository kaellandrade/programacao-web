import React from 'react';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageRoot from './pages/pageRoot';
import Page404 from './pages/page404';
import PageQuantidade from './pages/pageQuantidade';
import PageRanking from './pages/pageRanking';
import PageValores from './pages/pageValores';
import PageEvoucaoTemporal from './pages/pageEvolucaoTemporal';
import reportWebVitals from './reportWebVitals';

import ReactGA from 'react-ga4';

ReactGA.initialize('G-HRSML86GPK');

const router = createBrowserRouter([
	{
		path: '/',
		element: <PageRoot />,
		errorElement: <Page404 />,
		children: [
			{
				path: 'valores',
				element: <PageValores />
			},
			{
				path: 'evolucao',
				element: <PageEvoucaoTemporal />
			},
			{
				path: 'ranking',
				element: <PageRanking />
			},
			{
				path: 'quantidade',
				element: <PageQuantidade />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
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
