import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/state/state';

import * as workoutsActions from '../ngrx/workouts.actions';
import * as workoutsSelectors from '../ngrx/workouts.selectors';
import { WorkoutsStoreKey } from '../ts/enums/workouts-store-key.enum';
import { Observable } from 'rxjs';
import { IExercise } from '../ts/models/workout.model';

@Injectable({
    providedIn: 'root'
})
export class WorkoutsNgrxService {

    constructor(
      private store: Store<IAppState>
    ) { }

    selectFromWorkoutsNgrxStore<T>(selector: WorkoutsStoreKey): Observable<T> {
        return this.store.pipe(select(workoutsSelectors.selectFromWorkoutsStore(selector))) as unknown as Observable<T>;
    }
  
    loadAllWorkouts(): void {
        this.store.dispatch(workoutsActions.loadAllWorkouts())
    }

    loadDailyWorkouts(): void {
        this.store.dispatch(workoutsActions.loadDailyWorkouts());
    }

    addExercise(exercise: IExercise): void {
        const payload = { exercise };

        this.store.dispatch(workoutsActions.addExercise({ payload }))
    }

    setWorkoutsIsLoading(isLoading: boolean): void {
        const payload = { isLoading };

        this.store.dispatch(workoutsActions.setWorkoutsIsLoading({ payload }))
    }

    cancelWorkoutsObservables(): void {
        this.store.dispatch(workoutsActions.cancelWorkoutsObservables());
    }
}
