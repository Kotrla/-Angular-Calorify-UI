import { createReducer, on } from '@ngrx/store';
import * as workoutsActions from './workouts.actions';
import { IWorkout } from '../ts/models/workout.model';

export const workoutsFeatureKey = 'workouts';

export interface IWorkoutsState {
  isLoading: boolean;
  historyIsLoading: boolean;
  dailyUserWorkout: IWorkout | null;
  allUserWorkouts: IWorkout[];
}

export const initialWorkoutsState: IWorkoutsState = {
    isLoading: true,
    historyIsLoading: true,
    dailyUserWorkout: null,
    allUserWorkouts: []
};

export const workoutsReducer = createReducer(
    initialWorkoutsState,
    on(workoutsActions.setWorkoutsIsLoading, (state, { payload }) => ({ ...state, isLoading: payload.isLoading })),
    on(workoutsActions.finishLoadingDailyWorkouts, (state, { payload }) => ({
        ...state, dailyUserWorkout: payload.workout, isLoading: false
    })),
    on(workoutsActions.finishLoadingAllWorkouts, (state, { payload }) => ({
        ...state, allUserWorkouts: payload.workouts, isLoading: false, historyIsLoading: false
    })),
    on(workoutsActions.cancelWorkoutsObservables, (state) => ({
        ...state, isLoading: true, dailyUserWorkout: null, allUserWorkouts: []
    }))
);

