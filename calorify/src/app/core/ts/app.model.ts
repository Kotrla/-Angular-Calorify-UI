export interface ISelectData {
	value: string;
	uiValue: string;
}

export enum RoutesEnum {
	LOGIN = '',
	DASHBOARD = 'v1',
	HOME = 'home',
	MEALS = 'meals',
	WORKOUTS = 'workouts',
	PROFILE = 'profile',
}

export enum AngularFormStatus {
	VALID = 'VALID',
	INVALID = 'INVALID',
	PENDING = 'PENDING',
	DISABLED = 'DISABLED',
}
