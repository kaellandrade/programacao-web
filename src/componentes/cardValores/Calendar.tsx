import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

export default function Calendario(props: { calendarioId: string, enviarDataAtual: (data: string) => void }) {

    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    const minDate = new Date();
    minDate.setDate(3);
    minDate.setMonth(9);
    minDate.setFullYear(1994);

    const maxDate = new Date();
    maxDate.setDate(7);
    maxDate.setMonth(5);
    maxDate.setFullYear(2023);

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
        