import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WorkoutsHttpService } from '../services/workouts-http.service';

import * as workoutsActions from './workouts.actions';
import { map, switchMap, takeUntil } from 'rxjs';

@Injectable()
export class WorkoutsEffects {


    constructor(
    private actions$: Actions,
    private workoutsHttpService: WorkoutsHttpService
    ) { }
  
    loadDailyWorkouts$ = createEffect(() => this.actions$.pipe(
        ofType(workoutsActions.loadDailyWorkouts),
        switchMap(() => this.workoutsHttpService.getDailyWorkouts()
            .pipe(
                takeUntil(this.actions$.pipe(ofType(workoutsActions.cancelWorkoutsObservables)))
            )),
        map(response => {
            const { workout } = response;
      
            return workoutsActions.finishLoadingDailyWorkouts({ payload: { workout } })
        })
    )
    );
  
    loadAllWorkouts$ = createEffect(() => this.actions$.pipe(
        ofType(workoutsActions.loadAllWorkouts),
        switchMap(() => this.workoutsHttpService.getAllWorkouts()
            .pipe(
                takeUntil(this.actions$.pipe(ofType(workoutsActions.cancelWorkoutsObservables)))
            )),
        map(response => {
            const { workouts } = response;
      
            return workoutsActions.finishLoadingAllWorkouts({ payload: { workouts } })
        })
    )
    );

    addExercise$ = createEffect(() => this.actions$.pipe(
        ofType(workoutsActions.addExercise),
        switchMap(action => {
            const { exercise }  = action.payload;

            return this.workoutsHttpService.addExercise(exercise)
                .pipe(
                    takeUntil(this.actions$.pipe(ofType(workoutsActions.cancelWorkoutsObservables)))
                )}),
        map(() => workoutsActions.loadDailyWorkouts())
    )
    );
}
