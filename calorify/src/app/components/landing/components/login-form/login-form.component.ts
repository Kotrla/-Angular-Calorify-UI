import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';
import { ILoginForm } from '../../ts/models/login-form.model';
import { LoginFormService } from './services/login-form.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AngularFormStatus } from 'src/app/ts/enums/angular-form-status';

@UntilDestroy()
@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    loginForm: FormGroup;
    initialFormValues: ILoginForm;
    isFormChanged: boolean;
    isFormStatusValid: boolean;

    constructor(
        private router: Router,
        private utilService: UtilService,
        private authService: AuthService,
        private loginFormService: LoginFormService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.loginFormService.buildForm();
        this.initialFormValues = this.loginForm.value;

        this.watchForm();
    }

    watchForm(): void {
        this.loginForm.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe(formValues => {
                this.isFormChanged = this.utilService.areFormsChanged(this.initialFormValues, formValues);
                this.isFormStatusValid = this.loginForm.status === AngularFormStatus.VALID;
            });
    }

    onLogin(): void {
        const { email, password } = this.loginForm.value;
        
        this.authService.login(email, password)
            .pipe(untilDestroyed(this))
            .subscribe(login => !!login ? this.router.navigate(['/v1']) : '');
    }

    public get getEmailControl(): FormControl {
        return this.loginForm.controls['email'] as FormControl;
    }

    public get getPasswordControl(): FormControl {
        return this.loginForm.controls['password'] as FormControl;
    }
}
