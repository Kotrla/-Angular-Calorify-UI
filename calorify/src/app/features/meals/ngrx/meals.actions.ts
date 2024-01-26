import { createAction, props } from '@ngrx/store';
import { IFood, IHistoryMeal, IMeal } from '../ts/meals.model';

export const loadFoodList = createAction('[Meals] Load Food List');

export const loadAllMeals = createAction('[Meals] Load All Meals');

export const loadDailyMeals = createAction('[Meals] Load Daily Meals');

export const cancelMealsObservables = createAction('[Meals] Cancel Meals Observables');

export const setMealsHistoryIsLoading = createAction(
	'[Meals] Set Meals History isLoading',
	props<{ payload: { isLoading: boolean } }>()
);

export const setMealsIsLoading = createAction(
	'[Meals] Set Meals isLoading',
	props<{ payload: { isLoading: boolean } }>()
);

export const finishLoadingFoodList = createAction(
	'[Meals] Finish Loading Food List',
	props<{ payload: { foods: IFood[] } }>()
);

export const finishLoadingHistoryMeals = createAction(
	'[Meals] Finish Loading History Meals',
	props<{ payload: { historyMeals: IHistoryMeal[] } }>()
);

export const finishLoadingDailyMeals = createAction(
	'[Meals] Finish Loading Daily Meals',
	props<{ payload: { breakfast: IMeal; lunch: IMeal; dinner: IMeal } }>()
);

export const addFoodToMeal = createAction(
	'[Meals] Add Food to Meal',
	props<{ payload: { meal: string; quantity: number; food: string } }>()
);
