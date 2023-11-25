import { IProfileState } from './profile.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileStoreKey } from '../ts/enums/profile-store-key.enum';

export const selectProfileState = createFeatureSelector<IProfileState>('profile');

export const selectFromWorkoutsStore = (property: ProfileStoreKey) => createSelector(
    selectProfileState,
    profileState => profileState[property]
)