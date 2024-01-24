import { BsModalRef } from 'ngx-bootstrap/modal';
import { IExercise } from '../../ts/workouts.model';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UtilService } from '../../../../core/services/util.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WorkoutsFormService } from '../../services/workouts-form.service';
import { WorkoutsNgrxService } from '../../services/workouts-ngrx.service';

@Component({
	selector: 'app-add-exercise-modal',
	templateUrl: './add-exercise-modal.component.html',
	styleUrls: ['./add-exercise-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExerciseModalComponent implements OnInit {
	exerciseForm: FormGroup;

	constructor(
		public bsModalRef: BsModalRef,
		private workoutsFormService: WorkoutsFormService,
		private workoutsNgrxService: WorkoutsNgrxService
	) {}

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
