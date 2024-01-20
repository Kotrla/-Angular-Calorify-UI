import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileHttpService } from '../services/profile-http.service';
import { map, switchMap, takeUntil } from 'rxjs';

import * as profileActions from './profile.actions';

@Injectable()
export class ProfileEffects {

  constructor(
    private actions$: Actions,
    private profileHttpService: ProfileHttpService
  ) { }

  loadUserData$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.loadUserData),
        switchMap(() => this.profileHttpService.getUserData()
            .pipe(
                takeUntil(this.actions$.pipe(ofType(profileActions.cancelProfileObservables)))
            )),
        map(({ userData }) => profileActions.finishLoadingUserData({ payload: { userData } }))
    )
  );

  updateUserData$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.updateUserData),
        switchMap(({payload}) => this.profileHttpService.updateUserData(payload.userData)
            .pipe(
                takeUntil(this.actions$.pipe(ofType(profileActions.cancelProfileObservables)))
            )),
        map(() => profileActions.loadUserData())
    )
  );

  updateUserMacros$ = createEffect(() => this.actions$.pipe(
        ofType(profileActions.updateUserMacros),
        switchMap(({payload}) => this.profileHttpService.updateUserMacros(payload.userData)
            .pipe(
                takeUntil(this.actions$.pipe(ofType(profileActions.cancelProfileObservables)))
            )),
        map(() => profileActions.loadUserData())
    )
  );
}
