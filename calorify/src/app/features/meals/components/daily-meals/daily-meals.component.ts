import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsNgrxService } from '../../services/meals-ngrx.service';
import { IMeal, MealsRoutes, MealsStoreKey } from '../../ts/meals.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-daily-meals',
	templateUrl: './daily-meals.component.html',
	styleUrls: ['./daily-meals.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyMealsComponent implements OnInit {
	isLoading$: Observable<boolean>;
	breakfastMeals$: Observable<IMeal>;
	lunchMeals$: Observable<IMeal>;
	dinnerMeals$: Observable<IMeal>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private mealsNgrxService: MealsNgrxService
	) {}

	ngOnInit(): void {
		this.mealsNgrxService.loadDailyMeals();

		this.isLoading$ = this.mealsNgrxService.selectFromMealsNgrxStore<boolean>(MealsStoreKey.IS_LOADING);
		this.breakfastMeals$ = this.mealsNgrxService.selectFromMealsNgrxStore<IMeal>(MealsStoreKey.BREAKFAST);
		this.lunchMeals$ = this.mealsNgrxService.selectFromMealsNgrxStore<IMeal>(MealsStoreKey.LUNCH);
		this.dinnerMeals$ = this.mealsNgrxService.selectFromMealsNgrxStore<IMeal>(MealsStoreKey.DINNER);
	}

	onGoToHistory(): void {
		this.router.navigate(['../', MealsRoutes.HISTORY], { relativeTo: this.activatedRoute });
	}
}
