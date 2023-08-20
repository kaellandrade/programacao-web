import { Request, Response } from 'express';
import { runReport } from '../entities/analytics';

export class GetAnalytics {
	constructor() {
		this.reportAnalytics = this.reportAnalytics.bind(this);
	}
	async reportAnalytics(req: Request, res: Response) {
		try {
			const response = await runReport();

			if (response && response.rows) {
				const formattedData = response.rows.map((row) => {
					const regionValue = row.dimensionValues || '';
					const metricValue = row.metricValues || '';

					return {
						region: regionValue,
						metric: metricValue
					};
				});
				//{regiao, dispositivos, navegadores, so}
				const regiao = this.transformDataRegion(formattedData);
				const dispositivos = this.summarizeDataDispositive(formattedData);
				const navegadores = this.transformDataBrowser(formattedData);
				const so = this.transformDataSO(formattedData);
				return res
					.status(200)
					.json({ data: { regiao, dispositivos, navegadores, so } });
			} else {
				return res.status(200).json({ data: [] });
			}
		} catch (error) {
			console.error('Error fetching analytics:', error);
			return res
				.status(500)
				.json({ error: 'An error occurred while fetching analytics data.' });
		}
	}

	private transformDataRegion(input: any) {
		const cityStateMetrics: any = {};

		for (const item of input) {
			const regionValue = item.region[0].value;
			const cityValue = item.region[1].value;
			const metricValue = parseInt(
				item.metric.find((value: any) => value.oneValue === 'value').value
			);

			if (!cityStateMetrics[regionValue]) {
				cityStateMetrics[regionValue] = {};
			}

			if (!cityStateMetrics[regionValue][cityValue]) {
				cityStateMetrics[regionValue][cityValue] = 0;
			}

			cityStateMetrics[regionValue][cityValue] += metricValue;
		}

		const cityStateClassification: any = [];
		for (const region in cityStateMetrics) {
			for (const city in cityStateMetrics[region]) {
				cityStateClassification.push({
					cidade: city,
					estado: region,
					quantidade_usuarios: cityStateMetrics[region][city].toString()
				});
			}
		}

		return cityStateClassification;
	}

	private summarizeDataDispositive(input: any) {
		const dispositivos: any = {
			mobile: 0,
			desktop: 0,
			tablet: 0
		};

		for (const item of input) {
			const dispositivo = item.region.find(
				(regionItem: any) => regionItem.value === 'mobile'
			)
				? 'mobile'
				: item.region.find((regionItem: any) => regionItem.value === 'desktop')
				? 'desktop'
				: 'tablet';

			const metricValue = parseInt(item.metric[0].value);
			dispositivos[dispositivo] += metricValue;
		}

		const resultado = [];
		for (const dispositivo in dispositivos) {
			resultado.push({
				dispositivo: dispositivo,
				quantidade_usuarios: dispositivos[dispositivo].toString()
			});
		}

		return resultado;
	}

	private transformDataSO(input: any[]) {
		const sistemaOperacionalMetrics: any = {};

		for (const item of input) {
			const sistemaOperacional = item.region.find(
				(regionValue: any) =>
					regionValue.value.startsWith('Linux') ||
					regionValue.value.startsWith('Android') ||
					regionValue.value.startsWith('Windows') ||
					regionValue.value.startsWith('iOS')
			);

			if (sistemaOperacional) {
				const metricValue = parseInt(item.metric[0].value);
				const sistemaOperacionalName = sistemaOperacional.value;

				if (!sistemaOperacionalMetrics[sistemaOperacionalName]) {
					sistemaOperacionalMetrics[sistemaOperacionalName] = 0;
				}

				sistemaOperacionalMetrics[sistemaOperacionalName] += metricValue;
			}
		}

		const formattedData: any[] = [];

		for (const sistemaOperacional in sistemaOperacionalMetrics) {
			formattedData.push({
				sistema_operacional: sistemaOperacional,
				quantidade_usuarios:
					sistemaOperacionalMetrics[sistemaOperacional].toString()
			});
		}

		return formattedData;
	}

	private transformDataBrowser(input: any) {
		const browserMetrics: any = {};

		for (const item of input) {
			const browser = item.region.find(
				(regionItem: any) =>
					regionItem.value === 'Chrome' ||
					regionItem.value === 'Safari' ||
					regionItem.value === 'Edge'
			); // Filtra apenas os browsers desejados
			const metricValue = parseInt(item.metric[0].value);

			if (browser) {
				const browserName = browser.value;

				if (!browserMetrics[browserName]) {
					browserMetrics[browserName] = 0;
				}

				browserMetrics[browserName] += metricValue;
			}
		}

		const formattedData: any = [];
		for (const browser in browserMetrics) {
			formattedData.push({
				browser: browser,
				quantidade_usuarios: browserMetrics[browser].toString()
			});
		}
		return formattedData;
	}
}
