import { IUser } from '../ts/profile.model';
import { createAction, props } from '@ngrx/store';

export const loadUserData = createAction('[Profile] Load User Data');

export const cancelProfileObservables = createAction('[Profile] Cancel Profile Observables');

export const setProfileIsLoading = createAction(
	'[Profile] Set Profile isLoading',
	props<{ payload: { isLoading: boolean } }>()
);

export const finishLoadingUserData = createAction(
	'[Profile] Finish Loading User Data',
	props<{ payload: { userData: IUser } }>()
);

export const updateUserData = createAction(
	'[Profile] Update User Data',
	props<{ payload: { userData: IUser } }>()
);

export const updateUserMacros = createAction(
	'[Profile] Update User Macros',
	props<{ payload: { userData: IUser } }>()
);
