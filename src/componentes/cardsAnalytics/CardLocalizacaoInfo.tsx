import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { getDataAnalytics } from '../../api/data';
import { Column } from 'primereact/column';

function CardLocalizacao(props: {dados: []}) {

  const [dados, setDados] = useState([]);

  const colunas = [
    {field: 'cidade', header: 'Cidade'},
    {field: 'estado', header: 'Estado'},
    {field: 'quantidade_usuarios', header: 'Quantidade de usuários'}
  ];

  const formatarDados = props.dados.map(item => {
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


