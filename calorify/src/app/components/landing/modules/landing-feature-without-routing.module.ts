import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../landing.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingFeatureWithoutRoutingModule { }
