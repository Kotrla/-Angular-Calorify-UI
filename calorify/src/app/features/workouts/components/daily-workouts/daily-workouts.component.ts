import { IWorkout } from '../../ts/workouts.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AddExerciseModalComponent } from '../add-exercise-modal/add-exercise-modal.component';

@Component({
	selector: 'app-daily-workouts',
	templateUrl: './daily-workouts.component.html',
	styleUrls: ['./daily-workouts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWorkoutsComponent implements OnInit {
	@Input() workout: IWorkout | null;

	modalRef: BsModalRef;

	constructor(private modalService: BsModalService) {}

	ngOnInit(): void {}

	onOpenAddModal(): void {
		this.modalRef = this.modalService.show(AddExerciseModalComponent, { backdrop: 'static' });
	}
}
