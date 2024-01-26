import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MealsStoreKey } from '../ts/meals.model';
import { IAppState } from '../../../core/state/state';

import * as mealsActions from '../ngrx/meals.actions';
import * as mealsSelectors from '../ngrx/meals.selectors';

@Injectable({
	providedIn: 'root',
})
export class MealsNgrxService {
	constructor(private store: Store<IAppState>) {}

	selectFromMealsNgrxStore<T>(selector: MealsStoreKey): Observable<T> {
		return this.store.pipe(select(mealsSelectors.selectFromMealsStore(selector))) as unknown as Observable<T>;
	}

	loadDailyMeals(): void {
		this.store.dispatch(mealsActions.loadDailyMeals());
	}

	loadAllMeals(): void {
		this.store.dispatch(mealsActions.loadAllMeals());
	}

	loadFoodList(): void {
		this.store.dispatch(mealsActions.loadFoodList());
	}

	cancelMealsObservables(): void {
		this.store.dispatch(mealsActions.cancelMealsObservables());
	}

	setMealsIsLoading(isLoading: boolean): void {
		const payload = { isLoading };

		this.store.dispatch(mealsActions.setMealsIsLoading({ payload }));
	}

	addFoodToMeal(meal: string, food: string, quantity: number): void {
		const payload = { meal, food, quantity };

		this.store.dispatch(mealsActions.addFoodToMeal({ payload }));
	}
}
