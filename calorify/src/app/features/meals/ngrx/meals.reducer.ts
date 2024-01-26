import { createReducer, on } from '@ngrx/store';
import { IMeal, IFood, IHistoryMeal } from '../ts/meals.model';

import * as actions from './meals.actions';

export const mealsFeatureKey = 'meals';

export interface IMealsState {
	isLoading: boolean;
	isLoadingHistory: boolean;
	breakfast: IMeal | null;
	lunch: IMeal | null;
	dinner: IMeal | null;
	foods: IFood[];
	historyMeals: IHistoryMeal[];
}

export const initialMealsState: IMealsState = {
	isLoading: true,
	isLoadingHistory: true,
	breakfast: null,
	lunch: null,
	dinner: null,
	foods: [],
	historyMeals: [],
};

export const mealsReducer = createReducer(
	initialMealsState,
	on(actions.setMealsIsLoading, (state, { payload: { isLoading } }) => ({
		...state,
		isLoading,
	})),
	on(actions.setMealsHistoryIsLoading, (state, { payload: { isLoading: isLoadingHistory } }) => ({
		...state,
		isLoadingHistory,
	})),
	on(actions.finishLoadingFoodList, (state, { payload: { foods } }) => ({ ...state, foods })),
	on(actions.finishLoadingDailyMeals, (state, { payload: { breakfast, lunch, dinner } }) => ({
		...state,
		breakfast,
		lunch,
		dinner,
		isLoading: false,
	})),
	on(actions.finishLoadingHistoryMeals, (state, { payload: { historyMeals } }) => ({
		...state,
		historyMeals,
		isLoadingHistory: false,
	})),
	on(actions.cancelMealsObservables, state => ({
		...state,
		isLoading: true,
		isLoadingHistory: true,
		breakfast: null,
		lunch: null,
		dinner: null,
		foods: [],
		historyMeals: [],
	}))
);
