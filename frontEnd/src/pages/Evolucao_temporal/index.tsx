import React from "react";
import "./index.css"
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import Aside from "../../componentes/aside/Aside";
import Card_Evolucao from "../../componentes/card-evolucao/Card_Evolucao";


function Main() {
  
  var pergunta1 = "Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada denominação ao longo dos anos?";
  var pergunta2 = "Qual é a evolução temporal da quantidade de cédulas e moedas em circulação para cada categoria ao longo dos anos?";

  return (
    <>
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Pagina de Evolução Temporal</h2>
          <div className="container valores">
            <div className="column valores">
              <Card_Evolucao pergunta={pergunta1} />
            </div>
            <div className="column valores">
              <Card_Evolucao pergunta={pergunta2} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;