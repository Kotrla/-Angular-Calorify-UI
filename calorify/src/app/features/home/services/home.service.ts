import { Injectable } from '@angular/core';
import { IUserNeeds, IUserTarget } from '../ts/home.model';
import { IChartData } from '../../../shared/ui/chart/chart.model';
import { Chart, ChartOptions, ChartType, Plugin, TooltipItem } from 'chart.js';

@Injectable({
	providedIn: 'root',
})
export class HomeService {
	partialChartData: Partial<IChartData> = {
		chartOptions: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					position: 'top',
				},
			},
		},
		chartType: 'doughnut',
		legend: true,
	};

	colors: string[] = ['#00B845', '#FECD43', '#FF534B', '#4300FF'];
	hoverColors: string[] = ['#148C41', '#FA9D11', '#FA150A', '#2A009E'];

	constructor() {}

	createMacrosCharts(userDaily: IUserTarget, userNeeds: IUserNeeds): IChartData[] {
		const macros = ['Protein', 'Carbs', 'Fats'];

		return macros.map((macro, index) => {
			const chartOptions = this.generateMacrosChartOptions(userDaily, userNeeds, index, macro);
			const data = [
				userDaily[macro.toLowerCase() as keyof IUserTarget],
				userNeeds[macro.toLowerCase() as keyof IUserNeeds] -
					Number(userDaily[macro.toLowerCase() as keyof IUserTarget]),
			];
			const backgroundColor = [this.colors[index], '#dee0df'];
			const borderColor = [this.colors[index], '#dee0df'];
			const hoverBackgroundColor = [this.hoverColors[index], '#cacccb'];
			const hoverBorderColor = [this.hoverColors[index], '#cacccb'];

			return {
				...this.partialChartData,
				chartOptions,
				labels: [macro],
				datasets: [{ data, backgroundColor, borderColor, hoverBackgroundColor, hoverBorderColor }],
				plugins: [this.createDoughnutCenterTextPlugin()],
				chartId: index,
			} as unknown as IChartData;
		});
	}

	createCaloriesChart(userDaily: IUserTarget, userNeeds: IUserNeeds): IChartData {
		const chartOptions = this.generateMacrosChartOptions(userDaily, userNeeds, 3, 'kcal');
		const data = [userDaily.kcal, userNeeds.kcal - userDaily.kcal];
		const backgroundColor = [this.colors[3], '#dee0df'];
		const borderColor = [this.colors[3], '#dee0df'];
		const hoverBackgroundColor = [this.hoverColors[3], '#cacccb'];
		const hoverBorderColor = [this.hoverColors[3], '#cacccb'];

		return {
			...this.partialChartData,
			chartOptions,
			labels: ['Calories'],
			datasets: [{ data, backgroundColor, borderColor, hoverBackgroundColor, hoverBorderColor }],
			plugins: [this.createDoughnutCenterTextPlugin()],
			chartId: '4',
		} as unknown as IChartData;
	}

	createWeeklyCaloriesChart(userTargets: IUserTarget[], userNeeds: IUserNeeds): IChartData {
		const lastSevenDaysDates = this.getLastSevenDaysDates();
		const lastSevenDaysCalories = this.getLastSevenDaysCalories(userTargets);

		const datasets = [
			{
				label: 'Calories consumed',
				backgroundColor: this.colors[3],
				borderColor: this.hoverColors[3],
				borderWidth: 1,
				data: lastSevenDaysDates.map(date => lastSevenDaysCalories[date] || 0),
			},
		];

		const chartOptions: ChartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: { position: 'top' },
			},
			scales: {
				y: { suggestedMax: userNeeds.kcal },
			},
		};

		return {
			chartOptions,
			labels: lastSevenDaysDates,
			datasets,
			plugins: [],
			chartType: 'bar',
			legend: true,
			chartId: '-weekly-calories',
		};
	}

	createWeeklyMacrosChart(userTargets: IUserTarget[], { protein, carbs, fats }: IUserNeeds): IChartData {
		const macros = ['Protein', 'Carbs', 'Fats'];
		const suggestedMax = Math.max(protein, carbs, fats);
		const lastSevenDaysDates = this.getLastSevenDaysDates();
		const lastSevenDaysMacros = this.getLastSevenDaysMacros(userTargets);

		const datasets = macros.map((macro, index) => ({
			label: `${macro} consumed`,
			backgroundColor: this.colors[index],
			borderColor: this.hoverColors[index],
			borderWidth: 1,
			data: lastSevenDaysDates.map(
				date => lastSevenDaysMacros[date]?.[macro.toLowerCase() as keyof IUserTarget] ?? 0
			),
		}));

		const chartOptions: ChartOptions = {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: { position: 'top' },
			},
			scales: {
				y: { suggestedMax },
			},
		};

		return {
			chartOptions,
			labels: lastSevenDaysDates,
			datasets,
			plugins: [],
			chartType: 'bar',
			legend: true,
			chartId: '-weekly-macros',
		} as unknown as IChartData;
	}

	generateMacrosChartOptions(
		userDaily: IUserTarget,
		userTargets: IUserNeeds,
		index: number,
		macro: string
	): ChartOptions {
		const { chartOptions } = this.partialChartData;
		const { plugins } = chartOptions || {};

		const percentageConsumed = this.calculatePercentageConsumed(
			userDaily[macro.toLowerCase() as keyof IUserTarget],
			userTargets[macro.toLowerCase() as keyof IUserNeeds]
		);

		const text = `${percentageConsumed} %`;
		const textColor = this.hoverColors[index];

		const tooltipLabel = (tooltipItem: TooltipItem<ChartType>) => {
			const labelPrefix = !!tooltipItem.label ? `${tooltipItem.label}: ` : 'Remaining: ';
			const valueSuffix = macro !== 'kcal' ? 'g' : 'calories';
			return `${labelPrefix}${tooltipItem.parsed} ${valueSuffix}`;
		};

		const updatedPlugins = {
			...plugins,
			center_text: { text, font: '12px', textColor }, // Corrected center_text object
			tooltip: { callbacks: { label: tooltipLabel } },
		};

		return { ...chartOptions, plugins: updatedPlugins };
	}

	createDoughnutCenterTextPlugin(): Plugin {
		return {
			id: 'center_text',
			beforeDraw: (chart: Chart, _: any, options: { font: string; text: any; textColor: string }) => {
				const { width, height, top, left } = chart.chartArea;
				const { ctx } = chart;

				ctx.save();

				const font = options.font?.trim() || `${Math.ceil(Math.min(height, width) / 15)}px sans-serif`;
				ctx.font = font;
				ctx.textBaseline = 'middle';
				ctx.fillStyle = options.textColor;

				const text = options.text;
				const xText = Math.round((width - ctx.measureText(text).width) / 2) + left;
				const yText = height / 2 + top;

				ctx.fillText(text, xText, yText);
				ctx.restore();
			},
		};
	}

	calculatePercentageConsumed(consumed: number | string, total: number): string {
		return ((Number(consumed) / total) * 100).toFixed(1);
	}

	getLastSevenDaysDates(): string[] {
		const today = new Date();

		const dates = Array.from({ length: 7 }, (_, index) => {
			const date = new Date(today);
			date.setDate(today.getDate() - index);
			const day = date.getDate();
			const month = date.getMonth() + 1;
			const year = date.getFullYear();
			return `${month}/${day}/${year}`;
		});

		return dates.reverse();
	}

	getLastSevenDaysCalories(userTargets: IUserTarget[]): Record<string, number> {
		return userTargets
			.slice(-7)
			.reduce((acc, { kcal, dateCreated }) => ({ ...acc, [dateCreated]: kcal }), {});
	}

	getLastSevenDaysMacros(userTargets: IUserTarget[]): Record<string, IUserTarget> {
		return userTargets
			.slice(-7)
			.reduce((acc, { dateCreated, ...userTarget }) => ({ ...acc, [dateCreated]: { ...userTarget } }), {});
	}
}
