import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { workoutsRoutes } from '../utils/workouts.routes';
import { WorkoutsFeatureWithoutRoutingModule } from './workouts-feature-without-routing.module';

@NgModule({
	imports: [RouterModule.forChild(workoutsRoutes), WorkoutsFeatureWithoutRoutingModule],
})
export class WorkoutsFeatureModule {}
