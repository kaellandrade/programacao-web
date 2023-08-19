import { BetaAnalyticsDataClient } from '@google-analytics/data';

const analyticsDataClient = new BetaAnalyticsDataClient();

export async function runReport() {
	const [response] = await analyticsDataClient.runReport({
		property: `properties/${process.env.PROPERTY_ID}`,
		dateRanges: [
			{
				startDate: '2020-03-31',
				endDate: 'today'
			}
		],
		dimensions: [
			{
				name: 'region'
			},
			{
				name: 'city'
			}
		],
		metrics: [
			{
				name: 'activeUsers'
			}
		]
	});

	return response;
}
