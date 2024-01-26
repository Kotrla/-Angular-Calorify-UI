import { Injectable } from '@angular/core';
import { map, switchMap, takeUntil } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeHttpService } from '../services/home-http.service';

import * as homeActions from './home.actions';

@Injectable()
export class HomeEffects {
	constructor(private actions$: Actions, private homeHttpService: HomeHttpService) {}

	loadUserDetails$ = createEffect(() =>
		this.actions$.pipe(
			ofType(homeActions.loadUserDetails),
			switchMap(() =>
				this.homeHttpService
					.getUserDetails()
					.pipe(takeUntil(this.actions$.pipe(ofType(homeActions.cancelHomeObservables))))
			),
			map(({ userData }) => homeActions.finishLoadingUser({ payload: { userData } }))
		)
	);

	loadUserTargets$ = createEffect(() =>
		this.actions$.pipe(
			ofType(homeActions.loadUserTargets),
			switchMap(() =>
				this.homeHttpService
					.getUserTargets()
					.pipe(takeUntil(this.actions$.pipe(ofType(homeActions.cancelHomeObservables))))
			),
			map(({ targets }) => homeActions.finishLoadingUserTargets({ payload: { targets } }))
		)
	);

	loadUserDaily$ = createEffect(() =>
		this.actions$.pipe(
			ofType(homeActions.loadUserDaily),
			switchMap(() =>
				this.homeHttpService
					.getUserDaily()
					.pipe(takeUntil(this.actions$.pipe(ofType(homeActions.cancelHomeObservables))))
			),
			map(({ daily }) => homeActions.finishLoadingUserDaily({ payload: { daily } }))
		)
	);
}
