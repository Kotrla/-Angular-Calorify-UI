import { IWorkout } from '../ts/workouts.model';
import { createReducer, on } from '@ngrx/store';

import * as workoutsActions from './workouts.actions';

export const workoutsFeatureKey = 'workouts';

export interface IWorkoutsState {
	isLoading: boolean;
	isLoadingHistory: boolean;
	dailyUserWorkout: IWorkout | null;
	allUserWorkouts: IWorkout[];
}

export const initialWorkoutsState: IWorkoutsState = {
	isLoading: true,
	isLoadingHistory: true,
	dailyUserWorkout: null,
	allUserWorkouts: [],
};

export const workoutsReducer = createReducer(
	initialWorkoutsState,
	on(workoutsActions.setWorkoutsIsLoading, (state, { payload: { isLoading } }) => ({
		...state,
		isLoading,
	})),
	on(workoutsActions.finishLoadingDailyWorkouts, (state, { payload: { workout } }) => ({
		...state,
		dailyUserWorkout: workout,
		isLoading: false,
	})),
	on(workoutsActions.finishLoadingAllWorkouts, (state, { payload: { workouts } }) => ({
		...state,
		allUserWorkouts: workouts,
		isLoadingHistory: false,
	})),
	on(workoutsActions.cancelWorkoutsObservables, state => ({
		...state,
		isLoading: true,
		isLoadingHistory: true,
		dailyUserWorkout: null,
		allUserWorkouts: [],
	}))
);
