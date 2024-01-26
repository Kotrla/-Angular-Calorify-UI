import { WorkoutsNgrxService } from './services/workouts-ngrx.service';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-workouts',
	templateUrl: './workouts.component.html',
	styleUrls: ['./workouts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent implements OnDestroy {
	constructor(private workoutsNgrxService: WorkoutsNgrxService) {}

	ngOnDestroy(): void {
		this.workoutsNgrxService.cancelWorkoutsObservables();
	}
}
