import './index.css';

function Main() {

  return (
    <>
      <h2>Home</h2>
      <div className="container valores">
        <div className="column valores descricao-projeto">
          <p>
            Registros diários das quantidades de cédulas e moedas em circulação 
            (não estão incluídas as moedas comemorativas). As informações estão 
            separadas para cada espécie (cédula ou moeda), família (categoria) 
            e denominação do Real (símbolos : R$, BRL). <br /><br /> 
            Os registros contemplam dados entre <strong> 03 de outubro de 1994 e 07 de 
            junho de 2023.</strong> <br /><br />
            Dados extraídos do
            <a href="https://dadosabertos.bcb.gov.br/dataset/dinheiro-em-circulao" target='_blank' > Portal do Banco Central do Brasil.</a>
            
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;