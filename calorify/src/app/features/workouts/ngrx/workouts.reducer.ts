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
	on(workoutsActions.setWorkoutsIsLoading, (state, { payload }) => ({
		...state,
		isLoading: payload.isLoading,
	})),
	on(workoutsActions.finishLoadingDailyWorkouts, (state, { payload }) => ({
		...state,
		dailyUserWorkout: payload.workout,
		isLoading: false,
	})),
	on(workoutsActions.finishLoadingAllWorkouts, (state, { payload }) => ({
		...state,
		allUserWorkouts: payload.workouts,
		isLoading: false,
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
