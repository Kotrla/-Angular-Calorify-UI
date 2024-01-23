import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile.component';
import { ProfileEffects } from '../ngrx/profile.effects';
import { InputComponent } from '../../shared/ui/input/input.component';
import { SelectComponent } from '../../shared/ui/select/select.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { profileFeatureKey, profileReducer } from '../ngrx/profile.reducer';

@NgModule({
	declarations: [ProfileComponent],
	imports: [
		CommonModule,
		InputComponent,
		SelectComponent,
		ButtonComponent,
		ReactiveFormsModule,
		EffectsModule.forFeature([ProfileEffects]),
		StoreModule.forFeature(profileFeatureKey, profileReducer),
	],
})
export class ProfileFeatureWithoutRoutingModule {}
