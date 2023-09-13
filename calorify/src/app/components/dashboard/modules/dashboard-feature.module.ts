import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from '../utils/dashboard.routes';
import { DashboardFeatureWithoutRoutingModule } from './dashboard-feature-without-routing.module';

@NgModule({
    imports: [
        DashboardFeatureWithoutRoutingModule,
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardFeatureModule { }
