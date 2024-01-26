import { IUser } from '../../ts/home.model';
import { IUserNeeds } from '../../ts/home.model';
import { IUserTarget } from '../../ts/home.model';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-daily-summary',
	templateUrl: './daily-summary.component.html',
	styleUrls: ['./daily-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailySummaryComponent implements OnChanges {
	@Input() userDetails: IUser | null;
	@Input() userDaily: IUserTarget | null;

	userTargets: IUserNeeds;

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['userDetails']?.currentValue !== changes['userDetails']?.previousValue) {
			this.userTargets = this.userDetails?.needs as IUserNeeds;
		}
	}
}
