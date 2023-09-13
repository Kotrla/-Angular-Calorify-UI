import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoutes } from '../utils/meals.routes';
import { MealsFeatureWithoutRoutingModule } from './meals-feature-without-routing.module';

@NgModule({
    imports: [
        MealsFeatureWithoutRoutingModule,
        RouterModule.forChild(homeRoutes)
    ]
})
export class MealsFeatureModule { }
