import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CardLocalizacao() {

  const [dados, setDados] = useState([]);

  const dadoSimulacao: DadoSimulacaoItem[] = [
    {
        'cidade': 'Aracaju',
        'estado': 'State of Sergipe',
        'quantidade_usuarios': '22'
    },
    {
        'cidade': 'Mossoro',
        'estado': 'State of Rio Grande do Norte',
        'quantidade_usuarios': '1'
    },
		{
        'cidade': '(not set)',
        'estado': 'State of Minas Gerais',
        'quantidade_usuarios': '1'
    },
    {
      'cidade': '(not set)',
      'estado': 'State of Espirito Santo',
      'quantidade_usuarios': '1'
    },
    {
        'cidade': 'Sao Mateus do Sul',
        'estado': 'State of Parana',
        'quantidade_usuarios': '1'
    }
  ];

  const colunas = [
    {field: 'cidade', header: 'Cidade'},
    {field: 'estado', header: 'Estado'},
    {field: 'quantidade_usuarios', header: 'Quantidade de usuários'}
  ];

  const formatarDados = dadoSimulacao.map(item => {
    return {
        ...item,
        cidade: item.cidade === '(not set)'? item.cidade = 'Não especificada' : item.cidade,
        estado: item.estado.replace('State of ', '')
    };
  });

  useEffect(() => {
    const dadosFormatados = formatarDados;
    setDados(dadosFormatados);
  }, []);

  return (
    <div className="content page-analytics table">
      <h4>Localização - Info</h4>
      <DataTable size="small" value={dados} scrollable scrollHeight="100%" sortMode="multiple" tableStyle={{ minWidth: '10rem' }} id='tableQuantidade' >
        {colunas.map((col: any) => (
            <Column key={col.field} field={col.field} header={col.header} align="center" sortable style={{ width: '10%' }} />
        ))}
      </DataTable>
    </div>
      
  );
}

export default CardLocalizacao;


