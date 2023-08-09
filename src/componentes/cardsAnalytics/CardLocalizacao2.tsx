import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function CardLocalizacao() {

  const [dados, setDados] = useState([]);

  const dadoSimulacao = [
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
    }
  ];

  const colunas = [
    {field: 'cidade', header: 'Cidade'},
    {field: 'estado', header: 'Estado'},
    {field: 'quantidade_usuarios', header: 'Quantidade de usuários'}
  ];

  useEffect(() => {
    setDados(dadoSimulacao);
  }, []);

  return (
    <div className="content">
      <h4>Localização</h4>
      <DataTable size="small" value={dados} scrollable scrollHeight="100%" sortMode="multiple" tableStyle={{ minWidth: '20rem' }} id='tableQuantidade' >
        {colunas.map((col: any) => (
            <Column key={col.field} field={col.field} header={col.header} align="center" sortable style={{ width: '10%' }} />
        ))}
      </DataTable>
    </div>
      
  );
}

export default CardLocalizacao;