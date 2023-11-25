import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile.component';
import { ProfileEffects } from '../ngrx/profile.effects';
import { profileFeatureKey, profileReducer } from '../ngrx/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([ProfileEffects]),
        StoreModule.forFeature(profileFeatureKey, profileReducer)
    ]
})
export class ProfileFeatureWithoutRoutingModule { }