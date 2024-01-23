import { IProfileState } from './profile.reducer';
import { ProfileStoreKey } from '../ts/profile.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectProfileState = createFeatureSelector<IProfileState>('profile');

export const selectFromProfileStore = (property: ProfileStoreKey) =>
	createSelector(selectProfileState, profileState => profileState[property]);
