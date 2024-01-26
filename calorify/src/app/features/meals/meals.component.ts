import { MealsNgrxService } from './services/meals-ngrx.service';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-meals',
	templateUrl: './meals.component.html',
	styleUrls: ['./meals.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealsComponent implements OnDestroy {
	constructor(private mealsNgrxService: MealsNgrxService) {}

	ngOnDestroy(): void {
		this.mealsNgrxService.cancelMealsObservables();
	}
}
