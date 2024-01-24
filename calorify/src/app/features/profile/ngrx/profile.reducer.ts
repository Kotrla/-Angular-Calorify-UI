import { IUser } from '../ts/profile.model';
import { createReducer, on } from '@ngrx/store';

import * as actions from './profile.actions';

export const profileFeatureKey = 'profile';

export interface IProfileState {
	isLoading: boolean;
	userData: IUser | null;
}

export const initialProfileState: IProfileState = {
	isLoading: false,
	userData: null,
};

export const profileReducer = createReducer(
	initialProfileState,
	on(actions.setProfileIsLoading, (state, { payload }) => ({ ...state, isLoading: payload.isLoading })),
	on(actions.finishLoadingUserData, (state, { payload }) => ({
		...state,
		userData: payload.userData,
		isLoading: false,
	})),
	on(actions.cancelProfileObservables, state => ({ ...state, isLoading: true, userData: null }))
);
