import { ActionReducerMap } from '@ngrx/store';

import * as fromHome from '../../features/home/ngrx/home.reducer';
import * as fromMeals from '../../features/meals/ngrx/meals.reducer';
import * as fromProfile from '../../features/profile/ngrx/profile.reducer';
import * as fromWorkouts from '../../features/workouts/ngrx/workouts.reducer';

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
