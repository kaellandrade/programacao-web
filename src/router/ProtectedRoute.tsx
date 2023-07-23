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
	console.log(pathname);
	console.log(isPrivate);

	// Se Usuário não estiver logado e a rota for privada.
	if (!signed && isPrivate) {
		return <Navigate to="/entrar" replace />;
	}

	if (signed && ['/entrar', '/cadastro'].includes(pathname)) {
		return <Navigate to={'/painel/evolucao'} />;
	}

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
