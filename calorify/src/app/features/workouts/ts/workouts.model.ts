export enum WorkoutsStoreKey {
	IS_LOADING = 'isLoading',
	IS_LOADING_HISTORY = 'isLoadingHistory',
	DAILY_WORKOUT = 'dailyUserWorkout',
	ALL_WORKOUTS = 'allUserWorkouts',
}

export enum WorkoutsRoutes {
	DAILY = 'daily',
	HISTORY = 'history',
}

export interface IWorkout {
	exercises: IExercise[];
	user: string;
	dateCreated: string;
}

export interface IExercise {
	name: string;
	reps: number;
	load: number;
}
