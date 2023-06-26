import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import PageRoot from './pages/pageRoot';
import Page404 from './pages/page404';
import PageQuantidade from './pages/pageQuantidade';
import PageRanking from './pages/pageRanking';
import PageValores from './pages/pageValores';
import PageEvoucaoTemporal from './pages/pageEvolucaoTemporal';

const router = createBrowserRouter([
	{
	  path: '/',
	  element: 	<PageRoot />,
	  errorElement: <Page404 />,
	  children:[
			{
			  path: 'valores',
			  element: <PageValores />,
			},
			{
				path: 'evolucao',
				element: <PageEvoucaoTemporal />,
			},
			{
				path: 'ranking',
				element: <PageRanking />,
			},
			{
				path: 'quantidade',
				element: <PageQuantidade />,
			}
	  ]
	}
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
