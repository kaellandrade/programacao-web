import {
    createBrowserRouter,
} from 'react-router-dom';
import EvolucaoTemporal from './pages/evolucaoTemporal';
import Root from './pages/pageRoot';

import Valores from './pages/valores';

import Pagina404 from './pages/page404';

const router = createBrowserRouter([
	{
	  path: '/',
	  element: 	< Root/>,
	  errorElement: <Pagina404 />,
	  children:[

			{
			  path: 'valores',
			  element: <Valores/>,
			},
			{
				path: 'evolucao',
				element: <EvolucaoTemporal/>,
			}
	  ]
	},
  ]);

export default router;