import { IUserTarget } from '../../home/ts/home.model';

export enum MealsStoreKey {
	FOODS = 'foods',
	BREAKFAST = 'breakfast',
	LUNCH = 'lunch',
	DINNER = 'dinner',
	IS_LOADING = 'isLoading',
	HISTORY_MEALS = 'historyMeals',
	IS_LOADING_HISTORY = 'isLoadingHistory',
}

export enum MealsRoutes {
	DAILY = 'daily',
	HISTORY = 'history',
}

export interface IFood {
	name: string;
	protein: number;
	carbs: number;
	fats: number;
	quantity?: string;
	grams?: number;
	kcal: number;
}

export interface IMeal {
	food: IFood[];
	user: string;
	protein: number;
	carbs: number;
	fats: number;
	kcal: number;
	meal: string;
	dateCreated: string;
}

export interface IHistoryMeal {
	dateCreated: string;
	targets: IUserTarget | null;
	userMeals: IUserMeals;
}

export interface IUserMeals {
	breakfast: IMeal | null;
	lunch: IMeal | null;
	dinner: IMeal | null;
}

export interface IFoodsResponse {
	foods: IFood[];
}

export interface IMealsResponse {
	meals: IMeal[];
}
