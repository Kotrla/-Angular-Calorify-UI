import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IMealsResponse, IFoodsResponse, IFood } from '../ts/meals.model';

const API = environment.api;

@Injectable({
	providedIn: 'root',
})
export class MealsHttpService {
	constructor(private http: HttpClient) {}

	getAllMeals(): Observable<IMealsResponse> {
		const getAllMeals = API + '/meals/userMeals';

		return this.http.get<IMealsResponse>(getAllMeals);
	}

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

		return this.http.post(addFoodToMealUrl, { meal, food, quantity });
	}
}
