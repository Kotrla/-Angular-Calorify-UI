import { IMealsState } from './meals.reducer';
import { MealsStoreKey } from '../ts/meals.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectMealsState = createFeatureSelector<IMealsState>('meals');

export const selectFromMealsStore = (property: MealsStoreKey) =>
	createSelector(selectMealsState, mealsState => mealsState[property]);
