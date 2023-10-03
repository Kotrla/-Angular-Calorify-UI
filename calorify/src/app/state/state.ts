
import { ActionReducerMap } from '@ngrx/store';

import * as fromHome from '../components/home/ngrx/home.reducer';
import * as fromMeals from '../components/meals/ngrx/meals.reducer';

export interface IAppState {
    home: fromHome.IHomeState,
    meals: fromMeals.IMealsState
}

export const reducers: ActionReducerMap<IAppState> = {
    home: fromHome.homeReducer,
    meals: fromMeals.mealsReducer
}