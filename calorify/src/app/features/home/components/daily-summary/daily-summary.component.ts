import { ChartData } from 'chart.js';
import { IUser } from '../../ts/home.model';
import { IUserNeeds } from '../../ts/home.model';
import { IUserTarget } from '../../ts/home.model';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IChartData } from '../../../../shared/ui/chart/chart.model';
import { HomeService } from '../../services/home.service';

@Component({
	selector: 'app-daily-summary',
	templateUrl: './daily-summary.component.html',
	styleUrls: ['./daily-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailySummaryComponent implements OnChanges {
	@Input() userDetails: IUser | null;
	@Input() userDaily: IUserTarget | null;

	userNeeds: IUserNeeds;
	dailyMacroCharts: IChartData[];
	dailyCaloriesChart: IChartData;

	constructor(private homeService: HomeService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['userDetails']?.currentValue !== changes['userDetails']?.previousValue) {
			this.userNeeds = this.userDetails?.needs as IUserNeeds;
		}

		if (changes['userDaily']?.currentValue !== changes['userDaily']?.previousValue && !!this.userDaily) {
			this.dailyMacroCharts = this.homeService.createMacrosCharts(this.userDaily, this.userNeeds);
			this.dailyCaloriesChart = this.homeService.createCaloriesChart(this.userDaily, this.userNeeds);
		}
	}
}
