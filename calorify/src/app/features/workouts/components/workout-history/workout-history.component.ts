import { IWorkout } from '../../ts/workouts.model';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { WorkoutsNgrxService } from '../../services/workouts-ngrx.service';

@Component({
	selector: 'app-workout-history',
	templateUrl: './workout-history.component.html',
	styleUrls: ['./workout-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutHistoryComponent implements OnInit {
	@Input() workouts: IWorkout[] | null;
	@Input() historyIsLoading: boolean | null;

	constructor(private workoutsNgrxService: WorkoutsNgrxService) {}

	ngOnInit(): void {
		this.workoutsNgrxService.loadAllWorkouts();
	}
}
