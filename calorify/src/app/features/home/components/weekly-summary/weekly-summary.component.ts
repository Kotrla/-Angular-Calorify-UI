import { HomeService } from '../../services/home.service';
import { IChartData } from '../../../../shared/ui/chart/chart.model';
import { IUser, IUserNeeds, IUserTarget } from '../../ts/home.model';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-weekly-summary',
	templateUrl: './weekly-summary.component.html',
	styleUrls: ['./weekly-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeeklySummaryComponent implements OnChanges {
	@Input() userDetails: IUser | null;
	@Input() userTargets: IUserTarget[] | null;

	userNeeds: IUserNeeds;
	weeklyMacrosChartData: IChartData;
	weeklyCaloriesChartData: IChartData;

	constructor(private homeService: HomeService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['userDetails']?.currentValue !== changes['userDetails']?.previousValue) {
			this.userNeeds = this.userDetails?.needs as IUserNeeds;
		}

		if (
			changes['userTargets']?.currentValue !== changes['userTargets']?.previousValue &&
			!!this.userTargets?.length
		) {
			this.weeklyCaloriesChartData = this.homeService.createWeeklyCaloriesChart(
				this.userTargets,
				this.userNeeds
			);

			this.weeklyMacrosChartData = this.homeService.createWeeklyMacrosChart(this.userTargets, this.userNeeds);
		}
	}
}
