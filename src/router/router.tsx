import { Route, Routes } from 'react-router-dom';
import '../pages/pageRoot/index.css';
import PageQuantidade from '../pages/pageQuantidade';
import PageRanking from '../pages/pageRanking';
import PageValores from '../pages/pageValores';
import PageEvoucaoTemporal from '../pages/pageEvolucaoTemporal';
import Login from '../pages/pageConta/login';
import Cadastro from '../pages/pageConta/cadastro';
import App from '../App';
import Layoute from '../componentes/layteComponente/layoute';
import Home from '../pages/pageHome';
import Dashboard from '../componentes/dashboard';
import { AuthRequered } from '../componentes/auth/AuthRequered';

export default function RotasAplicacao() {
	return (
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='cadastro' element={<Cadastro />} />
			<Route path='entrar' element={<Login />} />

			<Route element={<Layoute />}>
				<Route path='painel' element={<Dashboard />}
					loader={
						async () => {
							await AuthRequered();
						}
					}
				>
					<Route index element={<Home />} />
					<Route path='valores' element={<PageValores />} />
					<Route path='evolucao' element={<PageEvoucaoTemporal />} />
					<Route path='quantidade' element={<PageQuantidade />} />
					<Route path='ranking' element={<PageRanking />} />
				</Route>
			</Route>
		</Routes >
	)

}

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Navigate to="/painel/evolucao" />,
// 		errorElement: (
// 			<ProtectedRoute isPrivate={false}>
// 				<Page404 />
// 			</ProtectedRoute>
// 		),
// 	},
// 	{
// 		path: '/painel',
// 		element: <Navigate to="/painel/evolucao" />
// 	},
// 	{
// 		children: [
// 			{
// 				path: 'painel',
// 				children: [
// 					{
// 						path: 'valores',
// 						element: (
// 							<ProtectedRoute isPrivate>
// 								<PageValores />
// 							</ProtectedRoute>
// 						)
// 					},
// 					{
// 						path: 'evolucao',
// 						element: (
// 							<ProtectedRoute isPrivate>
// 								<PageEvoucaoTemporal />
// 							</ProtectedRoute>
// 						)
// 					},
// 					{
// 						path: 'ranking',
// 						element: (
// 							<ProtectedRoute isPrivate>
// 								<PageRanking />
// 							</ProtectedRoute>
// 						)
// 					},
// 					{
// 						path: 'quantidade',
// 						element: (
// 							<ProtectedRoute isPrivate>
// 								<PageQuantidade />
// 							</ProtectedRoute>
// 						)
// 					}
// 				]
// 			}
// 		]
// 	},
// 	{
// 		path: 'cadastro',
// 		element: (
// 			<ProtectedRoute isPrivate={false}>
// 				<Cadastro />
// 			</ProtectedRoute>
// 		)
// 	},
// 	{
// 		path: 'entrar',
// 		element: (
// 			<ProtectedRoute isPrivate={false}>
// 				<Login />
// 			</ProtectedRoute>
// 		)
// 	}
// ]);
// export default RotasAplicacao;
