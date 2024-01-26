import { IWorkout } from '../../ts/workouts.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-workout-history-item',
	templateUrl: './workout-history-item.component.html',
	styleUrls: ['./workout-history-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutHistoryItemComponent {
	@Input() workout: IWorkout;

	isExpanded: boolean;

	onToggleExpanded(isExpanded: boolean): void {
		this.isExpanded = isExpanded;
	}
}
