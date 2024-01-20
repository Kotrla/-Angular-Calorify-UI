import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../state/state';
import { EffectsModule } from '@ngrx/effects';
import { RoutesEnum } from '../ts/enums/routes.enum';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guards/auth.guard';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeEffects } from '../components/home/ngrx/home.effects';

const routes: Routes = [
    {
        path: RoutesEnum.LOGIN, loadChildren: () => import('../components/landing/modules/landing-feature.module')
            .then(m => m.LandingFeatureModule), pathMatch: 'full'
    },
    {
        path: RoutesEnum.DASHBOARD, loadChildren: () => import('../components/dashboard/modules/dashboard-feature.module')
            .then(m => m.DashboardFeatureModule), canActivate: [ AuthGuard ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([ HomeEffects ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
    }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
