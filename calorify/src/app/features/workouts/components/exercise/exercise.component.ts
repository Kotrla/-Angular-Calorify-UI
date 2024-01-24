import { IExercise } from '../../ts/workouts.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-exercise',
	templateUrl: './exercise.component.html',
	styleUrls: ['./exercise.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseComponent {
	@Input() exercise: IExercise;
	@Input() isHistoryWorkout: boolean;
}
