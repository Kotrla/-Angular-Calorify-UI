import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export interface IProfileState {
  isLoading: boolean;
}

export const initialProfileState: IProfileState = {
  isLoading: false,
};

export const profileReducer = createReducer(
  initialProfileState,
);

