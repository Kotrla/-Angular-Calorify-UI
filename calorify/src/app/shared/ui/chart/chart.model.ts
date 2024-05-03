import { ChartOptions, ChartTypeRegistry } from 'chart.js';

export interface IChartData {
	labels: string[];
	datasets: { data: (number | null)[] }[];
	chartOptions: ChartOptions;
	chartType: keyof ChartTypeRegistry;
	legend: boolean;
	chartId: number | string;
	plugins: any[];
}
