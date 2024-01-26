import { IUserTarget } from '../../ts/home.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-weekly-summary',
	templateUrl: './weekly-summary.component.html',
	styleUrls: ['./weekly-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeeklySummaryComponent {
	@Input() userTargets: IUserTarget[] | null;

	constructor() {}
}
