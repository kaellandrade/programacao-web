import './index.css';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import { Outlet } from 'react-router-dom';

function Main() {
	return (
		<>
			<Header />
			<main>
				<Aside />
				<section>
					<Outlet />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Main;
