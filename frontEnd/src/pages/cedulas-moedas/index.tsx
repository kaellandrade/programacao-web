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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;