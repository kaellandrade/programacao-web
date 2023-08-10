import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ProgressSpinner } from 'primereact/progressspinner';


function CardDispositivos() {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [render, setRender] = useState(0);

    interface DadoSimulacaoItem {
        dispositivo: string;
        quantidade_usuarios: string;
    }

	const dadoSimulacao: DadoSimulacaoItem[] = [
		{
			dispositivo: 'mobile',
			quantidade_usuarios: '22'
		},
		{
			dispositivo: 'desktop',
			quantidade_usuarios: '12'
		},
		{
			dispositivo: 'tablet',
			quantidade_usuarios: '13'
		}
	];

    const setarDadosChart = () => {

        const quantidades_usuarios = dadoSimulacao.map(item => parseInt(item.quantidade_usuarios));
        const dispositivos = dadoSimulacao.map(item => (
            item.dispositivo.charAt(0).toUpperCase() + item.dispositivo.slice(1)
        ));

        const documentStyle = getComputedStyle(document.documentElement);
        const data = {

            labels: dispositivos,
            datasets: [
                {
                    data: quantidades_usuarios,
                    backgroundColor: [
                        documentStyle.getPropertyValue('--green-medium--'), 
                        documentStyle.getPropertyValue('--green-dark2--'),
                        documentStyle.getPropertyValue('--green-light--')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--black-light--'), 
                        documentStyle.getPropertyValue('--black-light--'), 
                        documentStyle.getPropertyValue('--black-light--')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };
        return {data, options};
    };

    useEffect(() => {
        setRender(1);
    }, [chartData, chartOptions]);

    useEffect(() => {
        const dataAndOptions = setarDadosChart();
        setChartData(dataAndOptions.data);
        setChartOptions(dataAndOptions.options);
    }, []);

	return (
		<div className="content page-analytics dispositivos-navegadores">
			<h4>Tipos de Dispositivos</h4>
			{render ? (
                <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-11rem" />
            ) : (
                <ProgressSpinner strokeWidth="4" />
            )}
		</div>
	);
}

export default CardDispositivos;
