import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import '../pages/pageRoot/index.css';
import PageQuantidade from '../pages/pageQuantidade';
import PageRanking from '../pages/pageRanking';
import Error404 from '../pages/page404';
import PageValores from '../pages/pageValores';
import PageEvoucaoTemporal from '../pages/pageEvolucaoTemporal';
import Login from '../pages/pageConta/login';
import Cadastro from '../pages/pageConta/cadastro';
import Layoute from '../componentes/layteComponente/layoute';
import Home from '../pages/pageHome';
import Dashboard from '../componentes/dashboard';
import PageAnalytics from '../pages/pageAnalytics';
import { AuthRequered } from '../componentes/auth/AuthRequered';
import LayouteAuth from '../pages/pageConta/LayouteAuth';
const router = createBrowserRouter(createRoutesFromElements(
	<Route>
		<Route path='/' element={<Navigate to={'painel'} />} />
		<Route path="/erro404" element={<Error404 />} />
		<Route path='publica' element={<LayouteAuth />} loader={async () => { await AuthRequered(false); }}>
			<Route path='entrar' element={<Login />} />
			<Route path='cadastro' element={<Cadastro />} />
		</Route>
		<Route element={<Layoute />}>
			<Route path='painel' element={<Dashboard />} loader={async () => { await AuthRequered(true); }}>
				<Route index element={<Home />} />
				<Route path='valores' element={<PageValores />} />
				<Route path='evolucao' element={<PageEvoucaoTemporal />} />
				<Route path='quantidade' element={<PageQuantidade />} />
				<Route path='ranking' element={<PageRanking />} />
				<Route path='analytics' element={<PageAnalytics />} />
			</Route>
		</Route>
		<Route path="*" element={<Navigate to="/erro404" replace />} />
	</Route>
))

export default function RotasAplicacao() {
	return <RouterProvider router={router} />
}