import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IChartData } from './chart.model';

@Component({
	selector: 'app-chart',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit, OnChanges {
	@Input() chart: IChartData;

	chartData: Chart;
	canvasId: string;

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.chart) {
			this.canvasId = 'chart-canvas' + this.chart.chartId;
		}
	}

	ngAfterViewInit(): void {
		if (this.chart) {
			this.chartData = new Chart('chart-canvas' + this.chart.chartId, {
				type: this.chart.chartType,
				data: {
					labels: this.chart.labels,
					datasets: this.chart.datasets,
				},
				options: this.chart.chartOptions,
				plugins: this.chart.plugins,
			});
		}
	}
}
