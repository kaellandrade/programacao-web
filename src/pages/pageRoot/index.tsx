import './index.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Home from '../pageHome';
import Login from '../pageConta/login';

function Main() {

  const location = useLocation();
  const { pathname } = location;

  const userLogged = true;

  return (
    <>
      {
        userLogged?
        <>
          <Header />
          <main>
            <Aside id='sidebar-desktop' />
            <section>
              {
                pathname === '/' ? <Home /> : <Outlet />
              }
            </section>
          </main>
          <Footer />
        </>
        :
        <Login />
      }
    </>
  );
}

export default Main;
