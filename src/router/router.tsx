import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import Page404 from '../pages/page404';
import '../pages/pageRoot/index.css';
import PageQuantidade from '../pages/pageQuantidade';
import PageRanking from '../pages/pageRanking';
import PageValores from '../pages/pageValores';
import PageEvoucaoTemporal from '../pages/pageEvolucaoTemporal';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/pageLogin';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/painel/evolucao" />
	},
	{
		errorElement: (
			<ProtectedRoute isPrivate={false}>
				<Page404 />
			</ProtectedRoute>
		),
		children: [
			{
				path: 'painel',
				children: [
					{
						path: 'valores',
						element: (
							<ProtectedRoute isPrivate>
								<PageValores />
							</ProtectedRoute>
						)
					},
					{
						path: 'evolucao',
						element: (
							<ProtectedRoute isPrivate>
								<PageEvoucaoTemporal />
							</ProtectedRoute>
						)
					},
					{
						path: 'ranking',
						element: (
							<ProtectedRoute isPrivate>
								<PageRanking />
							</ProtectedRoute>
						)
					},
					{
						path: 'quantidade',
						element: (
							<ProtectedRoute isPrivate>
								<PageQuantidade />
							</ProtectedRoute>
						)
					}
				]
			}
		]
	},
	{
		path: 'cadastro',
		element: (
			<ProtectedRoute isPrivate={false}>
				<Login />
			</ProtectedRoute>
		)
	},
	{
		path: 'entrar',
		element: (
			<ProtectedRoute isPrivate={false}>
				<Login />
			</ProtectedRoute>
		)
	}
]);
export default router;
