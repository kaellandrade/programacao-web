import {
    createBrowserRouter,
} from 'react-router-dom';
import PaginaTemporal from './pages/evolucaoTemporal';
import PaginaRoot from './pages/pageRoot';
import PaginaValores from './pages/valores';
import Pagina404 from './pages/page404';
import PaginaRaking from './pages/pageRanking';
import PaginaQuantidade from './pages/pageQuantidade';



const router = createBrowserRouter([
	{
	  path: '/',
	  element: 	< PaginaRoot/>,
	  errorElement: <Pagina404 />,
	  children:[

			{
			  path: 'valores',
			  element: <PaginaValores/>,
			},
			{
				path: 'evolucao',
				element: <PaginaTemporal/>,
			},
			{
				path: 'ranking',
				element: <PaginaRaking/>,
			},
			{
				path: 'quantidade',
				element: <PaginaQuantidade/>,
			}
	  ]
	},
  ]);

export default router;