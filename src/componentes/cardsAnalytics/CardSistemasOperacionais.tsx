import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ProgressSpinner } from 'primereact/progressspinner';

function CardSistemasOperacionais(props: { dados: [] }) {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [render, setRender] = useState(0);

    const setarDadosChart = () => {

        const quantidades_usuarios = props.dados.map(item => parseInt(item.quantidade_usuarios));
        const sistemasOperacionais = props.dados.map(item => (
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
