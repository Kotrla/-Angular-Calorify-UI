import { createAction, props } from '@ngrx/store';
import { IUser } from '../ts/models/user.model';
import { IUserTargets } from '../ts/models/targets.model';

export const setHomeIsLoading = createAction(
    '[Home] Set Home isLoading',
    props<{ payload: { isLoading: boolean } }>()
);

export const cancelHomeObservables = createAction(
    '[Home] Cancel Home Observables'
)

export const loadUserDetails = createAction(
    '[Home] Load User Details'
);

export const loadUserTargets = createAction(
    '[Home] Load User Targets'
);

export const loadUserDaily = createAction(
    '[Home] Load User Daily'
);

export const finishLoadingUser = createAction(
    '[Home] Finish Loading User',
    props<{ payload: { userData: IUser } }>()
);

export const finishLoadingUserTargets = createAction(
    '[Home] Finish Loading User Targets',
    props<{ payload: { targets: IUserTargets[] } }>()
);

export const finishLoadingUserDaily = createAction(
    '[Home] Finish Loading User Daily',
    props<{ payload: { daily: IUserTargets } }>()
);
