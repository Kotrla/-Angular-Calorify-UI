import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from '../landing.component';
import { InputComponent } from '../../../shared/ui/input/input.component';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { RegisterFormComponent } from '../components/register-form/register-form.component';

@NgModule({
	declarations: [LandingComponent, LoginFormComponent, RegisterFormComponent],
	imports: [CommonModule, InputComponent, ButtonComponent, ReactiveFormsModule],
})
export class LandingFeatureWithoutRoutingModule {}
