import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/state/state';
import { HomeStoreKey } from '../ts/home.model';

import * as homeSelectors from '../ngrx/home.selectors';
import * as homeActions from '../ngrx/home.actions';

@Injectable({
	providedIn: 'root',
})
export class HomeNgrxService {
	constructor(private store: Store<IAppState>) {}

	selectFromHomeNgrxStore<T>(selector: HomeStoreKey): Observable<T> {
		return this.store.pipe(select(homeSelectors.selectFromHomeStore(selector))) as unknown as Observable<T>;
	}

	setHomeIsLoading(isLoading: boolean): void {
		const payload = { isLoading };

		this.store.dispatch(homeActions.setHomeIsLoading({ payload }));
	}

	loadUserDetails(): void {
		this.store.dispatch(homeActions.loadUserDetails());
	}

	loadUserTargets(): void {
		this.store.dispatch(homeActions.loadUserTargets());
	}

	LoadUserDaily(): void {
		this.store.dispatch(homeActions.loadUserDaily());
	}

	cancelHomeObservables(): void {
		this.store.dispatch(homeActions.cancelHomeObservables());
	}
}
