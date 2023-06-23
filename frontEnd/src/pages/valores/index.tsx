import React from "react";
import "./index.css"
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import Aside from "../../componentes/aside/Aside";

function Main() {

  var valor = 100000.12;
  

  return (
    <>
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Pagina de valores</h2>
          <div className="container valores">
            <div className="column valores">
              <div className="content">
                <h4>Qual é o valor em circulação somente das moedas em uma data específica?</h4>
                <form action="" className="form date">
                  <div>
                    <label htmlFor="date">Selecione uma data: </label>
                    <input type="date" id="date"></input>
                  </div>
                  <input type="submit" value="Aplicar"></input>
                </form>
                <span><strong>R$ {valor.toLocaleString('pt-BR')}</strong></span>
                <br /><br /><br /><br /><br /><br /><br />
              </div>
              <div className="content">
                <h4>Qual é o valor em circulação somente das moedas em um intervalo de anos?</h4>
              </div>
            </div>
            <div className="column valores">
              <div className="content">
                <h4>Qual é o valor em circulação somente das cédulas em uma data específica?</h4>
              </div>
              <div className="content">
                <h4>Qual é o valor em circulação somente das cédulas em um intervalo de anos?</h4>
              </div>
            </div>
          </div>
        

        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;