
import { ActionReducerMap } from '@ngrx/store';

import * as fromHome from '../components/home/ngrx/home.reducer'

export interface IAppState {
    home: fromHome.IHomeState
}

export const reducers: ActionReducerMap<IAppState> = {
    home: fromHome.homeReducer
}