import { Injectable } from '@angular/core';
import { MealsService } from '../services/meals.service';
import { IFood, MealsStoreKey } from '../ts/meals.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, map, switchMap, takeUntil, withLatestFrom } from 'rxjs';
import { MealsHttpService } from '../services/meals-http.service';
import { MealsNgrxService } from '../services/meals-ngrx.service';

import * as mealsActions from './meals.actions';
import { HomeHttpService } from '../../home/services/home-http.service';
import { IUserTarget } from '../../home/ts/home.model';

@Injectable()
export class MealsEffects {
	constructor(
		private actions$: Actions,
		private mealsService: MealsService,
		private homeHttpService: HomeHttpService,
		private mealsHttpService: MealsHttpService,
		private mealsNgrxService: MealsNgrxService
	) {}

	loadDailyMeals$ = createEffect(() =>
		this.actions$.pipe(
			ofType(mealsActions.loadDailyMeals),
			switchMap(() =>
				this.mealsHttpService
					.getDailyMeals()
					.pipe(takeUntil(this.actions$.pipe(ofType(mealsActions.cancelMealsObservables))))
			),
			map(({ meals }) => {
				const { breakfast, lunch, dinner } = this.mealsService.getMealsByCategory(meals);

				return mealsActions.finishLoadingDailyMeals({ payload: { breakfast, lunch, dinner } });
			})
		)
	);

	loadAllMeals$ = createEffect(() =>
		this.actions$.pipe(
			ofType(mealsActions.loadAllMeals),
			switchMap(() =>
				forkJoin([this.mealsHttpService.getAllMeals(), this.homeHttpService.getUserTargets()]).pipe(
					takeUntil(this.actions$.pipe(ofType(mealsActions.cancelMealsObservables)))
				)
			),
			map(([{ meals }, { targets }]) => {
				const targetsRecord: Record<string, IUserTarget> = targets.reduce(
					(acc, target) => ({ ...acc, [target.dateCreated]: target }),
					{}
				);
				const historyMeals = this.mealsService.getAllMealsByDate(meals, targetsRecord).reverse();

				return mealsActions.finishLoadingHistoryMeals({ payload: { historyMeals } });
			})
		)
	);

	loadFoodList$ = createEffect(() =>
		this.actions$.pipe(
			ofType(mealsActions.loadFoodList),
			switchMap(() =>
				this.mealsHttpService
					.getFoodList()
					.pipe(takeUntil(this.actions$.pipe(ofType(mealsActions.cancelMealsObservables))))
			),
			map(({ foods }) => mealsActions.finishLoadingFoodList({ payload: { foods } }))
		)
	);

	addFoodToMeal$ = createEffect(() =>
		this.actions$.pipe(
			ofType(mealsActions.addFoodToMeal),
			withLatestFrom(this.mealsNgrxService.selectFromMealsNgrxStore<IFood[]>(MealsStoreKey.FOODS)),
			switchMap(([{ payload }, foodList]) => {
				const { food: foodName, meal, quantity } = payload;
				const foodItem = foodList.find(food => food.name === foodName) as IFood;

				return this.mealsHttpService
					.addFoodToMeal(meal, foodItem, quantity)
					.pipe(takeUntil(this.actions$.pipe(ofType(mealsActions.cancelMealsObservables))));
			}),
			map(() => mealsActions.loadDailyMeals())
		)
	);
}
