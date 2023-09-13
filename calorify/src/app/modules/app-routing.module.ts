import { NgModule } from '@angular/core';
import { AuthGuard } from '../services/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', loadChildren: () => import('../components/landing/modules/landing-feature.module')
            .then(m => m.LandingFeatureModule), pathMatch: 'full'
    },
    {
        path: 'v1', loadChildren: () => import('../components/dashboard/modules/dashboard-feature.module')
            .then(m => m.DashboardFeatureModule), canActivate: [ AuthGuard ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
