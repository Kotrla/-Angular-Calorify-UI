import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('../components/landing/modules/landing-feature.module').then(m => m.LandingFeatureModule) },
    { path: 'home', loadChildren: () => import('../components/home/modules/home-feature.module').then(m => m.HomeFeatureModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
