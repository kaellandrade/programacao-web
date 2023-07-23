import { Fragment, ReactNode, useContext } from 'react';
import AuthContext, { Context } from '../context/auth';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import Header from '../componentes/header/Header';
import Aside from '../componentes/aside/Aside';
import Footer from '../componentes/footer/Footer';
interface Props {
	isPrivate: boolean;
	children: ReactNode;
}

export default function ProtectedRoute({ children, isPrivate }: Props) {
	const context = useContext(AuthContext) as Context;
	const { signed } = context.state;

	const { pathname } = useLocation();

	// Se Usuário não estiver logado e a rota for privada ele será redirecionado para tela de login.
	if (!signed && isPrivate) {
		return <Navigate to="/entrar" replace />;
	}

	// Caso esteja logado e tentar acessar a tela de login ou cadastro, será redirecionado para o painel.
	if (signed && ['/entrar', '/cadastro'].includes(pathname)) {
		return <Navigate to={'/painel/evolucao'} />;
	}

	// Rotas privadas tem cabeçalho e footer.
	if (isPrivate) {
		return (
			<>
				<Header />
				<main>
					<Aside id="sidebar-desktop" />
					<section>{children}</section>
				</main>
				<Footer />
			</>
		);
	}

	return <>{children}</>;
}
