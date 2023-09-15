import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginFormService {

    constructor(
    private formBuilder: FormBuilder
    ) { }

    buildForm(): FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.maxLength(25), Validators.email, Validators.required]],
            password: ['', [Validators.maxLength(15), Validators.minLength(3), Validators.required]]
        })
    }
}
