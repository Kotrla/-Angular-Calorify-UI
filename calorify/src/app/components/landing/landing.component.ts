import { Component, OnInit } from '@angular/core';
import { LoginFormMode } from './ts/landing.model';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
	formMode: LoginFormMode;

	ngOnInit(): void {
		this.setFormMode(LoginFormMode.LOGIN);
	}

	setFormMode(formMode: LoginFormMode): void {
		this.formMode = formMode;
	}

	public get getFormMode(): typeof LoginFormMode {
		return LoginFormMode;
	}
}
