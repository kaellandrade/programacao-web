import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ProgressSpinner } from 'primereact/progressspinner';

interface DadoSimulacaoItem {
    browser: string;
    quantidade_usuarios: string;
}

function CardNavegadores(props: { dados: DadoSimulacaoItem[] }) {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [render, setRender] = useState(0);

    const setarDadosChart = () => {

        const quantidades_usuarios = props.dados.map(item => parseInt(item.quantidade_usuarios));
        const browsers = props.dados.map(item => (
            item.browser.charAt(0).toUpperCase() + item.browser.slice(1)
        ));

        const documentStyle = getComputedStyle(document.documentElement);
        const data = {

            labels: browsers,
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
			<h4>Navegadores</h4>
            {render ? (
                <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-11rem" />
            ) : (
                <ProgressSpinner strokeWidth="4" />
            )}
		</div>
	);
}

export default CardNavegadores;
