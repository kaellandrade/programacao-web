import React from "react";
import "./index.css"
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import Aside from "../../componentes/aside/Aside";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Pagina de cédulas e moedas</h2>
          <div className="container cedulas-moedas">
            <div className="column cedulas-moedas">
              <div className="content">1</div>
              <div className="content">2</div>
              <div className="content">3</div>
              <div className="content">4</div>
            </div>

            <div className="column cedulas-moedas">
              <div className="content">5</div>
              <div className="content">6</div>
              <div className="content">7</div>
              <div className="content">8</div>
            </div>
          </div>
        

        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;