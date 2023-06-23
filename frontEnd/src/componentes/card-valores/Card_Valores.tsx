import React from "react";
import "./index.css"

function Card_Valores(props: { valor_moeda_data: number, valor_extenso: string, pergunta: string }) {

  return (
    <div className="content">
      <h4>{props.pergunta}</h4>
      <form action="" className="form date">
        <div>
          <label htmlFor="date">Selecione uma data: </label>
          <input type="date" id="date"></input>
        </div>
        <input type="submit" value="Aplicar"></input>
      </form>
      <span><strong>R$ {props.valor_moeda_data.toLocaleString('pt-BR')}</strong></span>
      <p>{props.valor_extenso}</p>
    </div>
  );
}

export default Card_Valores;