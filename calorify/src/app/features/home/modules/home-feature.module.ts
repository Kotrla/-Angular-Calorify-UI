import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoutes } from '../utils/home.routes';
import { HomeFeatureWithoutRoutingModule } from './home-feature-without-routing.module';

@NgModule({
	imports: [HomeFeatureWithoutRoutingModule, RouterModule.forChild(homeRoutes)],
})
export class HomeFeatureModule {}
