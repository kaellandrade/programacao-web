import React from "react";
import "./index.css"
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import Aside from "../../componentes/aside/Aside";

function Main() {

  var valor_moeda_data = 151000000.12;
  var valor_moeda_ano = 1203333223.05
  var valor_cedula_data = 82151000000.12;
  var valor_cedula_ano = 49203333223.05

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
                <span><strong>R$ {valor_moeda_data.toLocaleString('pt-BR')}</strong></span>
                <p>Cento e cinquenta e um milhões de reais e 12 centavos</p>
              </div>
              <div className="content">
                <h4>Qual é o valor em circulação somente das moedas em um intervalo de anos?</h4>
                <form action="" className="form date">
                  <div>
                    <label htmlFor="date">Selecione uma data: </label>
                    <input type="date" id="date"></input>
                  </div>
                  <input type="submit" value="Aplicar"></input>
                </form>
                <span><strong>R$ {valor_moeda_ano.toLocaleString('pt-BR')}</strong></span>
                <p>Um bilhão, duzentos e três milhões e trezentos e trinta e três reais e cinco centavos</p>
              </div>
            </div>
            <div className="column valores">
              <div className="content">
                <h4>Qual é o valor em circulação somente das cédulas em uma data específica?</h4>
                <form action="" className="form date">
                  <div>
                    <label htmlFor="date">Selecione uma data: </label>
                    <input type="date" id="date"></input>
                  </div>
                  <input type="submit" value="Aplicar"></input>
                </form>
                <span><strong>R$ {valor_cedula_data.toLocaleString('pt-BR')}</strong></span>
                <p>Oitenta e dois bilhões e cento e cinquenta e um milhões de reais e 12 centavos</p>
              </div>
              <div className="content">
                <h4>Qual é o valor em circulação somente das cédulas em um intervalo de anos?</h4>
                <form action="" className="form date">
                  <div>
                    <label htmlFor="date">Selecione uma data: </label>
                    <input type="date" id="date"></input>
                  </div>
                  <input type="submit" value="Aplicar"></input>
                </form>
                <span><strong>R$ {valor_cedula_ano.toLocaleString('pt-BR')}</strong></span>
                <p>Quarenta e nove bilhões e duzentos e três milhões e trezentos e trinta e três e duzentos e vinte e trrês reais e cinco centavos</p>
                
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