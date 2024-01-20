import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/state/state';
import { IUser, ProfileStoreKey } from '../ts/profile.model';

import * as profileActions from '../ngrx/profile.actions';
import * as profileSelectors from '../ngrx/profile.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProfileNgrxService {

  constructor(
    private store: Store<IAppState>
  ) { }

  selectFromProfileNgrxStore<T>(selector: ProfileStoreKey): Observable<T> {
      return this.store.pipe(select(profileSelectors.selectFromProfileStore(selector))) as unknown as Observable<T>;
  }
  
  loadUserData(): void {
      this.store.dispatch(profileActions.loadUserData());
  }
  
  updateUserData(userData: IUser): void {
    const payload = { userData }

    this.store.dispatch(profileActions.updateUserData({ payload }));
  }
  
  updateUserMacros(userData: IUser): void {
    const payload = { userData }

    this.store.dispatch(profileActions.updateUserMacros({ payload }));
  }

  setProfileIsLoading(isLoading: boolean): void {
    const payload = { isLoading };

    this.store.dispatch(profileActions.setProfileIsLoading({ payload }))
  }
}
