import { Request, Response } from 'express';
import { runReport } from '../entities/analytics';

export class GetAnalytics {
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

				return res.status(200).json({ data: formattedData });
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
}
