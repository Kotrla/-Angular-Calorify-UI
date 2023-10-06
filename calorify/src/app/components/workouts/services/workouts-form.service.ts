import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class WorkoutsFormService {

    constructor(
    private readonly formBuilder: FormBuilder
    ) { }

    buildExerciseModalForm(): FormGroup {
        return this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(20)]],
            reps: [0, [Validators.required, Validators.min(0), Validators.max(200)]],
            load: [0, [Validators.required, Validators.min(0), Validators.max(700)]]
        });
    }
}
