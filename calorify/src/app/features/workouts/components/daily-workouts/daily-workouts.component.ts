import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WorkoutsNgrxService } from '../../services/workouts-ngrx.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IWorkout, WorkoutsRoutes, WorkoutsStoreKey } from '../../ts/workouts.model';
import { AddExerciseModalComponent } from '../add-exercise-modal/add-exercise-modal.component';

@Component({
	selector: 'app-daily-workouts',
	templateUrl: './daily-workouts.component.html',
	styleUrls: ['./daily-workouts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWorkoutsComponent implements OnInit {
	modalRef: BsModalRef;

	isLoading$: Observable<boolean>;
	dailyWorkout$: Observable<IWorkout>;

	constructor(
		private router: Router,
		private modalService: BsModalService,
		private activatedRoute: ActivatedRoute,
		private workoutsNgrxService: WorkoutsNgrxService
	) {}

	ngOnInit(): void {
		this.workoutsNgrxService.loadDailyWorkouts();

		this.isLoading$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<boolean>(
			WorkoutsStoreKey.IS_LOADING
		);
		this.dailyWorkout$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<IWorkout>(
			WorkoutsStoreKey.DAILY_WORKOUT
		);
	}

	onOpenAddModal(): void {
		this.modalRef = this.modalService.show(AddExerciseModalComponent, {
			backdrop: 'static',
			class: 'modal-sm',
		});
	}

	onGoToHistory(): void {
		this.router.navigate(['../', WorkoutsRoutes.HISTORY], { relativeTo: this.activatedRoute });
	}
}
