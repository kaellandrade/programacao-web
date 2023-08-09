import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';


function CardNavegadores() {

    const [dados, setDados] = useState({});
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

	const dadoSimulacao = [
        {
            'browser': 'Chrome',
            'quantidade_usuarios': '22'
        },
        {
            'browser': 'Safari',
            'quantidade_usuarios': '12'
        },
            {
            'browser': 'Edge',
            'quantidade_usuarios': '1'
        }
    ];
    

    const setarDadosChart = () => {

        const quantidades_usuarios = dadoSimulacao.map(item => parseInt(item.quantidade_usuarios));
        const browsers = dadoSimulacao.map(item => (
            item.browser.charAt(0).toUpperCase() + item.browser.slice(1)
        ));

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: browsers,
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
            maintainAspectRatio: false,
            aspectRatio: 0.8,
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
        const dataAndOptions = setarDadosChart();
        setChartData(dataAndOptions.data);
        setChartOptions(dataAndOptions.options);
    }, []);

	return (
		<div className="content">
			<h4>Navegadores</h4>
			<Chart type="bar" data={chartData} options={chartOptions} className="w-full md:h-10rem" />
		</div>
	);
}

export default CardNavegadores;
