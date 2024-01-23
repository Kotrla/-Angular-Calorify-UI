export enum WorkoutsStoreKey {
	IS_LOADING = 'isLoading',
	HISTORY_IS_LOADING = 'historyIsLoading',
	DAILY_WORKOUT = 'dailyUserWorkout',
	ALL_WORKOUTS = 'allUserWorkouts',
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
