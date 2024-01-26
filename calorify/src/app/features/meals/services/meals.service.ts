import { Injectable } from '@angular/core';
import { IUserTarget } from '../../home/ts/home.model';
import { IHistoryMeal, IMeal, IUserMeals } from '../ts/meals.model';

@Injectable({
	providedIn: 'root',
})
export class MealsService {
	constructor() {}

	getMealsByCategory(meals: IMeal[]): { breakfast: IMeal; lunch: IMeal; dinner: IMeal } {
		return meals.reduce(
			(result, meal) => {
				const { meal: mealName } = meal;

				if (['Breakfast', 'Lunch', 'Dinner'].includes(mealName)) {
					result[mealName.toLowerCase() as keyof typeof result] = meal;
				}

				return result;
			},
			{
				breakfast: null as unknown as IMeal,
				lunch: null as unknown as IMeal,
				dinner: null as unknown as IMeal,
			}
		);
	}

	getAllMealsByDate(meals: IMeal[], targets: Record<string, IUserTarget>): IHistoryMeal[] {
		const groupedMeals = meals.reduce((result, meal) => {
			const { dateCreated, meal: mealName } = meal;

			if (!result[dateCreated]) {
				result[dateCreated] = {
					dateCreated,
					targets: null,
					userMeals: {
						breakfast: null,
						lunch: null,
						dinner: null,
					},
				};
			}

			const mealKey = mealName.toLowerCase() as keyof IUserMeals;

			result[dateCreated].userMeals[mealKey] = meal;
			result[dateCreated].targets = targets[dateCreated] || null;

			return result;
		}, {} as { [dateCreated: string]: IHistoryMeal });

		return Object.values(groupedMeals);
	}
}
