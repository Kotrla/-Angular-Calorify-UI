import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFood } from '../ts/models/food.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMealsResponse } from '../ts/models/meals-response.model';
import { IFoodsResponse } from '../ts/models/foods-response.model';

const API = environment.api;

@Injectable({
    providedIn: 'root'
})
export class MealsHttpService {

    constructor(private http: HttpClient) { }

    getDailyMeals(): Observable<IMealsResponse> {
        const getDailyMealsUrl = API + '/meals/';

        return this.http.get<IMealsResponse>(getDailyMealsUrl);
    }

    getFoodList(): Observable<IFoodsResponse> {
        const getFoodListUrl = API + '/foods/';

        return this.http.get<IFoodsResponse>(getFoodListUrl);
    }

    addFoodToMeal(meal: string, food: IFood, quantity: number): Observable<any> {
        const addFoodToMealUrl = API + '/meals/add/';

        return this.http.post<any>(addFoodToMealUrl, { meal, food, quantity });
    }
}
