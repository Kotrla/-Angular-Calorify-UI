import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-workouts',
	templateUrl: './workouts.component.html',
	styleUrls: ['./workouts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent {}
