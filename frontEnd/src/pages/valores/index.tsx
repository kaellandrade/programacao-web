import React from "react";
import "./index.css"
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import Aside from "../../componentes/aside/Aside";
import Card_Valores from "../../componentes/card-valores/Card_Valores";

function Main() {

  var pergunta1 = "Qual é o valor em circulação somente das moedas em uma data específica?"
  var valor_moeda_data = 151000000.12;
  var extenso1 = "Cento e cinquenta e um milhões de reais e 12 centavos"

  var pergunta2 = "Qual é o valor em circulação somente das moedas em um intervalo de anos?"
  var valor_moeda_ano = 1203333223.05
  var extenso2 = "Um bilhão, duzentos e três milhões e trezentos e trinta e três reais e cinco centavos"

  var pergunta3 = "Qual é o valor em circulação somente das cédulas em uma data específica?"
  var valor_cedula_data = 82151000000.12;
  var extenso3 = "Oitenta e dois bilhões e cento e cinquenta e um milhões de reais e 12 centavos"
  
  var pergunta4 = "Qual é o valor em circulação somente das cédulas em um intervalo de anos?"
  var valor_cedula_ano = 49203333223.05
  var extenso4 = "Quarenta e nove bilhões e duzentos e três milhões e trezentos e trinta e três e duzentos e vinte e trrês reais e cinco centavos"

  return (
    <>
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Pagina de valores</h2>
          <div className="container valores">
            <div className="column valores">
              <Card_Valores pergunta={pergunta1} valor_moeda_data={valor_moeda_data} valor_extenso={extenso1} possuiIntervalo={false} />
              <Card_Valores pergunta={pergunta2} valor_moeda_data={valor_moeda_ano} valor_extenso={extenso2} possuiIntervalo={true} />
            </div>
            <div className="column valores">
              <Card_Valores pergunta={pergunta3} valor_moeda_data={valor_cedula_data} valor_extenso={extenso3} possuiIntervalo={false} />
              <Card_Valores pergunta={pergunta4} valor_moeda_data={valor_cedula_ano} valor_extenso={extenso4} possuiIntervalo={true} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;