import { NgModule } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', loadChildren: () => import('../components/landing/modules/landing-feature.module').then(m => m.LandingFeatureModule),
        pathMatch: 'full'
    },
    {
        path: 'home', loadChildren: () => import('../components/home/modules/home-feature.module').then(m => m.HomeFeatureModule),
        canActivate: [ AuthGuard ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
