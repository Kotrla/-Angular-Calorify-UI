import { createAction, props } from '@ngrx/store';
import { IExercise, IWorkout } from '../ts/workouts.model';

export const loadDailyWorkouts = createAction('[Workouts] Load Daily Workouts');

export const loadAllWorkouts = createAction('[Workouts] Load All Workouts');

export const cancelWorkoutsObservables = createAction('[Workouts] Cancel Workouts Observables');

export const setWorkoutsIsLoading = createAction(
	'[Workouts] Set Workouts isLoading',
	props<{ payload: { isLoading: boolean } }>()
);

export const addExercise = createAction(
	'[Workouts] Add Exercise',
	props<{ payload: { exercise: IExercise } }>()
);

export const finishLoadingDailyWorkouts = createAction(
	'[Workouts] Finish Loading Daily Workouts',
	props<{ payload: { workout: IWorkout } }>()
);

export const finishLoadingAllWorkouts = createAction(
	'[Workouts] Finish Loading All Workouts',
	props<{ payload: { workouts: IWorkout[] } }>()
);
