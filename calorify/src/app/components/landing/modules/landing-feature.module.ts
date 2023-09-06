import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { landingRoutes } from '../utils/landing.routes';
import { LandingFeatureWithoutRoutingModule } from './landing-feature-without-routing.module';

@NgModule({
    imports: [
        LandingFeatureWithoutRoutingModule,
        RouterModule.forChild(landingRoutes)
    ]
})
export class LandingFeatureModule { }
