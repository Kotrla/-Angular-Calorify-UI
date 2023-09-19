import { IHomeState } from './home.reducer';
import { HomeStoreKey } from '../ts/enums/home-store-key.enum';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectHomeState = createFeatureSelector<IHomeState>('home');

export const selectFromHomeStore = (property: HomeStoreKey) => createSelector(
    selectHomeState,
    homeState => homeState[property]
)