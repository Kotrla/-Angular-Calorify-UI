import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { workoutsRoutes } from '../utils/workouts.routes';
import { WorkoutsFeatureWithoutRoutingModule } from './workouts-feature-without-routing.module';

@NgModule({
	imports: [WorkoutsFeatureWithoutRoutingModule, RouterModule.forChild(workoutsRoutes)],
})
export class WorkoutsFeatureModule {}
