import { Routes } from '@angular/router';
import { RoutesEnum } from 'src/app/ts/enums/routes.enum';
import { DashboardComponent } from '../dashboard.component';

export const dashboardRoutes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {
                path: RoutesEnum.HOME, loadChildren: () => import('../../home/modules/home-feature.module').then(m => m.HomeFeatureModule)    
            },
            {
                path: RoutesEnum.MEALS, loadChildren: () => import('../../meals/modules/meals-feature.module').then(m => m.MealsFeatureModule)    
            },
            {
                path: RoutesEnum.WORKOUTS, loadChildren: () => import('../../workouts/modules/workouts-feature.module').then(m => m.WorkoutsFeatureModule)    
            },
            {
                path: RoutesEnum.PROFILE, loadChildren: () => import('../../profile/modules/profile-feature.module').then(m => m.ProfileFeatureModule)    
            }
        ]
    }
]