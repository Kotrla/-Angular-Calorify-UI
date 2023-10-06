import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { WorkoutsFormService } from '../../services/workouts-form.service';
import { UtilService } from 'src/app/services/util.service';
import { WorkoutsNgrxService } from '../../services/workouts-ngrx.service';
import { IExercise } from '../../ts/models/workout.model';

@Component({
    selector: 'app-add-exercise-modal',
    templateUrl: './add-exercise-modal.component.html',
    styleUrls: ['./add-exercise-modal.component.scss']
})
export class AddExerciseModalComponent implements OnInit{

    exerciseForm: FormGroup;

    constructor(
      public bsModalRef: BsModalRef,
      private workoutsFormService: WorkoutsFormService,
      private workoutsNgrxService: WorkoutsNgrxService
    ) { }

    ngOnInit(): void {
        this.exerciseForm = this.workoutsFormService.buildExerciseModalForm();
    }

    onAddExercise(): void {
        const exercise = this.exerciseForm.value as IExercise;
    
        this.workoutsNgrxService.setWorkoutsIsLoading(true);
        this.workoutsNgrxService.addExercise(exercise);
        this.close();
    }

    close(): void {
        this.bsModalRef.hide();
    }

    public get getNameFormControl(): AbstractControl {
        return UtilService.getFormControl(this.exerciseForm, 'name');
    }

    public get getRepsFormControl(): AbstractControl {
        return UtilService.getFormControl(this.exerciseForm, 'reps');
    }

    public get getLoadFormControl(): AbstractControl {
        return UtilService.getFormControl(this.exerciseForm, 'load');
    }
}
