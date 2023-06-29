import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

export default function Calendario(props: { calendarioId: string }) {

    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    const minDate = new Date();
    minDate.setMonth(8);
    minDate.setFullYear(1994);

    const maxDate = new Date();
    maxDate.setMonth(6);
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

    return (
        <div className="card flex justify-content-center">
            <Calendar 
            value={date} 
            id={props.calendarioId} 
            onChange={(e) => setDate(e.value)}
            minDate={minDate} 
            maxDate={maxDate} 
            locale="pt-br"
            placeholder="Selecione uma data"
            showIcon
            dateFormat="dd/mm/yy" />
        </div>
    );
}
        