import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWorkoutsState } from './workouts.reducer';
import { WorkoutsStoreKey } from '../ts/enums/workouts-store-key.enum';

export const selectWorkoutsState = createFeatureSelector<IWorkoutsState>('workouts');

export const selectFromWorkoutsStore = (property: WorkoutsStoreKey) => createSelector(
    selectWorkoutsState,
    workoutsState => workoutsState[property]
)