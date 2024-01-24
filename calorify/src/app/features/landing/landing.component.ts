import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginFormMode } from './ts/landing.model';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit {
	formMode: LoginFormMode;

	ngOnInit(): void {
		this.onSetFormMode(LoginFormMode.LOGIN);
	}

	onSetFormMode(formMode: LoginFormMode): void {
		this.formMode = formMode;
	}

	public get getFormMode(): typeof LoginFormMode {
		return LoginFormMode;
	}
}
