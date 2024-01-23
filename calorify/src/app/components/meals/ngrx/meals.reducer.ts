import { createReducer, on } from '@ngrx/store';
import { IMeal, IFood } from '../ts/meals.model';

import * as actions from './meals.actions';

export const mealsFeatureKey = 'meals';

export interface IMealsState {
	isLoading: boolean;
	breakfast: IMeal | null;
	lunch: IMeal | null;
	dinner: IMeal | null;
	foods: IFood[];
}

export const initialMealsState: IMealsState = {
	isLoading: false,
	breakfast: null,
	lunch: null,
	dinner: null,
	foods: [],
};

export const mealsReducer = createReducer(
	initialMealsState,
	on(actions.setMealsIsLoading, (state, { payload }) => ({ ...state, isLoading: payload.isLoading })),
	on(actions.finishLoadingFoodList, (state, { payload }) => ({ ...state, foods: payload.foods })),
	on(actions.finishLoadingDailyMeals, (state, { payload }) => ({
		...state,
		breakfast: payload.breakfast,
		lunch: payload.lunch,
		dinner: payload.dinner,
		isLoading: false,
	})),
	on(actions.cancelMealsObservables, state => ({
		...state,
		isLoading: true,
		breakfast: null,
		lunch: null,
		dinner: null,
		foods: [],
	}))
);
