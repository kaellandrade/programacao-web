import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ProgressSpinner } from 'primereact/progressspinner';


function CardSistemasOperacionais() {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [render, setRender] = useState(0);

	const dadoSimulacao = [
        {
            'sistema_operacional': 'Linux 5.19.0',
            'quantidade_usuarios': '22'
        },
        {
            'sistema_operacional': 'Android 13',
            'quantidade_usuarios': '12'
        },
            {
            'sistema_operacional': 'Android 6.0',
            'quantidade_usuarios': '2'
        },
            {
            'sistema_operacional': 'Linux ',
            'quantidade_usuarios': '5'
        },
            {
            'sistema_operacional': 'Windows 11',
            'quantidade_usuarios': '1'
        },
            {
            'sistema_operacional': 'iOS 13.2.3',
            'quantidade_usuarios': '6'
        },
            {
            'sistema_operacional': 'iOS 16.1.1',
            'quantidade_usuarios': '3'
        },
            {
            'sistema_operacional': 'Android 13.0.0',
            'quantidade_usuarios': '2'
        }
    ];

    const setarDadosChart = () => {

        const quantidades_usuarios = dadoSimulacao.map(item => parseInt(item.quantidade_usuarios));
        const sistemasOperacionais = dadoSimulacao.map(item => (
            item.sistema_operacional.charAt(0).toUpperCase() + item.sistema_operacional.slice(1)
        ));

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: sistemasOperacionais,
            datasets: [
                {
                    label: 'Quantidade de usuários',
                    backgroundColor: documentStyle.getPropertyValue('--green-medium--'),
                    borderColor: documentStyle.getPropertyValue('--green-medium--'),
                    data: quantidades_usuarios
                }
            ]
        };
        const options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.9,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
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
		<div className="content page-analytics">
			<h4>Sistemas Operacionais</h4>
            {render ? (
                <Chart type="bar" data={chartData} options={chartOptions} />
            ) : (
                <ProgressSpinner strokeWidth="4" />
            )}
		</div>
	);
}

export default CardSistemasOperacionais;
