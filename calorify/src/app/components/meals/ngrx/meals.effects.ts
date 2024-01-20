import { Injectable } from '@angular/core';
import { IMeal } from '../ts/models/meal.model';
import { IFood } from '../ts/models/food.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MealsStoreKey } from '../ts/enums/meals-store-key.enum';
import { map, switchMap, takeUntil, withLatestFrom } from 'rxjs';
import { MealsHttpService } from '../services/meals-http.service';
import { MealsNgrxService } from '../services/meals-ngrx.service';

import * as mealsActions from './meals.actions';

@Injectable()
export class MealsEffects {

    constructor(
        private actions$: Actions,
        private mealsHttpService: MealsHttpService,
        private mealsNgrxService: MealsNgrxService
    ) { }
  
    loadDailyMeals$ = createEffect(() => this.actions$.pipe(
        ofType(mealsActions.loadDailyMeals),
        switchMap(() => this.mealsHttpService.getDailyMeals()
            .pipe(
                takeUntil(this.actions$.pipe(ofType(mealsActions.cancelMealsObservables)))
            )),
        map(response => {
            const { breakfast, lunch, dinner } = response.meals.reduce((result, meal ) => {
                const { meal: mealName } = meal;

                switch (mealName) {
                case 'Breakfast':
                    return { ...result, breakfast: meal };
                case 'Lunch':
                    return { ...result, lunch: meal };
                case 'Dinner':
                    return { ...result, dinner: meal };
                default:
                    return result;
                }
            }, { breakfast: null, lunch: null, dinner: null } as unknown as { breakfast: IMeal; lunch: IMeal; dinner: IMeal });

            return mealsActions.finishLoadingDailyMeals({ payload: { breakfast, lunch, dinner } })
        })
    )
    );
  
    loadFoodList$ = createEffect(() => this.actions$.pipe(
        ofType(mealsActions.loadFoodList),
        switchMap(() => this.mealsHttpService.getFoodList()
            .pipe(
                takeUntil(this.actions$.pipe(ofType(mealsActions.cancelMealsObservables)))
            )),
        map(response => {
            const { foods } = response;
        
            return mealsActions.finishLoadingFoodList({ payload: { foods } })
        })
    )
    );

    addFoodToMeal$ = createEffect(() => this.actions$.pipe(
        ofType(mealsActions.addFoodToMeal),
        withLatestFrom(this.mealsNgrxService.selectFromMealsNgrxStore<IFood[]>(MealsStoreKey.FOODS)),
        switchMap(action => {
            const [ { payload }, foodList ] = action;
            const { food: foodName, meal, quantity } = payload;
            const foodItem = foodList.find(food => food.name === foodName) as IFood;

            return this.mealsHttpService.addFoodToMeal(meal, foodItem, quantity)
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(mealsActions.cancelMealsObservables)))
                )}),
        map(() => mealsActions.loadDailyMeals())
    )
    );
}
