import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    emailFormControl: FormControl;
    passwordFormControl: FormControl;

    constructor() { }

    ngOnInit(): void {
        this.emailFormControl = new FormControl('');
        this.passwordFormControl = new FormControl('');
    }
}
