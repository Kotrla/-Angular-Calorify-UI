import { Component, Input } from '@angular/core';
import { IWorkout } from '../../ts/models/workout.model';

@Component({
    selector: 'app-workout-history-item',
    templateUrl: './workout-history-item.component.html',
    styleUrls: ['./workout-history-item.component.scss']
})
export class WorkoutHistoryItemComponent {
  @Input() workout: IWorkout;
}
