import { Component, OnInit } from '@angular/core';
import { LoginFormMode } from './ts/enums/login-form-mode.enum';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    formMode: LoginFormMode;

    constructor() { }

    ngOnInit(): void {
        this.formMode = this.getFormMode.LOGIN;
    }

    setFormMode(formMode: LoginFormMode): void {
        this.formMode = formMode;
    }

    public get getFormMode(): typeof LoginFormMode {
        return LoginFormMode;
    } 
}
