import { Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
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
import { AuthRequered } from '../componentes/auth/AuthRequered';
const router = createBrowserRouter(createRoutesFromElements(
	<Route>
		<Route path='cadastro' element={<Cadastro />} loader={async () => { await AuthRequered('cadastro'); }} />
		<Route path='entrar' element={<Login />} loader={async () => { await AuthRequered('entrar'); }} />
		<Route path="/erro404" element={ <Error404 /> } />
		<Route path='/' element={<Navigate to={'painel'} />} />
		<Route element={<Layoute />}>
			<Route path='painel' element={<Dashboard />} loader={async () => { await AuthRequered(); }}>
				<Route index element={<Home />} />
				<Route path='valores' element={<PageValores />} />
				<Route path='evolucao' element={<PageEvoucaoTemporal />} />
				<Route path='quantidade' element={<PageQuantidade />} />
				<Route path='ranking' element={<PageRanking />} />
			</Route>
		</Route>
		<Route path="*" element={ <Navigate to="/erro404" replace />} />
	</Route>
))

export default function RotasAplicacao() {
	return <RouterProvider router={router} />
}