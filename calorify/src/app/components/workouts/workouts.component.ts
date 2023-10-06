import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewMode } from '../meals/ts/enums/view-mode.enum';
import { WorkoutsNgrxService } from './services/workouts-ngrx.service';
import { WorkoutsStoreKey } from './ts/enums/workouts-store-key.enum';
import { IWorkout } from './ts/models/workout.model';

@Component({
    selector: 'app-workouts',
    templateUrl: './workouts.component.html',
    styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

    workoutsViewMode: ViewMode = ViewMode.DAILY;

    isLoading$: Observable<boolean>
    dailyWorkout$: Observable<IWorkout>;
    allWorkouts$: Observable<IWorkout[]>;
    historyIsLoading$: Observable<boolean>;

    constructor(private workoutsNgrxService: WorkoutsNgrxService) { }

    ngOnInit(): void {
        this.workoutsNgrxService.loadDailyWorkouts();

        this.isLoading$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<boolean>(WorkoutsStoreKey.IS_LOADING);
        this.dailyWorkout$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<IWorkout>(WorkoutsStoreKey.DAILY_WORKOUT);
        this.historyIsLoading$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<boolean>(WorkoutsStoreKey.HISTORY_IS_LOADING);
        this.allWorkouts$ = this.workoutsNgrxService.selectFromWorkoutsNgrxStore<IWorkout[]>(WorkoutsStoreKey.ALL_WORKOUTS);
    }

    ngOnDestroy(): void {
        this.workoutsNgrxService.cancelWorkoutsObservables();
    }

    setWorkoutsViewMode(workoutsViewMode: ViewMode): void {
        this.workoutsViewMode = workoutsViewMode;
    }

    public get getViewMode(): typeof ViewMode {
        return ViewMode;
    }
}
