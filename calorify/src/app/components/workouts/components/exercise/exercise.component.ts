import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IExercise } from '../../ts/models/workout.model';

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.component.html',
    styleUrls: [ './exercise.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciseComponent {

  @Input() exercise: IExercise;

  constructor() { }
}
