import { ActionReducerMap } from '@ngrx/store';

import * as fromHome from '../components/home/ngrx/home.reducer';
import * as fromMeals from '../components/meals/ngrx/meals.reducer';
import * as fromProfile from '../components/profile/ngrx/profile.reducer';
import * as fromWorkouts from '../components/workouts/ngrx/workouts.reducer';

export interface IAppState {
	home: fromHome.IHomeState;
	meals: fromMeals.IMealsState;
	workouts: fromWorkouts.IWorkoutsState;
	profile: fromProfile.IProfileState;
}

export const reducers: ActionReducerMap<IAppState> = {
	home: fromHome.homeReducer,
	meals: fromMeals.mealsReducer,
	workouts: fromWorkouts.workoutsReducer,
	profile: fromProfile.profileReducer,
};
