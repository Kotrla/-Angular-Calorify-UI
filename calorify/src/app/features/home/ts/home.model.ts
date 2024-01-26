export enum HomeStoreKey {
	USER_DAILY = 'daily',
	USER_DETAILS = 'userData',
	IS_LOADING = 'isLoading',
	USER_TARGETS = 'targets',
}

export interface IUser {
	personal: {
		firstName: string;
		lastName: string;
		age: number;
		gender: string;
		goal: string;
		date: string;
	};
	credentials: {
		email: string;
		password: string;
	};
	stats: {
		weight: number;
		height: number;
	};
	needs: {
		protein: number;
		carbs: number;
		fats: number;
		kcal: number;
	};
}

export interface IDailyResponse {
	daily: IUserTarget;
}

export interface IUserTargetResponse {
	targets: IUserTarget[];
}

export interface IUserResponse {
	userData: IUser;
}

export interface IUserNeeds {
	protein: number;
	carbs: number;
	fats: number;
	kcal: number;
}

export interface IUserTarget {
	user: string;
	protein: number;
	carbs: number;
	fats: number;
	kcal: number;
	dateCreated: string;
}
