import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { profileRoutes } from '../utils/profile.routes';
import { ProfileFeatureWithoutRoutingModule } from './profile-feature-without-routing.module';

@NgModule({
	imports: [ProfileFeatureWithoutRoutingModule, RouterModule.forChild(profileRoutes)],
})
export class ProfileFeatureModule {}
