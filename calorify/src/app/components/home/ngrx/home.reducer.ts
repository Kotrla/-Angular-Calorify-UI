import { createReducer, on } from '@ngrx/store';
import { IUser } from '../ts/models/user.model';
import { IUserTargets } from '../ts/models/targets.model';

import * as actions from './home.actions';

export const homeFeatureKey = 'home';

export interface IHomeState {
    isLoading: boolean;
    user: IUser | null;
    daily: IUserTargets | null;
    targets: IUserTargets[];
}

export const initialHomeState: IHomeState = {
    user: null,
    isLoading: true,
    daily: null,
    targets: []
};

export const homeReducer = createReducer(
    initialHomeState,
    on(actions.setHomeIsLoading, (state, { payload }) => ({ ...state, isLoading: payload.isLoading })),
    on(actions.finishLoadingUserDaily, (state, { payload }) => ({ ...state, daily: payload.daily })),
    on(actions.finishLoadingUserTargets, (state, { payload }) => ({ ...state, targets: payload.targets })),
    on(actions.cancelHomeObservables, (state) => ({ ...state, isLoading: true, daily: null, targets: [] })),
    on(actions.finishLoadingUser, (state, { payload }) => ({ ...state, user: payload.user, isLoading: false }))
);
