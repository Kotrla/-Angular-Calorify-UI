import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MealsNgrxService } from '../../services/meals-ngrx.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IHistoryMeal, MealsRoutes, MealsStoreKey } from '../../ts/meals.model';

@Component({
	selector: 'app-meals-history',
	templateUrl: './meals-history.component.html',
	styleUrls: ['./meals-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealsHistoryComponent implements OnInit {
	isLoadingHistory$: Observable<boolean>;
	historyMeals$: Observable<IHistoryMeal[]>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private mealsNgrxService: MealsNgrxService
	) {}

	ngOnInit(): void {
		this.mealsNgrxService.loadAllMeals();

		this.isLoadingHistory$ = this.mealsNgrxService.selectFromMealsNgrxStore<boolean>(
			MealsStoreKey.IS_LOADING_HISTORY
		);
		this.historyMeals$ = this.mealsNgrxService.selectFromMealsNgrxStore<IHistoryMeal[]>(
			MealsStoreKey.HISTORY_MEALS
		);
	}

	onGoToDaily(): void {
		this.router.navigate(['../', MealsRoutes.DAILY], { relativeTo: this.activatedRoute });
	}
}
