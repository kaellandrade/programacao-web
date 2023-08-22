import './index.css';

function Main() {
  
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];

  let dataAtual = '';

  const date = new Date();
  
  const diaAtual = date.getDate();
  const mesAtual = date.getMonth();
  const anoAtual = date.getFullYear();
  
  if (diaAtual == 1){
    if (mesAtual == 0)  // Se a data atual for 1º de janeiro
      dataAtual = `31 de dezembro de ${anoAtual - 1}`;
    else{
      const diaAnterior = new Date(anoAtual, mesAtual, 0).getDate();
      dataAtual = `${diaAnterior} de ${meses[mesAtual - 1]} de ${anoAtual}`;
    }
  }else
    dataAtual = `${diaAtual - 1} de ${meses[mesAtual]} de ${anoAtual}`;
  
  return (
    <>
      <h2>Sobre</h2>
      <div className="container valores">
        <div className="column valores descricao-projeto">
          <p>
            Registros diários das quantidades de cédulas e moedas em circulação 
            (não estão incluídas as moedas comemorativas). As informações estão 
            separadas para cada espécie (cédula ou moeda), família (categoria) 
            e denominação do Real (símbolos : R$, BRL). <br /><br /> 
            Os registros contemplam dados entre <strong> 03 de outubro de 1994 e {dataAtual} .</strong> <br /><br />
            Nossa base de dados é atualizada diariamente com a base de dados do&nbsp;
            <strong>
              <a href="https://dadosabertos.bcb.gov.br/dataset/dinheiro-em-circulao" target='_blank' > 
                Portal do Banco Central do Brasil.
              </a>
            </strong>
            &nbsp;A última atualização é sempre referente ao dia anterior (ontem).
              
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;