import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

export default function Calendario(props: { calendarioId: string, enviarDataAtual: (data: string) => void }) {

    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    const minDate = new Date();
    minDate.setDate(3); // SetDate pode variar entre 1 e 31.
    minDate.setMonth(9); // SetMonth retorna valores indexados em zero, onde 0 representa janeiro e 11 representa dezembro. 
    minDate.setFullYear(1994);

    const maxDate = new Date();
    const setarDataMaxima = () => {

        const diaAtual = maxDate.getDate();
        const mesAtual = maxDate.getMonth();
        const anoAtual = maxDate.getFullYear();

        if (diaAtual == 1){
            if (mesAtual == 0){  // Se a data atual for 1º de janeiro
                maxDate.setDate(31);
                maxDate.setMonth(11); 
                maxDate.setFullYear(anoAtual - 1);
            }else{
                const diaAnterior = new Date(anoAtual, mesAtual, 0).getDate();
                maxDate.setDate(diaAnterior);
                maxDate.setMonth(mesAtual - 1); 
                maxDate.setFullYear(anoAtual);
            }
        }else{
            maxDate.setDate(diaAtual - 1);  
            maxDate.setMonth(mesAtual);
            maxDate.setFullYear(anoAtual);
        }
    };
    setarDataMaxima();

    addLocale('pt-br', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
        dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        today: 'Hoje',
        clear: 'Limpar'
    });

    const onChangeDate = (e: any) => {
        const data = e.value;
        setDate(data);

        const day = String(data.getDate()).padStart(2, '0');
        const month = String(data.getMonth() + 1).padStart(2, '0');
        const year = data.getFullYear();
        
        const dataFormatada = `${day}/${month}/${year}`;
        props.enviarDataAtual(dataFormatada);
    };

    return (
        <div className="card flex justify-content-center">
            <Calendar 
            value={date} 
            id={props.calendarioId} 
            // onChange={(e) => setDate(e.value)}
            onChange={onChangeDate}
            minDate={minDate} 
            maxDate={maxDate} 
            locale="pt-br"
            placeholder="Selecione uma data"
            showIcon
            dateFormat="dd/mm/yy" />
        </div>
    );
}
        