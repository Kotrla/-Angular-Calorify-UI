import { createReducer, on } from '@ngrx/store';
import { IUser, IUserTarget } from '../ts/home.model';

import * as actions from './home.actions';

export const homeFeatureKey = 'home';

export interface IHomeState {
	isLoading: boolean;
	userData: IUser | null;
	targets: IUserTarget[];
	daily: IUserTarget | null;
}

export const initialHomeState: IHomeState = {
	userData: null,
	isLoading: true,
	daily: null,
	targets: [],
};

export const homeReducer = createReducer(
	initialHomeState,
	on(actions.setHomeIsLoading, (state, { payload: { isLoading } }) => ({
		...state,
		isLoading,
	})),
	on(actions.finishLoadingUserDaily, (state, { payload: { daily } }) => ({
		...state,
		daily,
	})),
	on(actions.finishLoadingUserTargets, (state, { payload: { targets } }) => ({
		...state,
		targets,
	})),
	on(actions.cancelHomeObservables, state => ({
		...state,
		isLoading: true,
		daily: null,
		targets: [],
	})),
	on(actions.finishLoadingUser, (state, { payload: { userData } }) => ({
		...state,
		userData,
		isLoading: false,
	}))
);
