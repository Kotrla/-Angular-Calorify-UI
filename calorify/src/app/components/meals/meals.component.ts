import { Observable } from 'rxjs';
import { IMeal } from './ts/models/meal.model';
import { Component, OnInit } from '@angular/core';
import { ViewMode } from './ts/enums/view-mode.enum';
import { MealsStoreKey } from './ts/enums/meals-store-key.enum';
import { MealsNgrxService } from './services/meals-ngrx.service';

@Component({
    selector: 'app-meals',
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

    mealsViewMode: ViewMode = ViewMode.DAILY;

    isLoading$: Observable<boolean>;
    breakfastMeals$: Observable<IMeal>;
    lunchMeals$: Observable<IMeal>;
    dinnerMeals$: Observable<IMeal>;

    constructor(private mealsNgrxService: MealsNgrxService) { }

    ngOnInit(): void {
        this.mealsNgrxService.loadDailyMeals();

        this.isLoading$ = this.mealsNgrxService.selectFromMealsNgrxStore<boolean>(MealsStoreKey.IS_LOADING);
        this.breakfastMeals$ = this.mealsNgrxService.selectFromMealsNgrxStore<IMeal>(MealsStoreKey.BREAKFAST);
        this.lunchMeals$ = this.mealsNgrxService.selectFromMealsNgrxStore<IMeal>(MealsStoreKey.LUNCH);
        this.dinnerMeals$ = this.mealsNgrxService.selectFromMealsNgrxStore<IMeal>(MealsStoreKey.DINNER);
    }

    setMealsViewMode(mealsViewMode: ViewMode): void {
        this.mealsViewMode = mealsViewMode;
    }

    public get getViewMode(): typeof ViewMode {
        return ViewMode;
    }
}
