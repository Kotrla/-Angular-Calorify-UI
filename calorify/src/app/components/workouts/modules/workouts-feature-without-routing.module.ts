import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from '../workouts.component';
import { WorkoutsEffects } from '../ngrx/workouts.effects';
import { workoutsFeatureKey, workoutsReducer } from '../ngrx/workouts.reducer';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { DailyWorkoutsComponent } from '../components/daily-workouts/daily-workouts.component';
import { AddExerciseModalComponent } from '../components/add-exercise-modal/add-exercise-modal.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ExerciseComponent } from '../components/exercise/exercise.component';
import { WorkoutHistoryItemComponent } from '../components/workout-history-item/workout-history-item.component';
import { WorkoutHistoryComponent } from '../components/workout-history/workout-history.component';

@NgModule({
    declarations: [
        WorkoutsComponent,
        ExerciseComponent,
        DailyWorkoutsComponent,
        WorkoutHistoryComponent,
        AddExerciseModalComponent,
        WorkoutHistoryItemComponent
    ],
    imports: [
        CommonModule,
        InputComponent,
        ButtonComponent,
        ModalModule.forRoot(),
        EffectsModule.forFeature([WorkoutsEffects]),
        StoreModule.forFeature(workoutsFeatureKey, workoutsReducer)
    ],
    providers: [BsModalRef, BsModalService]
})
export class WorkoutsFeatureWithoutRoutingModule { }