import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutsNgrxService } from '../../services/workouts-ngrx.service';
import { IWorkout, WorkoutsRoutes, WorkoutsStoreKey } from '../../ts/workouts.model';

@Component({
	selector: 'app-workout-history',
	templateUrl: './workout-history.component.html',
	styleUrls: ['./workout-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutHistoryComponent implements OnInit {
	allWorkouts$: Observable<IWorkout[]>;
	isLoadingHistory$: Observable<boolean>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private workoutsNgrxService: WorkoutsNgrxService
	) {}

	ngOnInit(): void {
		this.workoutsNgrxService.loadAllWorkouts();

		this.isLoadingHistory$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<boolean>(
			WorkoutsStoreKey.IS_LOADING_HISTORY
		);
		this.allWorkouts$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<IWorkout[]>(
			WorkoutsStoreKey.ALL_WORKOUTS
		);
	}

	onGoToDaily(): void {
		this.router.navigate(['../', WorkoutsRoutes.DAILY], { relativeTo: this.activatedRoute });
	}
}
