import React from 'react';
import './index.css';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/footer/Footer';
import Aside from '../../componentes/aside/Aside';
import Card_Valores from '../../componentes/card-valores/Card_Valores';

function Main() {

  return (
    <>
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Home</h2>
          <div className="container valores">
            <div className="column valores">
              
            </div>
            <div className="column valores">
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;