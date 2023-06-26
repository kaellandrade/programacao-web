import React from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Home from '../pageHome';

function Main() {

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Header />
      <main>
        <Aside />
        <section>
          {
            pathname === '/' ? <Home /> : <Outlet />
          }
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;