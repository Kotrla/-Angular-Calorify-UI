import { IWorkoutsState } from './workouts.reducer';
import { WorkoutsStoreKey } from '../ts/workouts.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectWorkoutsState = createFeatureSelector<IWorkoutsState>('workouts');

export const selectFromWorkoutsStore = (property: WorkoutsStoreKey) =>
	createSelector(selectWorkoutsState, workoutsState => workoutsState[property]);
