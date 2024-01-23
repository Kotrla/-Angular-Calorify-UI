import { Observable } from 'rxjs';
import { ViewMode } from '../meals/ts/meals.model';
import { IWorkout, WorkoutsStoreKey } from './ts/workouts.model';
import { WorkoutsNgrxService } from './services/workouts-ngrx.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-workouts',
	templateUrl: './workouts.component.html',
	styleUrls: ['./workouts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutsComponent implements OnInit, OnDestroy {
	workoutsViewMode: ViewMode = ViewMode.DAILY;

	isLoading$: Observable<boolean>;
	dailyWorkout$: Observable<IWorkout>;
	allWorkouts$: Observable<IWorkout[]>;
	historyIsLoading$: Observable<boolean>;

	constructor(private workoutsNgrxService: WorkoutsNgrxService) {}

	ngOnInit(): void {
		this.workoutsNgrxService.loadDailyWorkouts();

		this.isLoading$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<boolean>(
			WorkoutsStoreKey.IS_LOADING
		);
		this.dailyWorkout$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<IWorkout>(
			WorkoutsStoreKey.DAILY_WORKOUT
		);
		this.historyIsLoading$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<boolean>(
			WorkoutsStoreKey.HISTORY_IS_LOADING
		);
		this.allWorkouts$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<IWorkout[]>(
			WorkoutsStoreKey.ALL_WORKOUTS
		);
	}

	ngOnDestroy(): void {
		this.workoutsNgrxService.cancelWorkoutsObservables();
	}

	setWorkoutsViewMode(workoutsViewMode: ViewMode): void {
		this.workoutsViewMode = workoutsViewMode;
	}

	public get getViewMode(): typeof ViewMode {
		return ViewMode;
	}
}
