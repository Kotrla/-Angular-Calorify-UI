import { Injectable } from '@angular/core';
import { map, switchMap, takeUntil } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WorkoutsHttpService } from '../services/workouts-http.service';

import * as workoutsActions from './workouts.actions';

@Injectable()
export class WorkoutsEffects {
	constructor(private actions$: Actions, private workoutsHttpService: WorkoutsHttpService) {}

	loadDailyWorkouts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(workoutsActions.loadDailyWorkouts),
			switchMap(() =>
				this.workoutsHttpService
					.getDailyWorkouts()
					.pipe(takeUntil(this.actions$.pipe(ofType(workoutsActions.cancelWorkoutsObservables))))
			),
			map(({ workout }) => workoutsActions.finishLoadingDailyWorkouts({ payload: { workout } }))
		)
	);

	loadAllWorkouts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(workoutsActions.loadAllWorkouts),
			switchMap(() =>
				this.workoutsHttpService
					.getAllWorkouts()
					.pipe(takeUntil(this.actions$.pipe(ofType(workoutsActions.cancelWorkoutsObservables))))
			),
			map(({ workouts }) =>
				workoutsActions.finishLoadingAllWorkouts({ payload: { workouts: workouts.reverse() } })
			)
		)
	);

	addExercise$ = createEffect(() =>
		this.actions$.pipe(
			ofType(workoutsActions.addExercise),
			switchMap(({ payload: { exercise } }) =>
				this.workoutsHttpService
					.addExercise(exercise)
					.pipe(takeUntil(this.actions$.pipe(ofType(workoutsActions.cancelWorkoutsObservables))))
			),
			map(() => workoutsActions.loadDailyWorkouts())
		)
	);
}
