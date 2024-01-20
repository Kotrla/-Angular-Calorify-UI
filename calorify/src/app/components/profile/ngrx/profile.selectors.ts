import { IProfileState } from './profile.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileStoreKey } from '../ts/profile.model';

export const selectProfileState = createFeatureSelector<IProfileState>('profile');

export const selectFromProfileStore = (property: ProfileStoreKey) => createSelector(
    selectProfileState,
    profileState => profileState[property]
)