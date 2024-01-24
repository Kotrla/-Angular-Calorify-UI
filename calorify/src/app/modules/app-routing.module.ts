import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../core/state/state';
import { RoutesEnum } from '../core/ts/app.model';
import { AuthGuard } from '../core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Routes = [
	{
		path: RoutesEnum.LOGIN,
		loadChildren: () =>
			import('../features/landing/modules/landing-feature.module').then(m => m.LandingFeatureModule),
		pathMatch: 'full',
	},
	{
		path: RoutesEnum.DASHBOARD,
		loadChildren: () =>
			import('../features/dashboard/modules/dashboard-feature.module').then(m => m.DashboardFeatureModule),
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot(),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
