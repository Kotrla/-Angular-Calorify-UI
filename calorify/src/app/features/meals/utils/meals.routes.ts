import { Routes } from '@angular/router';
import { MealsRoutes } from '../ts/meals.model';
import { MealsComponent } from '../meals.component';
import { DailyMealsComponent } from '../components/daily-meals/daily-meals.component';
import { MealsHistoryComponent } from '../components/meals-history/meals-history.component';

export const homeRoutes: Routes = [
	{
		path: '',
		component: MealsComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: MealsRoutes.DAILY },
			{ path: MealsRoutes.DAILY, component: DailyMealsComponent },
			{ path: MealsRoutes.HISTORY, component: MealsHistoryComponent },
		],
	},
];
