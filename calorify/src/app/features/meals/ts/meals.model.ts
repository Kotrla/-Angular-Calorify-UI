export enum MealsStoreKey {
	IS_LOADING = 'isLoading',
	BREAKFAST = 'breakfast',
	LUNCH = 'lunch',
	DINNER = 'dinner',
	FOODS = 'foods',
}

export enum ViewMode {
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

export interface IFoodsResponse {
	foods: IFood[];
}

export interface IMealsResponse {
	meals: IMeal[];
}
