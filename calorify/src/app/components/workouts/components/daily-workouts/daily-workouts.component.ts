import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IWorkout } from '../../ts/models/workout.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddExerciseModalComponent } from '../add-exercise-modal/add-exercise-modal.component';

@Component({
    selector: 'app-daily-workouts',
    templateUrl: './daily-workouts.component.html',
    styleUrls: [ './daily-workouts.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyWorkoutsComponent implements OnInit{

  @Input() workout: IWorkout | null;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
      console.log(this.workout);
  }

  onOpenAddModal(): void {
      this.modalRef = this.modalService.show(AddExerciseModalComponent, { backdrop: 'static' })
  }
}
