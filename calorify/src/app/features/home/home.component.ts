import { Observable } from 'rxjs';
import { HomeNgrxService } from './services/home-ngrx.service';
import { IUser, IUserTarget, HomeStoreKey } from './ts/home.model';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
	userDetails$: Observable<IUser>;
	isLoading$: Observable<boolean>;
	userDaily$: Observable<IUserTarget>;
	userTargets$: Observable<IUserTarget[]>;

	constructor(private homeNgrxService: HomeNgrxService) {}

	ngOnInit(): void {
		this.homeNgrxService.loadUserDetails();
		this.homeNgrxService.loadUserTargets();
		this.homeNgrxService.LoadUserDaily();

		this.isLoading$ = this.homeNgrxService.selectFromHomeNgrxStore<boolean>(HomeStoreKey.IS_LOADING);
		this.userDetails$ = this.homeNgrxService.selectFromHomeNgrxStore<IUser>(HomeStoreKey.USER_DETAILS);
		this.userDaily$ = this.homeNgrxService.selectFromHomeNgrxStore<IUserTarget>(HomeStoreKey.USER_DAILY);
		this.userTargets$ = this.homeNgrxService.selectFromHomeNgrxStore<IUserTarget[]>(
			HomeStoreKey.USER_TARGETS
		);
	}

	ngOnDestroy(): void {
		this.homeNgrxService.cancelHomeObservables();
	}
}
